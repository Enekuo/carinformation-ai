import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Caja principal */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          {/* Barra superior */}
          <div className="h-12 grid grid-cols-[1fr_auto_1fr] items-center border-b border-slate-200">
            {/* Izquierda: detectar idioma */}
            <div className="pl-6">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-slate-700"
              >
                <span>detectar idioma</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Centro: swap */}
            <div className="justify-self-center">
              <button
                type="button"
                aria-label="Intercambiar idiomas"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 hover:bg-slate-200 transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 7h11M7 7l3-3M7 7l3 3" stroke="#475569" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 17H6M17 17l-3-3M17 17l-3 3" stroke="#475569" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Derecha: español */}
            <div className="pr-6 justify-self-end">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-slate-700"
              >
                <span>español</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Dos paneles */}
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
            {/* Izquierdo */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200">
              <h1 className="text-[32px] leading-tight font-semibold text-slate-800 mb-4">
                Escribe o pega el texto aquí.
              </h1>
              <p className="text-slate-600 text-[16px]">
                Arrastra y suelta aquí archivos PDF, Word (.docx) o PowerPoint (.pptx) para traducirlos.
              </p>
            </div>

            {/* Derecho (vacío como en el ejemplo) */}
            <div className="p-8 md:p-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
