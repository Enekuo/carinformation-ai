import React from "react";

export default function ToolsSection() {
  return (
    <section className="w-full bg-[#F5F9FF] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título centrado */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Herramientas de Euskalia
          </h2>
        </div>

        {/* 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* IZQUIERDA: cuadro video (esquina azul integrada en el cuadro) */}
          <div className="relative rounded-[28px] border border-blue-200 bg-blue-50/60 p-6 md:p-7 shadow-sm overflow-hidden">
            {/* Esquina azul INTEGRADA (dentro del cuadro grande) */}
            <div className="absolute top-0 left-0 w-[92px] h-[92px] bg-blue-600 rounded-br-[26px]" />

            {/* Contenido */}
            <div className="relative rounded-2xl border border-blue-100 bg-slate-100 overflow-hidden">
              <div className="w-full aspect-[16/10] flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center px-6">
                  <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                    <div className="h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-blue-600 ml-[2px]" />
                  </div>

                  <div className="mt-5 text-slate-700 font-medium">
                    Aquí irá el video en bucle
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DERECHA: caja en blanco */}
          <div className="rounded-[28px] border border-dashed border-slate-300/70 bg-white/40 min-h-[420px] md:min-h-[460px] shadow-sm" />
        </div>
      </div>
    </section>
  );
}
