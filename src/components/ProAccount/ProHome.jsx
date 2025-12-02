import React from "react";
import { Languages, FileText, CheckCircle2 } from "lucide-react";

export default function ProHome() {
  // Más adelante este nombre vendrá del usuario logueado
  const userName = "Eneko";

  return (
    <>
      {/* Saludo + título */}
      <div className="mt-6 ml-10 mb-6">
        <p className="text-base text-slate-400">Hola {userName}</p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Bienvenido a Euskalia Pro
        </h1>
      </div>

      {/* Tarjetas principales: Traductor / Resumidor / Corregidor */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ml-10 mr-10">
        {/* Traductor */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
            <Languages className="h-6 w-6 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            Traductor
          </h3>
          <p className="text-sm text-slate-500">
            Traduce entre euskera, español, inglés y francés con calidad
            profesional.
          </p>
        </div>

        {/* Resumidor */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            Resumidor
          </h3>
          <p className="text-sm text-slate-500">
            Sintetiza textos largos en segundos manteniendo claridad y
            fidelidad.
          </p>
        </div>

        {/* Corregidor gramatical */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
            <CheckCircle2 className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            Corregidor gramatical
          </h3>
          <p className="text-sm text-slate-500">
            Mejora tu texto corrigiendo gramática, claridad y fluidez.
          </p>
        </div>
      </section>
    </>
  );
}
