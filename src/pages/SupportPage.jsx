import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/translations";
import { motion } from "framer-motion";

const SupportPage = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honey: "", // honeypot
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.honey) return; // bot
    const to = "support@olondo.ai";
    const subject = encodeURIComponent(
      `[Olondo.AI] ${form.subject || t("support_form_subject_placeholder")}`
    );
    const body = encodeURIComponent(
      `${t("support_form_name_label")}: ${form.name}\n` +
      `${t("support_form_email_label")}: ${form.email}\n\n` +
      `${t("support_form_message_label")}:\n${form.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    /* Altura exacta de viewport y sin scroll global */
    <div className="h-screen w-full overflow-hidden bg-gradient-to-b from-[#F6FAFF] to-white dark:from-slate-900 dark:to-slate-900">
      {/* Altura interna calculada: resta ~88px de navbar (ajustable) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 pb-4">
        <div className="grid items-stretch gap-6 md:grid-cols-2"
             style={{ height: "calc(100vh - 96px)" }}>
          {/* ===== Columna izquierda (compacta) ===== */}
          <div className="flex min-h-0 flex-col">
            <section className="rounded-2xl border border-slate-200 bg-[#F7F8FC] p-4 sm:p-5 dark:bg-slate-800 dark:border-slate-700">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="truncate text-[26px] sm:text-3xl font-extrabold leading-tight text-slate-900 dark:text-slate-100">
                    {t("support_title")}
                  </h2>
                  <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    {t("support_subtitle")}
                  </p>
                </div>
                <div className="hidden md:flex items-center">
                  <div className="rounded-xl bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm whitespace-nowrap">
                    {t("support_cta")}
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-3">
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400">
                {t("support_kicker")}
              </p>
              <p className="mt-1 text-slate-600 text-sm sm:text-base dark:text-slate-300">
                {t("support_subtitle")}
              </p>
            </div>

            {/* Mascota + bocadillo en posición compacta */}
            <div className="relative mt-4 inline-block">
              <img
                src="/olondo.mascota.png"
                alt="Soporte Euskalia"
                className="h-[17vh] sm:h-[19vh] w-auto select-none pointer-events-none dark:brightness-95"
                draggable={false}
              />
              {/* Burbuja pegada al borde derecho de la imagen, orientada hacia la columna derecha */}
              <div className="absolute left-[calc(100%+10px)] top-1 hidden md:block">
                <div className="absolute -left-2 top-3 h-2.5 w-2.5 rotate-45 bg-white border-l border-t border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.06)] dark:bg-slate-700 dark:border-slate-600 dark:shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm dark:border-slate-600 dark:bg-slate-700">
                  <span className="text-xs text-slate-700 dark:text-slate-200">
                    {t("support_bubble_text")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Columna derecha (formulario compacto, sin desbordar) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border bg-white p-5 sm:p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] border-slate-200 dark:bg-slate-800 dark:border-slate-700"
          >
            <form onSubmit={onSubmit} className="space-y-3">
              {/* Honeypot */}
              <input
                type="text"
                name="honey"
                value={form.honey}
                onChange={onChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  {t("support_form_name_label")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder={t("support_form_name_placeholder")}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none ring-0 focus:border-blue-500 text-slate-900 placeholder-slate-400 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100 dark:placeholder-slate-400"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  {t("support_form_email_label")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="email@ejemplo.com"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none ring-0 focus:border-blue-500 text-slate-900 placeholder-slate-400 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100 dark:placeholder-slate-400"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  {t("support_form_subject_label")}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder={t("support_form_subject_placeholder")}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none ring-0 focus:border-blue-500 text-slate-900 placeholder-slate-400 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100 dark:placeholder-slate-400"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  {t("support_form_message_label")}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder={t("support_form_message_placeholder")}
                  required
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none ring-0 focus:border-blue-500 text-slate-900 placeholder-slate-400 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100 dark:placeholder-slate-400 resize-none"
                />
              </div>

              <div>
                <Button type="submit" className="h-10 rounded-xl px-4">
                  {t("support_form_submit")}
                </Button>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                {t("support_form_privacy_hint")}{" "}
                <a href="/privacidad" className="underline underline-offset-2">
                  {t("support_form_privacy_link")}
                </a>
                .
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
