import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/lib/translations";
import { useLibraryDocs } from "@/proLibraryStore";

export default function ProLibraryDetail() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  const navigate = useNavigate();
  const { id } = useParams();

  const { docs } = useLibraryDocs();
  const doc = docs.find((d) => d.id === id);

  if (!doc) {
    return (
      <section className="w-full bg-[#F4F8FF] pt-4 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <button
            type="button"
            onClick={() => navigate("/cuenta-pro/biblioteca")}
            className="inline-flex items-center gap-2 text-sm text-sky-700 hover:text-sky-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            {tr("library_back", "Volver a la biblioteca")}
          </button>

          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-8">
            <p className="text-slate-700">
              {tr(
                "library_doc_not_found",
                "No se ha encontrado este documento en la biblioteca."
              )}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const isTranslation = doc.kind === "translation";

  const prefix = isTranslation
    ? tr("library_prefix_translation", "Itzulpena:")
    : tr("library_prefix_summary", "Laburpena:");

  const dateLabel = doc.createdAt
    ? new Date(doc.createdAt)
        .toLocaleDateString("es-ES", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
        .replace(".", "")
    : "";

  return (
    <section className="w-full bg-[#F4F8FF] pt-4 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Botón volver */}
        <button
          type="button"
          onClick={() => navigate("/cuenta-pro/biblioteca")}
          className="inline-flex items-center gap-2 text-sm text-sky-700 hover:text-sky-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          {tr("library_back", "Volver a la biblioteca")}
        </button>

        {/* “Hoja” central tipo NotebookLM */}
        <div className="rounded-3xl bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 px-7 py-6 md:px-10 md:py-8">
          <div className="flex flex-col gap-2 mb-6">
            <h1 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
              <span className="font-semibold text-slate-900">
                {prefix}&nbsp;
              </span>
              <span className="font-normal text-slate-700">
                {doc.title || tr("library_untitled", "Sin título")}
              </span>
            </h1>
            {dateLabel && (
              <p className="text-sm text-slate-500">{dateLabel}</p>
            )}
          </div>

          <div className="border border-slate-200 rounded-2xl bg-slate-50/40 px-5 py-4 md:px-6 md:py-5">
            <div className="text-[15px] leading-7 text-slate-800 whitespace-pre-line">
              {doc.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
