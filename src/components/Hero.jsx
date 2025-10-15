import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* CONTENEDOR PRINCIPAL */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden w-full">
          
          {/* BARRA SUPERIOR: izquierda/centro/derecha sin padding lateral */}
          <div className="relative h-12 border-b border-slate-200">
            {/* Izquierda */}
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 text-[15px] font-medium text-slate-700 hover:text-slate-900"
            >
              <span>euskera</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="#334155" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Centro (swap) */}
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-8 w-8 rounded-md bg-slate-100 hover:bg-slate-200 transition"
              aria-label="Intercambiar idiomas"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 7h11M7 7l3-3M7 7l3 3" stroke="#475569" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 17H6M17 17l-3-3M17 17l-3 3" stroke="#475569" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Derecha */}
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 text-[15px] font-medium text-slate-700 hover:text-slate-900"
            >
              <span>español</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="#334155" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* DOS PANELES */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[430px]">
            {/* Izquierdo */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200">
              <h1 className="text-[32px] font-bold text-slate-900 mb-4 leading-tight">
                Escribe o pega el texto aquí.
              </h1>
              <p className="text-slate-600 text-[17px] leading-relaxed">
                Arrastra y suelta aquí archivos PDF, Word (.docx) o PowerPoint (.pptx) para traducirlos.
              </p>
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