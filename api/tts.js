// /api/tts.js  — Vercel Edge Runtime
export const config = { runtime: "edge" };

import OpenAI from "openai";

function jsonHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8",
  };
}

function audioHeaders(ct) {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": ct,
    "Cache-Control": "no-store",
  };
}

export default async function handler(req) {
  // Preflight
  if (req.method === "OPTIONS") {
    return new Response("", { status: 200, headers: jsonHeaders() });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method Not Allowed" }), {
      status: 405,
      headers: jsonHeaders(),
    });
  }

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ ok: false, error: "Missing OPENAI_API_KEY" }), {
        status: 500,
        headers: jsonHeaders(),
      });
    }

    const body = await req.json().catch(() => ({}));
    const text = (body && body.text) || "";
    const voice = body.voice || "alloy";            // puedes cambiar la voz
    const format = (body.format || "mp3").toLowerCase(); // "mp3" | "wav" | "pcm"

    if (!text.trim()) {
      return new Response(JSON.stringify({ ok: false, error: "No text provided" }), {
        status: 400,
        headers: jsonHeaders(),
      });
    }

    const openai = new OpenAI({ apiKey });

    // Modelos TTS disponibles: "tts-1" o "gpt-4o-mini-tts"
    const res = await openai.audio.speech.create({
      model: "tts-1",
      voice,
      input: text,
      format, // "mp3" | "wav" | "pcm"
    });

    const buf = await res.arrayBuffer();
    const ct =
      format === "wav" ? "audio/wav" :
      format === "pcm" ? "audio/wave; codecs=1" : // PCM 16-bit
      "audio/mpeg";                                // mp3 por defecto

    return new Response(buf, { status: 200, headers: audioHeaders(ct) });
  } catch (err) {
    console.error("tts error:", err);
    return new Response(JSON.stringify({ ok: false, error: "TTS failed" }), {
      status: 500,
      headers: jsonHeaders(),
    });
  }
}
