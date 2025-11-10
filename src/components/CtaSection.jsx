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
        bg-[#1e73ff]  /* Fallback por si falla la imagen */
        min-h-[60vh] md:min-h-[64vh] lg:min-h-[70vh] py-24 md:py-28
        overflow-hidden
      "
      style={{ backgroundImage: "url('/cta-background.png')" }}
      aria-labelledby="cta-title"
    >
      {/* Capa animada de glow que sube (más visible) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Banda 1 (principal) */}
        <div
          className="
            absolute left-1/4 w-[160%] h-[240%]
            bg-gradient-to-t from-white/0 via-white/30 to-white/0
            blur-[96px] opacity-80 rise-anim
          "
        />
        {/* Banda 2 (profundidad con delay) */}
        <div
          className="
            absolute left-0 w-[140%] h-[220%]
            bg-gradient-to-t from-white/0 via-white/20 to-white/0
            blur-[72px] opacity-70 rise-anim
          "
          style={{ animationDelay: "1.2s" }}
        />
      </div>

      {/* Contenido */}
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

          {/* Botón blanco compacto con animación en la flecha (igual que dejaste) */}
          <div className="pt-4">
            <Link
              to="/pricing"
              className="
                group inline-flex items-center gap-2
                bg-white hover:bg-white/90
                text-blue-700 font-medium
                text-base md:text-[17px]
                px-6 md:px-7 py-2 md:py-2.5
                rounded-[12px]
                shadow-[0_3px_8px_rgba(0,0,0,0.08)]
                hover:shadow-[0_5px_12px_rgba(0,0,0,0.12)]
                transition-all duration-200
                focus:outline-none focus:ring-4 focus:ring-white/40
              "
              aria-label={tr("cta.button", "Hasi doain")}
            >
              <span className="text-sm md:text-base" aria-hidden>🚀</span>
              <span>{tr("cta.button", "Hasi doain")}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Animación inline (independiente de Tailwind) */}
      <style>
        {`
          @keyframes rise {
            0%   { transform: translateY(40%); }
            50%  { transform: translateY(-10%); }
            100% { transform: translateY(40%); }
          }
          .rise-anim {
            animation: rise 9s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
