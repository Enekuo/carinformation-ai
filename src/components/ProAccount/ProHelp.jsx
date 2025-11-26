import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";
import { Search, ChevronDown } from "lucide-react";

export default function ProHelp() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "getting_started",
      titleKey: "proHelp.section_getting_started_title",
      items: [
        {
          titleKey: "proHelp.section_getting_started_q1_title",
          bodyKey: "proHelp.section_getting_started_q1_body",
        },
        {
          titleKey: "proHelp.section_getting_started_q2_title",
          bodyKey: "proHelp.section_getting_started_q2_body",
        },
        {
          titleKey: "proHelp.section_getting_started_q3_title",
          bodyKey: "proHelp.section_getting_started_q3_body",
        },
      ],
    },
    {
      id: "translator",
      titleKey: "proHelp.section_translator_title",
      items: [
        {
          titleKey: "proHelp.section_translator_q1_title",
          bodyKey: "proHelp.section_translator_q1_body",
        },
        {
          titleKey: "proHelp.section_translator_q2_title",
          bodyKey: "proHelp.section_translator_q2_body",
        },
        {
          titleKey: "proHelp.section_translator_q3_title",
          bodyKey: "proHelp.section_translator_q3_body",
        },
      ],
    },
    {
      id: "summary",
      titleKey: "proHelp.section_summary_title",
      items: [
        {
          titleKey: "proHelp.section_summary_q1_title",
          bodyKey: "proHelp.section_summary_q1_body",
        },
        {
          titleKey: "proHelp.section_summary_q2_title",
          bodyKey: "proHelp.section_summary_q2_body",
        },
        {
          titleKey: "proHelp.section_summary_q3_title",
          bodyKey: "proHelp.section_summary_q3_body",
        },
      ],
    },
    {
      id: "billing",
      titleKey: "proHelp.section_billing_title",
      items: [
        {
          titleKey: "proHelp.section_billing_q1_title",
          bodyKey: "proHelp.section_billing_q1_body",
        },
        {
          titleKey: "proHelp.section_billing_q2_title",
          bodyKey: "proHelp.section_billing_q2_body",
        },
        {
          titleKey: "proHelp.section_billing_q3_title",
          bodyKey: "proHelp.section_billing_q3_body",
        },
      ],
    },
    {
      id: "problems",
      titleKey: "proHelp.section_problems_title",
      items: [
        {
          titleKey: "proHelp.section_problems_q1_title",
          bodyKey: "proHelp.section_problems_q1_body",
        },
        {
          titleKey: "proHelp.section_problems_q2_title",
          bodyKey: "proHelp.section_problems_q2_body",
        },
        {
          titleKey: "proHelp.section_problems_q3_title",
          bodyKey: "proHelp.section_problems_q3_body",
        },
      ],
    },
  ];

  const handleToggle = (id) => {
    setActiveSection((current) => (current === id ? null : id));
  };

  return (
    <div className="flex-1 bg-[#F4F7FF] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-12">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-10">
          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-slate-900">
              {tr("proHelp.title", "")}
            </h1>
          </div>
          <div className="flex justify-center md:justify-end">
            <Link
              to="/pro/soporte"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-sm md:text-[15px] font-medium px-4 py-2 shadow-sm transition-colors"
              aria-label={tr("proHelp.support_button_aria", "")}
            >
              {tr("proHelp.support_button_label", "")}
            </Link>
          </div>
        </header>

        {/* BUSCADOR */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              className="w-full rounded-full border border-slate-200 bg-white shadow-sm px-11 py-3 text-sm md:text-base outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder={tr("proHelp.search_placeholder", "")}
            />
          </div>
        </div>

        {/* SECCIONES (ACORDEÓN: SOLO UNA ABIERTA) */}
        <div className="space-y-3">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm"
            >
              <button
                type="button"
                onClick={() => handleToggle(section.id)}
                className="w-full flex items-center justify-between px-5 py-4 md:px-6 md:py-5 text-left"
              >
                <span className="text-sm md:text-base font-semibold text-slate-900">
                  {tr(section.titleKey, "")}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                    activeSection === section.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeSection === section.id && (
                <div className="px-5 pb-5 pt-1 md:px-6 border-t border-slate-100">
                  <div className="space-y-4 text-sm md:text-[15px] text-slate-700">
                    {section.items.map((item) => (
                      <div key={item.titleKey}>
                        <button
                          type="button"
                          className="w-full text-left mb-1 font-semibold text-slate-900 hover:text-sky-700 transition-colors"
                          onClick={() =>
                            setActiveSection((current) =>
                              current === section.id ? section.id : section.id
                            )
                          }
                        >
                          {tr(item.titleKey, "")}
                        </button>
                        <p className="text-slate-600 whitespace-pre-line">
                          {tr(item.bodyKey, "")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* BLOQUE FINAL: MASCOTA + TEXTO + BOTÓN SOPORTE */}
        <div className="mt-10 md:mt-12">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm px-5 py-5 md:px-7 md:py-6 flex items-center gap-4 md:gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#E6F0FF] flex items-center justify-center overflow-hidden">
                <img
                  src="/olondo-mascota-2.png" // ajusta esta ruta al archivo real de tu mascota
                  alt={tr("proHelp.bottom_support_mascot_alt", "")}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm md:text-[15px] text-slate-700">
                {tr("proHelp.bottom_support_text", "")}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/pro/soporte"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 hover:bg-sky-700 text-white text-sm md:text-[15px] font-medium px-4 py-2 shadow-sm transition-colors"
              >
                {tr("proHelp.bottom_support_cta", "")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
