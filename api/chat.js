// /api/chat.js — Vercel Serverless Function
export default async function handler(req, res) {
  // CORS / Preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "Missing OPENAI_API_KEY" });
    }

    // 1) Leer el body (patrón correcto en funciones Node de Vercel)
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
      return res.status(400).json({ error: "Invalid JSON body" });
    }

    // 2) Extraer parámetros
    const {
      messages = [],
      system,
      temperature = 0.2,
      model = "gpt-4o-mini",
      max_tokens,
    } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res
        .status(400)
        .json({ error: "Body inválido: { messages: [{role, content}, ...] }" });
    }

    // Límite simple anti-abuso
    const totalLen =
      (system?.length || 0) +
      messages.reduce((n, m) => n + ((m?.content?.length) || 0), 0);
    if (totalLen > 8000) {
      return res.status(413).json({ error: "Entrada demasiado larga." });
    }

    // 3) Construir mensajes finales (system opcional)
    const finalMessages = [
      ...(system ? [{ role: "system", content: system }] : []),
      ...messages,
    ];

    // 4) Llamada a OpenAI
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

    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      console.error("OpenAI error:", r.status, detail);
      return res.status(r.status).json({ error: "OpenAI error", detail });
    }

    // 5) Responder al frontend
    const data = await r.json();
    const content = data?.choices?.[0]?.message?.content ?? "";
    return res.status(200).json({ content });
  } catch (err) {
    console.error("API /api/chat error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
