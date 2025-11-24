import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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

export default function ProLayout() {
  const { language, setLanguage } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const languages = [
    { code: "ES", name: "Español" },
    { code: "EUS", name: "Euskara" },
  ];

  const showText = !collapsed;

  return (
    <div className="min-h-screen bg-[#F4F8FF] text-slate-900 flex">
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
              collapsed ? "text-base" : "text-2xl"
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
            <Link
              to="/pro"
              className={`
                w-full flex items-center gap-2 px-3 h-11 rounded-lg
                bg-slate-900 text-white font-medium
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <HomeIcon size={18} />
              {showText && <span>Home</span>}
            </Link>

            {/* Herramientas */}
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

                {showText && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      toolsOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </button>

              {toolsOpen && !collapsed && (
                <div className="ml-3 mt-1 space-y-1">
                  <Link
                    to="/pro/traductor"
                    className="
                      w-full flex items-center
                      pl-6 pr-3 h-9
                      text-sm text-slate-700
                      hover:text-slate-900
                    "
                  >
                    <span className="mr-2 text-slate-200">│</span>
                    <span>Traductor</span>
                  </Link>

                  <Link
                    to="/pro/resumen"
                    className="
                      w-full flex items-center
                      pl-6 pr-3 h-9
                      text-sm text-slate-700
                      hover:text-slate-900
                    "
                  >
                    <span className="mr-2 text-slate-200">└</span>
                    <span>Resumen</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Biblioteca */}
            <Link
              to="/pro/biblioteca"
              className={`
                w-full flex items-center gap-2 px-3 h-11 rounded-lg
                hover:bg-slate-100 text-slate-700
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <Folder size={18} />
              {showText && <span>Biblioteca</span>}
            </Link>

            {/* Chat con IA */}
            <Link
              to="/pro/chat-ia"
              className={`
                w-full flex items-center gap-2 px-3 h-11 rounded-lg
                hover:bg-slate-100 text-slate-700
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <MessageSquare size={18} />
              {showText && <span>Chat con IA</span>}
            </Link>
          </nav>

          {/* SEPARADOR */}
          <div className="flex-1" />

          {/* BLOQUE INFERIOR */}
          <div className="space-y-1 text-sm mb-2">
            <Link
              to="/pro/sugerencias"
              className={`
                w-full flex items-center gap-2 px-3 h-10 rounded-lg
                hover:bg-slate-100 text-slate-700 text-sm
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <Lightbulb size={18} />
              {showText && <span>Sugerencias</span>}
            </Link>

            <Link
              to="/pro/ayuda"
              className={`
                w-full flex items-center gap-2 px-3 h-10 rounded-lg
                hover:bg-slate-100 text-slate-700 text-sm
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <LifeBuoy size={18} />
              {showText && <span>Ayuda</span>}
            </Link>

            <Link
              to="/pro/ajustes"
              className={`
                w-full flex items-center gap-2 px-3 h-10 rounded-lg
                hover:bg-slate-100 text-slate-700 text-sm
                ${collapsed ? "justify-center" : ""}
              `}
            >
              <Settings size={18} />
              {showText && <span>Ajustes</span>}
            </Link>
          </div>

          {/* BOTÓN CONTRAER */}
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

      {/* HEADER + CONTENIDO */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="h-16 px-8 flex items-center justify-between bg-white">
          <div />

          <div className="flex items-center gap-3">
            {/* Icono gema */}
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

            {/* Idioma */}
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

            {/* Cuenta */}
            <div className="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center">
              <User size={18} className="text-slate-700" />
            </div>
          </div>
        </header>

        {/* AQUÍ CAMBIA EL CONTENIDO */}
        <main className="flex-1 px-8 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
