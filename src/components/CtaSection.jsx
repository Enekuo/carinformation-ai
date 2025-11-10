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
        bg-[#1e73ff]  /* fallback */
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
          <h2
            id="cta-title"
            className="
              text-white font-extrabold leading-tight
              text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]
            "
          >
            {tr("cta.title", "Lleva tu experiencia Euskalia al siguiente nivel")}
          </h2>

          <p className="text-white/90 text-base sm:text-lg md:text-xl">
            {tr(
              "cta.subtitle",
              "Guarda tus textos, elimina los anuncios y disfruta sin límites."
            )}
          </p>

          {/* Botón blanco estilo referencia */}
          <div className="pt-2">
            <Link
              to="/pricing"
              className="
                inline-flex items-center gap-2
                bg-white hover:bg-white/90
                text-blue-700 font-medium
                text-base md:text-[17px]
                px-6 md:px-7 py-2 md:py-2.5
                rounded-[12px]
                shadow-[0_6px_14px_rgba(0,0,0,0.08)]
                transition-all duration-200
                focus:outline-none focus:ring-4 focus:ring-white/40
              "
              aria-label={tr("cta.button", "Hasi doain")}
            >
              <span>{tr("cta.button", "Hasi doain")}</span>
              {/* Flecha fina como en el ejemplo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-4.5 md:w-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
