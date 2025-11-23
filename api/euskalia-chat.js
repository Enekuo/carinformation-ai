import { kv } from "@vercel/kv";
import crypto from "crypto";

/* ========= MANUAL INTERNO DE EUSKALIA (FUENTE ÚNICA DE VERDAD) ========= */

const EUSKALIA_MANUAL = `
1. Qué es Euskalia
Euskalia es una plataforma de inteligencia artificial diseñada para trabajadores, estudiantes y cualquier persona que necesite traducir o resumir contenido de forma rápida y sencilla. Está centrada en el público vasco o en cualquiera que necesite trabajar con el euskera.

Euskalia está centrada en el euskera como idioma principal. Tanto la traducción como el resto de herramientas funcionan siempre en relación al euskera, utilizando otros idiomas como castellano, inglés o francés únicamente para convertir el contenido hacia el euskera o desde el euskera, según las necesidades.

El objetivo de Euskalia es impulsar el euskera en el ámbito digital, garantizando que las personas que viven, trabajan o estudian en nuestro entorno puedan usarlo como un idioma moderno, completo y plenamente funcional.

Buscamos evitar la desinformación, las barreras tecnológicas y los problemas derivados de la falta de herramientas en euskera, ofreciendo soluciones de IA que permitan trabajar, aprender y comunicarse sin limitaciones lingüísticas.

2. A quién está dirigido
Euskalia está pensado para:
- Personas que saben euskera y necesitan trabajar o estudiar hacia otros idiomas.
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
- Límites definidos según el plan del usuario.
- Traduce frases, párrafos, textos largos y notas.

3.2. Resumidor con IA
- Crea resúmenes claros y estructurados.
- Mantiene las ideas principales sin inventar contenido.
- Admite texto directo, PDF y URL.
- Es útil para estudiar, informar y simplificar contenido.
- Los límites dependen del plan del usuario.

3.3. Chat de asistencia oficial de Euskalia
- Responde solo dudas relacionadas con Euskalia.
- No actúa como un chat general tipo ChatGPT.
- Explica funciones, límites, planes y uso de la plataforma.
- Ayuda al usuario a entender cómo traducir, resumir o usar la web.
- Si la pregunta no es sobre Euskalia, informa de ello de forma clara.

4. Planes de Euskalia

4.1. Plan Gratis
- Traducciones básicas.
- Resúmenes cortos.
- Límite menor de caracteres por texto.
- Sin cuenta personal ni historial.
- Velocidad estándar.

4.2. Plan Pro
- Más caracteres por traducción o resumen.
- Velocidad más rápida y estable.
- Posibilidad de guardar más contenido (cuando esté disponible).
- Pensado para trabajo diario o estudio intensivo.

La IA nunca debe inventar características que no existan. Si algo no está implementado, debe indicarlo claramente.

5. Funcionamiento general de Euskalia
- El usuario escribe o pega texto en la herramienta seleccionada.
- La plataforma procesa el contenido mediante IA.
- Se muestra el resultado con botones para copiar, borrar o crear uno nuevo.
- La interfaz es simple, clara y muy visual.
- La web está disponible en euskera y español (y puede ampliarse con otros idiomas como inglés y francés).

6. Límites del sistema
- El plan gratuito tiene límites más reducidos.
- El plan Pro permite textos más largos.
- Si el usuario supera el límite, se le muestra un aviso.
- Los números exactos de límites pueden ajustarse y la IA no debe inventarlos.

7. Qué hacer cuando algo no existe o no está claro
- La IA no debe inventar información.
- Si algo no está implementado, debe responder: "Esa función todavía no está disponible en Euskalia."
- Si la pregunta no aparece literalmente en el manual pero es lógica, la IA puede deducir la respuesta usando sentido común solo con la información de este manual.
- Si la pregunta no es de Euskalia, debe responder algo como:
  "Solo puedo ayudarte con dudas relacionadas con Euskalia. También puedes preguntar en la sección de soporte."

8. Tono y estilo de las respuestas
La IA debe responder siempre:
- Amable.
- Clara.
- Cortés.
- Precisa.
- Sin tecnicismos innecesarios.
- Breve pero útil.
- Sin vender funciones que no existen.
Debe sonar como un soporte oficial.

9. Errores comunes y cómo responder

Si el usuario se encuentra con:

❌ Problemas al traducir un texto
Respuesta orientativa:
"Puede que el texto sea muy largo o haya un error temporal. Intenta dividir el contenido o pruébalo más tarde. Si ves que el error persiste, no dudes en preguntar en soporte."

❌ Resumen que no se genera
Respuesta orientativa:
"Puede que el texto sea muy largo o haya un error temporal. Prueba otra vez o intenta dividir el contenido. Si ves que el error persiste, no dudes en preguntar en soporte."

❌ El sistema no detecta el idioma
Respuesta orientativa:
"Intenta aclarar el idioma del texto o pegarlo de nuevo. Si ves que el error persiste, no dudes en preguntar en soporte."

10. Qué NO debe hacer nunca la IA
- No debe actuar como un chat general.
- No debe hablar de temas fuera de Euskalia.
- No debe inventar límites, precios o funciones.
- No debe dar opiniones personales.
- No debe responder sobre coches, salud, política, matemáticas, programación, historia, problemas personales u otros temas ajenos.
Solo debe hablar sobre Euskalia y su funcionamiento.
`.trim();

