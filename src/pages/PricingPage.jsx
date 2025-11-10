import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" {...props}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function PricingPage() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  const plans = [
    {
      id: "free",
      name: tr("pricing.plan.free", "Gratis"),
      price: "0€",
      period: tr("pricing.perMonth", "/mes"),
      badge: null,
      features: [
        tr("pricing.features.translate", "Traductor ES ↔ EUS"),
        tr("pricing.features.summarize", "Resúmenes con IA"),
        tr("pricing.features.limits", "Límites diarios razonables"),
        tr("pricing.features.ads", "Con anuncios"),
      ],
      cta: tr("pricing.cta", "Empieza ahora"),
      to: "/iniciar-sesion",
      highlighted: false,
    },
    {
      id: "basic",
      name: tr("pricing.plan.basic", "Básico"),
      price: "6,99€",
      period: tr("pricing.perMonth", "/mes"),
      badge: tr("pricing.mostPopular", "Más popular"),
      features: [
        tr("pricing.features.translate", "Traductor ES ↔ EUS"),
        tr("pricing.features.summarize", "Resúmenes con IA"),
        tr("pricing.features.noAds", "Sin anuncios"),
        tr("pricing.features.history", "Historial y biblioteca personal"),
        tr("pricing.features.higherLimits", "Límites más altos"),
      ],
      cta: tr("pricing.cta", "Empieza ahora"),
      to: "/iniciar-sesion",
      highlighted: true,
    },
    {
      id: "pro",
      name: tr("pricing.plan.pro", "Pro"),
      price: "12,99€",
      period: tr("pricing.perMonth", "/mes"),
      badge: null,
      features: [
        tr("pricing.features.translateAll", "Traducción avanzada multi-idioma"),
        tr("pricing.features.summarizeLong", "Resúmenes largos y precisos"),
        tr("pricing.features.customVoices", "Voces personalizadas (próximamente)"),
        tr("pricing.features.priority", "Prioridad y soporte"),
        tr("pricing.features.unlimited", "Cuotas muy altas / casi ilimitado"),
      ],
      cta: tr("pricing.cta", "Empieza ahora"),
      to: "/iniciar-sesion",
      highlighted: false,
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Hero */}
      <section className="px-6 sm:px-10 pt-16 pb-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {tr("pricing.title", "Elige tu plan")}
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {tr("pricing.subtitle", "Empieza gratis y mejora cuando lo necesites.")}
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="px-4 sm:px-6 lg:px-10 pb-24">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`relative rounded-2xl border ${
                p.highlighted ? "border-blue-500/40 shadow-lg shadow-blue-500/10" : "border-slate-200"
              } bg-white p-6 sm:p-7 flex flex-col`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-blue-600 text-white text-xs font-semibold px-3 py-1 shadow">
                    {p.badge}
                  </span>
                </div>
              )}

              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-900">{p.price}</span>
                <span className="text-slate-500">{p.period}</span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-700 flex-1">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon className={p.highlighted ? "text-blue-600" : "text-emerald-600"} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={p.to}
                className={`mt-6 w-full inline-flex items-center justify-center h-11 rounded-xl font-semibold transition
                ${
                  p.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* nota pequeña */}
        <p className="mt-6 text-center text-xs text-slate-500">
          {tr(
            "pricing.note",
            "Los precios incluyen impuestos cuando corresponda. Puedes cancelar en cualquier momento."
          )}
        </p>
      </section>
    </main>
  );
}