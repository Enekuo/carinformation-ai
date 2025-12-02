import React from "react";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6 mt-6 ml-10">
        Bienvenido a Euskalia Pro
      </h1>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h2 className="text-sm font-semibold mb-2">
            Próximamente en tu cuenta Pro
          </h2>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Historial de traducciones y resúmenes.</li>
            <li>• Límites ampliados y prioridad en la cola.</li>
            <li>• Panel con estadísticas de uso.</li>
            <li>• Opciones avanzadas para audio y documentos.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
