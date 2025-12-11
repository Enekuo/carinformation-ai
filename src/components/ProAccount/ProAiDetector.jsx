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

      {/* CUADRO GRANDE BLANCO */}
      <div className="bg-white rounded-2xl border border-slate-200 px-7 py-7 min-h-[460px] flex flex-col">
        {/* Frase más clara (gris claro) */}
        <p className="text-base font-medium text-slate-500 mb-5">
          Ingresa texto aquí o sube un archivo para revisar si hay contenido de IA.
        </p>

        {/* Botones */}
        <div className="flex justify-center gap-8 mb-6">
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

        {/* Área de texto dentro del cuadro */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, 5000))}
          className="w-full flex-1 min-h-[180px] resize-none border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-200"
          placeholder="Escribe o pega aquí el texto que quieres analizar..."
        />

        {/* Contador pequeño abajo a la derecha */}
        <div className="flex justify-end mt-2 pr-1">
          <span className="text-xs text-slate-400">
            {text.length} / 5000
          </span>
        </div>
      </div>
    </div>
  );
}
