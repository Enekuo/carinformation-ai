import React from "react";

export default function ToolsSection({ videoSrc }) {
  return (
    <section className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Título centrado */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Herramientas de Euskalia
        </h2>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* IZQUIERDA: cuadro azul + video */}
          <div className="relative">
            {/* Esquina azul (cuadro completo) */}
            <div className="absolute -left-3 -top-3 w-16 h-16 rounded-2xl bg-blue-600 z-10" />

            <div className="relative rounded-[28px] border border-blue-200 bg-blue-50/50 p-6 md:p-7 shadow-sm">
              <div className="rounded-2xl border border-blue-100 bg-slate-100 overflow-hidden flex items-center justify-center h-[360px] md:h-[420px]">
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center px-6">
                    <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 5V19L19 12L8 5Z"
                          fill="currentColor"
                          className="text-blue-600"
                        />
                      </svg>
                    </div>
                    <div className="mt-6 text-sm md:text-[15px] font-medium text-slate-700">
                      Aquí irá el video en bucle
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* DERECHA: en blanco por ahora */}
          <div className="rounded-[28px] border border-slate-200 bg-white/70 p-6 md:p-7 min-h-[420px] md:min-h-[480px]">
            {/* vacío a propósito */}
          </div>
        </div>
      </div>
    </section>
  );
}
