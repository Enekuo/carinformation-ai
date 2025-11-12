import React from "react";
import { useTranslation } from "@/lib/translations";

export default function LegalNoticePage() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  const Section = ({ i }) => (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-2">
        {tr(`legal_notice_${i}_title`, `Sección ${i}`)}
      </h2>
      <p className="text-gray-700 leading-relaxed">
        {tr(`legal_notice_${i}_body`, "")}
      </p>
    </section>
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-2">
        {tr("legal_notice_title", "Aviso legal")}
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        {tr("legal_notice_updated", "Última actualización: [__________]")}
      </p>

      <p className="text-gray-700 leading-relaxed">
        {tr(
          "legal_notice_intro",
          "Este Aviso Legal regula el acceso y uso del sitio web Euskalia."
        )}
      </p>

      {/* Secciones 1–10 */}
      {Array.from({ length: 10 }, (_, idx) => (
        <Section key={idx + 1} i={idx + 1} />
      ))}
    </main>
  );
}
