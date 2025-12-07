import React from "react";
import { FileText, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/translations";
import { useNavigate } from "react-router-dom";

export default function ProHome() {
  const userName = "(usuario)";

  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;
  const navigate = useNavigate();

  return (
    <>
      {/* Saludo + título */}
      <div className="mt-6 ml-10 mb-6">
        <p className="text-base text-slate-400">
          {tr("proHome.greeting_prefix", "Hola")} {userName}
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          {tr("proHome.title", "Bienvenido a Euskalia Pro")}
        </h1>
      </div>

      {/* Tarjetas principales */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ml-10 mr-10">

        {/* ⭐ TRADUCTOR (amarillo) */}
        <div
          onClick={() => navigate("/cuenta-pro/traductor")}
          className="
            bg-white rounded-2xl shadow-sm border border-slate-200 p-6
            cursor-pointer transform transition
            hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300
            hover:bg-[#FEF9C3] hover:border-2 hover:border-[#FACC15]
          "
        >
          <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] flex items-center justify-center mb-4">
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 text-yellow-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10M17 7l-3-3M17 7l-3 3" />
              <path d="M17 17H7M7 17l3 3M7 17l3-3" />
            </svg>
          </div>

          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            {tr("proHome.cardTranslator_title", "Traductor")}
          </h3>
          <p className="text-sm text-slate-500">
            {tr(
              "proHome.cardTranslator_desc",
              "Traduce entre euskera, español, inglés y francés con calidad profesional."
            )}
          </p>
        </div>

        {/* ⭐ RESUMIDOR (azul) */}
        <div
          onClick={() => navigate("/cuenta-pro/resumen")}
          className="
            bg-white rounded-2xl shadow-sm border border-slate-200 p-6
            cursor-pointer transform transition
            hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300
            hover:bg-[#DBEAFE] hover:border-2 hover:border-[#3B82F6]
          "
        >
          <div className="w-12 h-12 rounded-xl bg-[#E0EAFF] flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-blue-500" />
          </div>

          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            {tr("proHome.cardSummary_title", "Resumidor")}
          </h3>
          <p className="text-sm text-slate-500">
            {tr(
              "proHome.cardSummary_desc",
              "Sintetiza textos largos en segundos manteniendo claridad y fidelidad."
            )}
          </p>
        </div>

        {/* ⭐ CORRECTOR GRAMATICAL (verde) */}
        <div
          onClick={() => navigate("/cuenta-pro/corrector")}
          className="
            bg-white rounded-2xl shadow-sm border border-slate-200 p-6
            cursor-pointer transform transition
            hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300
            hover:bg-[#DCFCE7] hover:border-2 hover:border-[#22C55E]
          "
        >
          <div className="w-12 h-12 rounded-xl bg-[#ECFDF3] flex items-center justify-center mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>

          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            {tr("proHome.cardCorrector_title", "Corrector gramatical")}
          </h3>
          <p className="text-sm text-slate-500">
            {tr(
              "proHome.cardCorrector_desc",
              "Mejora tu texto corrigiendo gramática, claridad y fluidez."
            )}
          </p>
        </div>

      </section>
    </>
  );
}
