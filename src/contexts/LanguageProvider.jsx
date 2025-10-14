import React, { useState, useMemo, useCallback } from "react";
import { LanguageContext, translations } from "@/lib/translations";

const LanguageProvider = ({ children, defaultLang = "ES" }) => {
  const [language, setLanguage] = useState(defaultLang);

  const t = useCallback(
    (key, fallback) => {
      const parts = String(key).split(".");
      let node = translations;
      for (const p of parts) {
        node = node?.[p];
        if (node === undefined) return fallback ?? key;
      }
      if (node && typeof node === "object") {
        return (
          node[language] ??
          node.ES ??
          node.EU ??
          Object.values(node)[0] ??
          (fallback ?? key)
        );
      }
      return node ?? (fallback ?? key);
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      isLoading: false,
    }),
    [language, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;