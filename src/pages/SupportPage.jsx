import React, { useState } from "react";
import { useTranslation } from "@/lib/translations";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

export default function SupportPage() {
  const { t } = useTranslation();
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toast({
      title: t("supportPage.title"),
      description: t("supportPage.cta"),
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-[70vh] w-full bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* Columna izquierda: título, descripción y “mascota” con burbuja */}
          <div className="flex flex-col">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
                {t("supportPage.title")}
              </h1>
              <p className="mt-2 text-slate-600">
                {t("supportPage.subtitle")}
              </p>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-blue-700"
                >
                  {t("supportPage.cta")}
                </button>
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t("supportPage.kicker")}
              </p>
              <p className="mt-1 text-slate-600">
                {t("supportPage.description")}
              </p>

              <div className="relative mt-8 flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/64/user-md.png"
                  alt="Euskalia support"
                  className="h-40 w-40 object-contain opacity-90 select-none"
                  draggable={false}
                />
                <span className="absolute -right-3 top-4 translate-x-full whitespace-nowrap rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm">
                  {t("supportPage.bubble")}
                </span>
              </div>
            </section>
          </div>

          {/* Columna derecha: formulario */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t("supportPage.form.name_label")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder={t("supportPage.form.name_placeholder")}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t("supportPage.form.email_label")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder={t("supportPage.form.email_placeholder")}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t("supportPage.form.subject_label")}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder={t("supportPage.form.subject_placeholder")}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t("supportPage.form.message_label")}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder={t("supportPage.form.message_placeholder")}
                  className="w-full min-h-[140px] rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-blue-600 px-4 py-2.5 text-white text-sm font-semibold shadow hover:bg-blue-700"
              >
                {t("supportPage.form.submit")}
              </button>

              <p className="mt-2 text-xs text-slate-500">
                {t("supportPage.form.privacy_hint")}{" "}
                <Link
                  to="/privacidad"
                  className="underline underline-offset-2 text-slate-700 hover:text-slate-900"
                >
                  {t("supportPage.form.privacy_link")}
                </Link>.
              </p>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
