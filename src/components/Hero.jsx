import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contenedor principal ampliado */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden w-full min-h-[500px]">
          {/* Barra superior */}
          <div className="h-14 flex items-center justify-between px-6 border-b border-slate-200">
            <button className="text-sm font-medium text-slate-700 flex items-center gap-1">
              <span>euskera</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="#334155"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Icono swap */}
            <div className="flex items-center justify-center">
              <svg
                width="22"
                height="22"
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

            <button className="text-sm font-medium text-slate-700 flex items-center gap-1">
              <span>español</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="#334155"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Cuerpo: dos paneles grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-[430px]">
            {/* Izquierdo */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-start">
              <h1 className="text-[32px] font-bold text-slate-900 mb-4 leading-tight">
                Escribe o pega el texto aquí.
              </h1>
              <p className="text-slate-600 text-[17px] leading-relaxed">
                Arrastra y suelta aquí archivos PDF, Word (.docx) o PowerPoint
                (.pptx) para traducirlos.
              </p>
            </div>

            {/* Derecho */}
            <div className="p-8 md:p-10 h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;