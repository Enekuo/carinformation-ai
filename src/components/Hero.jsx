import React from "react";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Contenedor principal: dos paneles estilo DeepL */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          {/* Barra superior (solo visual) */}
          <div className="h-12 flex items-center justify-between px-4 sm:px-6 border-b border-slate-200">
            <button className="text-sm font-medium text-slate-700 flex items-center gap-1">
              <span>euskera</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Icono swap */}
            <div className="flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 7h11M7 7l3-3M7 7l3 3" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 17H6M17 17l-3-3M17 17l-3 3" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <button className="text-sm font-medium text-slate-700 flex items-center gap-1">
              <span>español</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Dos cuadrados */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Izquierdo */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <h1 className="text-[28px] md:text-[30px] leading-tight font-semibold text-slate-800 mb-3">
                Escribe o pega el texto aquí.
              </h1>
              <p className="text-slate-600">
                Arrastra y suelta aquí archivos PDF, Word (.docx) o PowerPoint (.pptx) para traducirlos.
              </p>
            </div>

            {/* Derecho (vacío) */}
            <div className="p-6 md:p-8 min-h-[260px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
