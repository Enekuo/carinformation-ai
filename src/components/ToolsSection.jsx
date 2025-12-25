import React from "react";

export default function ToolsSection({ videoSrc = "", posterSrc = "" }) {
  return (
    <section className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto w-full px-6 py-16 md:py-20">
        {/* Header (opcional, puedes quitarlo si ya tienes título arriba en otra sección) */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Herramientas de Euskalia
          </h2>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-slate-600">
            Vista rápida del entorno Pro (video en bucle). La parte derecha la dejamos en blanco por ahora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Izquierda: Marco azul + vídeo */}
          <div className="w-full">
            <div
              className="relative w-full rounded-3xl bg-white shadow-sm border border-slate-200 overflow-hidden"
              style={{ aspectRatio: "16 / 10" }}
            >
              {/* Marco azul Euskalia */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 ring-1 ring-inset ring-blue-200/70" />
                <div className="absolute -inset-2 bg-blue-600/10 blur-2xl" />
              </div>

              {/* Contenido (video o placeholder) */}
              <div className="relative w-full h-full p-4 md:p-5">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  {videoSrc ? (
                    <video
                      className="w-full h-full object-cover"
                      src={videoSrc}
                      poster={posterSrc || undefined}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-white/70 border border-slate-200 flex items-center justify-center">
                          <span className="text-slate-700 text-xl">▶</span>
                        </div>
                        <div className="text-sm md:text-[15px] text-slate-700 font-medium">
                          Aquí irá el video en bucle
                        </div>
                        <div className="mt-1 text-xs md:text-sm text-slate-500">
                          (pásale <code className="px-1 py-0.5 bg-white/70 rounded">videoSrc</code> cuando lo tengas)
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Nota opcional debajo (puedes borrar si no la quieres) */}
            <div className="mt-4 text-xs md:text-sm text-slate-500">
              Recomendación: exporta el video a <span className="font-medium">MP4 (H.264)</span>, 10–18s, en bucle.
            </div>
          </div>

          {/* Derecha: en blanco por ahora */}
          <div className="w-full min-h-[220px] lg:min-h-[420px] rounded-3xl border border-dashed border-slate-200 bg-white/40" />
        </div>
      </div>
    </section>
  );
}
