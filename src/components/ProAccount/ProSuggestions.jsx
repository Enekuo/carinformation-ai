import React, { useState } from "react";
import { useTranslation } from "@/lib/translations";

export default function ProSuggestions() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  const [form, setForm] = useState({
    category: "feature",
    title: "",
    description: "",
    impact: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCategoryChange = (category) => {
    setForm((prev) => ({
      ...prev,
      category,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí en el futuro podrás llamar a tu API / backend
    console.log("Sugerencia enviada:", form);
    setSubmitted(true);

    setForm({
      category: "feature",
      title: "",
      description: "",
      impact: "",
      email: "",
    });
  };

  return (
    <div className="flex-1 bg-[#F4F7FF] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* HEADER */}
        <header className="mb-8 md:mb-10 text-left">
          <h1 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-slate-900">
            {tr("suggestions.title", "")}
          </h1>
          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl">
            {tr("suggestions.subtitle", "")}
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] items-start">
          {/* FORMULARIO */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6"
          >
            {/* Mensaje de éxito */}
            {submitted && (
              <div className="mb-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                {tr("suggestions.success_message", "")}
              </div>
            )}

            {/* Categoría */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-800">
                {tr("suggestions.category_label", "")}
              </label>
              <p className="text-xs text-slate-500">
                {tr("suggestions.category_help", "")}
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  { id: "feature", labelKey: "suggestions.category_feature" },
                  { id: "improvement", labelKey: "suggestions.category_improvement" },
                  { id: "bug", labelKey: "suggestions.category_bug" },
                  { id: "other", labelKey: "suggestions.category_other" },
                ].map((opt) => {
                  const active = form.category === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleCategoryChange(opt.id)}
                      className={
                        "px-3.5 py-1.5 rounded-full text-xs md:text-sm border transition-colors " +
                        (active
                          ? "border-sky-500 bg-sky-50 text-sky-700"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-300")
                      }
                    >
                      {tr(opt.labelKey, "")}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Título */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-800">
                {tr("suggestions.title_label", "")}
              </label>
              <input
                type="text"
                value={form.title}
                onChange={handleChange("title")}
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
                placeholder={tr("suggestions.title_placeholder", "")}
              />
            </div>

            {/* Descripción */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-800">
                {tr("suggestions.description_label", "")}
              </label>
              <textarea
                value={form.description}
                onChange={handleChange("description")}
                required
                rows={5}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 resize-none"
                placeholder={tr("suggestions.description_placeholder", "")}
              />
              <p className="text-xs text-slate-500">
                {tr("suggestions.description_help", "")}
              </p>
            </div>

            {/* Impacto */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-800">
                {tr("suggestions.impact_label", "")}
              </label>
              <select
                value={form.impact}
                onChange={handleChange("impact")}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
              >
                <option value="">
                  {tr("suggestions.impact_placeholder", "")}
                </option>
                <option value="low">
                  {tr("suggestions.impact_low", "")}
                </option>
                <option value="medium">
                  {tr("suggestions.impact_medium", "")}
                </option>
                <option value="high">
                  {tr("suggestions.impact_high", "")}
                </option>
              </select>
            </div>

            {/* Email opcional */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-800">
                {tr("suggestions.email_label", "")}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
                placeholder={tr("suggestions.email_placeholder", "")}
              />
              <p className="text-xs text-slate-500">
                {tr("suggestions.email_help", "")}
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#0F82E9] px-6 py-2.5 text-sm md:text-[15px] font-semibold text-white shadow-sm hover:bg-[#0c6fcc] transition-colors"
              >
                {tr("suggestions.submit_button", "")}
              </button>
            </div>
          </form>

          {/* COLUMNA LATERAL */}
          <aside className="space-y-5 text-sm md:text-[15px] text-slate-700">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 md:p-6">
              <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                {tr("suggestions.side_how_we_use_title", "")}
              </h2>
              <p className="text-sm text-slate-700 mb-3">
                {tr("suggestions.side_how_we_use_body", "")}
              </p>
              <ul className="space-y-1.5 text-sm list-disc list-inside text-slate-700">
                <li>{tr("suggestions.side_point_1", "")}</li>
                <li>{tr("suggestions.side_point_2", "")}</li>
                <li>{tr("suggestions.side_point_3", "")}</li>
              </ul>
            </div>

            <div className="bg-[#E6F3FF] border border-sky-100 rounded-2xl p-4 md:p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                {tr("suggestions.side_what_helps_title", "")}
              </h3>
              <p className="text-xs md:text-sm text-slate-700">
                {tr("suggestions.side_what_helps_body", "")}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
