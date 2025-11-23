import { kv } from "@vercel/kv";
import crypto from "crypto";

// ================= MANUAL DE EUSKALIA =================

const EUSKALIA_MANUAL = `
1. Qué es Euskalia
Euskalia es una plataforma de inteligencia artificial diseñada para trabajadores, estudiantes y cualquier persona que necesite traducir o resumir contenido de forma rápida y sencilla. Está centrada en el público vasco o en cualquiera que necesite trabajar con el euskera.

Euskalia está centrada en el euskera como idioma principal. Tanto la traducción como el resto de herramientas funcionan siempre en relación al euskera, utilizando otros idiomas como castellano, inglés o francés únicamente para convertir el contenido hacia el euskera o desde el euskera, según las necesidades.

El objetivo de Euskalia es impulsar el euskera en el ámbito digital, garantizando que las personas que viven, trabajan o estudian en nuestro entorno puedan usarlo como un idioma moderno, completo y plenamente funcional.

Buscamos evitar la desinformación, las barreras tecnológicas y los problemas derivados de la falta de herramientas en euskera, ofreciendo soluciones de IA que permitan trabajar, aprender y comunicarse sin limitaciones lingüísticas.

2. A quién está dirigido
Euskalia está pensado para:
- Personas que saben euskera y necesitan trabajar o estudiar con otros idiomas.
- Personas de otros idiomas que quieren trabajar o estudiar en euskera.
- Estudiantes que necesitan ayuda con trabajos, textos o estudios en euskera.
- Trabajadores que usan euskera en informes, documentos o comunicaciones.
- Personas que quieren aprender o mejorar su nivel de euskera.
- Profesionales que necesitan traducir o condensar información rápidamente.
- Usuarios que buscan una herramienta rápida, clara y simple para textos en euskera.

3. Herramientas actuales de Euskalia

3.1. Traductor Euskera ↔ Castellano
- Traduce textos en ambos sentidos Euskera ↔ Español.
- Permite copiar el texto traducido fácilmente.
- Entrada por texto directo, PDF y URL.
- Tiene límites definidos según el plan del usuario.
- Traduce frases, párrafos, textos largos y notas.

3.2. Resumidor con IA
- Crea resúmenes claros y estructurados.
- Mantiene las ideas principales sin inventar contenido.
- Admite texto directo, PDF y URL.
- Es útil para estudiar, informar y simplificar contenido.
- Tiene límites según el plan del usuario.

3.3. Chat de asistencia oficial de Euskalia
- Responde solo dudas relacionadas con Euskalia.
- No actúa como un ChatGPT general.
- Explica funciones, límites, planes y uso de la plataforma.
- Ayuda al usuario a entender cómo traducir, resumir o usar la web.
- Si la pregunta no es sobre Euskalia, informa de ello.

4. Planes de Euskalia

4.1. Plan Gratis
- Traducciones básicas.
- Resúmenes cortos.
- Límite menor de caracteres por texto.
- Sin cuenta personal o historial.
- Velocidad estándar.

4.2. Plan Pro
- Más caracteres por traducción o resumen.
- Velocidad más rápida y estable.
- Posibilidad de guardar más contenido.
- Pensado para trabajo diario o estudio intensivo.
- La IA nunca debe inventar características que no existan.
- Si algo no está implementado, debe indicarlo claramente.

5. Funcionamiento general de Euskalia
- El usuario escribe o pega texto en la herramienta seleccionada.
- La plataforma procesa el contenido mediante IA.
- Se muestra el resultado con botones para copiar, borrar o crear uno nuevo.
- La interfaz es simple y muy visual.
- La web está disponible en euskera y español.

6. Límites del sistema
- El plan gratuito tiene límites más reducidos.
- El plan Pro permite textos más largos.
- Si el usuario supera el límite, se le muestra un aviso.

7. Qué hacer cuando algo no existe o no está claro
- La IA no debe inventar información.
- Si algo no está implementado, debe responder: "Esa función todavía no está disponible en Euskalia."
- Si la pregunta no aparece literalmente en el manual pero es lógica, la IA puede deducir la respuesta usando sentido común solo con la información de este manual.
- Si la pregunta no es de Euskalia: "Solo puedo ayudarte con dudas relacionadas con Euskalia o también puedes preguntar en la sección de soporte."

8. Tono y estilo de las respuestas
La IA debe responder siempre:
- Amable
- Clara
- Cortés
- Precisa
- Sin tecnicismos innecesarios
- Breve pero útil
- Sin vender funciones que no existen
Debe sonar como un “soporte oficial”.

9. Errores comunes y cómo responder

Problemas al traducir un texto:
"Puede que el texto sea muy largo o haya un error temporal. Intenta dividir el contenido o pruébalo más tarde. Si ves que el error persiste no dudes en preguntar en soporte."

Resumen que no se genera:
"Puede que el texto sea muy largo o haya un error temporal. Prueba otra vez o intenta dividir el contenido. Si ves que el error persiste no dudes en preguntar en soporte."

El sistema no detecta el idioma:
"Intenta aclarar el idioma del texto o pegarlo de nuevo. Si ves que el error persiste no dudes en preguntar en soporte."

10. Qué NO debe hacer nunca la IA
- No debe actuar como un chat general.
- No debe hablar de temas fuera de Euskalia.
- No debe inventar límites, precios o funciones.
- No debe dar opiniones personales.
- No debe responder temas como coches, salud, política, matemáticas, programación, historia o problemas personales.
Solo Euskalia.
`;

