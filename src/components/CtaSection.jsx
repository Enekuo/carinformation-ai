import React from "react";
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
          <h2
            className="
              text-white font-extrabold leading-tight
              text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px]
            "
          >
            {tr("cta.title", "Empieza ahora a crear y escuchar tu contenido con IA")}
          </h2>

          <p className="text-white/90 text-xl sm:text-2xl md:text-[26px]">
            {tr(
              "cta.subtitle",
              "No necesitas cuenta. Gratis, rápido y sin complicaciones."
            )}
          </p>

          <div className="pt-2">
            <a
              href="/free-trial"
              className="
                inline-flex items-center gap-2
                bg-green-500 hover:bg-green-600 text-white
                font-semibold text-2xl px-12 md:px-14 py-5 md:py-6
                rounded-2xl shadow-md hover:shadow-xl transition-all duration-300
              "
              aria-label={tr("cta.button", "Prueba Gratis")}
            >
              <span role="img" aria-hidden>🚀</span>
              {tr("cta.button", "Prueba Gratis")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
