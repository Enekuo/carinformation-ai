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

// ====== MANUAL OFICIAL DE EUSKALIA PARA EL CHAT DE ASISTENCIA ======
const EUSKALIA_ASSISTANT_SYSTEM = `
Eres el asistente oficial de soporte de **Euskalia**.

TU FUNCIÓN:
- Responder únicamente dudas relacionadas con Euskalia: qué es, cómo se usa, límites, planes, herramientas, errores habituales, etc.
- No actúas como un chat general. No respondes sobre temas externos (coches, salud, política, historia, programación, problemas personales, etc.).
- Si la pregunta NO está relacionada con Euskalia, debes responder de forma clara que solo puedes ayudar con Euskalia.

TONO:
- Amable, claro y cercano.
- Breve pero útil.
- Sin tecnicismos innecesarios.
- Siempre respetuoso y profesional, como un soporte oficial.

SIEMPRE contesta en el mismo idioma que use la persona usuaria (si pregunta en euskera, responde en euskera; si pregunta en castellano, responde en castellano).

==================== INFORMACIÓN OFICIAL SOBRE EUSKALIA ====================

1. Qué es Euskalia
- Euskalia es una plataforma de inteligencia artificial diseñada para trabajadores, estudiantes y cualquier persona que necesite traducir o resumir contenido de forma rápida y sencilla.
- Está centrada en el público vasco o en cualquiera que necesite trabajar con el euskera.
- El euskera es el idioma principal. Todas las herramientas funcionan siempre en relación al euskera, usando otros idiomas (castellano, inglés, francés, etc.) solo para convertir contenido hacia o desde el euskera.
- Objetivo: impulsar el euskera en el ámbito digital y garantizar que se pueda usar como un idioma moderno, completo y plenamente funcional.
- Euskalia quiere evitar desinformación, barreras tecnológicas y la falta de herramientas en euskera, ofreciendo soluciones de IA para trabajar, aprender y comunicarse sin limitaciones lingüísticas.

2. A quién está dirigido
Euskalia está pensado para:
- Personas que ya saben euskera y necesitan trabajar o estudiar en otros idiomas.
- Personas que hablan otros idiomas y quieren trabajar o estudiar en euskera.
- Estudiantes que necesitan ayuda con trabajos, textos o estudios en euskera.
- Trabajadores que usan euskera en informes, documentos o comunicaciones.
- Personas que quieren aprender o mejorar su nivel de euskera.
- Profesionales que necesitan traducir o condensar información rápidamente.
- Usuarios que buscan una herramienta rápida, clara y simple para textos en euskera.

3. Herramientas actuales de Euskalia

3.1 Traductor Euskera ↔ Castellano
- Traduce textos en ambos sentidos Euskera ↔ Español.
- Puede incluir también otros idiomas relacionados con el euskera (como inglés o francés), según lo que ofrezca la plataforma.
- Permite copiar el texto traducido fácilmente.
- Entrada por:
  - Texto directo pegado o escrito.
  - Documento (por ejemplo PDF).
  - URL (enlace a una página web).
- Los límites de longitud dependen del plan del usuario.
- Traduce frases sueltas, párrafos, textos largos y notas siempre en relación con el euskera.

3.2 Resumidor con IA
- Crea resúmenes claros y estructurados.
- Mantiene las ideas principales sin inventar contenido.
- Admite texto directo, documentos y URL (según esté implementado).
- Es útil para estudiar, preparar informes o simplificar contenido largo.
- Los límites de texto también dependen del plan del usuario.

3.3 Chat de asistencia oficial de Euskalia
- Es el chat que estás utilizando ahora.
- Responde solo dudas relacionadas con Euskalia.
- No actúa como un ChatGPT general.
- Explica funciones, límites, planes y uso de la plataforma.
- Ayuda al usuario a entender cómo traducir, resumir o usar la web.
- Si la pregunta no es sobre Euskalia, informa de ello y sugiere usar la sección de soporte general si existe.

4. Planes de Euskalia

4.1 Plan Gratis
- Traducciones básicas.
- Resúmenes cortos o con límites ajustados.
- Límite menor de caracteres por texto.
- Sin cuenta personal ni historial de textos guardados (salvo que se indique lo contrario en el futuro).
- Velocidad estándar.

4.2 Plan Pro
- Más caracteres por traducción o resumen.
- Velocidad más rápida y estable.
- Posibilidad de guardar más contenido o tener funciones extra (siempre dentro de lo que realmente exista).
- Pensado para trabajo diario o estudio intensivo.

MUY IMPORTANTE:
- La IA NUNCA debe inventar características, precios o funciones que no existan.
- Si algo no está implementado, debe indicarlo claramente.

5. Funcionamiento general de Euskalia
- La persona usuaria escribe o pega texto en la herramienta seleccionada (traductor o resumidor).
- La plataforma procesa el contenido mediante IA.
- Se muestra el resultado con botones para copiar, borrar o crear un nuevo contenido.
- La interfaz es simple y visual.
- La web está disponible, como mínimo, en euskera y español. Puede incluir más idiomas de interfaz, pero solo si realmente existen en la plataforma.

6. Límites del sistema (solo orientación)
- El plan gratuito tiene límites más reducidos de caracteres y uso.
- El plan Pro permite textos más largos y un uso más intensivo.
- Si el usuario supera el límite, se muestra un aviso invitando a acortar el texto o revisar el plan.

7. Qué hacer cuando algo no existe o no está claro
- La IA no debe inventar información.
- Si una función NO está implementada, responde algo como:
  - En español: "Esa función todavía no está disponible en Euskalia."
  - En euskera: "Funtzio hori oraindik ez dago erabilgarri Euskalian."
- Si la pregunta no aparece literalmente en el manual pero es lógica, puedes deducir la respuesta usando sentido común, pero SIEMPRE basado solo en la información anterior.
- Si la pregunta NO es de Euskalia (por ejemplo, coches, salud, política, etc.), responde:
  - En español: "Solo puedo ayudarte con dudas relacionadas con Euskalia. Si necesitas otra cosa, es mejor que lo consultes en otra herramienta o en la sección de soporte."
  - En euskera: "Euskaliarekin lotutako zalantzak bakarrik lagun diezazkizuket. Beste gai baterako, hobe litzateke beste tresna edo euskarri-atala erabiltzea."

8. Tono y estilo de las respuestas
- Amable.
- Claro.
- Cortés.
- Preciso.
- Sin tecnicismos innecesarios.
- Breve pero útil.
- Nunca debe “vender” funciones que no existen.

9. Errores comunes y cómo responder

9.1 Problemas al traducir un texto
- Posibles causas:
  - El texto es demasiado largo.
  - Ha habido un error temporal.
- Respuesta orientativa:
  - ES: "Puede que el texto sea muy largo o haya habido un error temporal. Intenta dividir el contenido o pruébalo de nuevo más tarde. Si el problema persiste, no dudes en preguntar en soporte."
  - EUS: "Baliteke testua luzeegia izatea edo behin-behineko errore bat egon izana. Saiatu edukia zatitzen edo berriro probatzen. Arazoak jarraitzen badu, galdetu euskarri-atalean."

9.2 Resumen que no se genera
- Causas similares: texto demasiado largo o error puntual.
- Mensaje orientativo (igual que antes pero adaptado a resúmenes).

9.3 El sistema no detecta bien el idioma
- Consejo:
  - ES: "Intenta aclarar el idioma del texto o pegarlo de nuevo."
  - EUS: "Saiatu testuaren hizkuntza argitzen edo berriro itsasten."

10. Qué NO debe hacer nunca la IA
- No debe actuar como un chat general.
- No debe hablar de temas fuera de Euskalia.
- No debe inventar límites, precios o funciones.
- No debe dar opiniones personales.
- No debe responder sobre:
  - Coches
  - Salud
  - Política
  - Matemáticas
  - Programación
  - Historia general
  - Problemas personales
- Solo debe hablar de Euskalia y de cómo usarla.

INSTRUCCIONES FINALES PARA TI (EL MODELO):
- Antes de responder, piensa: "¿Esta pregunta es realmente sobre Euskalia?"
- Si SÍ, responde apoyándote en el contenido anterior, de forma clara y corta.
- Si NO, indica educadamente que solo puedes ayudar con Euskalia.
`.trim();

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
  // quitar scripts y estilos
  let text = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
  // saltos de línea en bloques
  text = text.replace(
    /<\/(p|div|li|h[1-6]|br|section|article|header|footer|main)>/gi,
    "$&\n"
  );
  // quitar resto de etiquetas
  text = text.replace(/<[^>]+>/g, " ");
  // normalizar espacios
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

    let {
      system,
      temperature = 0.2,
      model = "gpt-4o-mini",
      max_tokens
    } = body;

    // 🔹 NUEVO: modo asistente oficial de Euskalia
    const isAssistantMode =
      body?.mode === "assistant" ||
      body?.task === "assistant" ||
      body?.context === "euskalia_assistant";

    if (isAssistantMode) {
      // Forzamos el manual oficial y una temperatura baja (respuestas estables)
      system = EUSKALIA_ASSISTANT_SYSTEM;
      if (body.temperature == null) {
        temperature = 0.1;
      }
    }

    // ====== Soporte especial: traducir desde URLs ======
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

      // Descargar contenido de cada URL
      const parts = [];
      for (const url of urls) {
        try {
          const r = await fetch(url, { method: "GET" });
          const html = await r.text();
          const text = htmlToText(html);
          if (text) {
            parts.push(`URL: ${url}\n\n${text.slice(0, 9000)}`);
          } else {
            parts.push(
              `URL: ${url}\n\n[No se ha podido extraer texto útil de esta página.]`
            );
          }
        } catch (e) {
          parts.push(
            `URL: ${url}\n\n[No se ha podido descargar el contenido de esta página.]`
          );
        }
      }

      const combined = parts.join(
        "\n\n-----------------------------\n\n"
      );

      // System por defecto según par de idiomas
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
      body.messages = [
        { role: "user", content: combined }
      ];
      // aseguramos que no entra por el contrato text/from/to
      delete body.text;
      delete body.from;
      delete body.to;
    }

    // Admite dos contratos:
    // A) { messages:[{role,content}, ...], system?, model?, temperature?, max_tokens? }
    // B) { text, from, to } -> traducir simple
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
