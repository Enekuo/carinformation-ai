import React from "react";
import {
  Languages,
  FileText,
  CheckCircle2,
  Shuffle,
  Sparkles,
  Search,
  Globe,
  Brain,
} from "lucide-react";
import { useTranslation } from "@/lib/translations";

export default function ToolsSection() {
  const { t } = useTranslation();
  const tr = (key, fallback) => {
    const v = t(key);
    return !v || v === key ? fallback : v;
  };

  const cards = [
    {
      key: "translator",
      title: tr("toolsSection.cardTranslator_title", "Traductor"),
      desc: tr(
        "toolsSection.cardTranslator_desc",
        "Traduce entre euskera, español, inglés y francés con calidad profesional."
      ),
      hover: "hover:bg-[#FFFBEB] hover:border-2 hover:border-[#FEF3C7]",
      iconBox: "bg-[#FEF3C7]",
      icon: <Globe className="h-7 w-7 text-yellow-600" />,
    },
    {
      key: "summary",
      title: tr("toolsSection.cardSummary_title", "Resumidor"),
      desc: tr(
        "toolsSection.cardSummary_desc",
        "Sintetiza textos largos en segundos manteniendo claridad y fidelidad."
      ),
      hover: "hover:bg-[#E0EAFF] hover:border-2 hover:border-[#93C5FD]",
      iconBox: "bg-[#E0EAFF]",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
    },
    {
      key: "corrector",
      title: tr("toolsSection.cardCorrector_title", "Corrector gramatical"),
      desc: tr(
        "toolsSection.cardCorrector_desc",
        "Mejora tu texto corrigiendo gramática, claridad y fluidez."
      ),
      hover: "hover:bg-[#DCFCE7] hover:border-2 hover:border-[#4ADE80]",
      iconBox: "bg-[#ECFDF3]",
      icon: <CheckCircle2 className="h-6 w-6 text-green-600" />,
    },
    {
      key: "paraphraser",
      title: tr("toolsSection.cardParaphraser_title", "Parafraseador"),
      desc: tr(
        "toolsSection.cardParaphraser_desc",
        "Reescribe tu texto con distintos estilos manteniendo el significado."
      ),
      hover: "hover:bg-[#FFF7ED] hover:border-2 hover:border-[#FED7AA]",
      iconBox: "bg-[#FED7AA]",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 7h10M17 7l-3-3M17 7l-3 3" />
          <path d="M17 17H7M7 17l3 3M7 17l3-3" />
        </svg>
      ),
    },
    {
      key: "aiDetector",
      title: tr("toolsSection.cardAiDetector_title", "Detector IA"),
      desc: tr(
        "toolsSection.cardAiDetector_desc",
        "Analiza el texto y estima la probabilidad de que haya sido generado por IA."
      ),
      hover: "hover:bg-[#EEF2FF] hover:border-2 hover:border-[#C7D2FE]",
      iconBox: "bg-[#C7D2FE]",
      icon: <Search className="h-6 w-6 text-blue-700 -rotate-6" />,
    },
    {
      key: "humanizer",
      title: tr("toolsSection.cardHumanizer_title", "Humanizador"),
      desc: tr(
        "toolsSection.cardHumanizer_desc",
        "Haz que tu texto suene más natural, claro y fluido."
      ),
      hover: "hover:bg-[#F0FDF4] hover:border-2 hover:border-[#86EFAC]",
      iconBox: "bg-[#DCFCE7]",
      icon: <Brain className="h-7 w-7 text-emerald-600" />,
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
              <div className="absolute left-[-10px] right-[-5px] top-[39px] h-[14px] rounded-full bg-blue-600" />

              {/* PALO HORIZONTAL ABAJO */}
              <div className="absolute left-[-10px] right-[-7px] bottom-[26px] h-[14px] rounded-full bg-blue-600" />

              {/* PALO HORIZONTAL GRIS ARRIBA */}
              <div className="absolute left-[0px] right-[0px] top-[0px] h-[39px] rounded-none bg-slate-50" />

              {/* PALO HORIZONTAL GRIS ABAJO */}
              <div className="absolute left-[0px] right-[0px] bottom-[-4px] h-[30px] rounded-none bg-slate-50" />
            </div>
          </div>

          {/* DERECHA: tarjetas */}
          <div className="w-full mt-[35px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((c) => (
                <div
                  key={c.key}
                  className={`
                    bg-white rounded-2xl shadow-sm border border-slate-200 p-6 min-h-[190px]
                    transform transition
                    hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300
                    ${c.hover}
                  `}
                >
                  <div className={`w-12 h-12 rounded-xl ${c.iconBox} flex items-center justify-center mb-4`}>
                    {c.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-slate-800 mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
