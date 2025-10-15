import React, { useEffect, useRef, useState } from "react";

const OPTIONS = [
  { value: "eus", label: "euskera" },
  { value: "es",  label: "castellano" },
];

export default function Hero() {
  const [src, setSrc] = useState("eus");
  const [dst, setDst] = useState("es");
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const swap = () => {
    setSrc(dst);
    setDst(src);
  };

  // Cerrar al hacer click fuera
  useEffect(() => {
    const onDown = (e) => {
      if (leftRef.current && !leftRef.current.contains(e.target)) setOpenLeft(false);
      if (rightRef.current && !rightRef.current.contains(e.target)) setOpenRight(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  // Item del dropdown SIN icono
  const Item = ({ active, label, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full px-3 py-2.5 text-left text-[14px] rounded-md transition ${
        active ? "bg-slate-100" : "hover:bg-slate-100"
      } text-slate-800`}
    >
      {label}
    </button>
  );

  // Dropdown estilo tarjeta blanca con flecha
  const Dropdown = ({ anchorRef, open, selected, onSelect, align = "left" }) => {
    if (!open) return null;
    return (
      <div
        className={`absolute top-full mt-2 z-50 ${align === "right" ? "right-0" : "left-0"}`}
      >
        {/* Flecha */}
        <div className="relative">
          <svg width="20" height="10" viewBox="0 0 20 10" className="mx-auto block">
            <path d="M0,10 L10,0 L20,10" className="fill-white" />
            <path d="M0,10 L10,0 L20,10" className="fill-none stroke-slate-200" />
          </svg>
          {/* Tarjeta */}
          <div className="w-48 bg-white rounded-xl shadow-lg border border-slate-200 p-2">
            {OPTIONS.map((opt) => (
              <Item
                key={opt.value}
                label={opt.label}
                active={selected === opt.value}
                onClick={() => onSelect(opt.value)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#F4F8FF] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden w-full">
          {/* ===== Barra superior: grupo centrado (euskera · swap · castellano) ===== */}
          <div className="relative h-12 border-b border-slate-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-[auto_auto_auto] items-center gap-12">
                {/* Selector izquierda */}
                <div className="relative" ref={leftRef}>
                  <button
                    type="button"
                    onClick={() => { setOpenLeft((v) => !v); setOpenRight(false); }}
                    className="inline-flex items-center gap-2 px-2 py-1 text-[15px] font-medium text-slate-700 hover:text-slate-900 rounded-md"
                  >
                    <span>{OPTIONS.find(o => o.value === src)?.label}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="#334155"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <Dropdown
                    anchorRef={leftRef}
                    open={openLeft}
                    selected={src}
                    onSelect={(val) => { setSrc(val); setOpenLeft(false); }}
                    align="left"
                  />
                </div>

                {/* Botón swap */}
                <button
                  type="button"
                  aria-label="Intercambiar idiomas"
                  onClick={swap}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 hover:bg-slate-200 transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7h11M7 7l3-3M7 7l3 3" stroke="#475569" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 17H6M17 17l-3-3M17 17l-3 3" stroke="#475569" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Selector derecha */}
                <div className="relative" ref={rightRef}>
                  <button
                    type="button"
                    onClick={() => { setOpenRight((v) => !v); setOpenLeft(false); }}
                    className="inline-flex items-center gap-2 px-2 py-1 text-[15px] font-medium text-slate-700 hover:text-slate-900 rounded-md"
                  >
                    <span>{OPTIONS.find(o => o.value === dst)?.label}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="#334155"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <Dropdown
                    anchorRef={rightRef}
                    open={openRight}
                    selected={dst}
                    onSelect={(val) => { setDst(val); setOpenRight(false); }}
                    align="right"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===== Dos paneles ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[430px]">
            {/* Izquierdo */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200">
              <h1 className="text-[20px] font-medium text-slate-500 leading-snug">
                Escribe o pega el texto aquí.
              </h1>
            </div>
            {/* Derecho */}
            <div className="p-8 md:p-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
