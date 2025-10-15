import React from "react";

/* ====== DICCIONARIO (solo ES y EU) ====== */
export const translations = {
  header: {
    brand:     { ES: "Meditation.AI", EUS: "Meditation.AI" },
    tools:     { ES: "Herramientas",  EUS: "Tresnak" },
    resources: { ES: "Recursos",      EUS: "Baliabideak" },
    pricing:   { ES: "Precios",       EUS: "Prezioak" },
    signIn:    { ES: "Iniciar sesión",EUS: "Saioa hasi" },
    startFree: { ES: "Comienza Gratis", EUS: "Doan hasi" },
  },
  toolsMenu: {
    users: {
      title:       { ES: "Usuarios", EUS: "Erabiltzaileak" },
      description: {
        ES: "Meditación personalizada para usuarios particulares.",
        EU: "Meditazio pertsonalizatua erabiltzaile partikularrentzat.",
      },
    },
    companies: {
      title:       { ES: "Empresas", EUS: "Enpresak" },
      description: {
        ES: "Meditaciones personalizadas para empresas.",
        EU: "Meditazio pertsonalizatuak enpresentzat.",
      },
    },
    creators: {
      title:       { ES: "Creadores de contenido", EUS: "Eduki-sortzaileak" },
      description: {
        ES: "Meditaciones personalizadas para creadores de contenido.",
        EU: "Meditazio pertsonalizatuak eduki-sortzaileentzat.",
      },
    },
  },
  resourcesMenu: {
    support: { ES: "Soporte", EUS: "Laguntza" },
    aiChat:  { ES: "Chat de IA", EUS: "IA txata" },
  },
};

/* ====== i18n runtime ====== */
export const SUPPORTED_LANGS = ["ES", "EUS"];
export const LanguageContext = React.createContext(null);

export function LanguageProvider({ children, defaultLang = "ES" }) {
  const [language, setLanguage] = React.useState(
    SUPPORTED_LANGS.includes(defaultLang) ? defaultLang : "ES"
  );
  const value = React.useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Hook de traducción:
 *  t("ruta.a.clave", "fallback opcional")
 *  - Si falta la clave: devuelve fallback o la propia ruta.
 *  - Si la clave es objeto {ES, EU}: prioriza idioma → ES → EU → primer valor.
 */
export function useTranslation() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within a LanguageProvider");

  const getByPath = (obj, path) =>
    path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);

  const t = (key, fallback) => {
    const node = getByPath(translations, key);
    if (node === undefined) return fallback ?? key;
    if (typeof node === "string") return node;
    if (node && typeof node === "object") {
      return node[ctx.language] ?? node.ES ?? node.EU ?? Object.values(node)[0] ?? (fallback ?? key);
    }
    return fallback ?? key;
  };

  return { ...ctx, t };
} 