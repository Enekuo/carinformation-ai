import React from "react";

/* ====== DICCIONARIO (solo ES y EUS) ====== */
export const translations = {
  header: {
    brand:     { ES: "Meditation.AI", EUS: "Meditation.AI" },
    tools:     { ES: "Herramientas",  EUS: "Tresnak" },
    resources: { ES: "Recursos",      EUS: "Baliabideak" },
    pricing:   { ES: "Precios",       EUS: "Prezioak" },
    signIn:    { ES: "Iniciar sesión", EUS: "Hasi saioa" },
    startFree: { ES: "Comienza Gratis", EUS: "Doan hasi" },
  },

  toolsMenu: {
    users: {
      title: { ES: "Usuarios", EUS: "Erabiltzaileak" },
      description: {
        ES:  "Meditación personalizada para usuarios particulares.",
        EUS: "Meditazio pertsonalizatua erabiltzaile partikularrentzat.",
      },
    },
    companies: {
      title: { ES: "Empresas", EUS: "Enpresak" },
      description: {
        ES:  "Meditaciones personalizadas para empresas.",
        EUS: "Meditazio pertsonalizatuak enpresentzat.",
      },
    },
    creators: {
      title: { ES: "Creadores de contenido", EUS: "Eduki-sortzaileak" },
      description: {
        ES:  "Meditaciones personalizadas para creadores de contenido.",
        EUS: "Meditazio pertsonalizatuak eduki-sortzaileentzat.",
      },
    },
  },

  resourcesMenu: {
    support: { ES: "Soporte", EUS: "Laguntza" },
    aiChat:  { ES: "Chat de IA", EUS: "IA txata" },
  },

  /* === Placeholders del traductor === */
  translator: {
    left_placeholder:  { ES: "Escribe o pega el texto aquí.", EUS: "Idatzi edo itsatsi testua hemen." },
    right_placeholder: { ES: "Aquí aparecerá la traducción.", EUS: "Hemen agertuko da itzulpena." },

    /* === NUEVAS CLAVES para los botones/tooltip del Hero === */
    listen:     { ES: "Escuchar",          EUS: "Entzun" },
    copy:       { ES: "Copiar",            EUS: "Kopiatu" },
    copied:     { ES: "Copiado",           EUS: "Kopiatuta" },
    pdf:        { ES: "PDF",               EUS: "PDF" },
    clear_left: { ES: "Borrar",            EUS: "Garbitu" },
    dictate:    { ES: "Dictar",            EUS: "Diktatu" },
    listening:  { ES: "Escuchando…",       EUS: "Entzuten…" },
    loading:    { ES: "Traduciendo…",      EUS: "Itzultzen…" },
  },

  /* === Bloque de Resumen (Euskalia) === */
  summary: {
    title:                 { ES: "Resumen", EUS: "Laburpena" },
    sources_title:         { ES: "Fuentes", EUS: "Iturriak" },
    sources_tab_text:      { ES: "Texto", EUS: "Testua" },
    sources_tab_document:  { ES: "Documento", EUS: "Dokumentua" },
    sources_tab_url:       { ES: "URL", EUS: "URLa" },

    // Mensajes de ayuda (izquierda/derecha)
    create_help_left: {
      ES:  "Aquí aparecerán tus textos o documentos subidos.Puedes añadir archivos PDF, texto copiado, enlaces web...",
      EUS: "Hemen agertuko dira igo dituzun testuak edo dokumentuak. +Gehitu ditzakezu PDF fitxategiak, testu kopiatua, web estekak...",
    },
    create_help_right: {
      ES:  "Aquí verás el resultado generado por la IA, junto.",
      EUS: "Hemen ikusiko duzu adimen artifizialak sortutako emaitza.",
    },

    // --- Longitud del resumen (nuevas) ---
    length_short:  { ES: "Breve",     EUS: "Laburra" },
    length_medium: { ES: "Medio",     EUS: "Ertaina" },
    length_long:   { ES: "Detallado", EUS: "Zehatza" },  

    // CTA y buscador inferior
    generate_from_sources: { ES: "Generar resumen", EUS: "Laburpena sortu" },
    bottom_input_ph: {
      ES:  "Escribe el prompt aqui",
      EUS: "Idatzi zure prompta hemen.", 
    },
    generate_with_prompt:  { ES: "Generar", EUS: "Sortu" },

    // Texto (pestaña)
    enter_text_here_full: { 
      ES: "Escribe o pega tu texto aquí…", 
      EUS: "Idatzi edo itsatsi zure testua hemen…" 
    },

    // Documento (pestaña)
    choose_file_title: { 
      ES: "Elige tu archivo o carpeta", 
      EUS: "Aukeratu zure fitxategia edo karpeta." 
    },
    accepted_formats: { 
      ES: "Formatos admitidos: PDF, DOCX, TXT, MD, imágenes…", 
      EUS: "Onartutako formatuak: PDF, DOCX, TXT, MD, irudiak…" 
    },
    folder_hint: { 
      ES: "Puedes arrastrar varios archivos a la vez.", 
      EUS: "Fitxategi bat baino gehiago batera arrasta ditzakezu." 
    },

    // URL (pestaña)
    paste_urls_label: { 
      ES: "Pegar URLs*", 
      EUS: "URLak itsatsi*" 
    },
    add_url: { 
      ES: "Añadir URLs", 
      EUS: "URLak gehitu" 
    },
    save_urls: { 
      ES: "Guardar", 
      EUS: "Gorde" 
    },
    cancel: { 
      ES: "Cancelar", 
      EUS: "Ezeztatu" 
    },
    urls_note_visible: { 
      ES: "Solo se importará el texto visible del sitio web.", 
      EUS: "Webguneko testu ikusgarria bakarrik inportatuko da."
    },
    urls_note_paywalled: { 
      ES: "No se admiten artículos de pago.", 
      EUS: "Ordainpeko artikuluak ez dira onartzen." 
    },
    remove: { 
      ES: "Quitar", 
      EUS: "Kendu" 
    },
    paste_urls_placeholder: { 
      ES: "Introduce aquí una o más URLs (separadas por línea)", 
      EUS: "Itsatsi hemen URL bat edo gehiago (lerro bakoitzean bat)" 
    },

    /* === NUEVAS CLAVES: aviso límite plan gratis === */
    limit_title:   { ES: "Has alcanzado el límite del plan Gratis", EUS: "Doako planaren muga gainditu duzu" },
    limit_body:    { ES: "Puedes pegar hasta 12.000 caracteres por petición. Para textos más largos, divide el contenido o prueba el plan Premium con prueba gratuita.", EUS: "Eskaera bakoitzeko gehienez 12.000 karaktere itsatsi ditzakezu. Eduki luzeetarako, zatitu testua edo probatu Premium plana doako probarekin." },
    limit_cta:     { ES: "Probar Premium Gratis", EUS: "Probatu Premium doan" },
    limit_dismiss: { ES: "Seguir con plan Gratis", EUS: "Jarraitu doako planarekin" },
    limit_note:    { ES: "Límite actual: 12.000 caracteres por petición.", EUS: "Uneko muga: 12.000 karaktere eskaerako." },
  },

  /* === Bloque anidado (por si lo usas en otras vistas) === */
  supportPage: {
    title:       { ES: "Soporte", EUS: "Laguntza" },
    subtitle:    { ES: "¿Necesitas ayuda? Estamos aquí para ayudarte.", EUS: "Laguntza behar duzu? Hemen gaude laguntzeko." },
    kicker:      { ES: "¿Cómo podemos ayudarte?", EUS: "Nola lagun diezazukegu?" },
    description: { ES: "Cuéntanos tu consulta y te responderemos lo antes posible.", EUS: "Esaiguzu zure kontsulta eta ahal bezain laster erantzungo dizugu." },
    bubble:      { ES: "¿Tienes dudas? Escríbenos.", EUS: "Zalantzak al dituzu? Idatziguzu." },
    cta:         { ES: "Contactar", EUS: "Harremanetan jarri" },
    form: {
      name_label:          { ES: "Nombre", EUS: "Izena" },
      name_placeholder:    { ES: "Tu nombre", EUS: "Zure izena" },
      email_label:         { ES: "Email", EUS: "Posta elektronikoa" },
      email_placeholder:   { ES: "Tu email", EUS: "Zure posta elektronikoa" },
      subject_label:       { ES: "Asunto", EUS: "Gaia" },
      subject_placeholder: { ES: "¿Sobre qué necesitas ayuda?", EUS: "Zerez behar duzu laguntza?" },
      message_label:       { ES: "Mensaje", EUS: "Mezua" },
      message_placeholder: { ES: "Cuéntanos en qué podemos ayudarte", EUS: "Esaguzu nola lagundu diezazukegun" },
      submit:              { ES: "Enviar", EUS: "Bidali" },
      privacy_hint:        { ES: "Al enviar, aceptas nuestra", EUS: "Bidaltzean, onartzen duzu gure" },
      privacy_link:        { ES: "Política de privacidad", EUS: "Pribatutasun-politika" },
    },
  },

  /* === Claves planas que usa la página (support_*) === */
  support_title:        { ES: "Soporte", EUS: "Laguntza" },
  support_subtitle:     { ES: "¿Necesitas ayuda? Estamos aquí para ayudarte.", EUS: "Laguntza behar duzu? Hemen gaude laguntzeko." },
  support_kicker:       { ES: "¿Cómo podemos ayudarte?", EUS: "Nola lagun diezazukegu?" },
  support_cta:          { ES: "Contactar", EUS: "Harremanetan jarri" },
  support_bubble_text:  { ES: "¿Tienes dudas? Escríbenos.", EUS: "Zalantzak al dituzu? Idatziguzu." },

  support_form_name_label:          { ES: "Nombre", EUS: "Izena" },
  support_form_name_placeholder:    { ES: "Tu nombre", EUS: "Zure izena" },

  support_form_email_label:         { ES: "Email", EUS: "Posta elektronikoa" },
  support_form_email_placeholder:   { ES: "Tu email", EUS: "Zure posta elektronikoa" },

  support_form_subject_label:       { ES: "Asunto", EUS: "Gaia" },
  support_form_subject_placeholder: { ES: "¿Sobre qué necesitas ayuda?", EUS: "Zerez behar duzu laguntza?" },

  support_form_message_label:       { ES: "Mensaje", EUS: "Mezua" },
  support_form_message_placeholder: { ES: "Cuéntanos en qué podemos ayudarte", EUS: "Esaguzu nola lagundu diezazukegun" },

  support_form_submit:              { ES: "Enviar", EUS: "Bidali" },
  support_form_privacy_hint:        { ES: "Al enviar, aceptas nuestra", EUS: "Bidaltzean, onartzen duzu gure" },
  support_form_privacy_link:        { ES: "Política de privacidad", EUS: "Pribatutasun-politika" },

  /* === Aviso de funcionalidad no implementada === */
  not_implemented_title:    { ES: "Esta función no está implementada aún", EUS: "Funtzio hau oraindik ez dago ezarrita" },
  not_implemented_subtitle: { ES: "Puedes solicitarla en tu próximo prompt 🚀", EUS: "Hurrengo prompt-ean eska dezakezu 🚀" },
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
      return node[ctx.language] ?? node.ES ?? node.EUS ?? Object.values(node)[0] ?? (fallback ?? key);
    }
    return fallback ?? key;
  };

  return { ...ctx, t };
}
