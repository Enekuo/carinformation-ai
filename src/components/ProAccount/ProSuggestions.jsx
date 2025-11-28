import React, { useState } from "react";
import {
  Lightbulb,
  GraduationCap,
  Briefcase,
  BookOpenText,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function ProSuggestions() {
  const [copiedId, setCopiedId] = useState(null);

  const suggestions = [
    {
      id: "study-notes",
      icon: GraduationCap,
      title: "Resúmenes rápidos para estudiar en euskera",
      description:
        "Copia tus apuntes de clase o el contenido de un PDF y deja que Euskalia cree un resumen claro en euskera. Perfecto para repasar antes de un examen sin perder tiempo.",
      tag: "Estudio",
    },
    {
      id: "work-emails",
      icon: Briefcase,
      title: "Correos y documentos profesionales en dos idiomas",
      description:
        "Escribe el borrador en el idioma que te resulte más cómodo y utiliza Euskalia para traducirlo a euskera o castellano manteniendo un tono profesional y cuidado.",
      tag: "Trabajo",
    },
    {
      id: "articles-summary",
      icon: BookOpenText,
      title: "Entiende artículos largos en pocos minutos",
      description:
        "Pega el texto o la URL de un artículo extenso y genera un resumen en euskera con las ideas clave. Ideal para mantenerte al día sin tener que leerlo todo.",
      tag: "Concentración",
    },
    {
      id: "creative-ideas",
      icon: Sparkles,
      title: "Ideas para guiones, vídeos y contenido creativo",
      description:
        "Pídele a Euskalia títulos, guiones breves o estructuras de contenido en euskera y castellano para tus vídeos, podcasts, posts o newsletters.",
      tag: "Creatividad",
    },
    {
      id: "language-practice",
      icon: MessageCircle,
      title: "Practica euskera con textos reales",
      description:
        "Toma un texto en castellano, tradúcelo a euskera con Euskalia y luego vuelve a traducirlo al castellano para comprobar cuánto has entendido y aprender expresiones nuevas.",
      tag: "Idioma",
    },
    {
      id: "daily-brief",
      icon: Lightbulb,
      title: "Resumen diario para empezar el día",
      description:
        "Agrupa varias noticias, correos o textos importantes y crea un único resumen en euskera para tener una visión rápida de todo lo que tienes pendiente.",
      tag: "Rutina",
    },
  ];

  const handleCopy = async (suggestion) => {
    const textToCopy = `${suggestion.title}\n\n${suggestion.description}`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        setCopiedId(suggestion.id);
        setTimeout(() => setCopiedId(null), 1800);
      }
    } catch (err) {
      console.error("Error al copiar la sugerencia:", err);
    }
  };

  return (
    <section className="w-full h-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-10 space-y-8">
        {/* Cabecera */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Sugerencias para sacarle más partido a Euskalia Pro
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            Usa estas ideas como punto de partida. Puedes copiarlas y adaptarlas
            según lo que necesites en cada momento.
          </p>
        </div>

        {/* Bloque informativo */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-800">
            <Lightbulb className="w-4 h-4" />
            <span>Consejo rápido</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            Copia una sugerencia, pégala en el traductor, resumidor o asistente
            de Euskalia y añádele tus propios detalles para personalizarla.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2">
          {suggestions.map((item) => {
            const Icon = item.icon;
            const isCopied = copiedId === item.id;

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/90 shadow-sm hover:shadow-md transition-shadow duration-200 p-4 sm:p-5"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-50 group-hover:scale-105 transition-transform duration-150">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 mt-auto">
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                    {item.tag}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleCopy(item)}
                    className="text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full bg-slate-900 text-slate-50 hover:bg-slate-800 active:scale-95 transition transform"
                  >
                    {isCopied ? "Copiado" : "Copiar idea"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
