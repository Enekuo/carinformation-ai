// /api/chat.js — Vercel Serverless Function
export default async function handler(req, res) {
  // Preflight CORS
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
      return res.status(500).json({ error: "Falta OPENAI_API_KEY en el servidor" });
    }

    // Leer body
    const body = await new Promise((resolve) => {
      let data = "";
      req.on("data", (c) => (data += c));
      req.on("end", () => resolve(data ? JSON.parse(data) : {}));
    });

    const { messages, system, temperature = 0.2, model = "gpt-4o-mini", max_tokens } = body || {};
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "Body inválido: { messages: [{role, content}, ...] }" });
    }

    // Pequeño límite para evitar abusos/costes
    const userLen = messages.reduce((n, m) => n + (m?.content?.length || 0), 0);
    if (userLen > 8000) return res.status(413).json({ error: "Entrada demasiado larga." });

    // Llamada a OpenAI
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature,
        messages: [...(system ? [{ role: "system", content: system }] : []), ...messages],
        ...(max_tokens ? { max_tokens } : {}),
      }),
    });

    if (!r.ok) return res.status(r.status).json({ error: "OpenAI error", detail: await r.text() });

    const data = await r.json();
    const content = data?.choices?.[0]?.message?.content ?? "";
    return res.status(200).json({ content });
  } catch (err) {
    console.error("API /api/chat error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
