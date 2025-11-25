import React from "react";
import { useTranslation } from "@/lib/translations";

export default function ProSummary() {
  const { t } = useTranslation();
  const tr = (k) => t(k) || k;

  return (
    <main className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
        {tr("proSummary.title")}
      </h1>
    </main>
  );
}
