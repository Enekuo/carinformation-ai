import React from "react";
import { useTranslation } from "@/lib/translations";

export default function HowItWorks() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12">
        {/* BLOQUE DE TEXTO */}
        <div className="flex-1 text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
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

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              {tr("homeHowItWorks.listen_block_title", "")}
            </h3>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              {tr("homeHowItWorks.listen_block_paragraph", "")}
            </p>
          </div>
        </div>

        {/* BLOQUE DE IMAGEN */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="/how-it-works.png"
            alt=""
            className="w-full max-w-[540px]"
          />
        </div>
      </div>
    </section>
  );
}
