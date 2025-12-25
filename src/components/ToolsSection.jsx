import React from "react";
import { useTranslation } from "@/lib/translations";
import { Play } from "lucide-react";

export default function ToolsSection() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  return (
    <section className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto w-full px-6 py-16 md:py-20">
        {/* Título centrado */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          {tr("tools_title", "Herramientas de Euskalia")}
        </h2>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* IZQUIERDA: Cuadro vídeo (placeholder) */}
          <div className="relative">
            {/* Esquina azul */}
            <div className="absolute -top-2 -left-2 w-16 h-16 rounded-3xl bg-blue-600" />

            <div className="relative rounded-3xl border border-blue-200 bg-blue-50/60 shadow-sm p-6 md:p-7">
              <div className="rounded-2xl border border-slate-200 bg-slate-100/60 h-[320px] md:h-[380px] flex flex-col items-center justify-center text-center px-6">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  <Play className="text-blue-600" size={22} />
                </div>

                <div className="mt-4 text-sm md:text-[15px] font-medium text-slate-700">
                  {tr("tools_video_placeholder_title", "Aquí irá el video en bucle")}
                </div>
              </div>
            </div>
          </div>

          {/* DERECHA: En blanco por ahora */}
          <div className="rounded-3xl border border-dashed border-slate-200 bg-white h-[380px] md:h-[440px]" />
        </div>
      </div>
    </section>
  );
}
