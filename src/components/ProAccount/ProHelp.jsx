import React, { useState } from "react";
import { useTranslation } from "@/lib/translations";
import { Search, ChevronDown } from "lucide-react";

export default function ProHelp() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "getting_started",
      titleKey: "proHelp_group_getting_started_title",
      items: [
        {
          titleKey: "proHelp_getting_started_q1_title",
          bodyKey: "proHelp_getting_started_q1_body",
        },
        {
          titleKey: "proHelp_getting_started_q2_title",
          bodyKey: "proHelp_getting_started_q2_body",
        },
        {
          titleKey: "proHelp_getting_started_q3_title",
          bodyKey: "proHelp_getting_started_q3_body",
        },
      ],
    },
    {
      id: "translator",
      titleKey: "proHelp_group_translator_title",
      items: [
        {
          titleKey: "proHelp_translator_q1_title",
          bodyKey: "proHelp_translator_q1_body",
        },
        {
          titleKey: "proHelp_translator_q2_title",
          bodyKey: "proHelp_translator_q2_body",
        },
        {
          titleKey: "proHelp_translator_q3_title",
          bodyKey: "proHelp_translator_q3_body",
        },
      ],
    },
    {
      id: "summary",
      titleKey: "proHelp_group_summary_title",
      items: [
        {
          titleKey: "proHelp_summary_q1_title",
          bodyKey: "proHelp_summary_q1_body",
        },
        {
          titleKey: "proHelp_summary_q2_title",
          bodyKey: "proHelp_summary_q2_body",
        },
        {
          titleKey: "proHelp_summary_q3_title",
          bodyKey: "proHelp_summary_q3_body",
        },
      ],
    },
    {
      id: "billing",
      titleKey: "proHelp_group_billing_title",
      items: [
        {
          titleKey: "proHelp_billing_q1_title",
          bodyKey: "proHelp_billing_q1_body",
        },
        {
          titleKey: "proHelp_billing_q2_title",
          bodyKey: "proHelp_billing_q2_body",
        },
        {
          titleKey: "proHelp_billing_q3_title",
          bodyKey: "proHelp_billing_q3_body",
        },
      ],
    },
    {
      id: "problems",
      titleKey: "proHelp_group_problems_title",
      items: [
        {
          titleKey: "proHelp_problems_q1_title",
          bodyKey: "proHelp_problems_q1_body",
        },
        {
          titleKey: "proHelp_problems_q2_title",
          bodyKey: "proHelp_problems_q2_body",
        },
        {
          titleKey: "proHelp_problems_q3_title",
          bodyKey: "proHelp_problems_q3_body",
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
        <header className="text-center mb-10 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-slate-900 mb-2">
            {tr("proHelp_title", "")}
          </h1>
          <p className="text-sm md:text-base text-slate-600">
            {tr("proHelp_subtitle", "")}
          </p>
        </header>

        {/* BUSCADOR (sin texto de ejemplos) */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              className="w-full rounded-full border border-slate-200 bg-white shadow-sm px-11 py-3 text-sm md:text-base outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder={tr("proHelp_search_placeholder", "")}
            />
          </div>
        </div>

        {/* SECCIONES (solo una abierta a la vez) */}
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
                        <p className="font-semibold mb-1 text-slate-900">
                          {tr(item.titleKey, "")}
                        </p>
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
      </div>
    </div>
  );
}
