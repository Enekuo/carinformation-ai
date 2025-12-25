import React from "react";
import {
  Languages,
  FileText,
  CheckCircle2,
  Repeat2,
  ScanSearch,
  Sparkles,
} from "lucide-react";

export default function ToolsSection() {
  const tools = [
    {
      title: "Itzultzailea",
      desc: "Itzuli hitzak, esaldiak edo testu osoak berehala, euskara ardatz nagusi gisa.",
      Icon: Languages,
      badgeBg: "bg-amber-100",
      iconColor: "text-amber-700",
    },
    {
      title: "Laburtzailea",
      desc: "Testu luzeak segundo gutxitan laburtu eta ideiarik garrantzitsuenak atera.",
      Icon: FileText,
      badgeBg: "bg-blue-100",
      iconColor: "text-blue-700",
    },
    {
      title: "Zuzentzailea",
      desc: "Akats gramatikalak, ortografia eta estiloa zuzendu testua argiago uzteko.",
      Icon: CheckCircle2,
      badgeBg: "bg-emerald-100",
      iconColor: "text-emerald-700",
    },
    {
      title: "Parafrasatzailea",
      desc: "Esanahia mantenduta, testua berridatzi estilo desberdinetan eta testuingurura egokitu.",
      Icon: Repeat2,
      badgeBg: "bg-orange-100",
      iconColor: "text-orange-700",
    },
    {
      title: "IA-detektorea",
      desc: "Testua aztertu eta IA bidez sortua izan den probabilitatearen estimazioa eman.",
      Icon: ScanSearch,
      badgeBg: "bg-indigo-100",
      iconColor: "text-indigo-700",
    },
    {
      title: "Humanizatzailea",
      desc: "Testua naturalago, fluidoago eta gizatiarrago bihurtu, irakurtzeko errazago.",
      Icon: Sparkles,
      badgeBg: "bg-teal-100",
      iconColor: "text-teal-700",
    },
  ];

  return (
    <section className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto w-full px-6 py-16 md:py-20">
        {/* Título centrado */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Herramientas de Euskalia
        </h2>

        {/* Layout 2 columnas */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* IZQUIERDA: Video frame */}
          <div className="w-full">
            <div className="relative w-full rounded-[28px] bg-blue-600 p-6 md:p-7">
              <div className="rounded-[22px] bg-slate-50 border border-blue-200/60 p-5 md:p-6">
                <div className="rounded-[18px] bg-slate-100 border border-slate-200 h-[300px] md:h-[340px] flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center px-6">
                    <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                      <div className="h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-blue-600 ml-1" />
                    </div>
                    <div className="mt-5 text-slate-900 font-semibold">
                      Aquí irá el video en bucle
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DERECHA: 6 tarjetas (compactas para que quepan) */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {tools.map(({ title, desc, Icon, badgeBg, iconColor }) => (
                <div
                  key={title}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
                >
                  <div
                    className={`h-12 w-12 rounded-2xl ${badgeBg} flex items-center justify-center`}
                  >
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* (Opcional) Si ves que queda demasiado abajo en móvil, lo ajustamos luego */}
          </div>
        </div>
      </div>
    </section>
  );
}
