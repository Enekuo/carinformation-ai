import React from "react";

/**
 * FramedPanel
 * - Marco externo (color/frameThickness/frameRadius)
 * - Interior blanco (innerRadius/padding)
 * - Tamaño controlable (width/height/maxWidth)
 * - Totalmente manipulable por props
 */
export function FramedPanel({
  children,
  frameColor = "#FF5A1F",   // naranja tipo Algor
  frameThickness = 18,      // grosor del marco
  frameRadius = 22,         // radio del marco
  innerRadius = 12,         // radio interior
  padding = 20,             // padding interior
  width = "100%",
  maxWidth = 980,
  height = "auto",
  shadow = "0 12px 30px rgba(15, 23, 42, 0.10)",
  className = "",
  style = {},
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        maxWidth,
        height,
        borderRadius: frameRadius,
        background: frameColor,
        padding: frameThickness,
        boxShadow: shadow,
        ...style,
      }}
    >
      <div
        className="bg-white w-full h-full"
        style={{
          borderRadius: innerRadius,
          padding,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Ejemplo de uso (puedes borrar esto si solo quieres el componente)
 */
export default function DemoFrame() {
  return (
    <section className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-16 flex justify-center">
        <FramedPanel
          frameColor="#FF5A1F"
          frameThickness={22}
          frameRadius={24}
          innerRadius={14}
          padding={18}
          maxWidth={980}
        >
          <div className="w-full">
            {/* Header falso como en la imagen */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="text-sm font-semibold text-slate-900">
                  Create a Card
                </div>
                <div className="text-xs text-slate-500">Algor Card</div>
              </div>
              <button className="h-8 w-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500">
                ✕
              </button>
            </div>

            {/* Body falso */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-1">
                <div className="text-xs font-semibold text-slate-700 mb-2">
                  Steps
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Step 1
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Step 2
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Step 3
                  </div>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="text-base font-semibold text-slate-900">
                  Insert content
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  Upload your material and click on Create Card.
                </p>

                {/* zona “preview” */}
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 h-[360px]" />

                {/* footer */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    0/100000 characters
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="h-9 px-3 rounded-lg border border-slate-200 text-sm text-slate-700 hover:bg-slate-50">
                      Previous step
                    </button>
                    <button className="h-9 px-4 rounded-lg bg-slate-200 text-sm text-slate-500 cursor-not-allowed">
                      Create Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FramedPanel>
      </div>
    </section>
  );
}
