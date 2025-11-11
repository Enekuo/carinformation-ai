import React from "react";
import { useTranslation } from "@/lib/translations";

/* ====== ICONOS LOCALES (sin dependencias) ====== */
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
const SparklesIcon = (props) => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 mb-4" fill="currentColor" {...props}>
    <path d="M10.5 2.5l1.4 3.6 3.6 1.4-3.6 1.4-1.4 3.6-1.4-3.6-3.6-1.4 3.6-1.4 1.4-3.6zM18 10l.9 2.3L21 13l-2.1.7L18 16l-.9-2.3L15 13l2.1-.7L18 10zM6 14l1.2 3 3 1.2-3 1.2L6 22l-1.2-3-3-1.2 3-1.2L6 14z"/>
  </svg>
);
const GemIcon = (props) => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 mb-4" fill="currentColor" {...props}>
    <path d="M12 2l4 4 6 1-8 15H6L-2 7l6-1 4-4zM4.5 8l7.5 13.5L19.5 8h-3L12 4 7.5 8h-3z"/>
  </svg>
);

export default function PricingPage() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  // Config visual al estilo de tu otra web
  const plans = [
    {
      id: "free",
      titleKey: "pricing.plan.free",
      priceText: "0€",
      priceSuffixKey: null,
      perDayKey: null,
      features: [
        tr("pricing.features.library_free", "Biblioteca limitada"),
        tr("pricing.features.export_free", "Exportación básica"),
        tr("pricing.features.audio_free", "Audio limitado"),
        tr("pricing.features.ai_free", "IA básica"),
        tr("pricing.features.file_free", "Archivos pequeños"),
        tr("pricing.features.speed_free", "Velocidad normal"),
      ],
      buttonText: tr("pricing.cta.free", "Empezar gratis"),
      icon: <SparklesIcon className="text-green-500" />,
      borderColor: "border-green-500",
      buttonGradient:
        "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
      glow: false,
      badgeKey: null,
      priceColorClass: "text-green-500",
      checkColorClass: "text-green-500",
    },
    {
      id: "basic",
      titleKey: "pricing.plan.basic",
      priceText: "6,99€",
      priceSuffixKey: "pricing.perMonth",
      perDayKey: tr("pricing.perDay.basic", "≈ 0,17 €/día"),
      features: [
        tr("pricing.features.library_basic", "Biblioteca personal"),
        tr("pricing.features.export_basic", "Exportación avanzada"),
        tr("pricing.features.audio_basic", "Audio sin límites moderados"),
        tr("pricing.features.ai_basic", "IA mejorada"),
        tr("pricing.features.file_basic", "Archivos medianos"),
        tr("pricing.features.speed_basic", "Velocidad rápida"),
      ],
      buttonText: tr("pricing.cta.basic", "Elegir Básico"),
      icon: <GemIcon className="text-blue-500" />,
      borderColor: "border-blue-500",
      buttonGradient:
        "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
      glow: false,
      badgeKey: "pricing.mostPopular",
      priceColorClass: "text-blue-600",
      checkColorClass: "text-blue-600",
    },
    {
      id: "premium",
      titleKey: "pricing.plan.pro",
      priceText: "12,99€",
      priceSuffixKey: "pricing.perMonth",
      perDayKey: tr("pricing.perDay.premium", "≈ 0,33 €/día"),
      features: [
        tr("pricing.features.library_premium", "Biblioteca ilimitada"),
        tr("pricing.features.export_premium", "Exportación completa"),
        tr("pricing.features.audio_premium", "Audio ilimitado"),
        tr("pricing.features.ai_premium", "IA avanzada"),
        tr("pricing.features.file_premium", "Archivos grandes"),
        tr("pricing.features.speed_premium", "Máxima velocidad"),
      ],
      buttonText: tr("pricing.cta.pro", "Elegir Premium"),
      icon: <GemIcon className="text-primary" />,
      borderColor: "border-primary",
      buttonGradient:
        "bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90",
      glow: true,
      badgeKey: null,
      priceColorClass: "text-primary",
      checkColorClass: "text-primary",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col items-center relative bg-gradient-to-br from-slate-100 via-sky-50 to-blue-100 p-6 pt-12 md:pt-20">
      {/* Título y subtítulo (claves de Euskalia) */}
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
          {tr("pricing.title", "Elige Tu Plan Perfecto")}
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          {tr(
            "pricing.subtitle",
            "Desbloquea todo el potencial con el plan que mejor se adapte a ti."
          )}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`group relative bg-white p-8 rounded-xl shadow-xl border-2 ${plan.borderColor} flex flex-col transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] ${
              plan.glow ? "shadow-primary/30" : ""
            }`}
          >
            {plan.glow && (
              <div className="pointer-events-none absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
            )}

            {plan.badgeKey && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {tr(plan.badgeKey, "Más popular")}
              </div>
            )}

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-center mb-3">{plan.icon}</div>

              <h2 className="text-3xl font-bold text-slate-800 text-center mb-2">
                {tr(plan.titleKey, "Plan")}
              </h2>

              <div className="text-center mb-6">
                <p className="text-4xl font-extrabold">
                  <span className={plan.priceColorClass}>{plan.priceText}</span>
                  {plan.priceSuffixKey && (
                    <span className="text-base font-normal text-slate-500">
                      {" "}
                      {tr(plan.priceSuffixKey, "al mes")}
                    </span>
                  )}
                </p>
                {plan.perDayKey && (
                  <p className="text-xs text-slate-500 mt-1">{plan.perDayKey}</p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon
                      className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${plan.checkColorClass}`}
                    />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full text-base mt-auto font-semibold ${plan.buttonGradient} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg py-3`}
                type="button"
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
