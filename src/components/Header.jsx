import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  Languages,
  FileText,
  LifeBuoy,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "@/lib/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuArrow,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "ES", name: "Español" },
  { code: "EUS", name: "Euskara" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ➜ Estados separados para cada dropdown (Herramientas / Recursos)
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);

  const { toast } = useToast();
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Forzar euskera en la primera carga
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && !sessionStorage.getItem("lang-init")) {
        setLanguage("EUS");
        sessionStorage.setItem("lang-init", "1");
      }
    } catch {}
  }, [setLanguage]);

  const handleFeatureClick = () => {
    toast({
      title: t("not_implemented_title"),
      description: t("not_implemented_subtitle"),
    });
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  // --- Contenidos de los menús ---

  // ✅ HERRAMIENTAS: Traductor / Resumen (NUEVO en Herramientas)
  const tools = [
    {
      name: "Traductor",
      subtitle: "Euskera ↔ Español",
      icon: <Languages size={16} className="mr-2 text-slate-500" />,
      path: "/traductor",
    },
    {
      name: "Resumen",
      subtitle: "Resúmenes con IA",
      icon: <FileText size={16} className="mr-2 text-slate-500" />,
      path: "/resumen",
    },
  ];

  const ToolsDropdownContent = ({ inMobileMenu = false }) => (
    <div className={`p-1 ${inMobileMenu ? "w-full" : "w-56"}`}>
      {tools.map((item, idx) => (
        <Link
          key={idx}
          to={item.path}
          className="w-full text-left flex items-center p-2 text-[14px] font-medium text-slate-800 rounded-lg hover:bg-slate-100"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 mr-2">
            {item.icon}
          </span>
          <div className="flex flex-col">
            <span className="font-medium">{item.name}</span>
            {item.subtitle && (
              <span className="text-xs text-slate-500">{item.subtitle}</span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );

  // ✅ RECURSOS: Soporte / Chat de IA (RESTABLECIDO como estaba)
  const resources = [
    {
      name: t("resourcesMenu.support"),
      icon: <LifeBuoy size={16} className="mr-2 text-slate-500" />,
      isLink: true,
      path: "/soporte",
    },
    {
      name: t("resourcesMenu.aiChat"),
      icon: <MessageSquare size={16} className="mr-2 text-slate-500" />,
      isLink: false,
    },
  ];

  const ResourcesDropdownContent = ({ inMobileMenu = false }) => (
    <div className={`p-1 ${inMobileMenu ? "w-full" : "w-48"}`}>
      {resources.map((item, idx) =>
        item.isLink ? (
          <Link
            key={idx}
            to={item.path}
            className="w-full text-left flex items-center p-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.icon}
            {item.name}
          </Link>
        ) : (
          <button
            key={idx}
            className="w-full text-left flex items-center p-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
            onClick={handleFeatureClick}
          >
            {item.icon}
            {item.name}
          </button>
        )
      )}
    </div>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : "border-b border-slate-200/80"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="mr-8 flex items-center">
            <img
              src="/euskalia-logo.svg"
              alt="Euskalia"
              className="h-6 mr-2"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Euskalia
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {/* ===== Herramientas (con Traductor/Resumen) ===== */}
            <DropdownMenu open={isToolsMenuOpen} onOpenChange={setIsToolsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  onPointerEnter={() => setIsToolsMenuOpen(true)}
                  className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 h-10 px-3 rounded-md"
                >
                  {t("header.tools")}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isToolsMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                onPointerLeave={() => setIsToolsMenuOpen(false)}
                className="bg-white rounded-xl shadow-lg border border-slate-200 mt-2"
                align="start"
                sideOffset={8}
              >
                <DropdownMenuArrow className="fill-white stroke-slate-200" width={16} height={8} />
                <ToolsDropdownContent />
              </DropdownMenuContent>
            </DropdownMenu>

            {/* ===== Recursos (restaurado: Soporte / Chat de IA) ===== */}
            <DropdownMenu open={isResourcesMenuOpen} onOpenChange={setIsResourcesMenuOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  onPointerEnter={() => setIsResourcesMenuOpen(true)}
                  className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 h-10 px-3 rounded-md"
                >
                  {t("header.resources")}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isResourcesMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                onPointerLeave={() => setIsResourcesMenuOpen(false)}
                className="bg-white rounded-xl shadow-lg border border-slate-200 mt-2"
                align="start"
                sideOffset={8}
              >
                <DropdownMenuArrow className="fill-white stroke-slate-200" width={16} height={8} />
                <ResourcesDropdownContent />
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={handleFeatureClick}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 h-10 px-3 rounded-md"
            >
              {t("header.pricing")}
            </button>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900">
                <Globe size={16} />
                {language}
                <ChevronDown size={16} className="opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 bg-white rounded-lg shadow-lg border border-slate-200 mt-2">
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

          <Link to="/iniciar-sesion" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            {t("header.signIn")}
          </Link>

          <motion.button
            onClick={handleFeatureClick}
            className="h-9 px-4 bg-blue-600 text-white font-semibold text-sm rounded-full shadow-sm hover:bg-blue-700"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {t("header.startFree")}
          </motion.button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-slate-800">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* ===== Mobile ===== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[100] bg-white lg:hidden"
          >
            <div className="flex justify-between items-center h-16 px-4 border-b border-slate-200">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-900">
                Euskalia
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} className="text-slate-800" />
              </button>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-64px)]">
              <div className="flex flex-col gap-1">
                {/* Herramientas (Traductor/Resumen) */}
                <p className="px-2 text-sm font-semibold text-slate-500 mt-2 mb-1">
                  {t("header.tools")}
                </p>
                <div className="px-2">
                  <ToolsDropdownContent inMobileMenu />
                </div>

                <div className="px-2 my-2">
                  <DropdownMenuSeparator />
                </div>

                {/* Recursos (Soporte / Chat de IA) */}
                <p className="px-2 text-sm font-semibold text-slate-500 mt-2 mb-1">
                  {t("header.resources")}
                </p>
                <div className="px-2">
                  <ResourcesDropdownContent inMobileMenu />
                </div>

                <button
                  onClick={handleFeatureClick}
                  className="w-full text-left text-base font-medium h-12 px-2 rounded-md hover:bg-slate-100 mt-2"
                >
                  {t("header.pricing")}
                </button>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center justify-center gap-2 text-base h-12 w-full font-medium rounded-md hover:bg-slate-100">
                      <Globe size={18} />
                      <span>{languages.find((l) => l.code === language)?.name || language}</span>
                      <ChevronDown size={16} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56 bg-white">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onSelect={() => setLanguage(lang.code)}
                        className="text-base py-2.5 px-4 hover:bg-slate-100 cursor-pointer"
                      >
                        {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  to="/iniciar-sesion"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-12 w-full text-base font-medium rounded-md hover:bg-slate-100 flex items-center justify-center"
                >
                  {t("header.signIn")}
                </Link>
                <motion.button
                  onClick={handleFeatureClick}
                  className="w-full h-11 bg-blue-600 text-white font-bold text-base rounded-full"
                  whileTap={{ scale: 0.98 }}
                >
                  {t("header.startFree")}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
