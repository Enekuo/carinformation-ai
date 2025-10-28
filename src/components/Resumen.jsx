import React, { useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  File as FileIcon,
  Link2 as UrlIcon,
  Plus,
  X,
} from "lucide-react";
import { useTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";

export default function Resumen() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  // ===== Estado =====
  // null | "text" | "document" | "url"
  const [sourceMode, setSourceMode] = useState(null);
  const [textValue, setTextValue] = useState("");
  const [chatInput, setChatInput] = useState("");

  // Documentos
  const [documents, setDocuments] = useState([]); // [{id,file}]
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // URLs
  const [urlInputOpen, setUrlInputOpen] = useState(false);
  const [urlsTextarea, setUrlsTextarea] = useState("");
  const [urlItems, setUrlItems] = useState([]); // [{id,url,host}]

  // ===== Estilos / constantes visuales =====
  const HEADER_HEIGHT_PX = 0; // no hay header local en esta página
  const BLUE = "#2563eb";
  const GRAY_TEXT = "#64748b";
  const GRAY_ICON = "#94a3b8";
  const DIVIDER = "#e5e7eb";

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -12 },
  };

  // ===== i18n labels (con fallbacks) =====
  const labelPageTitle = tr("summary.title", "Resumen");
  const labelSources = tr("summary.sources_title", "Fuentes");
  const labelTabText = tr("summary.sources_tab_text", "Texto");
  const labelTabDocument = tr("summary.sources_tab_document", "Documento");
  const labelTabUrl = tr("summary.sources_tab_url", "URL");
  const labelEnterText = tr("summary.enter_text_here_full", "Escribe o pega tu texto aquí…");
  const labelChooseFileTitle = tr("summary.choose_file_title", "Sube archivos");
  const labelAcceptedFormats = tr(
    "summary.accepted_formats",
    "Formatos admitidos: PDF, DOCX, TXT, MD, imágenes…"
  );
  const labelFolderHint = tr(
    "summary.folder_hint",
    "Puedes arrastrar varios archivos a la vez."
  );
  const labelPasteUrls = tr("summary.paste_urls_label", "Pega aquí una o varias URLs (una por línea)");
  const labelAddUrl = tr("summary.add_url", "Añadir URLs");
  const labelSaveUrls = tr("summary.save_urls", "Guardar");
  const labelCancel = tr("summary.cancel", "Cancelar");
  const labelUrlsNoteVisible = tr(
    "summary.urls_note_visible",
    "Solo se puede resumir contenido visible sin login."
  );
  const labelUrlsNotePaywalled = tr(
    "summary.urls_note_paywalled",
    "El contenido con muro de pago no se podrá procesar."
  );
  const labelRemove = tr("summary.remove", "Quitar");
  const labelGenerateFromSources = tr("summary.generate_from_sources", "Generar resumen");
  const labelHelpRight = tr(
    "summary.create_help_right",
    "Selecciona una fuente (texto, documentos o URLs) y pulsa “Generar resumen”."
  );
  const labelBottomInputPh = tr(
    "summary.bottom_input_ph",
    "Escribe aquí un enfoque (opcional): tono, longitud, puntos clave…"
  );
  const labelGenerateWithPrompt = tr(
    "summary.generate_with_prompt",
    "Generar con indicaciones"
  );

  // Mensaje de ayuda izquierdo (título + cuerpo)
  const leftRaw = tr(
    "summary.create_help_left",
    "Elige cómo quieres proporcionar el contenido. Puedes escribir, subir documentos o pegar URLs."
  );
  const [leftTitle, leftBody] = useMemo(() => {
    const parts = (leftRaw || "").split(".");
    const first = (parts.shift() || leftRaw || "").trim();
    const rest = parts.join(".").trim();
    return [first.endsWith(".") ? first : `${first}.`, rest];
  }, [leftRaw]);

  // ===== Tabs botón
  const TabBtn = ({ active, icon: Icon, label, onClick, showDivider }) => (
    <div className="relative flex-1 min-w-0 flex items-stretch">
      <button
        type="button"
        onClick={onClick}
        className="relative inline-flex w-full items-center gap-2 h-[44px] px-3 text-[14px] font-medium justify-start"
        style={{ color: active ? BLUE : GRAY_TEXT }}
        aria-pressed={active}
        aria-label={label}
      >
        <Icon
          className="w-[18px] h-[18px] shrink-0"
          style={{ color: active ? BLUE : GRAY_ICON }}
        />
        <span className="truncate">{label}</span>
        {active && (
          <span
            className="absolute bottom-[-1px] left-0 right-0 h-[2px] rounded-full"
            style={{ backgroundColor: BLUE }}
          />
        )}
      </button>
      {showDivider && (
        <span
          aria-hidden
          className="self-center"
          style={{ width: 1, height: 22, backgroundColor: DIVIDER }}
        />
      )}
    </div>
  );

  // ===== Utils
  const parseUrlsFromText = (text) => {
    const raw = text.split(/[\s\n]+/).map((s) => s.trim()).filter(Boolean);
    const valid = [];
    for (const u of raw) {
      try {
        const url = new URL(u);
        valid.push({ href: url.href, host: url.host });
      } catch {}
    }
    const seen = new Set();
    return valid.filter((v) => (seen.has(v.href) ? false : (seen.add(v.href), true)));
  };

  // Documentos
  const triggerPick = () => fileInputRef.current?.click();
  const addFiles = (list) => {
    if (!list?.length) return;
    const arr = Array.from(list);
    const newDocs = arr.map((file) => ({ id: crypto.randomUUID(), file }));
    setDocuments((prev) => [...prev, ...newDocs]);
  };
  const onFiles = (e) => {
    addFiles(e.target.files);
    e.target.value = "";
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };
  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };
  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const dt = e.dataTransfer;
    if (dt?.files?.length) addFiles(dt.files);
  };

  const removeDocument = (id) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
  };

  // URLs
  const addUrlsFromTextarea = () => {
    const parsed = parseUrlsFromText(urlsTextarea);
    if (!parsed.length) return;
    const newItems = parsed.map((p) => ({
      id: crypto.randomUUID(),
      url: p.href,
      host: p.host,
    }));
    setUrlItems((prev) => [...prev, ...newItems]);
    setUrlsTextarea("");
    setUrlInputOpen(false);
  };
  const removeUrl = (id) => {
    setUrlItems((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <section className="w-full bg-[#F4F8FF] py-10">
      <div className="max-w-7xl mx-auto w-full px-6">
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-6"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{ duration: 0.3 }}
          style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT_PX + 32}px)` }}
        >
          {/* ===== Panel Fuentes (izquierda) ===== */}
          <aside className="h-full rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm overflow-hidden flex flex-col">
            {/* Título */}
            <div className="h-11 flex items-center justify-between px-4 border-b border-slate-200 bg-slate-50/60">
              <div className="text-sm font-medium text-slate-700">
                {labelSources}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center px-2 border-b" style={{ borderColor: DIVIDER }}>
              <TabBtn
                active={sourceMode === "text"}
                icon={FileText}
                label={labelTabText}
                onClick={() => setSourceMode("text")}
                showDivider
              />
              <TabBtn
                active={sourceMode === "document"}
                icon={FileIcon}
                label={labelTabDocument}
                onClick={() => setSourceMode("document")}
                showDivider
              />
              <TabBtn
                active={sourceMode === "url"}
                icon={UrlIcon}
                label={labelTabUrl}
                onClick={() => setSourceMode("url")}
                showDivider={false}
              />
            </div>

            {/* Contenido */}
            <div className="flex-1 overflow-hidden p-4">
              {/* Estado inicial */}
              {!sourceMode && (
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-center px-2">
                    <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-slate-200/70 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-slate-500" />
                    </div>
                    <p className="text-[15px] font-semibold text-slate-600">
                      {leftTitle}
                    </p>
                    {leftBody && (
                      <p className="mt-1 text-[13px] leading-6 text-slate-500">
                        {leftBody}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Texto */}
              {sourceMode === "text" && (
                <textarea
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                  placeholder={labelEnterText}
                  className="w-full h-[220px] resize-none outline-none text-[15px] leading-6 bg-transparent placeholder:text-slate-400 text-slate-800"
                  aria-label={labelTabText}
                />
              )}

              {/* Documento */}
              {sourceMode === "document" && (
                <div
                  className={`h-full w-full flex flex-col relative ${
                    dragActive ? "ring-2 ring-sky-400 rounded-2xl" : ""
                  }`}
                  onDragEnter={onDragEnter}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    multiple
                    accept=".pdf,.ppt,.pptx,.doc,.docx,.csv,.json,.xml,.epub,.txt,.vtt,.srt,.md,.rtf,.html,.htm,.jpg,.jpeg,.png"
                    onChange={onFiles}
                  />
                  <button
                    type="button"
                    onClick={triggerPick}
                    className="w-full rounded-2xl border border-dashed border-slate-300 bg-white/40 hover:bg-slate-50 transition px-6 py-10 text-center shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]"
                    aria-label={labelChooseFileTitle}
                    title={labelChooseFileTitle}
                  >
                    <div className="mx-auto mb-5 w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center">
                      <Plus className="w-10 h-10 text-sky-600" />
                    </div>
                    <div className="text-xl font-semibold text-slate-800">
                      {labelChooseFileTitle}
                    </div>
                    <div className="mt-4 text-sm text-slate-500">
                      {labelAcceptedFormats}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      {labelFolderHint}
                    </div>
                  </button>

                  {/* Lista de documentos seleccionados */}
                  {documents.length > 0 && (
                    <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 overflow-hidden">
                      {documents.map(({ id, file }) => (
                        <li
                          key={id}
                          className="flex items-center justify-between gap-3 px-3 py-2 bg-white"
                        >
                          <div className="min-w-0 flex items-center gap-3 flex-1">
                            <div className="shrink-0 w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center">
                              <FileIcon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="text-sm font-medium block truncate">
                                {file.name}
                              </span>
                              <span className="text-xs text-slate-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => removeDocument(id)}
                            className="shrink-0 p-1.5 rounded-md hover:bg-slate-100"
                            title={labelRemove}
                            aria-label={labelRemove}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* URL */}
              {sourceMode === "url" && (
                <div className="h-full w-full flex flex-col">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                      <UrlIcon className="w-4 h-4" />
                      {labelPasteUrls}
                    </div>
                    <button
                      type="button"
                      onClick={() => setUrlInputOpen(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-sky-300 bg-sky-50 text-sky-700 hover:bg-sky-100 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40 shadow-sm transition-colors"
                      aria-label={labelAddUrl}
                      title={labelAddUrl}
                    >
                      <Plus className="w-4 h-4 text-sky-500" />
                      {labelAddUrl}
                    </button>
                  </div>

                  {urlInputOpen && (
                    <div className="mb-4 rounded-xl border border-slate-300 p-3 bg-white">
                      <textarea
                        value={urlsTextarea}
                        onChange={(e) => setUrlsTextarea(e.target.value)}
                        placeholder="https://ejemplo.com/articulo-1"
                        className="w-full min-h-[140px] rounded-md border border-slate-200 bg-transparent p-2 outline-none text-[15px] leading-6 placeholder:text-slate-400"
                        aria-label={labelPasteUrls}
                      />
                      <div className="mt-2 flex items-center gap-2">
                        <Button type="button" onClick={addUrlsFromTextarea} className="h-9">
                          {labelSaveUrls}
                        </Button>
                        <button
                          type="button"
                          onClick={() => {
                            setUrlsTextarea("");
                            setUrlInputOpen(false);
                          }}
                          className="h-9 px-3 rounded-md border border-slate-300 hover:bg-slate-50 text-sm"
                        >
                          {labelCancel}
                        </button>
                      </div>
                      <div className="mt-6 text-xs text-slate-500">
                        • {labelUrlsNoteVisible}
                        <br />• {labelUrlsNotePaywalled}
                      </div>
                    </div>
                  )}

                  {urlItems.length > 0 && (
                    <ul className="flex-1 overflow-y-auto overflow-x-hidden divide-y divide-slate-200 rounded-xl border border-slate-200">
                      {urlItems.map(({ id, url, host }) => (
                        <li key={id} className="flex items-center justify-between gap-3 px-3 py-2">
                          <div className="min-w-0 flex items-center gap-3 flex-1">
                            <div className="shrink-0 w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center">
                              <UrlIcon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-medium block truncate text-sky-600 hover:underline"
                                title={url}
                              >
                                {host} — {url}
                              </a>
                            </div>
                          </div>
                          <button
                            onClick={() => removeUrl(id)}
                            className="shrink-0 p-1.5 rounded-md hover:bg-slate-100"
                            title={labelRemove}
                            aria-label={labelRemove}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </aside>

          {/* ===== Panel Derecho (resultado / CTA / input inferior) ===== */}
          <section className="h-full relative rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm overflow-hidden -ml-px">
            {/* Botón principal centrado */}
            <div
              className="absolute left-1/2 -translate-x-1/2 z-10"
              style={{ top: "38%" }}
            >
              <Button
                type="button"
                className="h-10 md:h-11 w-[220px] md:w-[240px] rounded-full text-[14px] md:text-[15px] font-medium shadow-sm flex items-center justify-center"
              >
                {labelGenerateFromSources}
              </Button>
            </div>

            {/* Mensaje secundario */}
            <div
              className="absolute left-1/2 -translate-x-1/2 text-center px-6"
              style={{ top: "49%" }}
            >
              <p className="text-sm leading-6 text-slate-600 max-w-xl">
                {labelHelpRight}
              </p>
            </div>

            {/* espacio libre para resultados */}
            <div className="w-full h-full"></div>

            {/* Input inferior (prompt opcional) */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div
                className="mx-auto max-w-4xl rounded-full border border-slate-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-sky-400/40"
              >
                <div className="flex items-center gap-2 px-4 py-2">
                  <input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder={labelBottomInputPh}
                    className="flex-1 bg-transparent outline-none text-sm md:text-base placeholder:text-slate-400"
                    aria-label={labelBottomInputPh}
                  />
                  <Button type="button" className="h-10 rounded-full px-4 shrink-0">
                    {labelGenerateWithPrompt}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </motion.section>
      </div>
    </section>
  );
}
