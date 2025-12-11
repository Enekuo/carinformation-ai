import React, { useRef } from "react";
import { Clipboard, UploadCloud } from "lucide-react";

export default function ProAiDetector() {
  const fileInputRef = useRef(null);

  const handlePasteFromClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const clip = await navigator.clipboard.readText();
        console.log("Texto pegado desde el portapapeles:", clip);
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
      console.log("Contenido del archivo subido:", content);
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Título y subtítulo */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900 mb-1">
          Detector de IA
        </h1>
        <p className="text-sm text-slate-600">
          Mantén la autenticidad de tus textos comprobando si podrían contener
          contenido generado por IA.
        </p>
      </div>

      {/* CUADRO GRANDE BLANCO */}
      <div className="bg-white rounded-2xl border border-slate-200 px-6 py-6 min-h-[260px]">
        <p className="text-sm font-medium text-slate-700">
          Ingresa texto aquí o sube un archivo para revisar si hay contenido de
          IA.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <button
            type="button"
            onClick={handlePasteFromClipboard}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
          >
            <Clipboard size={16} />
            Pegar texto
          </button>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
          >
            <UploadCloud size={16} />
            Subir archivo
          </button>

          <input
            type="file"
            accept=".txt"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}
