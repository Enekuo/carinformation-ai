import React, { useState } from "react";

const LANGS = [
  { value: "eus", label: "euskera" },
  { value: "es", label: "español" },
  { value: "en", label: "inglés" },
  { value: "fr", label: "francés" },
  { value: "de", label: "alemán" },
  { value: "pt", label: "portugués" },
];

const Hero = () => {
  const [srcLang, setSrcLang] = useState("eus"); // ← euskera por defecto
  const [dstLang, setDstLang] = useState("es");

  const swapLangs = () => {
    setSrcLang(dstLang);
    setDstLang(srcLang);
  };

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-xl border border-slate-200 shadow-sm bg-white overflow-hidden">
          {/* Barra superior con select izquierdo = euskera */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-12 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <select
                value={srcLang}
                onChange={(e) => setSrcLang(e.target.value)}
                className="appearance-none text-sm font-medium text-slate-700 bg-transparent px-2 py-1 rounded-md hover:bg-slate-100 focus:outline-none"
              >
                {LANGS.map((l) => (
                  <option key={l.value} value={l.value}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={swapLangs}
              className="p-2 rounded-md hover:bg-slate-100 active:scale-95 transition"
              aria-label="Intercambiar idiomas"
              title="Intercambiar idiomas"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 7h11M7 7l3-3M7 7l3 3" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 17H6M17 17l-3-3M17 17l-3 3" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="flex items-center gap-2">
              <select
                value={dstLang}
                onChange={(e) => setDstLang(e.target.value)}
                className="appearance-none text-sm font-medium text-slate-700 bg-transparent px-2 py-1 rounded-md hover:bg-slate-100 focus:outline-none"
              >
                {LANGS.filter((l) => l.value !== "eus").map((l) => (
                  <option key={l.value} value={l.value}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Dos columnas vacías como en la captura */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-3">
                Escribe o pega el texto aquí.
              </h1>
              <p className="text-slate-500">
                Arrastra y suelta aquí archivos PDF, Word (.docx) o PowerPoint (.pptx) para traducirlos.
              </p>
            </div>
            <div className="p-6 md:p-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;