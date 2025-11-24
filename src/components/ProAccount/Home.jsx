// src/components/ProAccount/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Wrench,
  Folder,
  MessageSquare,
  Lightbulb,
  HelpCircle,
  Settings,
  Gem,
  ChevronDoubleLeft,
} from "lucide-react";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const baseBtnClasses =
    "w-full flex items-center gap-2 px-3 h-11 rounded-lg text-sm transition-colors";

  const labelClass = collapsed ? "hidden" : "inline";

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-900 flex">
      {/* SIDEBAR */}
      <aside
        className={`${
          collapsed ? "w-20" : "w-60"
        } bg-white border-r border-slate-200 flex flex-col py-6`}
      >
        {/* Marca */}
        <div className={`${collapsed ? "px-3" : "px-6"} mb-6`}>
          <span className="text-lg font-bold tracking-tight">Euskalia</span>
        </div>

        {/* Navegación principal */}
        <nav className="space-y-1 text-sm px-2">
          {/* Home */}
          <button
            className={`${baseBtnClasses} bg-slate-900 text-white font-medium`}
          >
            <span className="flex items-center justify-center w-7">
              <HomeIcon size={18} />
            </span>
            <span className={labelClass}>Home</span>
          </button>

          {/* Herramientas */}
          <button
            className={`${baseBtnClasses} hover:bg-slate-100 text-slate-700`}
          >
            <span className="flex items-center justify-center w-7">
              <Wrench size={18} />
            </span>
            <span className={labelClass}>Herramientas</span>
          </button>

          {/* Biblioteca */}
          <button
            className={`${baseBtnClasses} hover:bg-slate-100 text-slate-700`}
          >
            <span className="flex items-center justify-center w-7">
              <Folder size={18} />
            </span>
            <span className={labelClass}>Biblioteca</span>
          </button>

          {/* Chat con IA */}
          <button
            className={`${baseBtnClasses} hover:bg-slate-100 text-slate-700`}
          >
            <span className="flex items-center justify-center w-7">
              <MessageSquare size={18} />
            </span>
            <span className={labelClass}>Chat con IA</span>
          </button>

          {/* Separador */}
          <div className="border-t border-slate-200 my-4" />

          {/* Sugerencias */}
          <button
            className={`${baseBtnClasses} hover:bg-slate-100 text-slate-700`}
          >
            <span className="flex items-center justify-center w-7">
              <Lightbulb size={18} />
            </span>
            <span className={labelClass}>Sugerencias</span>
          </button>

          {/* Ayuda */}
          <button
            className={`${baseBtnClasses} hover:bg-slate-100 text-slate-700`}
          >
            <span className="flex items-center justify-center w-7">
              <HelpCircle size={18} />
            </span>
            <span className={labelClass}>Ayuda</span>
          </button>

          {/* Ajustes */}
          <button
            className={`${baseBtnClasses} hover:bg-slate-100 text-slate-700`}
          >
            <span className="flex items-center justify-center w-7">
              <Settings size={18} />
            </span>
            <span className={labelClass}>Ajustes</span>
          </button>
        </nav>

        {/* Botón contraer abajo del todo */}
        <div className="mt-auto px-2 pt-4 pb-3">
          <button
            onClick={handleToggle}
            className="w-full flex items-center justify-start gap-2 px-3 h-10 rounded-lg text-slate-600 hover:text-slate-900"
          >
            <ChevronDoubleLeft
              size={18}
              className={collapsed ? "rotate-180 transition-transform" : "transition-transform"}
            />
            {!collapsed && <span className="text-sm">Contraer</span>}
          </button>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex flex-col">
        {/* HEADER SUPERIOR */}
        <header className="h-16 px-8 flex items-center justify-between bg-white border-b border-slate-200">
          <div />
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 bg-white">
              <Gem size={18} className="text-slate-700" />
            </div>
            <button className="h-9 px-4 rounded-full border border-slate-200 bg-white text-sm font-medium hover:bg-slate-50">
              Plan Pro
            </button>
          </div>
        </header>

        {/* CONTENIDO */}
        <div className="flex-1 px-8 py-8">
          <h1 className="text-2xl font-semibold mb-4">
            Bienvenido a Euskalia Pro
          </h1>

          <section className="grid gap-6 md:max-w-3xl">
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
        </div>
      </main>
    </div>
  );
}
