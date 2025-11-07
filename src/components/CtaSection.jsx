import React from "react";
import { useTranslation } from "@/lib/translations";

export default function CtaSection() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  return (
    <section className="w-full bg-[#EDF4FF] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          {tr("cta.title", "Empieza ahora a crear y escuchar tu contenido con IA")}
        </h2>
      </div>
    </section>
  );
}
