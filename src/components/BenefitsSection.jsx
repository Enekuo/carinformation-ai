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
      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-10 md:mb-14">
          {title}
        </h2>

        {/* 6 cajas vacías */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="
                rounded-3xl border border-slate-200 bg-[#F4F8FF]
                shadow-sm
                h-full
              "
            >
              <div className="h-full px-6 py-8 md:px-7 md:py-9"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
