import React from "react";
import { Play } from "lucide-react";

export default function ToolsSection() {
  return (
    <section className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto w-full px-6 py-16 md:py-20">
        {/* Título centrado */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Herramientas de Euskalia
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* IZQUIERDA: marco azul estilo Algor */}
          <div className="w-full">
            {/* Marco (azul) */}
            <div className="bg-blue-600 rounded-[32px] p-5 md:p-6 shadow-sm">
              {/* Interior (blanco) */}
              <div className="bg-white rounded-[26px] p-4 md:p-5">
                {/* Área vídeo */}
                <div className="relative w-full overflow-hidden rounded-[22px] bg-slate-50 border border-slate-200">
                  {/* Mantiene proporción tipo “video box” */}
                  <div className="aspect-[16/10] w-full flex items-center justify-center">
                    {/* Placeholder (hasta que metas el mp4) */}
                    <div className="flex flex-col items-center justify-center gap-3 text-slate-700">
                      <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                        <Play className="h-5 w-5 text-blue-600 fill-blue-600" />
                      </div>
                      <div className="text-sm font-medium">Aquí irá el video en bucle</div>
                    </div>

                    {/*
                      Cuando tengas el vídeo, sustituye el bloque de arriba por esto:

                      <video
                        src="/tools-demo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DERECHA: en blanco por ahora */}
          <div className="w-full h-full">
            <div className="w-full min-h-[420px] md:min-h-[520px] rounded-[28px] border border-dashed border-slate-200 bg-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
