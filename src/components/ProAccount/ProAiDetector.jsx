import React, { useRef, useState } from "react";
import { Clipboard, UploadCloud } from "lucide-react";

export default function ProAiDetector() {
  const fileInputRef = useRef(null);
  const [text, setText] = useState("");

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

  return (
    <div className="max-w-4xl mx-auto">
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

      {/* CUADRO BLANCO */}
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
    </div>
  );
}
