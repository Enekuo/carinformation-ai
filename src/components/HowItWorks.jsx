import React from "react";
import { useTranslation } from "@/lib/translations";

export default function HowItWorks() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-10">
        {/* BLOQUE DE TEXTO */}
        <div className="w-full lg:basis-7/12 text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            {tr("homeHowItWorks.title", "")}
          </h2>

          <p className="text-slate-600 text-[16px] leading-relaxed mb-8">
            {tr("homeHowItWorks.intro", "")}
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            {tr("homeHowItWorks.offers_title", "")}
          </h3>

          <ul className="space-y-3 text-slate-600 text-[15px] leading-relaxed">
            <li>{tr("homeHowItWorks.offers_item1", "")}</li>
            <li>{tr("homeHowItWorks.offers_item2", "")}</li>
            <li>{tr("homeHowItWorks.offers_item3", "")}</li>
            <li>{tr("homeHowItWorks.offers_item4", "")}</li>
            <li>{tr("homeHowItWorks.offers_item5", "")}</li>
            <li>{tr("homeHowItWorks.offers_item6", "")}</li>
          </ul>
        </div>

        {/* BLOQUE DE IMAGEN */}
        <div className="w-full lg:basis-5/12 flex justify-center lg:justify-end">
          <img
            src="/how-it-works.png"
            alt=""
            className="w-full max-w-[460px]"
          />
        </div>
      </div>
    </section>
  );
}
