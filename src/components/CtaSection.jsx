import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";

export default function CtaSection() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  return (
    <section
      className="
        relative w-full bg-no-repeat bg-cover bg-center
        min-h-[60vh] md:min-h-[64vh] lg:min-h-[70vh] py-24 md:py-28
      "
      style={{ backgroundImage: "url('/cta-background.png')" }}
      aria-labelledby="cta-title"
    >
      <div className="relative z-10 w-full">
        <div
          className="
            flex flex-col items-start text-left gap-6
            pl-4 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-28
            max-w-[980px]
          "
        >
          {/* TITULAR */}
          <h2
            id="cta-title"
            className="
              text-white font-extrabold leading-tight
              text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]
            "
          >
            {tr("cta.title", "Lleva tu experiencia Euskalia al siguiente nivel")}
          </h2>

          {/* SUBTÍTULO */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl">
            {tr(
              "cta.subtitle",
              "Guarda tus textos, elimina los anuncios y disfruta sin límites."
            )}
          </p>

          {/* BOTÓN BLANCO */}
          <div className="pt-2">
            <Link
              to="/pricing"
              className="
                inline-flex items-center justify-center gap-2
                bg-white hover:bg-blue-50
                text-blue-700 font-semibold text-lg md:text-xl
                px-10 md:px-12 py-4 rounded-2xl
                shadow-[0_8px_20px_rgba(255,255,255,0.25)]
                hover:shadow-[0_10px_24px_rgba(255,255,255,0.35)]
                transition-all duration-300
              "
              aria-label={tr("cta.button", "Hasi doain")}
            >
              {tr("cta.button", "Hasi doain")} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
