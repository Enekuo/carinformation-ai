import React from "react";
import { useTranslation } from "@/lib/translations";

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" {...props}>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPage() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  const plans = [
    {
      key: "free",
      highlighted: false,
      titleKey: "pricing.plan.free",
      price: "0€",
      perMonthKey: "pricing.perMonth",
      features: [
        tr("pricing.features.translate", "Traducciones básicas"),
        tr("pricing.features.summarize", "Resúmenes básicos"),
        tr("pricing.features.limits", "Límites de uso"),
      ],
      actionKey: "pricing.cta.free",
    },
    {
      key: "basic",
      highlighted: true,
      titleKey: "pricing.plan.basic",
      price: "6,99€",
      perMonthKey: "pricing.perMonth",
      features: [
        tr("pricing.features.translate", "Traducción rápida"),
        tr("pricing.features.summarize", "Resúmenes mejorados"),
        tr("pricing.features.noAds", "Sin anuncios"),
      ],
      actionKey: "pricing.cta.basic",
      badgeKey: "pricing.mostPopular",
    },
    {
      key: "pro",
      highlighted: false,
      titleKey: "pricing.plan.pro",
      price: "12,99€",
      perMonthKey: "pricing.perMonth",
      features: [
        tr("pricing.features.translateAll", "Traducción completa"),
        tr("pricing.features.summarizeLong", "Resúmenes largos"),
        tr("pricing.features.customVoices", "Voces personalizadas"),
      ],
      actionKey: "pricing.cta.pro",
    },
  ];

  return (
    <main className="min-h-[80vh] bg-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {tr("pricing.title", "Elige tu plan")}
          </h1>
          <p className="mt-3 text-slate-600">
            {tr("pricing.subtitle", "Planes claros. Cambia cuando quieras.")}
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.key}
              className={`relative rounded-2xl border ${
                p.highlighted
                  ? "border-blue-200 bg-blue-50/40"
                  : "border-slate-200 bg-white"
              } p-6 sm:p-7`}
            >
              {p.badgeKey && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-blue-600 text-white text-xs font-semibold px-3 py-1 shadow-sm">
                    {tr(p.badgeKey, "Más popular")}
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold text-slate-900">
                {tr(p.titleKey, "Plan")}
              </h3>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {p.price}
                </span>
                <span className="text-slate-500 mb-1">
                  {tr(p.perMonthKey, "al mes")}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon
                      className={p.highlighted ? "text-blue-600" : "text-emerald-600"}
                    />
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <button
                  className={`w-full h-11 rounded-xl font-semibold transition
                    ${
                      p.highlighted
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                >
                  {tr(p.actionKey, "Empezar")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
