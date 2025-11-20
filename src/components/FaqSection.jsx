import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/translations";

const FAQ_ITEMS = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

export default function FaqSection() {
  const { t } = useTranslation();
  const tr = (key, fallback = "") => t(key) || fallback;

  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (id) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  const renderAnswer = (answerText) => {
    if (!answerText) return null;

    const email = tr("faq_contact_email", "");

    return answerText
      .split("\n")
      .map((line, index) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        if (email && trimmed.includes(email)) {
          const parts = trimmed.split(email);
          return (
            <p key={index} className="text-slate-600 dark:text-slate-300">
              {parts[0]}
              <a
                href={`mailto:${email}`}
                className="text-primary hover:underline"
              >
                {email}
              </a>
              {parts[1]}
            </p>
          );
        }

        return (
          <p key={index} className="text-slate-600 dark:text-slate-300">
            {trimmed}
          </p>
        );
      })
      .filter(Boolean);
  };

  return (
    <section className="w-full py-32 bg-[#eef4ff] dark:bg-[#1E293B]">
      <div className="container mx-auto px-4 md:px-6">
        {/* TÍTULO + SUBTÍTULO */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {tr("faq_title", "")}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {tr("faq_subtitle", "")}
          </p>
        </motion.div>

        {/* LISTA DE PREGUNTAS (acordeón simple) */}
        <motion.div
          className="max-w-3xl mx-auto divide-y divide-slate-200 dark:divide-slate-700 bg-white/70 dark:bg-slate-900/50 rounded-2xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {FAQ_ITEMS.map(({ id }) => {
            const question = tr(`faq_item${id}_question`, "");
            const answer = tr(`faq_item${id}_answer`, "");

            // Si aún no hay traducción, no mostramos el item
            if (!question && !answer) return null;

            const isOpen = openItem === id;

            return (
              <div key={id}>
                <button
                  type="button"
                  onClick={() => handleToggle(id)}
                  className="
                    w-full flex items-center justify-between gap-4
                    px-6 py-4 text-left
                    text-lg text-slate-800 dark:text-slate-200
                    hover:bg-slate-50 dark:hover:bg-slate-800
                    transition-colors
                  "
                >
                  <span className="flex-1">{question}</span>
                  <span
                    className={`
                      inline-flex items-center justify-center
                      h-6 w-6 rounded-full border text-sm
                      border-slate-300 dark:border-slate-600
                    `}
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-base bg-slate-50/70 dark:bg-slate-900/70">
                    <div className="space-y-3">
                      {renderAnswer(answer)}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
