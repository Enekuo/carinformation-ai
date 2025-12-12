import React, { useRef, useState } from "react";
import { Clipboard, UploadCloud } from "lucide-react";

export default function ProAiDetector() {
  const fileInputRef = useRef(null);
  const [text, setText] = useState("");

  // Resultado (por ahora null = estado vacío, como en tu captura con --%)
  const [result, setResult] = useState(null); // { ai: number, human: number }

  const handlePasteFromClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const clip = await navigator.clipboard.readText();
        if (clip) {
          setText(clip.slice(0, 5000));
        }
      }
    } catch (e) {
      console.error("Error al leer del portapapeles", e);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result;
      if (typeof content === "string") {
        setText(content.slice(0, 5000));
      }
    };
    reader.readAsText(file);
  };

  const aiValue = result?.ai;
  const humanValue = result?.human;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Título y subtítulo */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-900 mb-1">
          Detector de IA
        </h1>
        <p className="text-sm text-slate-600">
          Mantén la autenticidad de tus textos comprobando si podrían contener
          contenido generado por IA.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
        {/* CUADRO BLANCO (izquierda) */}
        <div className="relative bg-white rounded-2xl border border-slate-200 px-7 py-7 min-h-[460px]">
          {/* Área de texto arriba */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, 5000))}
            className="w-full h-40 resize-none border-none outline-none bg-transparent px-1 text-sm text-slate-700 placeholder:text-slate-500 focus:ring-0 overflow-y-auto mb-24"
            placeholder="Escribe o pega aquí el texto que quieres analizar..."
          />

          {/* BOTONES CENTRADOS VERTICALMENTE
              Solo se muestran cuando NO hay texto */}
          {text.length === 0 && (
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-8">
              <button
                type="button"
                onClick={handlePasteFromClipboard}
                className="flex flex-col items-center justify-center w-44 h-28 rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 shadow-sm"
              >
                <Clipboard size={22} className="mb-2 text-slate-500" />
                <span>Pegar texto</span>
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center w-44 h-28 rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 shadow-sm"
              >
                <UploadCloud size={22} className="mb-2 text-slate-500" />
                <span>Subir archivo</span>
              </button>

              <input
                type="file"
                accept=".txt"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          )}

          {/* Contador abajo a la derecha */}
          <div className="absolute right-6 bottom-5">
            <span className="text-xs text-slate-400">
              {text.length} / 5000
            </span>
          </div>
        </div>

        {/* PANEL DERECHO (resultados) */}
        <div className="bg-white rounded-2xl border border-slate-200 px-7 py-7 min-h-[460px] flex flex-col">
          {/* Porcentaje grande */}
          <div className="mt-2 text-center">
            <div className="text-6xl font-semibold tracking-tight text-slate-900">
              {result ? `${aiValue}%` : "--%"}
            </div>
            <div className="mt-2 text-sm text-slate-500">
              del texto podría estar generado por IA
            </div>
          </div>

          {/* Barra */}
          <div className="mt-6">
            <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: result ? `${aiValue}%` : "0%" }}
              />
            </div>
          </div>

          {/* Breakdown */}
          <div className="mt-7 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-sm text-slate-700">AI-generated</span>
              </div>
              <span className="text-sm text-slate-700">
                {result ? `${aiValue}%` : "--%"}
              </span>
            </div>

            <div className="h-px bg-slate-200" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="text-sm text-slate-700">Human-written</span>
              </div>
              <span className="text-sm text-slate-700">
                {result ? `${humanValue}%` : "--%"}
              </span>
            </div>

            <div className="h-px bg-slate-200" />
          </div>

          {/* Botón inferior */}
          <div className="mt-auto pt-6">
            <button
              type="button"
              className="w-full h-12 rounded-full border border-emerald-500 text-emerald-600 font-semibold text-sm hover:bg-emerald-50 transition disabled:opacity-50 disabled:hover:bg-transparent"
              disabled={!result}
            >
              ✨ Humanizar texto IA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
