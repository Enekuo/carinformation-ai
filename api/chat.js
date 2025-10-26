import { kv } from "@vercel/kv";
import crypto from "crypto";

// ====== Helpers de caché (TTL 14 días + clave estable) ======
const CACHE_TTL_SECONDS = Number(process.env.CACHE_TTL_SECONDS || 60 * 60 * 24 * 14);

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
// ============================================================

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

    // Admite dos contratos, ambos van a OpenAI:
    // A) { messages:[{role,content}, ...], system?, model?, temperature?, max_tokens? }
    // B) { text, from, to }  -> lo convertimos a mensajes para traducir con OpenAI
    const hasMessages = Array.isArray(body?.messages) && body.messages.length > 0;
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
      // Adaptamos a prompt de traducción por ChatGPT (sin servicios externos)
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

    // Límite anti-abuso simple
    const totalLen =
      (system?.length || 0) +
      messages.reduce((n, m) => n + ((m?.content?.length) || 0), 0);
    if (totalLen > 8000) {
      return res.status(413).json({ ok: false, error: "Input too long" });
    }

    const finalMessages = [
      ...(system ? [{ role: "system", content: system }] : []),
      ...messages,
    ];

    // ====== KV CACHE: tarea + parámetros (para clave estable) ======
    // task: si vienes con {text,from,to} lo tratamos como "translate"; si no, "chat"
    const task = hasTranslate ? "translate" : (body?.task || "chat");
    const src  = hasTranslate ? body.from : (body?.src || null);
    const dst  = hasTranslate ? body.to   : (body?.dst || null);
    const lang = body?.lang || null;          // para resúmenes si alguna vez lo usas aquí
    const length = body?.length || null;      // "short|medium|long" para resúmenes

    const cacheKey = makeCacheKey({
      task, model, system, messages: finalMessages, src, dst, lang, length
    });

    // Intento de caché (si hay hit, devolvemos y renovamos TTL)
    try {
      const cached = await kv.get(cacheKey);
      if (cached?.content) {
        await kv.expire(cacheKey, CACHE_TTL_SECONDS); // renovar 14 días
        return res.status(200).json({
          ok: true,
          provider: "openai",
          content: cached.content,
          usage: cached.usage || null,
          cached: true
        });
      }
    } catch {} // si KV falla, seguimos sin caché
    // ===============================================================

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
    try { data = detailText ? JSON.parse(detailText) : {}; } catch { data = {}; }

    if (!r.ok) {
      return res.status(r.status).json({
        ok: false,
        error: "OpenAI error",
        detail: typeof data === "object" ? data : detailText
      });
    }

    const content = data?.choices?.[0]?.message?.content ?? "";
    const usage = data?.usage ?? null;

    // ====== Guardar en KV (TTL 14 días) ======
    try {
      await kv.set(cacheKey, { content, usage }, { ex: CACHE_TTL_SECONDS });
    } catch {}
    // =========================================

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
