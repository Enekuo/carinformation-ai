import React from "react";
import { useTranslation } from "@/lib/translations";

/* ===== Iconos (SVG calcados al estilo de la otra web) ===== */
const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" {...props}>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
/* Sparkles y Gem con proporciones y peso visual como en la otra web */
const SparklesIcon = (props) => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 mb-4" fill="currentColor" {...props}>
    <path d="M10.5 2.3 12 6l3.7 1.5L12 9 10.5 12.7 9 9 5.3 7.5 9 6l1.5-3.7ZM18 10l.9 2.3L21 13l-2.1.7L18 16l-.9-2.3L15 13l2.1-.7L18 10ZM6 14l1.2 3 3 1.2-3 1.2L6 22l-1.2-3-3-1.2 3-1.2L6 14Z"/>
  </svg>
);
const GemIcon = (props) => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 mb-4" fill="currentColor" {...props}>
    {/* Forma del diamante tipo Lucide para que se vea idéntico */}
    <path d="M7 3h10l4 5-9 13L3 8l4-5Zm0 0 5 5m5-5-5 5M3 8h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export default function PricingPage() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f; // Claves se muestran tal cual

  const plans = [
    {
      id: "free",
      titleKey: "pricing.plan.free",
      priceText: "0€",
      priceSuffixKey: null,
      perDayKey: null,
      features: [
        tr("pricing.features.library_free", "pricing.features.library_free"),
        tr("pricing.features.export_free", "pricing.features.export_free"),
        tr("pricing.features.audio_free", "pricing.features.audio_free"),
        tr("pricing.features.ai_free", "pricing.features.ai_free"),
        tr("pricing.features.file_free", "pricing.features.file_free"),
        tr("pricing.features.speed_free", "pricing.features.speed_free"),
      ],
      buttonText: tr("pricing.cta.free", "pricing.cta.free"),
      icon: <SparklesIcon className="text-green-500" />,
      borderColor: "border-green-500",
      buttonGradient: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
      glow: false,
      badgeKey: null,
      priceColorClass: "text-green-500",
      checkColorClass: "text-green-500",
      cardTint: "", // sin tinte
    },
    {
      id: "basic",
      titleKey: "pricing.plan.basic",
      priceText: "6,99€",
      priceSuffixKey: "pricing.perMonth",
      perDayKey: tr("pricing.perDay.basic", "pricing.perDay.basic"),
      features: [
        tr("pricing.features.library_basic", "pricing.features.library_basic"),
        tr("pricing.features.export_basic", "pricing.features.export_basic"),
        tr("pricing.features.audio_basic", "pricing.features.audio_basic"),
        tr("pricing.features.ai_basic", "pricing.features.ai_basic"),
        tr("pricing.features.file_basic", "pricing.features.file_basic"),
        tr("pricing.features.speed_basic", "pricing.features.speed_basic"),
      ],
      buttonText: tr("pricing.cta.basic", "pricing.cta.basic"),
      icon: <GemIcon className="text-blue-500" />,
      borderColor: "border-blue-500",
      buttonGradient: "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
      glow: false,
      badgeKey: "pricing.mostPopular",
      priceColorClass: "text-blue-600",
      checkColorClass: "text-blue-600",
      cardTint: "", // sin tinte
    },
    {
      id: "premium",
      titleKey: "pricing.plan.pro",
      priceText: "12,99€",
      priceSuffixKey: "pricing.perMonth",
      perDayKey: tr("pricing.perDay.premium", "pricing.perDay.premium"),
      features: [
        tr("pricing.features.library_premium", "pricing.features.library_premium"),
        tr("pricing.features.export_premium", "pricing.features.export_premium"),
        tr("pricing.features.audio_premium", "pricing.features.audio_premium"),
        tr("pricing.features.ai_premium", "pricing.features.ai_premium"),
        tr("pricing.features.file_premium", "pricing.features.file_premium"),
        tr("pricing.features.speed_premium", "pricing.features.speed_premium"),
      ],
      buttonText: tr("pricing.cta.pro", "pricing.cta.pro"),
      icon: <GemIcon className="text-blue-600" />,
      borderColor: "border-blue-600",
      buttonGradient: "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700",
      glow: true,
      badgeKey: null,
      priceColorClass: "text-blue-600",
      checkColorClass: "text-blue-600",
      // tinte azul suave como en la tercera tarjeta de tu captura
      cardTint: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col items-center relative bg-gradient-to-br from-slate-100 via-sky-50 to-blue-100 p-6 pt-12 md:pt-20">
      {/* Títulos con tamaños idénticos */}
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-3">
          {tr("pricing.title", "pricing.title")}
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          {tr("pricing.subtitle", "pricing.subtitle")}
        </p>
      </div>

      {/* Grid y tarjetas clonadas en visual */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, idx) => (
          <div
            key={plan.id}
            className={[
              "group relative rounded-2xl",        // radios iguales
              "shadow-xl hover:shadow-2xl",        // sombras iguales
              "border-2", plan.borderColor,        // borde de color
              "p-8 flex flex-col transition-transform duration-300",
              "hover:-translate-y-1 hover:scale-[1.01]",
              plan.cardTint                         // tinte premium
            ].join(" ")}
          >
            {/* Aura de brillo para Premium */}
            {plan.glow && (
              <div className="pointer-events-none absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 blur opacity-30 group-hover:opacity-50 transition"></div>
            )}

            {/* Badge “Más popular” exactamente centrado y con pill azul */}
            {plan.badgeKey && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-flex items-center rounded-full bg-blue-600 text-white text-xs font-semibold px-3 py-1 shadow-md ring-1 ring-blue-300">
                  {tr(plan.badgeKey, plan.badgeKey)}
                </span>
              </div>
            )}

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-center mb-3">{plan.icon}</div>

              {/* Título del plan */}
              <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-2">
                {tr(plan.titleKey, plan.titleKey)}
              </h2>

              {/* Precio grande y sufijo /mes */}
              <div className="text-center mb-6">
                <p className="text-5xl font-extrabold leading-tight">
                  <span className={plan.priceColorClass}>{plan.priceText}</span>
                  {plan.priceSuffixKey && (
                    <span className="align-baseline text-base font-medium text-slate-500 ml-2">
                      {tr(plan.priceSuffixKey, plan.priceSuffixKey)}
                    </span>
                  )}
                </p>
                {plan.perDayKey && (
                  <p className="text-xs text-slate-500 mt-1">{plan.perDayKey}</p>
                )}
              </div>

              {/* Lista de features con check del color del plan */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className={`mr-2 mt-0.5 flex-shrink-0 ${plan.checkColorClass}`} />
                    <span className="text-slate-700 text-[15px] leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Botón con el mismo gradiente y tamaño */}
              <button
                type="button"
                className={`w-full py-3 text-base font-semibold ${plan.buttonGradient} text-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]`}
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
