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
      <div className="bg-white rounded-2xl border border-slate-200 px-6 py-6 min-h-[420px]">
        <p className="text-sm font-medium text-slate-700 text-center">
          Ingresa texto aquí o sube un archivo para revisar si hay contenido de
          IA.
        </p>

        {/* BOTONES CUADRADOS, CENTRADOS */}
        <div className="mt-8 flex flex-wrap gap-6 justify-center items-center">
          <button
            type="button"
            onClick={handlePasteFromClipboard}
            className="flex flex-col items-center justify-center w-40 h-24 rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm"
          >
            <Clipboard size={20} className="mb-1 text-slate-500" />
            <span>Pegar texto</span>
          </button>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center justify-center w-40 h-24 rounded-2xl border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm"
          >
            <UploadCloud size={20} className="mb-1 text-slate-500" />
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
      </div>
    </div>
  );
}
