import React from "react";
import {
  Languages,
  FileText,
  CheckCircle2,
  Shuffle,
  Sparkles,
  Search,
} from "lucide-react";
import { useTranslation } from "@/lib/translations";

export default function ToolsSection() {
  const { t } = useTranslation();
  const tr = (k, f) => {
    const v = t(k);
    return !v || v === k ? f : v;
  };

  const cards = [
    {
      title: tr("tools_translator_title", "Itzultzailea"),
      desc: tr(
        "tools_translator_desc",
        "Itzuli hitzak, esaldiak edo testu osoak berehala, euskara ardatz nagusi gisa."
      ),
      Icon: Languages,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: tr("tools_summarizer_title", "Laburtzailea"),
      desc: tr(
        "tools_summarizer_desc",
        "Testu luzeak segundo gutxitan laburtzen ditu argitasuna eta zehaztasuna zainduz."
      ),
      Icon: FileText,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: tr("tools_grammar_title", "Zuzenketa gramatikala"),
      desc: tr(
        "tools_grammar_desc",
        "Testua berrikusi eta akats gramatikoak, ortografikoak eta estilozkoak zuzentzen ditu."
      ),
      Icon: CheckCircle2,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: tr("tools_paraphraser_title", "Parafrasatzailea"),
      desc: tr(
        "tools_paraphraser_desc",
        "Esanahia mantenduz, testua beste modu batean berridazten du estilo ezberdinetan."
      ),
      Icon: Shuffle,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: tr("tools_humanizer_title", "Humanizatzailea"),
      desc: tr(
        "tools_humanizer_desc",
        "Testuen jariakortasuna eta naturaltasuna hobetzen ditu, gizatiarragoak izan daitezen."
      ),
      Icon: Sparkles,
      iconBg: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      title: tr("tools_ai_detector_title", "IA-detektorea"),
      desc: tr(
        "tools_ai_detector_desc",
        "Testuak aztertzen ditu adimen artifizialak sortutako edukiaren zantzuak identifikatzeko."
      ),
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
                  key={c.title}
                  className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4"
                >
                  <div className="flex items-start gap-5">
                    {/* ✅ ICONO como en la captura */}
                    <div
                      className={`h-[56px] w-[56px] rounded-[18px] ${c.iconBg} flex items-center justify-center flex-shrink-0`}
                    >
                      <c.Icon
                        className={`h-[26px] w-[26px] ${c.iconColor}`}
                        strokeWidth={2.2}
                      />
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
