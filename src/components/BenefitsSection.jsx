import React from "react";
import { useTranslation } from "@/lib/translations";

export default function BenefitsSection() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  const title = tr(
    "homeBenefits.title",
    "¿Qué podrás conseguir apoyándote en Euskalia?"
  );

  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-12 md:mb-16">
          {title}
        </h2>

        {/* Grid de 6 cajas (tamaño tipo Escríbelo) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="
                rounded-3xl border border-slate-200 bg-[#F4F8FF]
                shadow-sm h-full
              "
            >
              <div
                className="
                  h-full min-h-[220px] md:min-h-[240px]
                  px-7 py-8 md:px-8 md:py-9
                  flex flex-col justify-between
                "
              >
                {/* Aquí luego irán icono, título y texto, de momento vacío */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
