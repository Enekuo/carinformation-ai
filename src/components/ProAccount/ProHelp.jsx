import React, { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import { useTranslation } from "@/lib/translations";

export default function ProHelp() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  const [query, setQuery] = useState("");
  const [openSection, setOpenSection] = useState(null);

  // Secciones del centro de ayuda (tipo NotebookLM)
  const sections = useMemo(
    () => [
      {
        id: "getting-started",
        titleKey: "help_section_getting_started_title",
        items: [
          {
            questionKey: "help_q_what_is_euskalia",
            answerKey: "help_a_what_is_euskalia",
          },
          {
            questionKey: "help_q_first_steps",
            answerKey: "help_a_first_steps",
          },
          {
            questionKey: "help_q_supported_languages",
            answerKey: "help_a_supported_languages",
          },
        ],
      },
      {
        id: "translator",
        titleKey: "help_section_translator_title",
        items: [
          {
            questionKey: "help_q_translate_text",
            answerKey: "help_a_translate_text",
          },
          {
            questionKey: "help_q_translate_document",
            answerKey: "help_a_translate_document",
          },
          {
            questionKey: "help_q_translate_url",
            answerKey: "help_a_translate_url",
          },
        ],
      },
      {
        id: "summary",
        titleKey: "help_section_summary_title",
        items: [
          {
            questionKey: "help_q_create_summary",
            answerKey: "help_a_create_summary",
          },
          {
            questionKey: "help_q_summary_length",
            answerKey: "help_a_summary_length",
          },
          {
            questionKey: "help_q_multiple_sources",
            answerKey: "help_a_multiple_sources",
          },
        ],
      },
      {
        id: "account_billing",
        titleKey: "help_section_account_billing_title",
        items: [
          {
            questionKey: "help_q_do_i_need_account",
            answerKey: "help_a_do_i_need_account",
          },
          {
            questionKey: "help_q_plans",
            answerKey: "help_a_plans",
          },
          {
            questionKey: "help_q_billing_issues",
            answerKey: "help_a_billing_issues",
          },
        ],
      },
      {
        id: "troubleshooting",
        titleKey: "help_section_troubleshooting_title",
        items: [
          {
            questionKey: "help_q_file_not_uploading",
            answerKey: "help_a_file_not_uploading",
          },
          {
            questionKey: "help_q_url_not_working",
            answerKey: "help_a_url_not_working",
          },
          {
            questionKey: "help_q_result_incomplete",
            answerKey: "help_a_result_incomplete",
          },
        ],
      },
    ],
    []
  );

  // Filtro por texto del buscador
  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;

    return sections
      .map((section) => {
        const title = tr(section.titleKey, "").toLowerCase();
        const matchedItems = section.items.filter((item) => {
          const qText = tr(item.questionKey, "").toLowerCase();
          const aText = tr(item.answerKey, "").toLowerCase();
          return (
            qText.includes(q) ||
            aText.includes(q) ||
            title.includes(q)
          );
        });

        if (matchedItems.length === 0) return null;
        return { ...section, items: matchedItems };
      })
      .filter(Boolean);
  }, [sections, query, tr]);

  const handleToggleSection = (id) => {
    setOpenSection((current) => (current === id ? null : id));
  };

  return (
    <main className="min-h-screen w-full bg-[#F4F8FF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Título principal */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-3">
            {tr("help_title", "¿En qué podemos ayudarte?")}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            {tr(
              "help_subtitle",
              "Escribe tu duda y te mostraremos los artículos de ayuda relacionados."
            )}
          </p>
        </header>

        {/* Buscador grande */}
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Search className="w-5 h-5" />
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={tr(
                  "help_search_placeholder",
                  "Describe tu problema o escribe una pregunta"
                )}
                className="w-full rounded-full border border-slate-200 bg-white px-11 py-3 sm:py-3.5 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
            <p className="mt-2 text-xs text-slate-500 text-center">
              {tr(
                "help_search_hint",
                "Ejemplos: “no se sube el PDF”, “cómo traducir una URL”, “límite del plan gratis…”"
              )}
            </p>
          </div>
        </div>

        {/* Secciones estilo acordeón */}
        <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          {filteredSections.length === 0 ? (
            <div className="px-6 py-10 text-center text-sm text-slate-500">
              {tr(
                "help_no_results",
                "No hemos encontrado resultados para tu búsqueda. Prueba con otras palabras o revisa las categorías."
              )}
            </div>
          ) : (
            filteredSections.map((section, index) => {
              const isOpen = openSection === section.id;
              const title = tr(section.titleKey, "");
              return (
                <div
                  key={section.id}
                  className={index !== 0 ? "border-t border-slate-100" : ""}
                >
                  <button
                    type="button"
                    onClick={() => handleToggleSection(section.id)}
                    className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-medium text-slate-900 text-left">
                      {title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-4 pt-1 space-y-4 bg-white">
                      {section.items.map((item) => (
                        <div key={item.questionKey} className="text-left">
                          <div className="text-sm font-medium text-slate-900 mb-1">
                            {tr(item.questionKey, "")}
                          </div>
                          <p className="text-sm text-slate-600 whitespace-pre-line">
                            {tr(item.answerKey, "")}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </section>
      </div>
    </main>
  );
}
