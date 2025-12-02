import React from "react";
import { useTranslation } from "@/lib/translations";

export default function Home() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  // Más adelante esto vendrá del usuario logueado
  const userName = "Eneko";

  const greetingPrefix = tr("proHome.greeting_prefix", "Hola");
  const titleText = tr(
    "proHome.title",
    "Bienvenido a Euskalia Pro"
  );

  const soonTitle = tr(
    "proHome.soon_title",
    "Próximamente en tu cuenta Pro"
  );
  const itemHistory = tr(
    "proHome.soon_item_history",
    "Historial de traducciones y resúmenes."
  );
  const itemLimits = tr(
    "proHome.soon_item_limits",
    "Límites ampliados y prioridad en la cola."
  );
  const itemStats = tr(
    "proHome.soon_item_stats",
    "Panel con estadísticas de uso."
  );
  const itemAdvanced = tr(
    "proHome.soon_item_advanced",
    "Opciones avanzadas para audio y documentos."
  );

  return (
    <>
      {/* Bloque saludo + título */}
      <div className="mt-6 ml-10 mb-6">
        <p className="text-base text-slate-400">
          {greetingPrefix} {userName}
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          {titleText}
        </h1>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h2 className="text-sm font-semibold mb-2">
            {soonTitle}
          </h2>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• {itemHistory}</li>
            <li>• {itemLimits}</li>
            <li>• {itemStats}</li>
            <li>• {itemAdvanced}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
