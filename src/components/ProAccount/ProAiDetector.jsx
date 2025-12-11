import React, { useState, useRef } from "react";
import {
  Clipboard,
  FileText,
  UploadCloud,
  AlertTriangle,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { useTranslation } from "@/lib/translations";

export default function ProAiDetector() {
  const { t } = useTranslation();
  const tr = (k, f) => t(k) || f;

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // { level, percentage, reasons: [] }
  const fileInputRef = useRef(null);

  const handlePasteFromClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const clip = await navigator.clipboard.readText();
        if (clip) setText(clip);
      }
    } catch (e) {
      // silencio; simplemente no pega
      console.error("Clipboard error", e);
    }
  };

  const handleSampleText = () => {
    const sample =
      "La inteligencia artificial está transformando la forma en que trabajamos, estudiamos y escribimos a diario. Este texto de ejemplo sirve para probar el detector de IA de Euskalia.";
    setText(sample);
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result;
      if (typeof content === "string") {
        setText(content);
      }
    };
    reader.readAsText(file);
  };

  const handleAnalyze = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      // TODO: conectar aquí con tu API real de detección de IA
      // Por ahora usamos un análisis simulado basado en heurísticas muy simples.
      const len = text.length;
      const hasAiPatterns = /como modelo de inteligencia artificial|en conclusión|en resumen/i.test(
        text
      );

      let percentage = 35;
      if (len > 800) percentage += 15;
      if (hasAiPatterns) percentage += 25;
      if (len < 200) percentage -= 10;
      if (percentage < 5) percentage = 5;
      if (percentage > 95) percentage = 95;

      let level = "baja";
      if (percentage >= 70) level = "alta";
      else if (percentage >= 40) level = "media";

      const reasons = [];
      if (hasAiPatterns) {
        reasons.push(
          tr(
            "aiDetector_reason_ai_patterns",
            "Se han detectado expresiones típicas de textos generados por IA."
          )
        );
      }
      if (len > 800) {
        reasons.push(
          tr(
            "aiDetector_reason_long_text",
            "El texto es largo y mantiene un tono bastante uniforme."
          )
        );
      }
      if (reasons.length === 0) {
        reasons.push(
          tr(
            "aiDetector_reason_generic",
            "No se observan señales claras de contenido generado por IA."
          )
        );
      }

      setResult({
        level,
        percentage,
        reasons,
      });
    } catch (err) {
      console.error(err);
      setResult({
        level: "desconocida",
        percentage: null,
        reasons: [
          tr(
            "aiDetector_error_generic",
            "Ha ocurrido un error al analizar el texto. Inténtalo de nuevo en unos segundos."
          ),
        ],
      });
    } finally {
      setLoading(false);
    }
  };

  const hasResult = Boolean(result);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Título */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900 mb-1">
          {tr("aiDetector_title", "Detector de IA")}
        </h1>
        <p className="text-sm text-slate-600">
          {tr(
            "aiDetector_subtitle",
            "Comprueba si tu texto podría haber sido generado por inteligencia artificial. El análisis es orientativo y no una prueba definitiva."
          )}
        </p>
      </div>

      {/* Tarjeta principal */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 pt-4 pb-3 border-b border-slate-100">
          <p className="text-sm font-medium text-slate-700">
            {tr(
              "aiDetector_input_label",
              "Ingresa o pega el texto que quieres analizar"
            )}
          </p>
        </div>

        <div className="px-6 pt-4 pb-2 bg-slate-50/70">
          {/* Botones de acciones rápidas */}
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              type="button"
              onClick={handlePasteFromClipboard}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              <Clipboard size={16} />
              {tr("aiDetector_paste_button", "Pegar texto")}
            </button>

            <button
              type="button"
              onClick={handleSampleText}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              <FileText size={16} />
              {tr("aiDetector_sample_button", "Texto de muestra")}
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              <UploadCloud size={16} />
              {tr("aiDetector_upload_button", "Subir archivo")}
            </button>

            <input
              type="file"
              accept=".txt"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {/* Área de texto */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <textarea
              className="w-full h-56 resize-none border-0 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-0"
              placeholder={tr(
                "aiDetector_textarea_placeholder",
                "Escribe, pega o importa aquí el texto que quieres comprobar..."
              )}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          {/* Botón analizar */}
          <div className="flex justify-end mt-4 mb-1">
            <button
              type="button"
              disabled={loading || !text.trim()}
              onClick={handleAnalyze}
              className={`
                inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium
                ${
                  loading || !text.trim()
                    ? "bg-slate-300 text-slate-600 cursor-not-allowed"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }
              `}
            >
              {loading && <Loader2 size={16} className="animate-spin" />}
              {tr(
                "aiDetector_analyze_button",
                "Revisar si hay contenido de IA"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Resultado */}
      <div className="mt-6">
        {!hasResult && (
          <p className="text-xs text-slate-500">
            {tr(
              "aiDetector_result_empty",
              "Cuando analices un texto, aquí aparecerá una estimación sobre si podría haber sido generado por IA."
            )}
          </p>
        )}

        {hasResult && (
          <div className="mt-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              {result.level === "alta" ? (
                <AlertTriangle className="text-amber-500" size={20} />
              ) : (
                <ShieldCheck className="text-emerald-500" size={20} />
              )}

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {tr("aiDetector_result_title", "Resultado del análisis")}
                </p>
                <p className="text-xs text-slate-600">
                  {tr(
                    "aiDetector_result_subtitle",
                    "Recuerda: es una estimación aproximada, no una prueba definitiva."
                  )}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-800 mb-2">
              {tr(
                "aiDetector_result_probability",
                "Probabilidad estimada de que el texto sea generado por IA:"
              )}{" "}
              <span className="font-semibold">
                {result.level === "desconocida"
                  ? tr("aiDetector_result_unknown", "desconocida")
                  : `${result.level} ${
                      result.percentage != null ? `(${result.percentage}%)` : ""
                    }`}
              </span>
            </p>

            <ul className="mt-2 space-y-1 text-xs text-slate-700">
              {result.reasons?.map((reason, idx) => (
                <li key={idx}>• {reason}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
