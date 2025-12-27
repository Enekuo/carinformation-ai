import React from "react";
import {
  Languages,
  FileText,
  CheckCircle2,
  Shuffle,
  Sparkles,
  Search,
} from "lucide-react";

export default function ToolsSection() {
  const cards = [
    {
      title: "Itzultzailea",
      desc: "Itzuli hitzak, esaldiak edo testu osoak berehala, euskara ardatz nagusi gisa.",
      Icon: Languages,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: "Laburtzailea",
      desc: "Testu luzeak segundo gutxitan laburtzen ditu argitasuna eta zehaztasuna zainduz.",
      Icon: FileText,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Zuzenketa gramatikala",
      desc: "Testua berrikusi eta akats gramatikoak, ortografikoak eta estilozkoak zuzentzen ditu.",
      Icon: CheckCircle2,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Parafrasatzailea",
      desc: "Esanahia mantenduz, testua beste modu batean berridazten du estilo ezberdinetan.",
      Icon: Shuffle,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: "Humanizatzailea",
      desc: "Testuen jariakortasuna eta naturaltasuna hobetzen ditu, gizatiarragoak izan daitezen.",
      Icon: Sparkles,
      iconBg: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      title: "IA-detektorea",
      desc: "Testuak aztertzen ditu adimen artifizialak sortutako edukiaren zantzuak identifikatzeko.",
      Icon: Search,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
  ];

  return (
    <section className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-slate-900">
          Herramientas de Euskalia
        </h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* IZQUIERDA: VIDEO + PALO AZUL JUSTO A LA DERECHA */}
          <div className="relative w-full">
            {/* ✅ WRAPPER con overflow visible para que el palo no se recorte */}
            <div className="relative overflow-visible">
              {/* tu caja del video (igual que antes) */}
              <div className="relative bg-slate-50 rounded-[22px] border border-slate-200 overflow-hidden aspect-[16/10]">
                <video
                  src="/demo-euskalia.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain"
                />
              </div> 
              
              {/* PALO IZQUIERDO */}
              <div className="absolute left-[-10px] top-[40px] bottom-[30px] w-[14px] rounded-full bg-blue-600" />

              {/* ✅ PALO AZUL: pegado al borde derecho del video */}
              <div className="absolute right-[-7px] top-[40px] bottom-[30px] w-[14px] rounded-full bg-blue-600" />
              
              {/* PALO HORIZONTAL ARRIBA */}
              <div className="absolute left-[20px] right-[20px] top-[10px] h-[14px] rounded-full bg-blue-600" />

              {/* PALO HORIZONTAL ABAJO */}
              <div className="absolute left-[20px] right-[20px] bottom-[10px] h-[14px] rounded-full bg-blue-600" />
            </div>
          </div>

          {/* DERECHA: tarjetas */} 
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`h-12 w-12 rounded-2xl ${c.iconBg} flex items-center justify-center flex-shrink-0`}
                    >
                      <c.Icon className={`h-6 w-6 ${c.iconColor}`} />
                    </div>

                    <div className="min-w-0">
                      <div className="text-[18px] font-extrabold text-slate-900 leading-tight">
                        {c.title}
                      </div>
                      <p className="mt-1 text-[13px] text-slate-600 truncate">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
