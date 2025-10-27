// components/Resumen.jsx
import React from "react";
import { useTranslation } from "@/lib/translations";

export default function Resumen() {
  const { t } = useTranslation();

  return (
    <main className="w-full bg-[#F4F8FF] min-h-[calc(100dvh-64px)] py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Card contenedora */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden w-full">
          {/* Barra superior (opcional, vacía) */}
          <div className="h-12 border-b border-slate-200 flex items-center px-4">
            <h1 className="text-sm font-semibold text-slate-600">
              {t("summary.title") || "Resumen"}
            </h1>
          </div>

          {/* Contenido principal vacío */}
          <div className="p-10">
            <div className="text-slate-400 text-base">
              {t("summary.placeholder") || "Aquí irá el resumidor."}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
