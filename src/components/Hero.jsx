import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";

export default function CtaSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full bg-no-repeat bg-cover bg-center
                 min-h-[60vh] md:min-h-[64vh] lg:min-h-[70vh] py-28 md:py-36"
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
          <h2 className="text-white font-extrabold leading-tight
                         text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px]">
            {t("cta.title")}
          </h2>

          <p className="text-white/90 text-xl sm:text-2xl md:text-[26px]">
            {t("cta.subtitle")}
          </p>

          <div className="pt-2">
            <Link
              to="/free-trial"
              className="inline-flex items-center gap-2
                         bg-green-500 hover:bg-green-600
                         text-white font-semibold
                         text-2xl px-14 py-6 rounded-2xl
                         shadow-md hover:shadow-xl transition-all duration-300"
            >
              <span>🚀</span>
              {t("cta.button")}
            </Link>
          </div>
        </div>
      </div>

      {/* Sutil overlay para mejorar contraste en fondos claros */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
    </section>
  );
}
