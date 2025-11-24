import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Wrench,
  Folder,
  Settings,
  Gem,
  User,
  Globe,
  ChevronDown,
  MessageSquare,
  Lightbulb,
  LifeBuoy,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useTranslation } from "@/lib/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuArrow,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const { language, setLanguage } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const languages = [
    { code: "ES", name: "Español" },
    { code: "EUS", name: "Euskara" },
  ];

  const showText = !collapsed;

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-900 flex">
      {/* SIDEBAR PRO */}
      <aside
        className={`
          bg-white flex flex-col pt-6 pb-2
          transition-all duration-200
          ${collapsed ? "w-16 px-2" : "w-48 px-4"}
        `}
      >
        {/* Marca arriba (sin link) */}
        <div
          className={`mb-6 flex items-center ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <span
            className={`font-bold tracking-tight ${
              collapsed ? "text-base" : "text-xl"
            } ml-4`}
          >
            Euskalia
          </span>
        </div>

        {/* Contenido del sidebar */}
        <div className="flex-1 flex flex-col">
          {/* NAV LATERAL PRINCIPAL */}
          <nav className="space-y-1 text-sm">
            {/* Home */}
            <button
              className={`
                w-full flex items-center gap-2 px-3 h-11 rounded-lg
                bg-slate-900 text-white font-medium
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <HomeIcon size={18} />
              {showText && <span>Home</span>}
            </button>

            {/* Herramientas (grupo desplegable) */}
            <div className="space-y-1">
              <button
                onClick={() => setToolsOpen((v) => !v)}
                className={`
                  w-full flex items-center gap-2 px-3 h-11 rounded-lg
                  hover:bg-slate-100 text-slate-700
                  ${collapsed ? "justify-center" : "justify-between"}
                `}
              >
                <div className="flex items-center gap-2">
                  <Wrench size={18} />
                  {showText && <span>Herramientas</span>}
                </div>

                {/* Flecha solo cuando no está colapsado */}
                {showText && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      toolsOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </button>

              {/* Submenú: Traductor / Resumen */}
              {toolsOpen && !collapsed && (
                <div className="ml-3 mt-1 space-y-1">
                  <button
                    className="
                      w-full flex items-center
                      pl-6 pr-3 h-9
                      text-sm text-slate-700
                      hover:text-slate-900
                    "
                  >
                    <span className="mr-2 text-slate-200">│</span>
                    <span>Traductor</span>
                  </button>

                  <button
                    className="
                      w-full flex items-center
                      pl-6 pr-3 h-9
                      text-sm text-slate-700
                      hover:text-slate-900
                    "
                  >
                    <span className="mr-2 text-slate-200">└</span>
                    <span>Resumen</span>
                  </button>
                </div>
              )}
            </div>

            {/* Biblioteca */}
            <button
              className={`
                w-full flex items-center gap-2 px-3 h-11 rounded-lg
                hover:bg-slate-100 text-slate-700
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <Folder size={18} />
              {showText && <span>Biblioteca</span>}
            </button>

            {/* Chat con IA */}
            <button
              className={`
                w-full flex items-center gap-2 px-3 h-11 rounded-lg
                hover:bg-slate-100 text-slate-700
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <MessageSquare size={18} />
              {showText && <span>Chat con IA</span>}
            </button>
          </nav>

          {/* SEPARADOR FLEX PARA EMPUJAR EL BLOQUE INFERIOR HACIA ABAJO */}
          <div className="flex-1" />

          {/* BLOQUE INFERIOR: Sugerencias / Ayuda / Ajustes */}
          <div className="space-y-1 text-sm mb-2">
            {/* Sugerencias */}
            <button
              className={`
                w-full flex items-center gap-2 px-3 h-10 rounded-lg
                hover:bg-slate-100 text-slate-700 text-sm
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <Lightbulb size={18} />
              {showText && <span>Sugerencias</span>}
            </button>

            {/* Ayuda */}
            <button
              className={`
                w-full flex items-center gap-2 px-3 h-10 rounded-lg
                hover:bg-slate-100 text-slate-700 text-sm
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <LifeBuoy size={18} />
              {showText && <span>Ayuda</span>}
            </button>

            {/* Ajustes */}
            <button
              className={`
                w-full flex items-center gap-2 px-3 h-10 rounded-lg
                hover:bg-slate-100 text-slate-700 text-sm
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <Settings size={18} />
              {showText && <span>Ajustes</span>}
            </button>
          </div>

          {/* BOTÓN CONTRAER / EXPANDIR PEGADO AL FONDO */}
          <button
            onClick={() => setCollapsed((v) => !v)}
            className={`
              w-full flex items-center
              ${collapsed ? "justify-center" : "justify-start"}
              gap-2 h-9 text-sm text-slate-500 hover:text-slate-700
            `}
          >
            {collapsed ? (
              <ChevronsRight size={18} />
            ) : (
              <>
                <ChevronsLeft size={18} />
                <span>Contraer</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* COLUMNA DERECHA: HEADER + CONTENIDO */}
      <div className="flex-1 flex flex-col">
        {/* HEADER SUPERIOR (más bajo, sin línea inferior) */}
        <header className="h-16 px-8 flex items-center justify-between bg-white">
          {/* LADO IZQUIERDO vacío por ahora */}
          <div />

          {/* LADO DERECHO: Plan Pro + idioma + cuenta */}
          <div className="flex items-center gap-3">
            {/* Icono gema en círculo */}
            <div className="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center">
              <Gem size={18} className="text-slate-700" />
            </div>

            {/* Pill Plan Pro */}
            <button
              className="
                h-9 px-4 rounded-full border border-slate-200
                bg-white text-sm font-medium text-slate-800
                hover:bg-slate-50
              "
            >
              Plan Pro
            </button>

            {/* Selector de idioma */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="
                    h-9 px-3 rounded-full border border-slate-200 bg-white
                    flex items-center gap-1.5 text-sm font-medium text-slate-700
                    hover:bg-slate-50
                  "
                >
                  <Globe size={16} />
                  <span>{language}</span>
                  <ChevronDown size={14} className="opacity-70" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-40 bg-white rounded-lg shadow-lg border border-slate-200 mt-2"
              >
                <DropdownMenuArrow
                  className="fill-white stroke-slate-200"
                  width={14}
                  height={7}
                />
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onSelect={() => setLanguage(lang.code)}
                    className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 cursor-pointer"
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Círculo de cuenta */}
            <div className="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center">
              <User size={18} className="text-slate-700" />
            </div>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-1 px-8 py-8">
          <h1 className="text-2xl font-semibold mb-6">
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
        </main>
      </div>
    </div>
  );
}
