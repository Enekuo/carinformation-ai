import React from "react";
import { useTranslation } from "@/lib/translations";

export default function CookiesPolicyPage() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-4">
        {tr("eusFooterLegalTitle5", "Política de cookies")}
      </h1>
      <p className="text-gray-600">
        Página de prueba. Si puedes leer esto, <strong>/cookies</strong> está funcionando.
      </p>
    </main>
  );
}
