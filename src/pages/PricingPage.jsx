import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";
import { Sparkles, Gem, CheckCircle } from "lucide-react";

export default function PricingPage() {
  const { t } = useTranslation();
  const tr = (k) => t(k) || k; // mostramos la clave si no hay traducción

  const plans = [
    // FREE
    {
      id: "free",
      titleKey: "pricing.free_name",
      priceText: "0€",
      priceSuffixKey: null,
      featuresKeys: [
        "pricing.features.library_free",
        "pricing.features.export_free",
        "pricing.features.audio_free",
        "pricing.features.ai_free",
        "pricing.features.file_free",
        "pricing.features.speed_free",
      ],
      buttonKey: "pricing.free_cta",
      icon: <Sparkles className="h-8 w-8 text-green-500 mb-4" />,
      borderColor: "border-green-500",
      priceColor: "text-green-500",
      checkColor: "text-green-500",
      buttonGradient:
        "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
      glow: false,
      tint: "",
      badgeKey: null,
    },

    // PRO (plan de pago actual, más popular)
    {
      id: "pro",
      titleKey: "pricing.pro_name",
      priceText: "6,99€",
      priceSuffixKey: "pricing.perMonth",
      featuresKeys: [
        "pricing.features.library_basic",
        "pricing.features.export_basic",
        "pricing.features.audio_basic",
        "pricing.features.ai_basic",
        "pricing.features.file_basic",
        "pricing.features.speed_basic",
      ],
      buttonKey: "pricing.pro_cta",
      icon: <Gem className="h-8 w-8 text-blue-500 mb-4" />,
      borderColor: "border-blue-500",
      priceColor: "text-blue-600",
      checkColor: "text-blue-600",
      buttonGradient:
        "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
      glow: false,
      tint: "",
      badgeKey: "pricing.badge_popular",
    },

    // PREMIUM+ (Próximamente)
    {
      id: "premium",
      titleKey: "pricing.premium_name",
      priceText: "12,99€",
      priceSuffixKey: "pricing.perMonth",
      featuresKeys: [
        "pricing.features.library_premium",
        "pricing.features.export_premium",
        "pricing.features.audio_premium",
        "pricing.features.ai_premium",
        "pricing.features.file_premium",
        "pricing.features.speed_premium",
      ],
      buttonKey: "pricing.premium_cta_soon",

      // Azul principal exacto
      icon: <Gem className="h-8 w-8 mb-4" style={{ color: "#2563eb" }} />,
      borderColor: "border-[#2563eb]",
      priceColor: "text-[#2563eb]",
      checkColor: "text-[#2563eb]",

      // Tinte de fondo suave
      tint: "bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe]",

      // Brillo exterior
      glow: true,

      buttonGradient: "",
      badgeKey: "pricing.badge_soon",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col items-center relative bg-gradient-to-br from-slate-100 via-sky-50 to-blue-100 p-6 pt-12 md:pt-20">
      {/* Título / subtítulo */}
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-3">
          {tr("pricing.title")}
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          {tr("pricing.subtitle")}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((p) => (
          <div
            key={p.id}
            className={[
              "group relative bg-white rounded-2xl border-2",
              p.borderColor,
              "shadow-[0_10px_30px_rgba(2,6,23,0.08)] hover:shadow-2xl",
              "p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01]",
              p.tint,
            ].join(" ")}
          >
            {p.glow && (
              <div className="pointer-events-none absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[#60a5fa] to-[#2563eb] blur opacity-30 group-hover:opacity-50 transition" />
            )}

            {p.badgeKey && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-flex items-center rounded-full bg-blue-600 text-white text-xs font-semibold px-3 py-1 shadow-md ring-1 ring-blue-300">
                  {tr(p.badgeKey)}
                </span>
              </div>
            )}

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-center mb-3">{p.icon}</div>

              <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-2">
                {tr(p.titleKey)}
              </h2>

              <div className="text-center mb-6">
                <p className="text-5xl font-extrabold leading-tight">
                  <span className={p.priceColor}>{p.priceText}</span>
                  {p.priceSuffixKey && (
                    <span className="align-baseline text-base font-medium text-slate-500 ml-2">
                      {tr(p.priceSuffixKey)}
                    </span>
                  )}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {p.featuresKeys.map((k) => (
                  <li key={k} className="flex items-start">
                    <CheckCircle
                      className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${p.checkColor}`}
                    />
                    <span className="text-slate-700 text-[15px] leading-snug">
                      {tr(k)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA según el plan */}
              {p.id === "free" ? (
                // Plan gratis → a la home
                <Link
                  to="/"
                  className={`w-full inline-flex items-center justify-center py-3 text-base font-semibold ${p.buttonGradient} text-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]`}
                >
                  {tr(p.buttonKey)}
                </Link>
              ) : p.id === "premium" ? (
                // Plan Premium+ → Próximamente (botón desactivado)
                <button
                  type="button"
                  disabled
                  className="w-full py-3 text-base font-semibold rounded-lg shadow-lg bg-slate-300 text-slate-600 cursor-not-allowed hover:shadow-lg transition-transform duration-300 hover:scale-[1.0]"
                >
                  {tr(p.buttonKey)}
                </button>
              ) : (
                // Plan Pro → CTA normal (más adelante decidirás la ruta)
                <button
                  type="button"
                  className={`w-full py-3 text-base font-semibold ${p.buttonGradient} text-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]`}
                >
                  {tr(p.buttonKey)}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
