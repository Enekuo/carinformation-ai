import React, { useRef, useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  FileDown,
  File as FileIcon,
  Link2 as UrlIcon,
  Plus,
  X,
  Copy,
  Trash,
  Check,
} from "lucide-react";
import { useTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuArrow,
} from "@/components/ui/dropdown-menu";
import { addLibraryDoc } from "@/proLibraryStore";

export default function ProSummary() {
  const { t } = useTranslation();
  const tr = (key, fallback) => t(key) || fallback;

  // ===== Estado =====
  const [sourceMode, setSourceMode] = useState(null); // null | "text" | "document" | "url"
  const [textValue, setTextValue] = useState("");

  // Resultado / carga / error
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorKind, setErrorKind] = useState(null); // null | "limit"

  // Longitud del resumen
  const [summaryLength, setSummaryLength] = useState("breve"); // "breve" | "medio" | "detallado"

  // Idioma de salida (ES/EUS/EN) — por defecto Euskera
  const [outputLang, setOutputLang] = useState("eus");

  // Track “resumen desactualizado”
  const [lastSummarySig, setLastSummarySig] = useState(null);
  const [isOutdated, setIsOutdated] = useState(false);

  // Resultado es el mensaje "texto demasiado breve"
  const [isTooShortResult, setIsTooShortResult] = useState(false);

  // Documentos
  const [documents, setDocuments] = useState([]); // [{id,file}]
  const [documentsText, setDocumentsText] = useState([]); // [{id,name,text}]
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // URLs
  const [urlInputOpen, setUrlInputOpen] = useState(false);
  const [urlsTextarea, setUrlsTextarea] = useState("");
  const [urlItems, setUrlItems] = useState([]); // [{id,url,host}]

  // Copia: flash de tic azul
  const [copiedFlash, setCopiedFlash] = useState(false);

  // Estado y timer para mensaje "Guardado en biblioteca"
  const [savedToLibrary, setSavedToLibrary] = useState(false);
  const savedTimerRef = useRef(null);

  // ===== Estilos / constantes =====
  const BLUE = "#2563eb";
  const GRAY_TEXT = "#64748b";
  const GRAY_ICON = "#94a3b8";
  const DIVIDER = "#e5e7eb";
  const MAX_CHARS = 12000;

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -12 },
  };

  // ===== i18n =====
  const labelSources = tr("summary.sources_title", "Fuentes");
  const labelTabText = tr("summary.sources_tab_text", "Texto");
  const labelTabDocument = tr("summary.sources_tab_document", "Documento");
  const labelTabUrl = tr("summary.sources_tab_url", "URL");
  const labelEnterText = tr(
    "summary.enter_text_here_full",
    "Escribe o pega tu texto aquí…"
  );
  const labelChooseFileTitle = tr(
    "summary.choose_file_title",
    "Elige tu archivo o carpeta"
  );
  const labelAcceptedFormats = tr(
    "summary.accepted_formats",
    "Puedes añadir archivos PDF, texto copiado, enlaces web…"
  );
  const labelFolderHint = tr(
    "summary.folder_hint",
    "Aquí aparecerán tus textos o documentos subidos."
  );
  const labelPasteUrls = tr("summary.paste_urls_label", "Pegar URLs*");
  const labelAddUrl = tr("summary.add_url", "Añadir URLs");
  const labelSaveUrls = tr("summary.save_urls", "Guardar");
  const labelCancel = tr("summary.cancel", "Cancelar");
  const labelUrlsNoteVisible = tr(
    "summary.urls_note_visible",
    "Solo se importará el texto visible del sitio web."
  );
  const labelUrlsNotePaywalled = tr(
    "summary.urls_note_paywalled",
    "No se admiten artículos de pago."
  );
  const labelRemove = tr("summary.remove", "Quitar");
  const labelGenerateFromSources = tr(
    "summary.generate_from_sources",
    "Laburpena sortu"
  );
  const labelHelpRight = tr(
    "summary.create_help_right",
    "Hautatu iturri bat (testua, dokumentuak edo URLak) eta sakatu “Laburpena sortu”."
  );

  // Longitud
  const LBL_SHORT = tr("summary.length_short", "Breve");
  const LBL_MED = tr("summary.length_medium", "Medio");
  const LBL_LONG = tr("summary.length_long", "Detallado");

  // Etiquetas de idioma
  const LBL_ES = tr("summary.output_language_es", "Gaztelania");
  const LBL_EUS = tr("summary.output_language_eus", "Euskara");
  const LBL_EN = tr("summary.output_language_en", "Ingelesa");

  // ✅ CLAVES REALES (SIN INVENTAR)
  const labelReadyMessage = tr(
    "ready_message",
    "Resumen listo · Guardar en tu biblioteca"
  );
  const labelSaveSummary = tr("save_button_label", "Guardar");

  const librarySavedMessage = tr(
    "library_saved_toast",
    "Guardado en biblioteca"
  );

  // Ayuda izquierda
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

  // ===== Tabs =====
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

  // ===== Utils =====
  const parseUrlsFromText = (text) => {
    const raw = text
      .split(/[\s\n]+/)
      .map((s) => s.trim())
      .filter(Boolean);
    const valid = [];
    for (const u of raw) {
      try {
        const url = new URL(u);
        valid.push({ href: url.href, host: url.host });
      } catch {}
    }
    const seen = new Set();
    return valid.filter((v) =>
      seen.has(v.href) ? false : (seen.add(v.href), true)
    );
  };

  const enforceLength = (text, mode) => {
    const config = {
      breve: { maxWords: 90, maxSentences: 3 },
      medio: { maxWords: 180, maxSentences: 6 },
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
      clipped =
        words.slice(0, maxWords).join(" ").replace(/[.,;:–—-]*$/, "") + "…";
    }
    return clipped;
  };

  const canonicalize = (s) =>
    (s || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();

  // ===== Limpieza del panel derecho =====
  const clearRight = () => {
    setResult("");
    setErrorMsg("");
    setErrorKind(null);
    setIsOutdated(false);
    setIsTooShortResult(false);
    setLoading(false);
  };

  const handleLengthChange = (mode) => {
    if (mode === summaryLength) return;
    setSummaryLength(mode);
    clearRight();
  };

  // ===== Reglas UX =====
  useEffect(() => {
    const sig = canonicalize(textValue);
    if (sig.length === 0) {
      setIsOutdated(false);
      return;
    }
    if (lastSummarySig && sig !== lastSummarySig) {
      setIsOutdated(true);
    } else {
      setIsOutdated(false);
    }
  }, [textValue, lastSummarySig]);

  // Atajos de teclado
  useEffect(() => {
    const onKey = (e) => {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === "enter") {
        e.preventDefault();
        if (!loading) handleGenerate();
      } else if (meta && e.key.toLowerCase() === "c") {
        if (result) {
          e.preventDefault();
          handleCopy(true);
        }
      } else if (e.key === "Escape") {
        if (urlInputOpen) setUrlInputOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [loading, result, urlInputOpen, textValue, urlItems, documents, summaryLength, outputLang]);

  // URLs → reset resultado
  useEffect(() => {
    setResult("");
    setErrorMsg("");
    setErrorKind(null);
    setIsOutdated(false);
    setIsTooShortResult(false);
  }, [urlItems]);

  // Limpieza timer "Guardado"
  useEffect(() => {
    return () => {
      if (savedTimerRef.current) clearTimeout(savedTimerRef.current);
    };
  }, []);

  // ===== Documentos =====
  const readTextFromFiles = async (items) => {
    const results = await Promise.all(
      items.map(
        ({ id, file }) =>
          new Promise((resolve) => {
            const name = file?.name || "";
            const lower = name.toLowerCase();
            const isTxt = lower.endsWith(".txt");
            const isMd = lower.endsWith(".md");
            if (!isTxt && !isMd) return resolve(null);

            const fr = new FileReader();
            fr.onload = () => resolve({ id, name, text: String(fr.result || "") });
            fr.onerror = () => resolve(null);
            fr.readAsText(file, "utf-8");
          })
      )
    );
    return results.filter(Boolean);
  };

  const triggerPick = () => fileInputRef.current?.click();

  const addFiles = async (list) => {
    if (!list?.length) return;

    const arr = Array.from(list);
    const withIds = arr.map((file) => ({ id: crypto.randomUUID(), file }));

    setDocuments((prev) => [...prev, ...withIds]);

    const texts = await readTextFromFiles(withIds);
    if (texts.length) setDocumentsText((prev) => [...prev, ...texts]);

    setResult("");
    setErrorMsg("");
    setErrorKind(null);
    setIsOutdated(false);
    setIsTooShortResult(false);
  };

  const onFiles = async (e) => {
    await addFiles(e.target.files);
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
  const onDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const dt = e.dataTransfer;
    if (dt?.files?.length) await addFiles(dt.files);
  };

  const removeDocument = (id) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
    setDocumentsText((prev) => prev.filter((d) => d.id !== id));
    setResult("");
    setErrorMsg("");
    setErrorKind(null);
    setIsOutdated(false);
    setIsTooShortResult(false);
  };

  // ===== URLs =====
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
  const removeUrl = (id) => setUrlItems((prev) => prev.filter((u) => u.id !== id));

  // ===== Validación =====
  const textIsValid = useMemo(() => {
    const trimmed = (textValue || "").trim();
    const words = trimmed.split(/\s+/).filter(Boolean);
    return trimmed.length >= 20 && words.length >= 5;
  }, [textValue]);

  const hasValidInput = textIsValid || urlItems.length > 0 || documents.length > 0;

  // ===== Acciones =====
  const handleCopy = async (flash = false) => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      if (flash) {
        setCopiedFlash(true);
        setTimeout(() => setCopiedFlash(false), 1200);
      }
    } catch {}
  };

  const handleClearLeft = () => {
    if (!(sourceMode === "text" && textValue)) return;
    setTextValue("");
    clearRight();
  };

  const handleSaveSummary = () => {
    if (!result || isTooShortResult) return;

    const raw = result.trim();
    const firstLine = raw.split("\n")[0];
    const maxTitleLength = 80;
    let title = firstLine;
    if (title.length > maxTitleLength) title = title.slice(0, maxTitleLength).trimEnd() + "…";

    addLibraryDoc({
      kind: "summary",
      title,
      content: result,
    });

    setSavedToLibrary(true);
    if (savedTimerRef.current) clearTimeout(savedTimerRef.current);
    savedTimerRef.current = setTimeout(() => {
      setSavedToLibrary(false);
    }, 2000);
  };

  const handleExportPdf = () => {
    if (!result) return;

    const safe = (result || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br/>");

    const w = window.open("", "_blank");
    if (!w) return;

    w.document.open();
    w.document.write(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Summary</title>
          <style>
            body{ font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; padding: 40px; color:#0f172a; }
            .wrap{ max-width: 900px; margin: 0 auto; font-size: 16px; line-height: 1.6; }
          </style>
        </head>
        <body>
          <div class="wrap">${safe}</div>
          <script>
            window.onload = () => { window.print(); };
          </script>
        </body>
      </html>
    `);
    w.document.close();
  };

  // ===== Tarjetas =====
  const LimitCard = () => (
    <div className="rounded-xl border border-sky-200 bg-sky-50 px-6 py-5 text-sky-900 text-center">
      <div className="text-sm font-semibold">
        {tr("summary.limit_title", "Has alcanzado el límite del plan Gratis")}
      </div>
      <p className="text-xs text-slate-600 mt-1">
        {tr("summary.limit_note", "Límite actual: 12.000 caracteres por petición.")}
      </p>
      <div className="mt-4 flex items-center justify-center gap-3">
        <a
          href="/pricing"
          className="inline-flex items-center justify-center rounded-full px-5 h-9 text-white text-sm font-medium shadow-sm hover:brightness-95"
          style={{ backgroundColor: "#2563eb" }}
        >
          {tr("summary.limit_cta", "Probar plan Premium")}
        </a>
        <button
          onClick={() => setErrorKind(null)}
          className="h-9 px-4 rounded-full border border-slate-300 text-sm hover:bg-white"
        >
          {tr("summary.limit_dismiss", "Seguir con plan Gratis")}
        </button>
      </div>
    </div>
  );

  // ===== Helper: cache key (sha-256) para KV =====
  const sha256Hex = async (input) => {
    try {
      const enc = new TextEncoder().encode(input);
      const digest = await crypto.subtle.digest("SHA-256", enc);
      return Array.from(new Uint8Array(digest))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    } catch {
      return null;
    }
  };

  // ===== Generar =====
  const handleGenerate = async () => {
    setLoading(true);
    setErrorMsg("");
    setErrorKind(null);
    setIsTooShortResult(false);

    const trimmed = (textValue || "").trim();
    const words = trimmed.split(/\s+/).filter(Boolean);
    const textOk = trimmed.length >= 20 && words.length >= 5;
    const validNow = textOk || urlItems.length > 0 || documents.length > 0;

    if ((textValue || "").length > MAX_CHARS) {
      setErrorKind("limit");
      setLoading(false);
      return;
    }
    if (!validNow) {
      setErrorMsg("Añade texto suficiente, URLs o documentos antes de generar el resumen.");
      setLoading(false);
      return;
    }

    const urlsList = urlItems.map((u) => u.url).join("\n");
    const docNames = documents
      .map((d) => d.file?.name)
      .filter(Boolean)
      .join(", ");

    const onlyText = textOk && urlItems.length === 0 && documents.length === 0;
    const wordCount = words.length;
    const strictExtractive = onlyText && wordCount <= 120;

    const formattingRules =
      "Devuelve un único párrafo fluido, sin listas ni viñetas, sin guiones al inicio de línea, " +
      "sin subtítulos ni líneas sueltas. Redacta en frases completas, tono claro e informativo.";

    const tooShortMsg =
      outputLang === "es"
        ? "El texto es demasiado breve para resumir con fidelidad."
        : outputLang === "en"
        ? "The text is too short to summarize reliably."
        : "Testua laburregia da fideltasunez laburtzeko.";

    const langInstruction =
      outputLang === "es"
        ? "Idioma de salida: español (ISO: es). Redacta toda la respuesta en español."
        : outputLang === "en"
        ? "Output language: English (ISO: en). Write the entire response in English."
        : "Irteerako hizkuntza: euskara (ISO: eu). Idatzi erantzun osoa euskaraz.";

    const lengthRule =
      summaryLength === "breve"
        ? "Extensión: 2–3 frases, ~70–90 palabras."
        : summaryLength === "medio"
        ? "Extensión: 4–6 frases, ~120–180 palabras."
        : "Extensión: 8–10 frases, ~200–260 palabras.";

    const docsInline = documentsText?.length
      ? "\nDOCUMENTOS (testu erauzia / texto extraído):\n" +
        documentsText
          .map((d) => `--- ${d.name} ---\n${(d.text || "").slice(0, 12000)}`)
          .join("\n\n")
      : "";

    const userContent = [
      strictExtractive
        ? `Resume exclusivamente con la información literal del TEXTO. Prohibido añadir conocimiento externo o inferencias. Si el TEXTO no aporta suficiente contenido, responde exactamente: "${tooShortMsg}".`
        : "Quiero un resumen profesional del siguiente contenido.",
      textValue ? `\nTEXTO:\n${textValue}` : "",
      urlsList
        ? `\nURLs (extrae solo lo visible; si no puedes, ignóralas):\n${urlsList}`
        : "",
      docsInline,
      `\nREQUISITO DE FORMATO: ${formattingRules}`,
      `\nREQUISITO DE LONGITUD (${summaryLength.toUpperCase()}): ${lengthRule}`,
      `\n${langInstruction}`,
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

    const cacheBase = JSON.stringify({
      textValue,
      urls: urlItems.map((u) => u.url),
      docNames,
      summaryLength,
      outputLang,
    });
    const cacheKey = await sha256Hex(cacheBase);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages,
          length: summaryLength,
          cacheKey,
          documentsText,
        }),
      });

      if (!res.ok) {
        if (res.status === 413) {
          setErrorKind("limit");
          setLoading(false);
          return;
        }
        if (res.status === 429) {
          throw new Error(
            "Has alcanzado el límite de peticiones. Inténtalo más tarde o prueba el plan Premium."
          );
        }
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

      if (cleaned && cleaned.trim().toLowerCase() === tooShortMsg.trim().toLowerCase()) {
        setResult(tooShortMsg);
        setIsTooShortResult(true);
        setLastSummarySig(canonicalize(textValue));
        setIsOutdated(false);
        setLoading(false);
        return;
      }

      const clipped = enforceLength(cleaned, summaryLength);

      setResult(clipped);
      setIsTooShortResult(false);
      setLastSummarySig(canonicalize(textValue));
      setIsOutdated(false);
    } catch (err) {
      setErrorMsg(err.message || "Error generando el resumen.");
    } finally {
      setLoading(false);
    }
  };

  // ===== Contador / barra =====
  const charCount = (textValue || "").length;
  const pct = Math.min(100, Math.round((charCount / MAX_CHARS) * 100));
  const nearLimit = charCount >= MAX_CHARS * 0.9 && charCount < MAX_CHARS;
  const overLimit = charCount > MAX_CHARS;

  const barClass = overLimit ? "bg-red-500" : nearLimit ? "bg-amber-500" : "bg-sky-500";

  // Estilo iconos (SIN círculo)
  const iconBtnBase =
    "inline-flex items-center justify-center text-slate-500 hover:text-slate-800 transition";
  const iconDisabled = "text-slate-300 cursor-not-allowed hover:text-slate-300";

  return (
    <>
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
            <aside className="min-h-[500px] rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="h-11 flex items-center justify-between px-4 border-b border-slate-200 bg-slate-50/60">
                <div className="text-sm font-medium text-slate-700">{labelSources}</div>
              </div>

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

              <div className="flex-1 overflow-hidden p-3">
                {!sourceMode && (
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="text-center px-2">
                      <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-slate-200/70 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-slate-500" />
                      </div>
                      <p className="text-[15px] font-semibold text-slate-600">{leftTitle}</p>
                      {leftBody && (
                        <p className="mt-1 text-[13px] leading-6 text-slate-500">{leftBody}</p>
                      )}
                    </div>
                  </div>
                )}

                {sourceMode === "text" && (
                  <div className="flex flex-col h-full">
                    <textarea
                      value={textValue}
                      onChange={(e) => setTextValue(e.target.value)}
                      placeholder={labelEnterText}
                      className="w-full h-[360px] md:h-[520px] resize-none outline-none text-[15px] leading-6 bg-transparent placeholder:text-slate-400 text-slate-800"
                      aria-label={labelTabText}
                    />
                    <div className="mt-2">
                      <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-1 ${barClass}`} style={{ width: `${pct}%` }} />
                      </div>
                      <div className="mt-1 text-right text-xs">
                        <span
                          className={
                            overLimit
                              ? "text-red-600"
                              : nearLimit
                              ? "text-amber-600"
                              : "text-slate-500"
                          }
                        >
                          {charCount.toLocaleString()} / {MAX_CHARS.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

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
                      <div className="text-xl font-semibold text-slate-800">{labelChooseFileTitle}</div>
                      <div className="mt-4 text-sm text-slate-500">{labelAcceptedFormats}</div>
                      <div className="mt-1 text-xs text-slate-400">{labelFolderHint}</div>
                    </button>

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
                                <span className="text-sm font-medium block truncate">{file.name}</span>
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
                          placeholder={tr(
                            "summary.paste_urls_placeholder",
                            "Escribe o pega las direcciones web (una por línea)…"
                          )}
                          className="w-full h-32 resize-none outline-none text-sm placeholder:text-slate-400"
                        />
                        <div className="mt-3 flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setUrlInputOpen(false);
                              setUrlsTextarea("");
                            }}
                            className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-full"
                          >
                            {labelCancel}
                          </button>
                          <button
                            onClick={addUrlsFromTextarea}
                            className="px-4 py-1.5 text-sm font-medium bg-sky-600 text-white hover:bg-sky-700 rounded-full shadow-sm"
                          >
                            {labelSaveUrls}
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                      {urlItems.map((u) => (
                        <div
                          key={u.id}
                          className="flex items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-0.5">
                              {u.host}
                            </div>
                            <div className="text-sm text-slate-600 truncate">{u.url}</div>
                          </div>
                          <button
                            onClick={() => removeUrl(u.id)}
                            className="shrink-0 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title={labelRemove}
                            aria-label={labelRemove}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
                      <p className="text-xs text-amber-800 leading-relaxed">
                        • {labelUrlsNoteVisible}
                        <br />
                        • {labelUrlsNotePaywalled}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </aside>

            {/* ===== Panel Resultado (derecha) ===== */}
            <main className="min-h-[500px] rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm overflow-hidden flex flex-col relative">
              <div className="h-11 flex items-center justify-between px-2 border-b border-slate-200 bg-slate-50/60">
                <div className="flex items-center">
                  <LengthTab
                    active={summaryLength === "breve"}
                    label={LBL_SHORT}
                    onClick={() => handleLengthChange("breve")}
                    showDivider
                  />
                  <LengthTab
                    active={summaryLength === "medio"}
                    label={LBL_MED}
                    onClick={() => handleLengthChange("medio")}
                    showDivider
                  />
                  <LengthTab
                    active={summaryLength === "detallado"}
                    label={LBL_LONG}
                    onClick={() => handleLengthChange("detallado")}
                    showDivider={false}
                  />
                </div>

                <div className="flex items-center gap-1.5 pr-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="inline-flex items-center gap-2 h-8 px-3 rounded-md text-[13px] font-medium border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
                        <span className="uppercase text-slate-500">{outputLang}</span>
                        <svg
                          className="w-3.5 h-3.5 text-slate-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40 p-1.5">
                      <DropdownMenuItem onClick={() => setOutputLang("eus")} className="rounded-md">
                        {LBL_EUS}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setOutputLang("es")} className="rounded-md">
                        {LBL_ES}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setOutputLang("en")} className="rounded-md">
                        {LBL_EN}
                      </DropdownMenuItem>
                      <DropdownMenuArrow className="fill-white" />
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <button
                    onClick={() => {
                      clearRight();
                      setSourceMode(null);
                      setTextValue("");
                      setDocuments([]);
                      setDocumentsText([]);
                      setUrlItems([]);
                    }}
                    className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                    title={tr("summary.clear_all", "Limpiar todo")}
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-8 overflow-y-auto">
                {errorKind === "limit" ? (
                  <div className="h-full flex items-center justify-center">
                    <LimitCard />
                  </div>
                ) : loading ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-4">
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
                      <div
                        className="absolute inset-0 border-4 border-sky-500 rounded-full border-t-transparent animate-spin"
                        style={{ animationDuration: "0.8s" }}
                      />
                    </div>
                    <div className="text-sm font-medium text-slate-500 animate-pulse">
                      {tr("summary.generating_wait", "Laburpena sortzen...")}
                    </div>
                  </div>
                ) : result ? (
                  <div className="max-w-3xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[17px] leading-[1.7] text-slate-700 whitespace-pre-wrap selection:bg-sky-100 selection:text-sky-900"
                    >
                      {result}
                    </motion.div>

                    <div className="mt-12 flex items-center justify-between pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleSaveSummary}
                          disabled={isTooShortResult}
                          className={`inline-flex items-center gap-2 h-10 px-5 rounded-full text-sm font-semibold transition-all shadow-sm ${
                            savedToLibrary
                              ? "bg-green-500 text-white"
                              : isTooShortResult
                              ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                              : "bg-slate-900 text-white hover:bg-slate-800 active:scale-95"
                          }`}
                        >
                          {savedToLibrary ? (
                            <>
                              <Check className="w-4 h-4" />
                              {librarySavedMessage}
                            </>
                          ) : (
                            <>
                              <Plus className="w-4 h-4" />
                              {labelSaveSummary}
                            </>
                          )}
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopy(true)}
                          className="p-2.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors relative"
                          title={tr("summary.copy_clipboard", "Copiar al portapapeles")}
                        >
                          {copiedFlash ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </button>
                        <button
                          onClick={handleExportPdf}
                          className="p-2.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
                          title={tr("summary.export_pdf", "Exportar a PDF")}
                        >
                          <FileDown className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center px-6">
                    <div className="w-20 h-20 rounded-3xl bg-sky-50 flex items-center justify-center mb-6">
                      <FileText className="w-10 h-10 text-sky-400" />
                    </div>
                    <div className="max-w-sm">
                      <div className="text-xl font-semibold text-slate-800 mb-3">
                        {tr("summary.empty_result_title", "Laburpena sortu")}
                      </div>
                      <p className="text-slate-500 leading-relaxed">{labelHelpRight}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Botón flotante central */}
              {!loading && !result && !errorKind && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button
                    onClick={handleGenerate}
                    disabled={!hasValidInput}
                    className={`pointer-events-auto px-8 h-14 rounded-full text-lg font-bold shadow-xl transition-all flex items-center gap-3 ${
                      hasValidInput
                        ? "bg-sky-500 text-white hover:bg-sky-600 active:scale-95 shadow-sky-200"
                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    {labelGenerateFromSources}
                  </button>
                </div>
              )}

              {/* Alerta de cambios pendientes (si hay resultado pero se ha editado el texto) */}
              {isOutdated && result && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2"
                >
                  <button
                    onClick={handleGenerate}
                    className="flex items-center gap-2 px-6 h-11 bg-amber-500 text-white text-sm font-bold rounded-full shadow-lg hover:bg-amber-600 transition-colors"
                  >
                    <svg className="w-4 h-4 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {tr("summary.update_required", "Actualizar resumen")}
                  </button>
                </motion.div>
              )}
            </main>
          </motion.section>
        </div>
      </section>

      {/* Footer / Mobile floating trigger si fuera necesario (opcional) */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </>
  );
}