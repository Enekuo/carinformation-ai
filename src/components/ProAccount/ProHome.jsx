import React from "react";
import { FileText, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/translations";

export default function ProHome() {
  // Más adelante este nombre vendrá del usuario logueado
  const userName = "Eneko";

  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  return (
    <>
      {/* Saludo + título */}
      <div className="mt-6 ml-10 mb-6">
        <p className="text-base text-slate-400">
          {tr("proHome_greeting", "Hola")} {userName}
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          {tr("proHome_title", "Bienvenido a Euskalia Pro")}
        </h1>
      </div>

      {/* Tarjetas principales: Traductor / Resumidor / Corregidor */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ml-10 mr-10">
        {/* Traductor */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
            {/* Icono personalizado tipo "T +" más grande */}
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Barra horizontal superior */}
              <line x1="7" y1="7" x2="15" y2="7" />
              {/* Palo vertical */}
              <line x1="11" y1="7" x2="11" y2="17" />
              {/* Cruz tipo “+” a la derecha */}
              <line x1="15.5" y1="11" x2="19" y2="11" />
              <line x1="17.25" y1="9.25" x2="17.25" y2="12.75" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            {tr("proHome_cardTranslator_title", "Traductor")}
          </h3>
          <p className="text-sm text-slate-500">
            {tr(
              "proHome_cardTranslator_desc",
              "Traduce entre euskera, español, inglés y francés con calidad profesional."
            )}
          </p>
        </div>

        {/* Resumidor */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            {tr("proHome_cardSummary_title", "Resumidor")}
          </h3>
          <p className="text-sm text-slate-500">
            {tr(
              "proHome_cardSummary_desc",
              "Sintetiza textos largos en segundos manteniendo claridad y fidelidad."
            )}
          </p>
        </div>

        {/* Corrector gramatical */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
            <CheckCircle2 className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            {tr("proHome_cardCorrector_title", "Corrector gramatical")}
          </h3>
          <p className="text-sm text-slate-500">
            {tr(
              "proHome_cardCorrector_desc",
              "Mejora tu texto corrigiendo gramática, claridad y fluidez."
            )}
          </p>
        </div>
      </section>
    </>
  );
}
