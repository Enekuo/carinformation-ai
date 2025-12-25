import React from "react";
import {
  Languages,
  FileText,
  CheckCircle2,
  Shuffle,
  Sparkles,
  Search,
  Play,
} from "lucide-react";

export default function ToolsSection() {
  const cards = [
    {
      title: "Itzultzailea",
      desc: "Itzuli hitzak, esaldiak edo testu osoak berehala, euskara ardatz nagusi gisa.",
      icon: Languages,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: "Laburtzailea",
      desc: "Testu luzeak segundo gutxitan laburtzen ditu argitasuna eta zehaztasuna zainduz.",
      icon: FileText,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Zuzenketa gramatikala",
      desc: "Testua berrikusi eta akats gramatikoak, ortografikoak eta estilozkoak zuzentzen ditu.",
      icon: CheckCircle2,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Parafrasatzailea",
      desc: "Esanahia mantenduz, testua beste modu batean berridazten du estilo ezberdinetan.",
      icon: Shuffle,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: "IA-detektorea",
      desc: "Testua aztertzen du eta IA bidez sortua izateko probabilitatea estimatzen du.",
      icon: Search,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      title: "Humanizatzailea",
      desc: "Testuari naturalago, argiago eta fluidoago irakurtzeko itxura ematen dio.",
      icon: Sparkles,
      iconBg: "bg-teal-50",
      iconColor: "text-teal-600",
    },
  ];

  return (
    <section className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Título centrado */}
        <div className="mb-10 md:mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Herramientas de Euskalia
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* IZQUIERDA: marco azul estilo "Algor" */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[560px]">
              {/* Marco azul completo */}
              <div className="rounded-[28px] bg-blue-600 p-5 md:p-6 shadow-sm">
                <div className="rounded-[22px] bg-slate-50 p-5 md:p-6">
                  <div className="rounded-[18px] bg-slate-100 border border-slate-200 h-[280px] md:h-[320px] flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center">
                        <Play className="text-blue-600" size={22} />
                      </div>
                      <div className="text-slate-700 font-medium">
                        Aquí irá el video en bucle
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DERECHA: tarjetas en fila (icono izquierda, texto derecha) */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {cards.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4 md:p-5"
                  >
                    <div className="flex items-start gap-4">
                      {/* icono */}
                      <div
                        className={`h-12 w-12 rounded-2xl ${c.iconBg} flex items-center justify-center shrink-0`}
                      >
                        <Icon className={c.iconColor} size={22} />
                      </div>

                      {/* texto a la derecha */}
                      <div className="min-w-0">
                        <h3 className="text-[18px] md:text-[19px] font-extrabold leading-tight text-slate-900">
                          {c.title}
                        </h3>
                        <p className="mt-2 text-[13px] md:text-[13.5px] leading-relaxed text-slate-600">
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
