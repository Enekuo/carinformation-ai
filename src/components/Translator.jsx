import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/lib/translations";
import {
  Volume2,
  Copy as CopyIcon,
  FileDown,
  Mic,
  Trash2,
  Check,
  Square,
  FileText,
  File as FileIcon,
  Link2 as UrlIcon,
} from "lucide-react";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const OPTIONS = [
  { value: "eus", label: "euskera" },
  { value: "es",  label: "castellano" },
];

const MAX_CHARS = 5000;

// Texto de dirección para el prompt del sistema
const directionText = (src, dst) => {
  if (src === "eus" && dst === "es") return "Traduce de Euskera a Español";
  if (src === "es"  && dst === "eus") return "Traduce de Español a Euskera";
  return "Traduce manteniendo el sentido y el formato";
};

export default function Translator() {
  const { t } = useTranslation();

  const [src, setSrc] = useState("eus");
  const [dst, setDst] = useState("es");
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const [leftText, setLeftText]   = useState("");
  const [rightText, setRightText] = useState("");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [listening, setListening] = useState(false);

  // === TTS: nuevos estados/refs ===
  const [speaking, setSpeaking] = useState(false);     // altavoz ↔ cuadrado
  const [audioUrl, setAudioUrl] = useState(null);      // ObjectURL del audio
  const audioElRef = useRef(null);                     // <audio> interno
  const ttsAbortRef = useRef(null);                    // AbortController para /api/tts

  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);

  const leftRef  = useRef(null);
  const rightRef = useRef(null);
  const leftTA   = useRef(null);
  const rightTA  = useRef(null);

  // === refs para grabación ===
  const mediaRecorderRef = useRef(null);
  const mediaStreamRef   = useRef(null);
  const micChunksRef     = useRef([]);

  useEffect(() => () => {
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
  }, []);

  const swap = () => {
    setSrc(dst);
    setDst(src);
  };

  // cerrar dropdowns
  useEffect(() => {
    const onDown = (e) => {
      if (leftRef.current  && !leftRef.current.contains(e.target))  setOpenLeft(false);
      if (rightRef.current && !rightRef.current.contains(e.target)) setOpenRight(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  // auto-resize
  const autoResize = (el) => {
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };
  useEffect(() => { autoResize(leftTA.current);  }, [leftText]);
  useEffect(() => { autoResize(rightTA.current); }, [rightText]);

  // ==== Traducción con OpenAI vía /api/chat (debounced) ====
  useEffect(() => {
    if (leftText.length < MAX_CHARS) setErr("");

    if (!leftText.trim()) { setRightText(""); return; }

    if (leftText.length >= MAX_CHARS) {
      setErr(`Límite máximo: ${MAX_CHARS.toLocaleString()} caracteres.`);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const system = `${directionText(src, dst)}. Responde SOLO con la traducción final. Mantén el formato (saltos de línea, listas, mayúsculas) y los nombres propios.`;

        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            model: "gpt-4o-mini",
            temperature: 0.2,
            messages: [
              { role: "system", content: system },
              { role: "user",   content: leftText }
            ]
          }),
        });

        if (!res.ok) {
          const raw = await res.text().catch(() => "");
          console.error("API /api/chat error:", res.status, raw);
          throw new Error(`API /api/chat ${res.status}`);
        }

        const data = await res.json();
        setRightText(data?.content ?? "");
      } catch (e) {
        if (e.name !== "AbortError") {
          console.error("translate error:", e);
          setErr("No se pudo traducir ahora mismo.");
        }
      } finally {
        setLoading(false);
      }
    }, 450);

    return () => { clearTimeout(timer); controller.abort(); };
  }, [leftText, src, dst]);

  const Item = ({ active, label, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full px-3 py-2.5 text-left text-[14px] rounded-md transition ${
        active ? "bg-slate-100" : "hover:bg-slate-100"
      } text-slate-800`}
    >
      {label}
    </button>
  );

  const Dropdown = ({ open, selected, onSelect, align = "left" }) => {
    if (!open) return null;
    return (
      <div className={`absolute top-full mt-2 z-50 ${align === "right" ? "right-0" : "left-0"}`}>
        <div className="relative">
          <svg width="20" height="10" viewBox="0 0 20 10" className="mx-auto block">
            <path d="M0,10 L10,0 L20,10" className="fill-white" />
            <path d="M0,10 L10,0 L20,10" className="fill-none stroke-slate-200" />
          </svg>
          <div className="w-48 bg-white rounded-xl shadow-lg border border-slate-200 p-2">
            {OPTIONS.map((opt) => (
              <Item
                key={opt.value}
                label={opt.label}
                active={selected === opt.value}
                onClick={() => onSelect(opt.value)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ====== ALTAVOZ (TTS backend) ======
  const stopPlayback = () => {
    // cancelar fetch si estaba descargando
    if (speaking && ttsAbortRef.current) {
      try { ttsAbortRef.current.abort(); } catch {}
    }
    // parar audio si estaba sonando
    const el = audioElRef.current;
    if (el) {
      try {
        el.pause();
        el.currentTime = 0;
      } catch {}
    }
    // liberar URL
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }
    setSpeaking(false);
  };

  const handleSpeakToggle = async () => {
    // si está en modo cuadrado → parar
    if (speaking) {
      stopPlayback();
      return;
    }

    // no hay texto a leer
    const text = rightText?.trim();
    if (!text) return;

    setSpeaking(true); // cambia icono a cuadrado de inmediato

    // preparar <audio> (lo creo una sola vez)
    if (!audioElRef.current) {
      audioElRef.current = new Audio();
      audioElRef.current.preload = "auto";
      audioElRef.current.onended = () => setSpeaking(false);
      audioElRef.current.onpause  = () => {/* no cambiamos speaking aquí para respetar el toggle */};
    }

    // abort controller para poder cancelar si vuelven a pulsar
    const ctrl = new AbortController();
    ttsAbortRef.current = ctrl;

    try {
      // ⚠️ usa formato WAV para empezar antes
      const resp = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: ctrl.signal,
        body: JSON.stringify({
          text,
          voice: "alloy",
          format: "wav"   // <- menor latencia que mp3
        }),
      });

      if (!resp.ok) {
        const raw = await resp.text().catch(() => "");
        console.error("API /api/tts error:", resp.status, raw);
        setSpeaking(false);
        return;
      }

      const blob = await resp.blob();
      const url  = URL.createObjectURL(blob);

      // liberar anterior si existe
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      setAudioUrl(url);

      // reproducir
      const el = audioElRef.current;
      el.src = url;
      el.oncanplay = null;
      el.oncanplaythrough = null;

      // minimizar el “delay” de arranque: reproducir al primer canplay
      const start = () => {
        // algunos navegadores requieren resume del audio context; probar play
        el.play().catch((e) => {
          // si el navegador bloquea, al menos mantenemos el estado cuadrado hasta que el usuario interactúe
          console.warn("Autoplay blocked:", e);
        });
      };

      // si ya está listo, arranca; si no, espera a que esté listo
      if (el.readyState >= 3) {
        start();
      } else {
        el.addEventListener("canplay", start, { once: true });
      }

      // al terminar, vuelve al altavoz
      el.onended = () => {
        setSpeaking(false);
      };

    } catch (e) {
      if (e.name !== "AbortError") {
        console.error("tts fetch error:", e);
      }
      setSpeaking(false);
    }
  };

  // ====== MIC (grabar → /api/transcribe) ======
  const stopRecording = () => {
    try {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop());
        mediaStreamRef.current = null;
      }
    } catch {}
  };

  const handleToggleMic = async () => {
    // si está grabando, pare
    if (listening) {
      setListening(false);
      stopRecording();
      return;
    }

    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        console.warn("getUserMedia no disponible");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      micChunksRef.current = [];

      const rec = new MediaRecorder(stream, { mimeType: "audio/webm" });
      mediaRecorderRef.current = rec;

      rec.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) micChunksRef.current.push(e.data);
      };

      rec.onstop = async () => {
        try {
          const blob = new Blob(micChunksRef.current, { type: "audio/webm" });
          micChunksRef.current = [];

          const form = new FormData();
          form.append("file", blob, "audio.webm");
          form.append("model", "whisper-1");

          const r = await fetch("/api/transcribe", { method: "POST", body: form });
          const data = await r.json().catch(() => null);
          if (data?.ok && typeof data.text === "string") {
            const txt = data.text.trim();
            if (txt) {
              setLeftText((prev) => (prev ? (prev + "\n" + txt).slice(0, MAX_CHARS) : txt.slice(0, MAX_CHARS)));
            }
          } else {
            console.error("transcribe fail:", data);
          }
        } catch (e) {
          console.error("transcribe error:", e);
        } finally {
          if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach((t) => t.stop());
            mediaStreamRef.current = null;
          }
        }
      };

      rec.start();
      setListening(true);
    } catch (e) {
      console.error("mic error:", e);
      setListening(false);
      stopRecording();
    }
  };

  // ===== Borrar (BORRA LA IZQUIERDA) =====
  const handleClearLeft = () => setLeftText("");

  // ===== Acciones: copiar / PDF =====
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rightText || "");
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 1200);
    } catch (_) {}
  };

  const handleDownloadPdf = () => {
    const text = (rightText || "").replace(/\n/g, "<br/>");
    const w = window.open("", "_blank", "noopener,noreferrer");
    if (!w) return;
    w.document.write(`
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Traducción - Euskalia</title>
          <style>
            body{ font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; padding: 32px; line-height: 1.6; color:#0f172a;}
          </style>
        </head>
        <body>${text}</body>
      </html>
    `);
    w.document.close();
    w.focus();
    w.print();
  };

  return (
    <>
      {/* CAMBIO: solo alargamos el fondo con más padding inferior */}
      <section className="w-full bg-[#F4F8FF] pt-10 pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden w-full">
            {/* barra superior */}
            <div className="relative h-12 border-b border-slate-200">
              {/* Tabs Testua / Dokumentua / URLa pegados a la izquierda */}
              <div className="absolute inset-y-0 left-6 flex items-center">
                <div className="flex items-center gap-6">
                  {/* Testua */}
                  <button
                    type="button"
                    className="flex items-center gap-2 text-sm font-medium text-slate-700"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Testua</span>
                  </button>

                  {/* Separador */}
                  <span className="h-5 w-px bg-slate-200" />

                  {/* Dokumentua */}
                  <button
                    type="button"
                    className="flex items-center gap-2 text-sm font-medium text-slate-600"
                  >
                    <FileIcon className="w-4 h-4" />
                    <span>Dokumentua</span>
                  </button>

                  {/* Separador */}
                  <span className="h-5 w-px bg-slate-200" />

                  {/* URLa */}
                  <button
                    type="button"
                    className="flex items-center gap-2 text-sm font-medium text-slate-600"
                  >
                    <UrlIcon className="w-4 h-4" />
                    <span>URLa</span>
                  </button>
                </div>
              </div>

              {/* Selector de idiomas centrado (sin cambios) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-[auto_auto_auto] items-center gap-12">
                  {/* izquierda */}
                  <div className="relative" ref={leftRef}>
                    <button
                      type="button"
                      onClick={() => { setOpenLeft(v => !v); setOpenRight(false); }}
                      className="inline-flex items-center gap-2 px-2 py-1 text-[15px] font-medium text-slate-700 hover:text-slate-900 rounded-md"
                    >
                      <span>{OPTIONS.find(o => o.value === src)?.label}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="#334155" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <Dropdown
                      open={openLeft}
                      selected={src}
                      onSelect={(val) => { setSrc(val); setOpenLeft(false); }}
                      align="left"
                    />
                  </div>

                  {/* swap */}
                  <button
                    type="button"
                    aria-label="Intercambiar idiomas"
                    onClick={swap}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 hover:bg-slate-200 transition"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M7 7h11M7 7l3-3M7 7l3 3" stroke="#475569" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17 17H6M17 17l-3-3M17 17l-3 3" stroke="#475569" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* derecha */}
                  <div className="relative" ref={rightRef}>
                    <button
                      type="button"
                      onClick={() => { setOpenRight(v => !v); setOpenLeft(false); }}
                      className="inline-flex items-center gap-2 px-2 py-1 text-[15px] font-medium text-slate-700 hover:text-slate-900 rounded-md"
                    >
                      <span>{OPTIONS.find(o => o.value === dst)?.label}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="#334155" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <Dropdown
                      open={openRight}
                      selected={dst}
                      onSelect={(val) => { setDst(val); setOpenRight(false); }}
                      align="right"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* paneles */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              {/* IZQUIERDA: entrada */}
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200 relative">
                <textarea
                  ref={leftTA}
                  value={leftText}
                  onChange={(e) => setLeftText(e.target.value.slice(0, MAX_CHARS))}
                  onInput={(e) => autoResize(e.currentTarget)}
                  placeholder={t("translator.left_placeholder")}
                  className="w-full min-h-[360px] md:min-h-[400px] resize-none bg-transparent outline-none text-[17px] leading-8 text-slate-700 placeholder:text-slate-500 font-medium"
                />
                {/* contador abajo a la derecha */}
                <div className="absolute bottom-4 right-6 text-[13px] text-slate-400">
                  {leftText.length.toLocaleString()} / {MAX_CHARS.toLocaleString()}
                </div>

                {/* MIC abajo a la izquierda */}
                <div className="absolute bottom-4 left-6">
                  <button
                    type="button"
                    onClick={handleToggleMic}
                    aria-label={t("translator.dictate")}
                    className={`group relative p-2 rounded-md hover:bg-slate-100 ${listening ? "ring-2 ring-blue-400" : ""}`}
                  >
                    <Mic className={`w-5 h-5 ${listening ? "text-blue-600" : "text-slate-600"}`} />
                    <span className="pointer-events-none absolute -top-9 left-1 px-2 py-1 rounded bg-slate-800 text-white text-xs opacity-0 group-hover:opacity-100 transition">
                      {listening ? t("translator.listening") : t("translator.dictate")}
                    </span>
                  </button>
                </div>
              </div>

              {/* DERECHA: salida */}
              <div className="p-8 md:p-10 relative">
                {/* Botón BORRAR arriba-derecha (borra la IZQUIERDA) */}
                <button
                  type="button"
                  onClick={handleClearLeft}
                  aria-label={t("translator.clear_left")}
                  className="group absolute top-3 right-4 p-2 rounded-md hover:bg-slate-100"
                >
                  <Trash2 className="w-5 h-5 text-slate-500" />
                  <span className="pointer-events-none absolute -top-9 right-1 px-2 py-1 rounded bg-slate-800 text-white text-xs opacity-0 group-hover:opacity-100 transition">
                    {t("translator.clear_left")}
                  </span>
                </button>

                <textarea
                  ref={rightTA}
                  value={
                    loading && document.activeElement !== rightTA.current
                      ? t("translator.loading")
                      : rightText
                  }
                  onChange={(e) => setRightText(e.target.value)}
                  onInput={(e) => autoResize(e.currentTarget)}
                  placeholder={t("translator.right_placeholder")}
                  className={`w-full min-h-[360px] md:min-h-[400px] resize-none bg-transparent outline-none text-[17px] leading-8 text-slate-700 placeholder:text-slate-500 font-medium ${loading ? "italic text-slate-500" : ""}`}
                />
                {/* error arriba (ya existente) */}
                {err && <p className="mt-2 text-sm text-red-500">{err}</p>}
                {/* error abajo alineado al contador */}
                {err && (
                  <div className="absolute bottom-4 left-8 md:left-10 text-sm text-red-500">
                    {err}
                  </div>
                )}

                {/* Acciones abajo a la derecha */}
                <div className="absolute bottom-4 right-6 flex items-center gap-4 text-slate-500">
                  {/* Escuchar (TTS backend) */}
                  <button
                    type="button"
                    onClick={handleSpeakToggle}
                    aria-label={speaking ? t("translator.stop") : t("translator.listen")}
                    aria-pressed={speaking}
                    className={`group relative p-2 rounded-md hover:bg-slate-100 ${speaking ? "text-slate-900" : ""}`}
                  >
                    {speaking ? (
                      <span className="inline-block w-[10px] h-[10px] rounded-[2px] bg-slate-600" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                    <span className="pointer-events-none absolute -top-9 right-1 px-2 py-1 rounded bg-slate-800 text-white text-xs opacity-0 group-hover:opacity-100 transition">
                      {speaking ? t("translator.stop") : t("translator.listen")}
                    </span>
                  </button>

                  {/* Copiar (con ✓ al pulsar) */}
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label={t("translator.copy")}
                    className="group relative p-2 rounded-md hover:bg-slate-100"
                  >
                    {copied ? <Check className="w-5 h-5" /> : <CopyIcon className="w-5 h-5" />}
                    <span className="pointer-events-none absolute -top-9 right-1 px-2 py-1 rounded bg-slate-800 text-white text-xs opacity-0 group-hover:opacity-100 transition">
                      {copied ? t("translator.copied") : t("translator.copy")}
                    </span>
                  </button>

                  {/* PDF */}
                  <button
                    type="button"
                    onClick={handleDownloadPdf}
                    aria-label={t("translator.pdf")}
                    className="group relative p-2 rounded-md hover:bg-slate-100"
                  >
                    <FileDown className="w-5 h-5" />
                    <span className="pointer-events-none absolute -top-9 right-1 px-2 py-1 rounded bg-slate-800 text-white text-xs opacity-0 group-hover:opacity-100 transition">
                      {t("translator.pdf")}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* CTA */}
      <CtaSection />
      {/* FOOTER */}
      <Footer />
    </>
  );
}
