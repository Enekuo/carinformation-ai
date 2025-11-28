import React, { useState } from "react";
import { useTranslation } from "@/lib/translations";
import {
  Lightbulb,
  GraduationCap,
  Briefcase,
  BookOpenText,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function ProSuggestions() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  const [copiedId, setCopiedId] = useState(null);

  const suggestions = [
    {
      id: "study-notes",
      icon: GraduationCap,
      titleKey: "proSuggestions.study_notes_title",
      descKey: "proSuggestions.study_notes_desc",
      defaultTitle: "Resúmenes rápidos para estudiar en euskera",
      defaultDesc:
        "Copia los apuntes de clase o el contenido de un PDF y pídele a Euskalia que cree un resumen claro en euskera. Ideal para repasar antes de un examen.",
      tagKey: "proSuggestions.tag_study",
      defaultTag: "Estudio",
    },
    {
      id: "work-emails",
      icon: Briefcase,
      titleKey: "proSuggestions.work_emails_title",
      descKey: "proSuggestions.work_emails_desc",
      defaultTitle: "Correos y documentos profesionales en dos idiomas",
      defaultDesc:
        "Escribe el borrador en el idioma que te resulte más cómodo y deja que Euskalia lo traduzca a euskera o castellano manteniendo el tono profesional.",
      tagKey: "proSuggestions.tag_work",
      defaultTag: "Trabajo",
    },
    {
      id: "articles-summary",
      icon: BookOpenText,
      titleKey: "proSuggestions.articles_summary_title",
      descKey: "proSuggestions.articles_summary_desc",
      defaultTitle: "Entiende artículos largos en pocos minutos",
      defaultDesc:
        "Pega la URL o el texto de un artículo extenso y genera un resumen en euskera para quedarte solo con las ideas clave sin perder tiempo.",
      tagKey: "proSuggestions.tag_focus",
      defaultTag: "Concentración",
    },
    {
      id: "creative-ideas",
      icon: Sparkles,
      titleKey: "proSuggestions.creative_ideas_title",
      descKey: "proSuggestions.creative_ideas_desc",
      defaultTitle: "Ideas para guiones, vídeos o contenido creativo",
      defaultDesc:
        "Pide a Euskalia que te proponga títulos, guiones breves o estructuras de contenido en euskera y castellano para tus vídeos, podcasts o redes sociales.",
      tagKey: "proSuggestions.tag_creative",
      defaultTag: "Creatividad",
    },
    {
      id: "language-practice",
      icon: MessageCircle,
      titleKey: "proSuggestions.language_practice_title",
      descKey: "proSuggestions.language_practice_desc",
      defaultTitle: "Practica euskera con textos reales",
      defaultDesc:
        "Toma un texto en castellano, tradúcelo a euskera y luego vuelve a traducirlo al castellano para comprobar qué has entendido y mejorar poco a poco.",
      tagKey: "proSuggestions.tag_language",
      defaultTag: "Idioma",
    },
    {
      id: "daily-brief",
      icon: Lightbulb,
      titleKey: "proSuggestions.daily_brief_title",
      descKey: "proSuggestions.daily_brief_desc",
      defaultTitle: "Resumen diario para empezar el día",
      defaultDesc:
        "Agrupa varias noticias, correos o textos y crea un único resumen en euskera para tener una visión rápida de todo lo importante del día.",
      tagKey: "proSuggestions.tag_routine",
      defaultTag: "Rutina",
    },
  ];

  const handleCopy = async (suggestion) => {
    const textToCopy = `${tr(suggestion.titleKey, suggestion.defaultTitle)}\n\n${tr(
      suggestion.descKey,
      suggestion.defaultDesc
    )}`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        setCopiedId(suggestion.id);
        setTimeout(() => setCopiedId(null), 1800);
      }
    } catch (err) {
      console.error("Error copying suggestion:", err);
    }
  };

  return (
    <section className="w-full h-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-10 space-y-8">
        {/* Cabecera */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {tr(
              "proSuggestions.title",
              "Sugerencias para sacarle más partido a Euskalia Pro"
            )}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            {tr(
              "proSuggestions.subtitle",
              "Usa estas ideas como punto de partida. Puedes copiarlas y adaptarlas a lo que necesites en cada momento."
            )}
          </p>
        </div>

        {/* Bloque informativo */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-800">
            <Lightbulb className="w-4 h-4" />
            <span>
              {tr(
                "proSuggestions.tip_title",
                "Consejo rápido"
              )}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            {tr(
              "proSuggestions.tip_text",
              "Copia una sugerencia, pégala en el traductor, resumidor o asistente y ajústala con tus propios detalles."
            )}
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
                      {tr(item.titleKey, item.defaultTitle)}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {tr(item.descKey, item.defaultDesc)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 mt-auto">
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                    {tr(item.tagKey, item.defaultTag)}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleCopy(item)}
                    className="text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full bg-slate-900 text-slate-50 hover:bg-slate-800 active:scale-95 transition transform"
                  >
                    {isCopied
                      ? tr(
                          "proSuggestions.copied_label",
                          "Copiado"
                        )
                      : tr(
                          "proSuggestions.copy_label",
                          "Copiar idea"
                        )}
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
