import React, { useRef, useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, File as FileIcon, Link2 as UrlIcon, Plus, X } from "lucide-react";
import { useTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";

export default function Resumen() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  // ===== Estado =====
  const [sourceMode, setSourceMode] = useState(null); // null | "text" | "document" | "url"
  const [textValue, setTextValue] = useState("");
  const [chatInput, setChatInput] = useState("");

  // Resultado / carga / error
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Longitud del resumen
  const [summaryLength, setSummaryLength] = useState("breve"); // "breve" | "medio" | "detallado"

  // Track del estado del texto para avisar si el resumen está desactualizado
  const [lastSummarySig, setLastSummarySig] = useState(null);
  const [isOutdated, setIsOutdated] = useState(false);

  // Documentos
  const [documents, setDocuments] = useState([]); // [{id,file}]
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // URLs
  const [urlInputOpen, setUrlInputOpen] = useState(false);
  const [urlsTextarea, setUrlsTextarea] = useState("");
  const [urlItems, setUrlItems] = useState([]); // [{id,url,host}]

  // ===== Estilos / constantes visuales =====
  const BLUE = "#2563eb";
  const GRAY_TEXT = "#64748b";
  const GRAY_ICON = "#94a3b8";
  const DIVIDER = "#e5e7eb";

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -12 },
  };

  // ===== i18n labels =====
  const labelSources = tr("summary.sources_title", "Fuentes");
  const labelTabText = tr("summary.sources_tab_text", "Texto");
  const labelTabDocument = tr("summary.sources_tab_document", "Documento");
  const labelTabUrl = tr("summary.sources_tab_url", "URL");
  const labelEnterText = tr("summary.enter_text_here_full", "Escribe o pega tu texto aquí…");
  const labelChooseFileTitle = tr("summary.choose_file_title", "Elige tu archivo o carpeta");
  const labelAcceptedFormats = tr("summary.accepted_formats","Puedes añadir archivos PDF, texto copiado, enlaces web…");
  const labelFolderHint = tr("summary.folder_hint","Aquí aparecerán tus textos o documentos subidos.");
  const labelPasteUrls = tr("summary.paste_urls_label", "Pegar URLs*");
  const labelAddUrl = tr("summary.add_url", "Añadir URLs");
  const labelSaveUrls = tr("summary.save_urls", "Guardar");
  const labelCancel = tr("summary.cancel", "Cancelar");
  const labelUrlsNoteVisible = tr("summary.urls_note_visible","Solo se importará el texto visible del sitio web.");
  const labelUrlsNotePaywalled = tr("summary.urls_note_paywalled","No se admiten artículos de pago.");
  const labelRemove = tr("summary.remove", "Quitar");
  const labelGenerateFromSources = tr("summary.generate_from_sources", "Laburpena sortu");
  const labelHelpRight = tr("summary.create_help_right","Hautatu iturri bat (testua, dokumentuak edo URLak) eta sakatu “Laburpena sortu”.");
  const labelBottomInputPh = tr("summary.bottom_input_ph","Idatzi hemen ikuspegia (aukerakoa): tonua, luzera, puntu garrantzitsuak…");
  const labelGenerateWithPrompt = tr("summary.generate_with_prompt","Argibideekin sortu");

  // Etiquetas de longitud
  const LBL_SHORT = tr("summary.length_short", "Breve");
  const LBL_MED   = tr("summary.length_medium", "Medio");
  const LBL_LONG  = tr("summary.length_long", "Detallado");

  // Mensaje de ayuda izquierdo
  const leftRaw = tr(
    "summary.create_help_left",
    "Hemen agertuko dira igo dituzun testuak edo dokumentuak. Gehitu ditzakezu PDF fitxategiak, testu kopiatua, web estekak…"
  );
  const [leftTitle, leftBody] = useMemo(() => {
    const parts = (leftRaw || "").split(".");
    const first = (parts.shift() || leftRaw || "").trim();
    const rest = parts.join(".").trim();
    return [first.endsWith(".") ? first : `${first}.`, rest];
  }, [leftRaw]);

  // ===== Componentes de tabs =====
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
        <Icon className="w-[18px] h-[18px] shrink-0" style={{ color: active ? BLUE : GRAY_ICON }} />
        <span className="truncate">{label}</span>
        {active && (
          <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] rounded-full" style={{ backgroundColor: BLUE }} />
        )}
      </button>
      {showDivider && <span aria-hidden className="self-center" style={{ width: 1, height: 22, backgroundColor: DIVIDER }} />}
    </div>
  );

  const LengthTab = ({ active, label, onClick, showDivider }) => (
    <div className="relative flex items-stretch">
      <button
        type="button"
        onClick={onClick}
        className="relative inline-flex items-center gap-2 h-[44px] px-3 text-[14px] font-medium"
        style={{ color: active ? BLUE : GRAY_TEXT }}
        aria-pressed={active}
        aria-label={label}
      >
        <span className="truncate">{label}</span>
        {active && (
          <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] rounded-full" style={{ backgroundColor: BLUE }} />
        )}
      </button>
      {showDivider && <span aria-hidden className="self-center" style={{ width: 1, height: 22, backgroundColor: DIVIDER }} />}
    </div>
  );

  // ===== Utils =====
  const parseUrlsFromText = (text) => {
    const raw = text.split(/[\s\n]+/).map((s) => s.trim()).filter(Boolean);
    const valid = [];
    for (const u of raw) {
      try { const url = new URL(u); valid.push({ href: url.href, host: url.host }); } catch {}
    }
    const seen = new Set();
    return valid.filter((v) => (seen.has(v.href) ? false : (seen.add(v.href), true)));
  };

  // Recorte por nº máximo de frases y palabras (dual-limit, más estricto)
  const enforceLength = (text, mode) => {
    const config = {
      breve:     { maxWords: 90,  maxSentences: 3 },
      medio:     { maxWords: 180, maxSentences: 6 },
      detallado: { maxWords: 260, maxSentences: 10 },
    };
    const { maxWords, maxSentences } = config[mode] || config.breve;

    let t = (text || "")
      .replace(/\r/g, "")
      .replace(/\n+/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim();

    const sentences = t.split(/(?<=[.!?…])\s+/).filter(Boolean);
    let clipped = sentences.slice(0, maxSentences).join(" ");

    const words = clipped.split(/\s+/);
    if (words.length > maxWords) {
      clipped = words.slice(0, maxWords).join(" ").replace(/[.,;:–—-]*$/, "") + "…";
    }
    return clipped;
  };

  const canonicalize = (s) =>
    (s || "")
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();

  // ===== Reglas UX =====
  useEffect(() => {
    const sig = canonicalize(textValue);
    if (sig.length === 0) {
      setResult("");
      setIsOutdated(false);
      return;
    }
    if (lastSummarySig && sig !== lastSummarySig) {
      setIsOutdated(true);
    } else {
      setIsOutdated(false);
    }
  }, [textValue, lastSummarySig]);

  // ===== Documentos =====
  const triggerPick = () => fileInputRef.current?.click();
  const addFiles = (list) => {
    if (!list?.length) return;
    const arr = Array.from(list);
    const newDocs = arr.map((file) => ({ id: crypto.randomUUID(), file }));
    setDocuments((prev) => [...prev, ...newDocs]);
  };
  const onFiles = (e) => { addFiles(e.target.files); e.target.value = ""; };

  const onDragEnter = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(true); };
  const onDragOver  = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(true); };
  const onDragLeave = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(false); };
  const onDrop = (e) => {
    e.preventDefault(); e.stopPropagation(); setDragActive(false);
    const dt = e.dataTransfer; if (dt?.files?.length) addFiles(dt.files);
  };

  const removeDocument = (id) => setDocuments((prev) => prev.filter((d) => d.id !== id));

  // ===== URLs =====
  const addUrlsFromTextarea = () => {
    const parsed = parseUrlsFromText(urlsTextarea);
    if (!parsed.length) return;
    const newItems = parsed.map((p) => ({ id: crypto.randomUUID(), url: p.href, host: p.host }));
    setUrlItems((prev) => [...prev, ...newItems]);
    setUrlsTextarea(""); setUrlInputOpen(false);
  };
  const removeUrl = (id) => setUrlItems((prev) => prev.filter((u) => u.id !== id));

  // ===== Validación de entrada =====
  const textIsValid = useMemo(() => {
    const trimmed = (textValue || "").trim();
    const words = trimmed.split(/\s+/).filter(Boolean);
    return trimmed.length >= 20 && words.length >= 5;
  }, [textValue]);

  const hasValidInput = textIsValid || urlItems.length > 0 || documents.length > 0;

  // ===== Generar Resumen =====
  const handleGenerate = async () => {
    setErrorMsg(""); setResult("");

    // Revalidación inmediata para evitar llamadas inútiles
    const trimmed = (textValue || "").trim();
    const words = trimmed.split(/\s+/).filter(Boolean);
    const textOk = trimmed.length >= 20 && words.length >= 5;
    const validNow = textOk || urlItems.length > 0 || documents.length > 0;

    if (!validNow) {
      setErrorMsg("Añade texto suficiente, URLs o documentos antes de generar el resumen.");
      return;
    }

    const urlsList = urlItems.map((u) => u.url).join("\n");
    const docNames = documents.map((d) => d.file?.name).filter(Boolean).join(", ");

    // ===== STRICT_EXTRACTIVE si solo hay texto y es relativamente corto =====
    const onlyText = textOk && urlItems.length === 0 && documents.length === 0;
    const wordCount = words.length;
    const strictExtractive = onlyText && wordCount <= 120;

    const formattingRules =
      "Devuelve un único párrafo fluido, sin listas ni viñetas, sin guiones al inicio de línea, " +
      "sin subtítulos ni líneas sueltas. Redacta en frases completas, tono claro e informativo.";

    const lengthRule =
      summaryLength === "breve"
        ? "Extensión: 2–3 frases, ~70–90 palabras."
        : summaryLength === "medio"
        ? "Extensión: 4–6 frases, ~120–180 palabras."
        : "Extensión: 8–10 frases, ~200–260 palabras.";

    const userContent = [
      strictExtractive
        ? "Resume exclusivamente con la información literal del TEXTO. Prohibido añadir conocimiento externo o inferencias. Si el TEXTO no aporta suficiente contenido, responde exactamente: 'El texto es demasiado breve para resumir con fidelidad.'"
        : "Quiero un resumen profesional del siguiente contenido.",
      textValue ? `\nTEXTO:\n${textValue}` : "",
      urlsList ? `\nURLs (extrae solo lo visible):\n${urlsList}` : "",
      docNames ? `\nDOCUMENTOS (solo nombres; tu backend ya gestiona el contenido si aplica): ${docNames}` : "",
      chatInput ? `\nENFOQUE OPCIONAL: ${chatInput}` : "",
      `\nREQUISITO DE FORMATO: ${formattingRules}`,
      `\nREQUISITO DE LONGITUD (${summaryLength.toUpperCase()}): ${lengthRule}`,
      "\nIdioma de salida: usa el mismo del texto de entrada; si hay mezcla, usa Español.",
    ].join("");

    const systemBase =
      "Eres un asistente que redacta resúmenes en formato de texto corrido. " +
      "No uses listas, viñetas, guiones ni numeraciones. " +
      "Entrega un único párrafo, sin encabezados, con frases completas y buena coherencia. " +
      "Sé conciso. No inventes datos.";

    const systemStrict =
      systemBase +
      " Restringe la salida estrictamente a la información presente en el texto de entrada. " +
      "No introduzcas fechas, nombres propios o hechos que no aparezcan explícitamente.";

    const messages = [
      { role: "system", content: strictExtractive ? systemStrict : systemBase },
      { role: "user", content: userContent },
    ];

    try {
      setLoading(true);
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages, length: summaryLength }),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`HTTP ${res.status}: ${txt}`);
      }

      const data = await res.json();

      const rawText =
        data?.text ??
        data?.content ??
        data?.choices?.[0]?.message?.content ??
        data?.message?.content ??
        "";

      if (!rawText) throw new Error("No se recibió texto de la API.");

      const cleaned = rawText
        .replace(/^\s*[-–—•]\s+/gm, "")
        .replace(/^\s*\d+\.\s+/gm, "")
        .replace(/\r/g, "")
        .replace(/\n+/g, " ")
        .replace(/\s{2,}/g, " ")
        .trim();

      // Si el modelo ha devuelto el aviso de brevedad, lo mostramos tal cual
      if (/^el texto es demasiado breve para resumir con fidelidad\.?$/i.test(cleaned)) {
        setResult("El texto es demasiado breve para resumir con fidelidad.");
        setLastSummarySig(canonicalize(textValue));
        setIsOutdated(false);
        setLoading(false);
        return;
      }

      const clipped = enforceLength(cleaned, summaryLength);

      setResult(clipped);
      setLastSummarySig(canonicalize(textValue));
      setIsOutdated(false);
    } catch (err) {
      setErrorMsg(err.message || "Error generando el resumen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#F4F8FF] pt-4 pb-16">
      <div className="max-w-7xl mx-auto w-full px-6">
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-6"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{ duration: 0.3 }}
        >
          {/* ===== Panel Fuentes (izquierda) ===== */}
          <aside className="min-h-[630px] rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm overflow-hidden flex flex-col">
            {/* Título */}
            <div className="h-11 flex items-center justify-between px-4 border-b border-slate-200 bg-slate-50/60">
              <div className="text-sm font-medium text-slate-700">
                {labelSources}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center px-2 border-b" style={{ borderColor: DIVIDER }}>
              <TabBtn active={sourceMode === "text"} icon={FileText} label={labelTabText} onClick={() => setSourceMode("text")} showDivider />
              <TabBtn active={sourceMode === "document"} icon={FileIcon} label={labelTabDocument} onClick={() => setSourceMode("document")} showDivider />
              <TabBtn active={sourceMode === "url"} icon={UrlIcon} label={labelTabUrl} onClick={() => setSourceMode("url")} showDivider={false} />
            </div>

            {/* Contenido */}
            <div className="flex-1 overflow-hidden p-3">
              {!sourceMode && (
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-center px-2">
                    <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-slate-200/70 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-slate-500" />
                    </div>
                    <p className="text-[15px] font-semibold text-slate-600">{leftTitle}</p>
                    {leftBody && <p className="mt-1 text-[13px] leading-6 text-slate-500">{leftBody}</p>}
                  </div>
                </div>
              )}

              {sourceMode === "text" && (
                <textarea
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                  placeholder={labelEnterText}
                  className="w-full h-[360px] md:h-[520px] resize-none outline-none text-[15px] leading-6 bg-transparent placeholder:text-slate-400 text-slate-800"
                  aria-label={labelTabText}
                />
              )}

              {sourceMode === "document" && (
                <div
                  className={`h-full w-full flex flex-col relative ${dragActive ? "ring-2 ring-sky-400 rounded-2xl" : ""}`}
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
                    <div className="text-xl font-semibold text-slate-800">{labelChooseFileTitle}</div>
                    <div className="mt-4 text-sm text-slate-500">{labelAcceptedFormats}</div>
                    <div className="mt-1 text-xs text-slate-400">{labelFolderHint}</div>
                  </button>

                  {documents.length > 0 && (
                    <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 overflow-hidden">
                      {documents.map(({ id, file }) => (
                        <li key={id} className="flex items-center justify-between gap-3 px-3 py-2 bg-white">
                          <div className="min-w-0 flex items-center gap-3 flex-1">
                            <div className="shrink-0 w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center">
                              <FileIcon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="text-sm font-medium block truncate">{file.name}</span>
                              <span className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
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
                          onClick={() => { setUrlsTextarea(""); setUrlInputOpen(false); }}
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

          {/* ===== Panel Derecho ===== */}
          <section className="relative min-h-[630px] pb-[140px] rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm overflow-hidden -ml-px">
            {/* Barra superior con tabs de longitud */}
            <div className="h-11 flex items-center justify-between px-4 border-b border-slate-200 bg-slate-50/60">
              <div className="flex items-center gap-2">
                <LengthTab active={summaryLength === "breve"} label={LBL_SHORT} onClick={() => setSummaryLength("breve")} showDivider />
                <LengthTab active={summaryLength === "medio"} label={LBL_MED} onClick={() => setSummaryLength("medio")} showDivider />
                <LengthTab active={summaryLength === "detallado"} label={LBL_LONG} onClick={() => setSummaryLength("detallado")} />
              </div>
            </div>

            {/* Botón + mensaje solo cuando no hay carga ni resultado */}
            {!loading && !result && (
              <>
                <div className="absolute left-1/2 -translate-x-1/2 z-10" style={{ top: "30%" }}>
                  <Button
                    type="button"
                    onClick={handleGenerate}
                    disabled={loading || !hasValidInput}
                    className="h-10 md:h-11 w-[220px] md:w-[240px] rounded-full text-[14px] md:text-[15px] font-medium shadow-sm flex items-center justify-center hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
                  >
                    {labelGenerateFromSources}
                  </Button>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 text-center px-6" style={{ top: "40%" }}>
                  <p className="text-sm leading-6 text-slate-600 max-w-xl">{labelHelpRight}</p>
                </div>
              </>
            )}

            {/* Resultado / errores / loader */}
            <div className="w-full">
              {(result || errorMsg || loading) && (
                <div className="px-6 pt-24 pb-32 max-w-3xl mx-auto">
                  {errorMsg && (
                    <div className="mb-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                      {errorMsg}
                    </div>
                  )}

                  {isOutdated && !loading && result && (
                    <div className="mb-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-3 py-2">
                      El texto ha cambiado. Vuelve a generar el resumen para actualizarlo.
                    </div>
                  )}

                  {result && (
                    <article className="prose prose-slate max-w-none">
                      <p className="whitespace-normal">{result}</p>
                    </article>
                  )}

                  {loading && !result && (
                    <div className="flex flex-col items-center justify-center text-slate-600 py-12">
                      <img
                        src="/loader-mascot.gif"
                        alt="Generando resumen"
                        className="w-28 h-28 mb-4 select-none pointer-events-none"
                        draggable={false}
                      />
                      <p className="text-sm animate-pulse">Generando el resumen…</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input inferior (prompt opcional) */}
            <div className="absolute left-0 right-0 p-4 bottom-[8px] md:bottom-2">
              <div className="mx-auto max-w-4xl rounded-full border border-slate-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-sky-400/40">
                <div className="flex items-center gap-2 px-4 py-2">
                  <input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder={labelBottomInputPh}
                    className="flex-1 bg-transparent outline-none text-sm md:text-base placeholder:text-slate-400"
                    aria-label={labelBottomInputPh}
                  />
                  <Button
                    type="button"
                    className="h-10 rounded-full px-4 shrink-0 hover:brightness-95"
                    style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
                    onClick={handleGenerate}
                    disabled={loading || !hasValidInput}
                  >
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
