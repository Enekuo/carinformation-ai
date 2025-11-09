import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Mail, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

/** Ikurriña mini (16x12) */
function FlagEUS({ className = "" }) {
  return (
    <svg viewBox="0 0 16 12" width="16" height="12" className={className} aria-hidden="true">
      <rect width="16" height="12" fill="#D52B1E" rx="2" />
      <path d="M0 0 L16 12 M16 0 L0 12" stroke="#007A3D" strokeWidth="3" opacity="0.95" />
      <rect x="6.5" y="0" width="3" height="12" fill="#FFF" />
      <rect x="0" y="4.5" width="16" height="3" fill="#FFF" />
    </svg>
  );
}

function FlagES() { return <span className="text-base" role="img" aria-label="España">🇪🇸</span>; }
function FlagUS() { return <span className="text-base" role="img" aria-label="United States">🇺🇸</span>; }

export default function Footer() {
  const { t, language, setLanguage } = useTranslation();
  const { toast } = useToast();
  const tr = (key, fallback) => t(key) || fallback;

  const [openLang, setOpenLang] = useState(false);
  const btnRef = useRef(null);

  const aboutItems = [
    { id: "what-is",     titleKey: "eusFooterAboutTitle1",   contentKey: "eusFooterAboutContent1" },
    { id: "how-works",   titleKey: "eusFooterAboutTitle2",   contentKey: "eusFooterAboutContent2" },
    { id: "listen-cont", titleKey: "eusFooterAboutTitle3",   contentKey: "eusFooterAboutContent3" },
    { id: "create-text", titleKey: "eusFooterAboutTitle4",   contentKey: "eusFooterAboutContent4" },
    { id: "create-sum",  titleKey: "eusFooterAboutTitle5",   contentKey: "eusFooterAboutContent5" },
  ];

  const legalItems = [
    { titleKey: "eusFooterLegalTitle1", path: "/aviso-legal" },
    { titleKey: "eusFooterLegalTitle2", path: "/politica-de-privacidad" },
    { titleKey: "eusFooterLegalTitle3", path: "/terminos-condiciones" },
    { titleKey: "eusFooterLegalTitle4", path: "/synthetic-voice-use" },
    { titleKey: "eusFooterLegalTitle5", path: "/cookies" },
  ];

  const handleClick = () => {
    toast({
      title: tr("eusToastFeatureNotImplementedTitle", "🚧 Funcionalidad no implementada"),
      description: tr("eusToastFeatureNotImplementedDescription", "Esta función aún no está implementada. ¡Pídela en tu próximo mensaje! 🚀"),
      variant: "default",
    });
  };

  const currentFlag = () => {
    if (language === "ES") return <FlagES />;
    if (language === "EN") return <FlagUS />;
    return <FlagEUS />;
  };

  const choose = (code) => {
    setLanguage(code);
    setOpenLang(false);
  };

  const LangItem = ({ active, onClick, children }) => (
    <button
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      role="menuitem"
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] 
      hover:bg-slate-50 dark:hover:bg-slate-800 
      ${active ? "bg-slate-50 dark:bg-slate-800" : ""}`}
    >
      {children}
    </button>
  );

  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto w-full px-6 pt-16 md:pt-20 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* Columna 1: Sobre Euskalia (lista plana) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              {tr("eusFooterColumnAboutTitle", "Euskaliari buruz")}
            </h3>
            <div className="border-t border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800">
              {aboutItems.map((item, idx) => (
                <details key={item.id} className="group">
                  <summary className="cursor-pointer list-none flex items-center justify-between py-3 md:py-3.5 text-slate-700 dark:text-slate-300">
                    <span className="text-sm md:text-[15px]">{tr(item.titleKey, "")}</span>
                    <span className="ml-3 text-slate-400 dark:text-slate-500 text-xl leading-none select-none">
                      <span className="group-open:hidden">＋</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <div className="pt-1 pb-4 text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                    {tr(item.contentKey, "").split("\n").map((line, i) => (
                      <React.Fragment key={`${idx}-${i}`}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Columna 2: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              {tr("eusFooterColumnLegalTitle", "Legeak")}
            </h3>
            <ul className="space-y-2">
              {legalItems.map((item) => (
                <li key={item.titleKey}>
                  <Link
                    to={item.path}
                    className="text-sm text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {tr(item.titleKey, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto + Idioma (botón + menú) + Planes */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              {tr("eusFooterColumnContactTitle", "Kontaktua eta Komunitatea")}
            </h3>

            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${tr("eusFooterContactEmailValue", "contacto@euskalia.ai")}`}
                className="flex items-center text-sm text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <Mail size={16} className="mr-2" />
                {tr("eusFooterContactEmailValue", "contacto@euskalia.ai")}
              </a>
              <div className="flex space-x-3">
                <a href="#" onClick={(e) => { e.preventDefault(); handleClick(); }} aria-label="Instagram"
                   className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleClick(); }} aria-label="Twitter"
                   className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleClick(); }} aria-label="LinkedIn"
                   className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Etiqueta Idioma */}
            <div className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              {tr("eusFooterLanguageLabel", "Idioma")}
            </div>

            {/* Botón pequeño que muestra SOLO la bandera activa */}
            <div className="relative mb-6">
              <button
                ref={btnRef}
                onClick={() => setOpenLang(v => !v)}
                onBlur={() => setTimeout(() => setOpenLang(false), 120)}
                type="button"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                aria-haspopup="menu"
                aria-expanded={openLang}
                aria-label="Cambiar idioma"
                title={tr("eusFooterLanguageLabel", "Idioma")}
              >
                {currentFlag()}
              </button>

              {/* Menú flotante estilo tarjeta (exacto al ejemplo) */}
              {openLang && (
                <div
                  role="menu"
                  className="absolute z-50 mt-2 w-40 rounded-2xl border border-slate-200 bg-white shadow-xl ring-1 ring-black/5 p-2
                             dark:bg-slate-900 dark:border-slate-700"
                >
                  <LangItem active={language==="ES"} onClick={() => choose("ES")}>
                    <FlagES /> <span className="ml-2 text-[13px]">ES</span>
                  </LangItem>
                  <LangItem active={language==="EN"} onClick={() => choose("EN")}>
                    <FlagUS /> <span className="ml-2 text-[13px]">EN</span>
                  </LangItem>
                  <LangItem active={language==="EUS"} onClick={() => choose("EUS")}>
                    <FlagEUS /> <span className="ml-2 text-[13px]">EUS</span>
                  </LangItem>
                </div>
              )}
            </div>

            {/* Botón Planes / Planak */}
            <Button asChild className="w-full text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
              <Link to="/pricing">
                <Sparkles size={16} className="mr-2" />
                {tr("eusFooterPlansButton", language === "EUS" ? "Planak" : "Planes")}
              </Link>
            </Button>
          </div>
        </div>

        {/* Franja inferior */}
        <div className="mt-8 py-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            <div className="hidden md:block" />
            <div className="text-center">
              © {new Date().getFullYear()} Euskalia — {tr("eusFooterRights", language === "EUS" ? "Eskubide guztiak erreserbatuta" : "Todos los derechos reservados")}
            </div>
            <div className="flex justify-end gap-4">
              <Link to="/cookies" className="hover:text-primary dark:hover:text-primary">
                {tr("eusFooterCookies", language === "EUS" ? "Cookieak" : "Cookies")}
              </Link>
              <Link to="/aviso-legal" className="hover:text-primary dark:hover:text-primary">
                {tr("eusFooterLegalTitle1", language === "EUS" ? "Lege-oharra" : "Aviso legal")}
              </Link>
              <Link to="/politica-de-privacidad" className="hover:text-primary dark:hover:text-primary">
                {tr("eusFooterLegalTitle2", language === "EUS" ? "Pribatutasun politika" : "Política de privacidad")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
