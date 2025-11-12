import React from "react";
import { useTranslation } from "@/lib/translations";

export default function LegalNoticePage() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  // Pequeño helper para no repetir JSX
  const Section = ({ idx }) => (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-2">
        {tr(`legal_notice_${idx}_title`, `legal_notice_${idx}_title`)}
      </h2>
      <p className="text-slate-700 leading-relaxed">
        {tr(`legal_notice_${idx}_body`, `legal_notice_${idx}_body`)}
      </p>
    </section>
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      {/* Título */}
      <h1 className="text-3xl font-semibold mb-2">
        {tr("legal_notice_title", "legal_notice_title")}
      </h1>

      {/* Última actualización */}
      <p className="text-sm text-slate-500 mb-6">
        {tr("legal_notice_updated", "legal_notice_updated")}
      </p>

      {/* Intro */}
      <p className="text-slate-700 leading-relaxed mb-8">
        {tr("legal_notice_intro", "legal_notice_intro")}
      </p>

      {/* Secciones 1..10 */}
      <Section idx={1} />
      <Section idx={2} />
      <Section idx={3} />
      <Section idx={4} />
      <Section idx={5} />
      <Section idx={6} />
      <Section idx={7} />
      <Section idx={8} />
      <Section idx={9} />
      <Section idx={10} />
    </main>
  );
}
