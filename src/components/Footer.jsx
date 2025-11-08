import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/translations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
      <div className="max-w-7xl mx-auto w-full px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Columna 1: Sobre Euskalia */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              {tr("eusFooterColumnAboutTitle", "Sobre Euskalia")}
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {aboutItems.map((item) => (
                <AccordionItem value={item.id} key={item.id} className="border-b-slate-200 dark:border-b-slate-800">
                  <AccordionTrigger className="text-sm text-left hover:no-underline py-3 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary">
                    {tr(item.titleKey, "")}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs pt-1 pb-3 text-slate-600 dark:text-slate-400">
                    {tr(item.contentKey, "").split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2 text-slate-800 dark:text-slate-200">
                {tr("eusFooterLanguageTitle", "Idioma")}
              </h4>
              {/* Si tu LanguageSwitcher está en otra ruta, cambia el import arriba */}
              {/* <LanguageSwitcher /> */}
            </div>

            <Button asChild className="w-full text-sm bg-primary text-white hover:bg-primary/90">
              <Link to="/pricing">
                <Sparkles size={16} className="mr-2" />
                {tr("eusFooterPlansButton", "Planes")}
              </Link>
            </Button>
          </div>
        </div>

        {/* Fila inferior */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Euskalia — {tr("eusFooterRights", "Todos los derechos reservados")}</div>
          <div className="flex gap-4">
            <Link to="/cookies" className="hover:text-primary dark:hover:text-primary">{tr("eusFooterCookies", "Cookies")}</Link>
            <Link to="/aviso-legal" className="hover:text-primary dark:hover:text-primary">{tr("eusFooterLegalTitle1", "Aviso legal")}</Link>
            <Link to="/politica-de-privacidad" className="hover:text-primary dark:hover:text-primary">{tr("eusFooterLegalTitle2", "Política de privacidad")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
