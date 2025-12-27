import React from "react";
import {
  Languages,
  FileText,
  CheckCircle2,
  Sparkles,
  Search,
  Globe,
  Brain,
} from "lucide-react";

export default function ToolsSection() {
  const cards = [
    {
      title: "Itzultzailea",
      desc: "Itzuli hitzak, esaldiak edo testu osoak berehala, euskara ardatz nagusi gisa.",
      logoBg: "bg-[#FEF3C7]",
      logo: <Globe className="h-7 w-7 text-yellow-600" />,
    },
    {
      title: "Laburtzailea",
      desc: "Testu luzeak segundo gutxitan laburtzen ditu argitasuna eta zehaztasuna zainduz.",
      logoBg: "bg-[#E0EAFF]",
      logo: <FileText className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Zuzenketa gramatikala",
      desc: "Testua berrikusi eta akats gramatikoak, ortografikoak eta estilozkoak zuzentzen ditu.",
      logoBg: "bg-[#ECFDF3]",
      logo: <CheckCircle2 className="h-6 w-6 text-green-600" />,
    },
    {
      title: "Parafrasatzailea",
      desc: "Esanahia mantenduz, testua beste modu batean berridazten du estilo ezberdinetan.",
      logoBg: "bg-[#FED7AA]",
      logo: (
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
      title: "Humanizatzailea",
      desc: "Testuen jariakortasuna eta naturaltasuna hobetzen ditu, gizatiarragoak izan daitezen.",
      logoBg: "bg-[#DCFCE7]",
      logo: <Brain className="h-7 w-7 text-emerald-600" />,
    },
    {
      title: "IA-detektorea",
      desc: "Testuak aztertzen ditu adimen artifizialak sortutako edukiaren zantzuak identifikatzeko.",
      logoBg: "bg-[#C7D2FE]",
      logo: <Search className="h-6 w-6 text-blue-700 -rotate-6" />,
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
            <div className="relative overflow-visible">
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

              <div className="absolute left-[-10px] top-[40px] bottom-[30px] w-[14px] rounded-full bg-blue-600" />
              <div className="absolute right-[-7px] top-[40px] bottom-[30px] w-[14px] rounded-full bg-blue-600" />
              <div className="absolute left-[-10px] right-[-5px] top-[39px] h-[14px] rounded-full bg-blue-600" />
              <div className="absolute left-[-10px] right-[-7px] bottom-[26px] h-[14px] rounded-full bg-blue-600" />
              <div className="absolute left-[0px] right-[0px] top-[0px] h-[39px] rounded-none bg-slate-50" />
              <div className="absolute left-[0px] right-[0px] bottom-[-4px] h-[30px] rounded-none bg-slate-50" />
            </div>
          </div>

          {/* DERECHA: tarjetas (IGUAL QUE ANTES) */}
          <div className="w-full mt-[35px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4"
                >
                  <div className="flex items-start gap-4">
                    {/* ✅ SOLO LOGO cambiado (mismo tamaño de caja que antes: h-12 w-12) */}
                    <div
                      className={`h-12 w-12 rounded-2xl ${c.logoBg} flex items-center justify-center flex-shrink-0`}
                    >
                      {c.logo}
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
