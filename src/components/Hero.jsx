import React from "react";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-2xl border border-slate-200/70 bg-white shadow-sm overflow-hidden">
          {/* Barra superior */}
          <div className="h-12 flex items-center justify-between px-5 border-b border-slate-200/70">
            <span className="text-sm font-medium text-slate-700 select-none">euskera</span>

            {/* Icono intercambio (solo visual) */}
            <div className="flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 7h11M7 7l3-3M7 7l3 3"
                  stroke="#334155"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 17H6M17 17l-3-3M17 17l-3 3"
                  stroke="#334155"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="text-sm font-medium text-slate-700 select-none">español</span>
          </div>

          {/* Cuerpo con dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Izquierda */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200/70">
              <h1 className="text-3xl md:text-[32px] leading-tight font-bold text-slate-900 mb-3">
                Escribe o pega el texto aquí.
              </h1>
              <p className="text-slate-600 text-base">
                Arrastra y suelta aquí archivos PDF, Word (.docx) o PowerPoint
                (.pptx) para traducirlos.
              </p>
            </div>

            {/* Derecha (vacía como en la imagen) */}
            <div className="p-6 md:p-8 min-h-[200px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;