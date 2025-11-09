import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Mail, Sparkles, Globe } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Footer() {
  const { t, language, setLanguage } = useTranslation();
  const { toast } = useToast();
  const tr = (key, fallback) => t(key) || fallback;

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

  const toggleLanguage = () => {
    setLanguage(language === "EUS" ? "ES" : "EUS");
  };

  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto w-full px-6 pt-16 md:pt-20 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Columna 1: lista plana */}
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

          {/* Columna 3: Contacto + idioma + Planak */}
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
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleClick(); }}
                  aria-label="Instagram"
                  className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleClick(); }}
                  aria-label="Twitter"
                  className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleClick(); }}
                  aria-label="LinkedIn"
                  className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Botón de idioma pequeño con icono + letras */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-2 h-9 px-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition mb-4"
              aria-label={language === "EUS" ? "Aldatu gaztelerara" : "Cambiar a euskera"}
              title={language === "EUS" ? "Euskara ▸ Español" : "Español ▸ Euskara"}
            >
              <Globe size={16} />
              <span className="text-xs tracking-wide">{language === "EUS" ? "EUS" : "ES"}</span>
            </button>

            {/* Espacio y botón Planak azul */}
            <div className="mt-4" />
            <Button asChild className="w-full text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
              <Link to="/pricing">
                <Sparkles size={16} className="mr-2" />
                {tr("eusFooterPlansButton", "Planak")}
              </Link>
            </Button>
          </div>
        </div>

        {/* Franja inferior */}
        <div className="mt-8 py-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            <div className="hidden md:block" />
            <div className="text-center">
              © {new Date().getFullYear()} Euskalia — {tr("eusFooterRights", "Eskubide guztiak erreserbatuta")}
            </div>
            <div className="flex justify-end gap-4">
              <Link to="/cookies" className="hover:text-primary dark:hover:text-primary">{tr("eusFooterCookies", "Cookieak")}</Link>
              <Link to="/aviso-legal" className="hover:text-primary dark:hover:text-primary">{tr("eusFooterLegalTitle1", "Lege-oharra")}</Link>
              <Link to="/politica-de-privacidad" className="hover:text-primary dark:hover:text-primary">{tr("eusFooterLegalTitle2", "Pribatutasun politika")}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
