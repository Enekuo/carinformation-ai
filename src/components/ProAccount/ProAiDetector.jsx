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
          console.log("Texto pegado desde el portapapeles:", clip);
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
        console.log("Contenido del archivo subido:", content);
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

      {/* CUADRO GRANDE BLANCO CON GRID (texto arriba, botones fijos debajo) */}
      <div className="bg-white rounded-2xl border border-slate-200 px-7 py-7 min-h-[420px] grid grid-rows-[180px_auto_auto] gap-4">
        {/* FILA 1: área de texto ARRIBA (escribe aquí) */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, 5000))}
          className="w-full h-full resize-none border-none outline-none bg-transparent px-1 text-sm text-slate-700 placeholder:text-slate-500 focus:ring-0 overflow-y-auto"
          placeholder="Escribe o pega aquí el texto que quieres analizar..."
        />

        {/* FILA 2: botones, siempre en el mismo sitio */}
        <div className="flex justify-center gap-8 items-center">
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

        {/* FILA 3: contador abajo a la derecha */}
        <div className="flex justify-end items-end pr-1">
          <span className="text-xs text-slate-400">
            {text.length} / 5000
          </span>
        </div>
      </div>
    </div>
  );
}
