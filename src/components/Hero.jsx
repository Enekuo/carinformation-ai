import React, { useState } from "react";

const LANGS = [
  { value: "eus", label: "euskera" },
  { value: "es",  label: "castellano" },
];

const Hero = () => {
  const [src, setSrc] = useState("eus");
  const [dst, setDst] = useState("es");

  const swap = () => {
    setSrc(dst);
    setDst(src);
  };

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden w-full">

          {/* ===== Barra superior: grupo centrado con selects funcionales ===== */}
          <div className="relative h-12 border-b border-slate-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-[auto_auto_auto] items-center gap-12">

                {/* Select izquierda */}
                <div className="relative">
                  <select
                    value={src}
                    onChange={(e) => setSrc(e.target.value)}
                    className="appearance-none bg-transparent pr-6 text-[15px] font-medium text-slate-700 focus:outline-none cursor-pointer"
                  >
                    {LANGS.map(l => (
                      <option key={l.value} value={l.value}>{l.label}</option>
                    ))}
                  </select>
                  {/* caret */}
                  <svg
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                  >
                    <path d="M6 9l6 6 6-6" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Botón swap */}
                <button
                  type="button"
                  aria-label="Intercambiar idiomas"
                  onClick={swap}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 hover:bg-slate-200 transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7h11M7 7l3-3M7 7l3 3" stroke="#475569" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 17H6M17 17l-3-3M17 17l-3 3" stroke="#475569" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Select derecha */}
                <div className="relative">
                  <select
                    value={dst}
                    onChange={(e) => setDst(e.target.value)}
                    className="appearance-none bg-transparent pr-6 text-[15px] font-medium text-slate-700 focus:outline-none cursor-pointer"
                  >
                    {LANGS.map(l => (
                      <option key={l.value} value={l.value}>{l.label}</option>
                    ))}
                  </select>
                  {/* caret */}
                  <svg
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                  >
                    <path d="M6 9l6 6 6-6" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

              </div>
            </div>
          </div>

          {/* ===== Dos paneles ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[430px]">
            {/* Izquierdo */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200">
              <h1 className="text-[32px] font-bold text-slate-900 leading-tight">
                Escribe o pega el texto aquí.
              </h1>
              {/* Frase eliminada a petición: no hay párrafo aquí */}
            </div>

            {/* Derecho (vacío) */}
            <div className="p-8 md:p-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
