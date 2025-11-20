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
  const [openItem, setOpenItem] = useState(null);

  const getSafe = (key) => {
    const value = t(key);
    // Si la librería devuelve la propia clave (sin traducir), la ocultamos
    if (!value || value === key) return "";
    return value;
  };

  const email = getSafe("faq_contact_email");

  const handleToggle = (id) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  const renderAnswer = (answerText) => {
    if (!answerText) return null;

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
            {getSafe("faq_title")}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {getSafe("faq_subtitle")}
          </p>
        </motion.div>

        {/* LISTA DE PREGUNTAS – MISMO ESTILO */}
        <motion.div
          className="max-w-3xl mx-auto bg-white/80 dark:bg-slate-900/60 rounded-2xl shadow-sm border border-slate-200/70 dark:border-slate-700/70 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {FAQ_ITEMS.map(({ id }) => {
            const qKey = `faq_item${id}_question`;
            const aKey = `faq_item${id}_answer`;

            const question = getSafe(qKey);
            const answer = getSafe(aKey);

            // Si no hay traducción real, no mostramos el item
            if (!question && !answer) return null;

            const isOpen = openItem === id;

            return (
              <div
                key={id}
                className="border-b last:border-b-0 border-slate-200 dark:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(id)}
                  className="
                    w-full flex items-center justify-between
                    px-6 py-4 text-left
                    text-[15px] md:text-[16px]
                    text-slate-800 dark:text-slate-200
                    hover:bg-slate-50 dark:hover:bg-slate-800
                    transition-colors
                  "
                >
                  <span className="flex-1">
                    {question}
                  </span>
                  <span
                    className="
                      text-slate-400 dark:text-slate-300
                      text-xl font-semibold leading-none
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 bg-slate-50/80 dark:bg-slate-900/70 text-[15px]">
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
