import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Mail, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Footer() {
  const { t } = useTranslation();
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

  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto w-full px-6 pt-16 md:pt-20 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Columna 1: Sobre Euskalia */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              {tr("eusFooterColumnAboutTitle", "Sobre Euskalia")}
            </h3>

            <div className="divide-y divide-slate-200 dark:divide-slate-800 rounded-lg border border-slate-200 dark:border-slate-800">
              {aboutItems.map((item, idx) => (
                <details key={item.id} className="group open:bg-slate-50/50 dark:open:bg-slate-800/30">
                  <summary className="cursor-pointer list-none py-3 px-4 text-sm text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary flex items-center justify-between">
                    <span>{tr(item.titleKey, "")}</span>
                    <span className="ml-3 transition-transform group-open:rotate-180">▾</span>
                  </summary>
                  <div className="px-4 pb-3 text-xs text-slate-600 dark:text-slate-400">
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
              {tr("eusFooterColumnLegalTitle", "Legal")}
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

          {/* Columna 3: Contacto y CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              {tr("eusFooterColumnContactTitle", "Contacto y Comunidad")}
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

            <Button asChild className="w-full text-sm bg-primary text-white hover:bg-primary/90">
              <Link to="/pricing">
                <Sparkles size={16} className="mr-2" />
                {tr("eusFooterPlansButton", "Planes")}
              </Link>
            </Button>
          </div>
        </div>

        {/* Franja inferior: copyright centrado y enlaces en la esquina derecha */}
        <div className="mt-8 py-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            {/* Columna izquierda (espaciador) */}
            <div className="hidden md:block" />
            {/* Columna central: copyright centrado */}
            <div className="text-center">
              © {new Date().getFullYear()} Euskalia — {tr("eusFooterRights", "Todos los derechos reservados")}
            </div>
            {/* Columna derecha: enlaces a la esquina */}
            <div className="flex justify-end gap-4">
              <Link to="/cookies" className="hover:text-primary dark:hover:text-primary">
                {tr("eusFooterCookies", "Cookies")}
              </Link>
              <Link to="/aviso-legal" className="hover:text-primary dark:hover:text-primary">
                {tr("eusFooterLegalTitle1", "Aviso legal")}
              </Link>
              <Link to="/politica-de-privacidad" className="hover:text-primary dark:hover:text-primary">
                {tr("eusFooterLegalTitle2", "Política de privacidad")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
