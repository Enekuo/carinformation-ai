import React from "react";
import { useTranslation } from "@/lib/translations";

export default function BenefitsSection() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  const title = tr("homeBenefits.title", "");

  const benefits = [
    {
      id: 1,
      titleKey: "homeBenefits.benefit1_title",
      descKey: "homeBenefits.benefit1_desc",
    },
    {
      id: 2,
      titleKey: "homeBenefits.benefit2_title",
      descKey: "homeBenefits.benefit2_desc",
    },
    {
      id: 3,
      titleKey: "homeBenefits.benefit3_title",
      descKey: "homeBenefits.benefit3_desc",
    },
    {
      id: 4,
      titleKey: "homeBenefits.benefit4_title",
      descKey: "homeBenefits.benefit4_desc",
    },
    {
      id: 5,
      titleKey: "homeBenefits.benefit5_title",
      descKey: "homeBenefits.benefit5_desc",
    },
    {
      id: 6,
      titleKey: "homeBenefits.benefit6_title",
      descKey: "homeBenefits.benefit6_desc",
    },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-12 md:mb-16">
          {title}
        </h2>

        {/* Grid de 6 cajas (tamaño tipo Escríbelo, colores tipo Olondo/Euskalia) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((item) => (
            <div
              key={item.id}
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
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                    {tr(item.titleKey, "")}
                  </h3>
                  <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                    {tr(item.descKey, "")}
                  </p>
                </div>
                {/* sitio para iconos o etiquetas más adelante */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
