import React from "react";
import { FileText, CheckCircle2, Globe, Brain, Search } from "lucide-react";
import { useTranslation } from "@/lib/translations";
import { useNavigate } from "react-router-dom";

// ✅ Imagen nueva para la tarjeta Parafraseador
import Library4 from "@/public/Library4.png";

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
        {/* ⭐ TRADUCTOR */}
        <div
          onClick={() => navigate("/cuenta-pro/traductor")}
          className="
            bg-white rounded-2xl shadow-sm border border-slate-200 p-6 min-h-[190px]
            cursor-pointer transform transition
            hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300
            hover:bg-[#FFFBEB] hover:border-2 hover:border-[#FEF3C7]
          "
        >
          <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] flex items-center justify-center mb-4">
            <Globe className="h-7 w-7 text-yellow-600" />
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

        {/* ⭐ RESUMIDOR */}
        <div
          onClick={() => navigate("/cuenta-pro/resumen")}
          className="
            bg-white rounded-2xl shadow-sm border border-slate-200 p-6 min-h-[190px]
            cursor-pointer transform transition
            hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300
            hover:bg-[#E0EAFF] hover:border-2 hover:border-[#93C5FD]
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

        {/* ⭐ CORRECTOR */}
        <div
          onClick={() => navigate("/cuenta-pro/corrector")}
          className="
            bg-white rounded-2xl shadow-sm border border-slate-200 p-6 min-h-[190px]
            cursor-pointer transform transition
            hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300
            hover:bg-[#DCFCE7] hover:border-2 hover:border-[#4ADE80]
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

        {/* ⭐ PARAFRASEADOR (Library4) */}
        <div
          onClick={() => navigate("/cuenta-pro/parafraseador")}
          className="
            bg-white rounded-2xl shadow-sm border border-slate-200 p-6 min-h-[190px]
            cursor-pointer transform transition
            hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300
            hover:bg-[#FFF7ED] hover:border-2 hover:border-[#FED7AA]
          "
        >
          <div className="w-12 h-12 rounded-xl bg-[#FED7AA] flex items-center justify-center mb-4">
            <img
              src={Library4}
              alt="Library4"
              className="w-7 h-7 object-contain"
              draggable="false"
            />
          </div>

          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            {tr("proHome.cardParaphraser_title", "Parafraseador")}
          </h3>
          <p className="text-sm text-slate-500">
            {tr(
              "proHome.cardParaphraser_desc",
              "Reescribe tu texto con distintos estilos manteniendo el significado."
            )}
          </p>
        </div>

        {/* ⭐ DETECTOR IA (lupa azul inclinada) */}
        <div
          onClick={() => navigate("/cuenta-pro/detector-ia")}
          className="
            bg-white rounded-2xl shadow-sm border border-slate-200 p-6 min-h-[190px]
            cursor-pointer transform transition
            hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300
            hover:bg-[#EEF2FF] hover:border-2 hover:border-[#C7D2FE]
          "
        >
          <div className="w-12 h-12 rounded-xl bg-[#C7D2FE] flex items-center justify-center mb-4">
            <Search className="h-6 w-6 text-blue-700 -rotate-12" />
          </div>

          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            {tr("proHome.cardAiDetector_title", "Detector IA")}
          </h3>
          <p className="text-sm text-slate-500">
            {tr(
              "proHome.cardAiDetector_desc",
              "Analiza el texto y estima la probabilidad de que haya sido generado por IA."
            )}
          </p>
        </div>

        {/* ⭐ HUMANIZADOR */}
        <div
          onClick={() => navigate("/cuenta-pro/humanizador")}
          className="
            bg-white rounded-2xl shadow-sm border border-slate-200 p-6 min-h-[190px]
            cursor-pointer transform transition
            hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300
            hover:bg-[#F0FDF4] hover:border-2 hover:border-[#86EFAC]
          "
        >
          <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center mb-4">
            <Brain className="h-7 w-7 text-emerald-600" />
          </div>

          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            {tr("proHome.cardHumanizer_title", "Humanizador")}
          </h3>
          <p className="text-sm text-slate-500">
            {tr(
              "proHome.cardHumanizer_desc",
              "Haz que tu texto suene más natural, claro y fluido."
            )}
          </p>
        </div>
      </section>
    </>
  );
}