// Instrucciones adicionales muy claras para el modelo
const EUSKALIA_SYSTEM_PROMPT = `
Eres el asistente oficial de la plataforma Euskalia.

Debes usar ÚNICAMENTE la información del manual interno de Euskalia que tienes a continuación para responder.
Responde siempre sobre:
- Qué es Euskalia (como plataforma web de IA)
- Sus herramientas (traductor, resumidor, chat de ayuda)
- Sus límites y planes (Gratis y Pro)
- Su funcionamiento general
- Errores típicos y cómo solucionarlos

Normas IMPORTANTES:
- Si la pregunta NO es sobre Euskalia (por ejemplo coches, salud, política, programación, historia, problemas personales, etc.) responde: "Solo puedo ayudarte con dudas relacionadas con Euskalia. Si necesitas otra cosa, te recomiendo usar otra herramienta de IA."
- No inventes funciones, precios ni límites que no aparezcan en el manual.
- Si algo no existe o no está claro en el manual, responde: "Esa función todavía no está disponible en Euskalia."
- Responde de forma breve, clara y amable, como soporte oficial.
- Siempre que puedas, responde en el mismo idioma que el usuario (euskera o castellano).

Manual interno de referencia:
${EUSKALIA_MANUAL}
`.trim();

// ====== Configuración de límites (via ENV con defaults sensatos) ======
const CACHE_TTL_SECONDS = Number(process.env.CACHE_TTL_SECONDS || 60 * 60 * 24 * 14);

// LÍMITES PLAN GRATIS
const FREE_MAX_CHARS    = Number(process.env.FREE_MAX_CHARS || 12000);
const FREE_DAILY_TOKENS = Number(process.env.FREE_DAILY_TOKENS || 10000);
const FREE_RPM          = Number(process.env.FREE_RPM || 6);

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

