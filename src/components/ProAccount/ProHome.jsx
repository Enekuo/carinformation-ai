import React from "react";

export default function ProHome() {
  // Más adelante este nombre vendrá del usuario logueado
  const userName = "Eneko";

  return (
    <>
      {/* Saludo + título */}
      <div className="mt-6 ml-10 mb-6">
        <p className="text-base text-slate-400">
          Hola {userName}
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Bienvenido a Euskalia Pro
        </h1>
      </div>

      {/* Tarjetas principales: Traductor / Resumidor / Corregidor */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ml-10 mr-10">
        {/* Traductor */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h12M9 3v2m0 4v14m4-10h8m-4-4v8"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            Traductor
          </h3>
          <p className="text-sm text-slate-500">
            Traduce entre euskera, español e inglés con calidad profesional.
          </p>
        </div>

        {/* Resumidor */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h10M4 18h7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            Resumidor
          </h3>
          <p className="text-sm text-slate-500">
            Sintetiza textos largos en segundos manteniendo claridad y fidelidad.
          </p>
        </div>

        {/* Corregidor gramatical */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
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
