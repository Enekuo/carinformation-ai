import React from "react";
import { useTranslation } from "@/lib/translations";

export default function ProTranslator() {
  const { t } = useTranslation();
  const tr = (k) => t(k) || k;

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">
        {tr("proTranslator.title", "Traductor Pro")}
      </h1>
    </div>
  );
}
