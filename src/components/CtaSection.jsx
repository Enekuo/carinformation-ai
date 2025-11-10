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
      {/* Contenido alineado a la izquierda */}
      <div className="relative z-10 w-full">
        <div
          className="
            flex flex-col items-start text-left gap-6
            pl-4 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-28
            max-w-[980px]
          "
        >
          {/* TITULAR: más pequeño */}
          <h2
            id="cta-title"
            className="
              text-white font-extrabold leading-tight
              text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]
            "
          >
            {tr("cta.title", "Lleva tu experiencia Euskalia al siguiente nivel")}
          </h2>

          {/* SUBTÍTULO: más pequeño */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl">
            {tr(
              "cta.subtitle",
              "Guarda tus textos, elimina los anuncios y disfruta sin límites."
            )}
          </p>

          <div className="pt-2">
            <Link
              to="/pricing"
              className="
                inline-flex items-center justify-center
                bg-emerald-500 hover:bg-emerald-600
                text-white font-semibold text-lg md:text-xl
                px-8 md:px-10 py-3.5 md:py-4 rounded-2xl
                shadow-[0_10px_28px_rgba(16,185,129,0.35)]
                hover:shadow-[0_14px_34px_rgba(16,185,129,0.45)]
                transition-all duration-300
                hover:-translate-y-[2px] active:translate-y-[0px]
                focus:outline-none focus:ring-4 focus:ring-emerald-300/40
              "
              aria-label={tr("cta.button", "Crear cuenta")}
            >
              {tr("cta.button", "Crear cuenta")}
            </Link>

            {/* microcopy opcional */}
            {/* <p className="mt-3 text-white/70 text-sm md:text-base">
              {tr("cta.microcopy", "Empieza gratis. Cambia a cuenta cuando quieras.")}
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