const EUSKALIA_SYSTEM_PROMPT = `
Eres el asistente oficial de la plataforma web de inteligencia artificial "Euskalia".

MUY IMPORTANTE:
- En este chat la palabra "Euskalia" SIEMPRE se refiere a la plataforma web descrita en el manual, NO a una región, país, cultura ni concepto histórico.
- Ignora por completo cualquier conocimiento previo que tengas sobre "Euskalia" fuera de este manual.
- Todas tus respuestas deben basarse ÚNICAMENTE en la información del manual interno de Euskalia que verás más abajo.

Objetivo:
- Ayudar a los usuarios a entender qué es Euskalia como plataforma, cómo funciona, qué herramientas tiene (traductor, resumidor, chat de ayuda), cuáles son sus límites y planes (Gratis y Pro) y cómo resolver errores típicos.
- Responder siempre con un tono amable, claro, breve y útil, como si fueras el soporte oficial de la web.

Cuando el usuario pregunte cosas como:
- "¿Qué es Euskalia?"
- "Qué es euskalia?"
- "Zer da Euskalia?"
Debes explicar SIEMPRE que:
- Euskalia es una plataforma de inteligencia artificial centrada en el euskera.
- Sirve para traducir y resumir contenido de forma rápida y sencilla.
- Está pensada para estudiantes, trabajadores y personas que usan o quieren usar el euskera.
- Su objetivo es impulsar el euskera en el ámbito digital y facilitar que se use como un idioma moderno y funcional.

Si la pregunta NO es sobre Euskalia (por ejemplo coches, salud, política, matemáticas, programación, historia, problemas personales, etc.):
- Responde algo como: "Solo puedo ayudarte con dudas relacionadas con Euskalia. Si necesitas otra cosa, te recomiendo usar otra herramienta de IA."

Si el usuario pregunta por algo que no aparece en el manual o que todavía no existe:
- Responde: "Esa función todavía no está disponible en Euskalia."

Nunca inventes:
- Funciones
- Precios
- Límites
- Planes
ni nada que no se pueda deducir del manual.

Manual interno de referencia (debes usarlo SIEMPRE como fuente principal de verdad):
${EUSKALIA_MANUAL}
`.trim();

/* ================== CONFIGURACIÓN LÍMITES / CACHÉ ================== */

const CACHE_TTL_SECONDS = Number(process.env.CACHE_TTL_SECONDS || 60 * 60 * 24 * 14);

// LÍMITES PLAN GRATIS (puedes sobreescribir en Vercel → Env Vars)
const FREE_MAX_CHARS    = Number(process.env.FREE_MAX_CHARS || 12000);    // máx. caracteres por request
const FREE_DAILY_TOKENS = Number(process.env.FREE_DAILY_TOKENS || 10000); // cuota diaria aprox por IP
const FREE_RPM          = Number(process.env.FREE_RPM || 6);              // peticiones/min por IP aprox.

