// api/openai-translate.ts
import OpenAI from "openai";

export const config = { runtime: "edge" }; // Vercel Edge (opcional)

type Pair = "eus" | "es";

function langName(code: Pair) {
  return code === "eus" ? "euskera" : "español (castellano)";
}

export default async function handler(req: Request) {
  // Asegura POST (algunos entornos no pasan req.method en Edge)
  // @ts-ignore
  if (req.method && req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { text, src, dst } = (await req.json()) as {
      text: string;
      src: Pair;
      dst: Pair;
    };

    if (!text || !src || !dst || !["eus", "es"].includes(src) || !["eus", "es"].includes(dst)) {
      return new Response(JSON.stringify({ error: "Parámetros inválidos" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const prompt = `Traduce del ${langName(src)} al ${langName(dst)}.
Devuelve solo la traducción, sin explicaciones. Respeta nombres propios, signos y formato.
Texto:
"""${text}"""`;

    const resp = await client.responses.create({
      model: "gpt-4o-mini",        // rápido y económico
      input: prompt,
      max_output_tokens: 1200,     // margen por si hay texto largo
    });

    const translation =
      // atajo “sano” que expone OpenAI en SDKs nuevos
      (resp as any).output_text ??
      // fallback defensivo (por si cambia estructura)
      (Array.isArray((resp as any).output)
        ? (resp as any).output
            .flatMap((p: any) =>
              Array.isArray(p.content)
                ? p.content
                    .filter((c: any) => c.type === "output_text" || c.type === "text")
                    .map((c: any) => c.text)
                : []
            )
            .join("")
        : "");

    return new Response(JSON.stringify({ translation }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message || "Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
