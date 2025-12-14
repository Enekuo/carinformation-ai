import React from "react";
import { useTranslation } from "@/lib/translations";

export default function ProHumanizer() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  return (
    <div className="w-full px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          {tr("humanizer_title", "Humaniza tu texto con IA")}
        </h1>
      </div>
    </div>
  );
}
