import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/lib/translations";

const OPTIONS = [
  { value: "eus", label: "euskera" },
  { value: "es",  label: "castellano" },
];

// Mapeo a códigos de MyMemory
const MM_CODES = { eus: "eu", es: "es" };

// Opcional: si quieres más cuota gratuita, pon tu email:
const MYMEMORY_EMAIL = ""; // e.g. "tucorreo@dominio.com" -> añade &de=...

export default function Hero() {
  const { t } = useTranslation();

  const [src, setSrc] = useState("eus");
  const [dst, setDst] = useState("es");
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const [leftText, setLeftText]   = useState("");
  const [rightText, setRightText] = useState("");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const leftRef  = useRef(null);
  const rightRef = useRef(null);
  const leftTA   = useRef(null);
  const rightTA  = useRef(null);

  const swap = () => {
    setSrc(dst);
    setDst(src);
    // no tocamos textos; solo cambia dirección
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

  // ==== Traducción con MyMemory (debounced) ====
  useEffect(() => {
    setErr("");

    // No traducir si no hay texto
    if (!leftText.trim()) { setRightText(""); return; }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const from = MM_CODES[src];
        const to   = MM_CODES[dst];
        const base = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(leftText)}&langpair=${from}|${to}`;
        const url  = MYMEMORY_EMAIL ? `${base}&de=${encodeURIComponent(MYMEMORY_EMAIL)}` : base;

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // Texto traducido principal
        const translated = data?.responseData?.translatedText ?? "";
        setRightText(translated);

        // Si hay un "match" mejor en matches (quality alta), úsalo
        const best = Array.isArray(data?.matches)
          ? data.matches.sort((a,b) => (b.quality ?? 0) - (a.quality ?? 0))[0]
          : null;
        if (best && (best.quality ?? 0) > 90 && best.translation) {
          setRightText(best.translation);
        }
      } catch (e) {
        if (e.name !== "AbortError") {
          setErr("No se pudo traducir ahora mismo.");
        }
      } finally {
        setLoading(false);
      }
    }, 450); // debounce 450ms

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

  return (
    // Quitado min-h-screen
    <section className="w-full bg-[#F4F8FF] py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Quitado min-h-[calc(100vh-180px)] */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden w-full">
          {/* barra superior */}
          <div className="relative h-12 border-b border-slate-200">
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
          <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[430px]">
            {/* IZQUIERDA: entrada */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200">
              <textarea
                ref={leftTA}
                value={leftText}
                onChange={(e) => setLeftText(e.target.value)}
                onInput={(e) => autoResize(e.currentTarget)}
                placeholder={t("translator.left_placeholder")}
                className="w-full min-h-[430px] resize-none bg-transparent outline-none text-[17px] leading-8 text-slate-700 placeholder:text-slate-500 font-medium"
              />
            </div>

            {/* DERECHA: salida */}
            <div className="p-8 md:p-10">
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
                className={`w-full min-h-[430px] resize-none bg-transparent outline-none text-[17px] leading-8 text-slate-700 placeholder:text-slate-500 font-medium ${loading ? "italic text-slate-500" : ""}`}
              />
              {err && <p className="mt-2 text-sm text-red-500">{err}</p>}
            </div>
          </div>
        </div> 
      </div>
    </section>
  ); 
}
