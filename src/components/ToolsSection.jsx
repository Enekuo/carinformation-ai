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

  // 👉 ESTE ES EL ÚNICO NÚMERO QUE TOCAS SI HACE FALTA
  // (sube si aún se ve negro, baja si tapa contenido)
  const MASK_PX = 34;

  return (
    <section className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-slate-900">
          Herramientas de Euskalia
        </h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* VIDEO */}
          <div className="relative w-full mt-10">
            {/* MARCO AZUL */}
            <div className="bg-blue-600 rounded-[34px] p-4">
              {/* CAJA DEL VIDEO */}
              <div className="relative bg-slate-50 rounded-[22px] overflow-hidden aspect-[16/10]">
                <video
                  src="/demo-euskalia.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain"
                />

                {/* TAPAR SOLO LO NEGRO (arriba/abajo) */}
                <div
                  className="absolute top-0 left-0 right-0 bg-blue-600"
                  style={{ height: MASK_PX }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-blue-600"
                  style={{ height: MASK_PX }}
                />
              </div>
            </div>
          </div>

          {/* TARJETAS */}
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