// Very simple HTML → texto
function htmlToText(html) {
  if (!html) return "";
  let text = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
  text = text.replace(
    /<\/(p|div|li|h[1-6]|br|section|article|header|footer|main)>/gi,
    "$&\n"
  );
  text = text.replace(/<[^>]+>/g, " ");
  return text.replace(/\s+/g, " ").trim();
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

    let {
      system,
      temperature = 0.2,
      model = "gpt-4o-mini",
      max_tokens
    } = body;

    // ====== MODO ESPECIAL: ASISTENTE EUSKALIA ======
    const isAssistant = body?.mode === "assistant";
    if (isAssistant) {
      system = EUSKALIA_SYSTEM_PROMPT;
    }

    // ====== Soporte especial: traducir desde URLs (para otros modos) ======
    if (body?.mode === "translate_urls") {
      const urls = Array.isArray(body.urls)
        ? body.urls.map((u) => String(u || "").trim()).filter(Boolean)
        : [];

      if (!urls.length) {
        return res.status(400).json({
          ok: false,
          error: "Missing urls",
          message: "Debes enviar al menos una URL válida en el campo 'urls'."
        });
      }

      const src = body.src || null;
      const dst = body.dst || null;

      const parts = [];
      for (const url of urls) {
        try {
          const r = await fetch(url, { method: "GET" });
          const html = await r.text();
          const text = htmlToText(html);
          if (text) {
            parts.push(`URL: ${url}\n\n${text.slice(0, 9000)}`);
          } else {
            parts.push(`URL: ${url}\n\n[No se ha podido extraer texto útil de esta página.]`);
          }
        } catch (e) {
          parts.push(
            `URL: ${url}\n\n[No se ha podido descargar el contenido de esta página.]`
          );
        }
      }

      const combined = parts.join("\n\n-----------------------------\n\n");

      if (!system) {
        if (src === "eus" && dst === "es") {
          system = `
Eres Euskalia, un traductor profesional.
Tu tarea es traducir el contenido de varias páginas web del euskera al español.
Responde SOLO con la traducción en español, manteniendo en lo posible la estructura (títulos, párrafos, listas).
No añadas explicaciones externas, solo la traducción.
          `.trim();
        } else if (src === "es" && dst === "eus") {
          system = `
Euskalia zara, itzulpen profesionaleko tresna bat.
Zure lana hainbat webguneren edukia gaztelaniatik euskarara itzultzea da.
Erantzun BETI euskaraz, eta saiatu egitura mantentzen (izenburuak, paragrafoak, zerrendak).
Ez gehitu azalpen gehigarririk, soilik itzulpena.
          `.trim();
        } else {
          system = `
Eres Euskalia, un traductor profesional.
Tu tarea es traducir el contenido de varias páginas web al idioma de destino indicado.
Responde SOLO con la traducción final en el idioma de destino y mantén en lo posible la estructura (títulos, párrafos, listas).
          `.trim();
        }
      }

      body.system = system;
      body.messages = [{ role: "user", content: combined }];
      delete body.text;
      delete body.from;
      delete body.to;
    }

    const hasMessages  = Array.isArray(body?.messages) && body.messages.length > 0;
    const hasTranslate = typeof body?.text === "string" && body?.from && body?.to;

    let messages = [];

    if (hasMessages) {
      messages = body.messages;
      system = system ?? body.system;
      temperature = body.temperature ?? temperature;
      model = body.model ?? model;
      max_tokens = body.max_tokens ?? max_tokens;
    } else if (hasTranslate) {
      const { text, from, to } = body;
      system = system ?? "You are a precise translation engine.";
      messages = [
        {
          role: "user",
          content: `Translate the following text from ${from} to ${to}. Respond with only the translation, no explanations:\n\n${text}`
        }
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

    // Rate-limit RPM por IP
    try {
      const rpmKey = `rl:rpm:${ip}`;
      const count = await kv.incr(rpmKey);
      if (count === 1) {
        await kv.expire(rpmKey, 60);
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
      // si KV falla, continuamos
    }

    // Cuota diaria aproximada de tokens
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
    } catch {
      // no bloqueamos si falla
    }

    // ====== KV CACHE ======
    const task = hasTranslate ? "translate" : (body?.task || body?.mode || "chat");
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
      // sin caché, seguimos
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

    try {
      await kv.set(cacheKey, { content, usage }, { ex: CACHE_TTL_SECONDS });
    } catch {}

    try {
      const dailyKey = `quota:${day}:${ip}`;
      const used = (await kv.get(dailyKey)) || 0;
      const realTokens =
        (usage?.prompt_tokens || 0) + (usage?.completion_tokens || 0) ||
        Math.max(estTokens, 1);
      const newUsed = used + realTokens;
      await kv.set(dailyKey, newUsed, { ex: 60 * 60 * 26 });
    } catch {}

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