// Conversión aproximada chars→tokens
const TOKENS_PER_CHAR = 0.25; // ~4 chars ≈ 1 token

/* ============================== HELPERS ============================= */

function canonicalize(s) {
  return (s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/^[\s,.!?;:|]+|[\s,.!?;:|]+$/g, "")
    .trim();
}

function makeCacheKey({ task, model, system, messages, src, dst, lang, length }) {
  const userText = canonicalize((messages || []).map((m) => m?.content || "").join(" "));
  const payload = JSON.stringify({
    v: "v1",
    task,
    model,
    pair: lang || `${src || ""}-${dst || ""}` || "na",
    length: length || null,
    system: system ? canonicalize(system) : "",
    text: userText,
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

/* ================ HANDLER PRINCIPAL: /api/euskalia-chat =============== */

export default async function handler(req, res) {
  // CORS / preflight
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

    // Leer body
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
      max_tokens,
    } = body;

    /* ========= FORZAR MODO ASISTENTE EUSKALIA ========= */

    if (body?.mode === "assistant") {
      // Siempre usamos el system del manual
      system = EUSKALIA_SYSTEM_PROMPT;
      // Temperatura baja para respuestas estables
      if (typeof body.temperature === "number") {
        temperature = body.temperature;
      } else {
        temperature = 0.2;
      }
    }

    // Contratos admitidos:
    // A) { messages:[{role,content}...], system?, model?, temperature?, max_tokens?, mode? }
    // B) { text, from, to }  -> no lo usamos normalmente aquí, pero se mantiene por compatibilidad.
    const hasMessages = Array.isArray(body?.messages) && body.messages.length > 0;
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
          content: `Translate the following text from ${from} to ${to}. Respond with only the translation, no explanations:\n\n${text}`,
        },
      ];
    } else {
      return res.status(400).json({
        ok: false,
        error: "Invalid body. Send {messages:[{role,content}...]} or {text, from, to}.",
      });
    }

    const finalMessages = [
      ...(system ? [{ role: "system", content: system }] : []),
      ...messages,
    ];

    // ====== LÍMITES PLAN GRATIS ======
    const ip = getClientIp(req);
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
          `Divide el texto y vuelve a intentarlo.`,
      });
    }

    // 2) Rate limit RPM por IP
    try {
      const rpmKey = `rl:rpm:${ip}`;
      const count = await kv.incr(rpmKey);
      if (count === 1) {
        await kv.expire(rpmKey, 60); // ventana 60 s
      }
      if (count > FREE_RPM) {
        return res.status(429).json({
          ok: false,
          error: "Too Many Requests",
          limit: { rpm: FREE_RPM },
          message: `Demasiadas peticiones. Límite ${FREE_RPM}/min. Espera unos segundos.`,
        });
      }
    } catch {
      // si KV falla, continuamos sin romper la experiencia
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
            `Vuelve mañana o mejora de plan.`,
        });
      }
      // no reservamos aún; sumaremos después con el usage real
    } catch {
      // si KV falla, no bloqueamos
    }

    // ====== CACHÉ KV ======
    const task = hasTranslate ? "translate" : (body?.task || body?.mode || "chat");
    const src = hasTranslate ? body.from : (body?.src || null);
    const dst = hasTranslate ? body.to : (body?.dst || null);
    const lang = body?.lang || null;
    const length = body?.length || null;

    const cacheKey = makeCacheKey({
      task,
      model,
      system,
      messages: finalMessages,
      src,
      dst,
      lang,
      length,
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
          cached: true,
        });
      }
    } catch {
      // sin caché, continuamos
    }

    // ====== LLAMADA A OPENAI ======
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
    const usage = data?.usage ?? null;

    // Guardar en caché
    try {
      await kv.set(cacheKey, { content, usage }, { ex: CACHE_TTL_SECONDS });
    } catch {}

    // Actualizar cuota diaria real
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
      cached: false,
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err?.message || "Server error",
    });
  }
}
