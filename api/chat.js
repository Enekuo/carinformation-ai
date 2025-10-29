import { kv } from "@vercel/kv";
import crypto from "crypto";

// ====== Configuración de límites (via ENV con defaults sensatos) ======
const CACHE_TTL_SECONDS = Number(process.env.CACHE_TTL_SECONDS || 60 * 60 * 24 * 14);

// LÍMITES PLAN GRATIS (puedes sobreescribir en Vercel → Env Vars)
const FREE_MAX_CHARS    = Number(process.env.FREE_MAX_CHARS || 12000);    // máx. caracteres por request
const FREE_DAILY_TOKENS = Number(process.env.FREE_DAILY_TOKENS || 10000); // cuota diaria aprox por IP (≃ 5 páginas)
const FREE_RPM          = Number(process.env.FREE_RPM || 6);              // rate limit: peticiones/min por IP

// Conversión aproximada chars→tokens (prudente)
const TOKENS_PER_CHAR = 0.25; // ~4 chars ≈ 1 token

// ====== Helpers ======
function canonicalize(s) {
  return (s || "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/\s+/g, " ")
    .replace(/^[\s,.!?;:|]+|[\s,.!?;:|]+$/g, "")
    .trim();
}

function makeCacheKey({ task, model, system, messages, src, dst, lang, length }) {
  const userText = canonicalize((messages || []).map(m => m?.content || "").join(" "));
  const payload = JSON.stringify({
    v: "v1",
    task,
    model,
    pair: lang || `${src || ""}-${dst || ""}` || "na",
    length: length || null,
    system: system ? canonicalize(system) : "",
    text: userText
  });
  const sha = crypto.createHash("sha256").update(payload).digest("hex");
  const pair = lang || `${src || ""}-${dst || ""}` || "na";
  return `cache:${task}:${pair}:${sha}`;
}

function getClientIp(req) {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string") return xf.split(",")[0].trim();
  if (Array.isArray(xf) && xf.length) return xf[0].split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function todayKey(date = new Date()) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// ====== Handler ======
export default async function handler(req, res) {
  // CORS / Preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    return res.status(200).end();
  }
  if (req.method !== "POST") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ ok: false, error: "Missing OPENAI_API_KEY" });
    }

    // Leer body seguro
    const raw = await new Promise((resolve, reject) => {
      let data = "";
      req.on("data", (c) => (data += c));
      req.on("end", () => resolve(data));
      req.on("error", reject);
    });

    let body = {};
    try {
      body = raw ? JSON.parse(raw) : {};
    } catch {
      return res.status(400).json({ ok: false, error: "Invalid JSON body" });
    }

    // Admite dos contratos:
    // A) { messages:[{role,content}, ...], system?, model?, temperature?, max_tokens? }
    // B) { text, from, to } -> traducir
    const hasMessages  = Array.isArray(body?.messages) && body.messages.length > 0;
    const hasTranslate = typeof body?.text === "string" && body?.from && body?.to;

    let messages = [];
    let {
      system,
      temperature = 0.2,
      model = "gpt-4o-mini",
      max_tokens
    } = body;

    if (hasMessages) {
      messages = body.messages;
    } else if (hasTranslate) {
      const { text, from, to } = body;
      system = system ?? "You are a precise translation engine.";
      messages = [
        { role: "user", content: `Translate the following text from ${from} to ${to}. Respond with only the translation, no explanations:\n\n${text}` }
      ];
    } else {
      return res.status(400).json({
        ok: false,
        error: "Invalid body. Send {messages:[{role,content}...]} or {text, from, to}."
      });
    }

    const finalMessages = [
      ...(system ? [{ role: "system", content: system }] : []),
      ...messages,
    ];

    // ====== LÍMITES PLAN GRATIS ======
    const ip  = getClientIp(req);
    const day = todayKey();

    // 1) Máx. caracteres por request
    const totalChars =
      (system?.length || 0) +
      finalMessages.reduce((n, m) => n + ((m?.content?.length) || 0), 0);

    if (totalChars > FREE_MAX_CHARS) {
      return res.status(413).json({
        ok: false,
        error: "Input too long",
        limit: { max_chars: FREE_MAX_CHARS },
        message:
          `El texto es demasiado largo para el plan gratis. Máximo ${FREE_MAX_CHARS.toLocaleString()} caracteres por petición. ` +
          `Divide el texto y vuelve a intentarlo.`
      });
    }

    // 2) Rate-limit RPM por IP
    try {
      const rpmKey = `rl:rpm:${ip}`;
      const count = await kv.incr(rpmKey);
      if (count === 1) {
        await kv.expire(rpmKey, 60); // ventana 60s
      }
      if (count > FREE_RPM) {
        return res.status(429).json({
          ok: false,
          error: "Too Many Requests",
          limit: { rpm: FREE_RPM },
          message: `Demasiadas peticiones. Límite ${FREE_RPM}/min. Espera unos segundos.`
        });
      }
    } catch {
      // si KV falla, continuamos sin romper UX
    }

    // 3) Cuota diaria aproximada de tokens por IP
    const estTokens = Math.ceil(totalChars * TOKENS_PER_CHAR);
    try {
      const dailyKey = `quota:${day}:${ip}`;
      const used = (await kv.get(dailyKey)) || 0;
      if (used + estTokens > FREE_DAILY_TOKENS) {
        return res.status(429).json({
          ok: false,
          error: "Daily quota exceeded",
          limit: { daily_tokens: FREE_DAILY_TOKENS, used_tokens: used },
          message:
            `Has alcanzado la cuota diaria del plan gratis. ` +
            `Disponible: ${FREE_DAILY_TOKENS.toLocaleString()} tokens/día. ` +
            `Vuelve mañana o mejora de plan.`
        });
      }
      // no reservamos aún; sumaremos tras obtener usage real
    } catch {
      // si KV falla, no bloqueamos
    }

    // ====== KV CACHE ======
    const task = hasTranslate ? "translate" : (body?.task || "chat");
    const src  = hasTranslate ? body.from : (body?.src || null);
    const dst  = hasTranslate ? body.to   : (body?.dst || null);
    const lang = body?.lang || null;
    const length = body?.length || null;

    const cacheKey = makeCacheKey({
      task, model, system, messages: finalMessages, src, dst, lang, length
    });

    try {
      const cached = await kv.get(cacheKey);
      if (cached?.content) {
        await kv.expire(cacheKey, CACHE_TTL_SECONDS);
        return res.status(200).json({
          ok: true,
          provider: "openai",
          content: cached.content,
          usage: cached.usage || null,
          cached: true
        });
      }
    } catch {
      // sin caché, continuamos
    }

    // ====== Llamada a OpenAI ======
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature,
        messages: finalMessages,
        ...(max_tokens ? { max_tokens } : {}),
      }),
    });

    const detailText = await r.text().catch(() => "");
    let data;
    try {
      data = detailText ? JSON.parse(detailText) : {};
    } catch {
      data = {};
    }

    if (!r.ok) {
      return res.status(r.status).json({
        ok: false,
        error: "OpenAI error",
        detail: typeof data === "object" ? data : detailText,
      });
    }

    const content = data?.choices?.[0]?.message?.content ?? "";
    const usage   = data?.usage ?? null;

    // ====== Guardar en KV (caché resultado) ======
    try {
      await kv.set(cacheKey, { content, usage }, { ex: CACHE_TTL_SECONDS });
    } catch {}

    // ====== Actualizar cuota diaria real (tokens) ======
    try {
      const dailyKey = `quota:${day}:${ip}`;
      const used = (await kv.get(dailyKey)) || 0;

      const realTokens =
        (usage?.prompt_tokens || 0) + (usage?.completion_tokens || 0) ||
        Math.max(estTokens, 1);

      const newUsed = used + realTokens;
      await kv.set(dailyKey, newUsed, { ex: 60 * 60 * 26 }); // ~26h
    } catch {
      // si KV falla, seguimos
    }

    return res.status(200).json({
      ok: true,
      provider: "openai",
      content,
      usage,
      cached: false
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err?.message || "Server error" });
  }
}
