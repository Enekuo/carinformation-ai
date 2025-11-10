import React from "react";

/* ====== DICCIONARIO (solo ES y EUS) ====== */
export const translations = {
  header: {
    tools:     { ES: "Herramientas",  EUS: "Tresnak" },
    resources: { ES: "Recursos",      EUS: "Baliabideak" },
    pricing:   { ES: "Precios",       EUS: "Prezioak" },
    signIn:    { ES: "Iniciar sesión", EUS: "Hasi saioa" },
    startFree: { ES: "Comienza Gratis", EUS: "Doan hasi" },
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
      ES:  "Aquí aparecerán tus textos o documentos subidos. Puedes añadir archivos PDF, texto copiado, enlaces web...",
      EUS: "Hemen agertuko dira igo dituzun testuak edo dokumentuak. Gehitu ditzakezu PDF fitxategiak, testu kopiatua, web estekak...",
    },
    create_help_right: {
      ES:  "Aquí verás el resultado generado por la IA, junto.",
      EUS: "Hemen ikusiko duzu adimen artifizialak sortutako emaitza.",
    },

    // --- Longitud del resumen (nuevas) ---
    length_short:  { ES: "Breve",     EUS: "Laburra" },
    length_medium: { ES: "Medio",     EUS: "Ertaina" },
    length_long:   { ES: "Detallado", EUS: "Zehatza" },

    // --- Selector de idioma (sin Auto) ---
    output_language:     { ES: "Idioma",     EUS: "Hizkuntza" },
    output_language_es:  { ES: "Castellano", EUS: "Gaztelania" },
    output_language_eus: { ES: "Euskera",    EUS: "Euskara" },
    output_language_en:  { ES: "Inglés",     EUS: "Ingelesa" },

    // CTA y buscador inferior
    generate_from_sources: { ES: "Generar resumen", EUS: "Laburpena sortu" },
    bottom_input_ph: {
      ES:  "Escribe el prompt aqui",
      EUS: "Idatzi zure prompta hemen.",
    },
    generate_with_prompt:  { ES: "Generar", EUS: "Sortu" },

    // Estado de carga
    loading_label: { ES: "Generando el resumen…", EUS: "Laburpena sortzen…" },

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
    limit_cta:     { ES: "Probar plan Premium", EUS: "Premium plana probatu" },
    limit_dismiss: { ES: "Seguir con plan Gratis", EUS: "Jarraitu doako planarekin" },
    limit_note:    { ES: "Límite actual: 12.000 caracteres por petición.", EUS: "Uneko muga: 12.000 karaktere eskaerako." },

    /* === NUEVAS CLAVES: aviso de función premium (prompt) === */
    premium_prompt_title: {
      ES: "Función disponible en el plan Premium",
      EUS: "Funtzioa hau Premium planean bakarrik"
    },
    premium_prompt_body: {
      ES: "El botón «Generar» usa un prompt: una instrucción para ajustar el resumen a tu gusto (tono, puntos clave, foco…). En el plan Gratis puedes pegar texto y generar el resumen normal. Para usar prompts avanzados, prueba el plan Premium.",
      EUS: "«Sortu» botoiak prompt bat erabiltzen du: laburpena zure nahien arabera doitzen duen jarraibidea (tonoa, gakoak, fokua…). Plan Doanean testua itsatsi eta ohiko laburpena sor dezakezu. Prompt aurreratuak erabiltzeko, probatu Premium plana."
    },
    premium_prompt_cta: {
      ES: "Probar plan Premium",
      EUS: "Premium plana probatu"
    },
    premium_prompt_close: {
      ES: "Entendido",
      EUS: "Ulertuta"
    },

    /* === NUEVAS CLAVES: aviso de contenido desactualizado === */
    outdated_notice: { ES: "El texto ha cambiado. Actualiza el resumen.", EUS: "Testua aldatu da. Eguneratu laburpena." },
    outdated_update: { ES: "Actualizar", EUS: "Eguneratu" },
    outdated_close:  { ES: "Ocultar aviso", EUS: "Abisua ezkutatu" },
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



  /* === SOPORTE === */

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




                                       /* ===FOOTER=== */

  eusFooterColumnAboutTitle:   { ES: "Sobre Euskalia",            EUS: "Euskaliari buruz" },
  eusFooterColumnLegalTitle:   { ES: "Legal",                     EUS: "Legeak" },
  eusFooterColumnContactTitle: { ES: "Contacto y Comunidad",      EUS: "Kontaktua eta Komunitatea" },
  eusFooterLanguageTitle:      { ES: "Idioma",                    EUS: "Hizkuntza" },
  eusFooterPlansButton:        { ES: "Planes",                    EUS: "Planak" },
  eusFooterRights:             { ES: "Todos los derechos reservados", EUS: "Eskubide guztiak erreserbatuta" },
  eusFooterCookies:            { ES: "Cookies",                   EUS: "Cookieak" },
  eusFooterContactEmailValue:  { ES: "contacto@euskalia.ai",      EUS: "contacto@euskalia.ai" },
  eusFooterLanguageLabel:      { ES: "Idioma",                    EUS: "Hizkuntza" },

 /* ==== SOBRE EUSKALIA ==== */
  eusFooterAboutTitle1: { ES: "¿Qué es Euskalia?", EUS: "Zer da Euskalia?" },
  eusFooterAboutContent1: {
    ES:  "Euskalia es una plataforma creada para que el euskera esté presente en la vida digital de todos. Con ayuda de la inteligencia artificial, permite traducir y resumir textos entre euskera, castellano, inglés y francés de forma natural, rápida y precisa. Su misión es facilitar la comprensión y el uso cotidiano del euskera, tanto para quienes lo dominan como para quienes lo están aprendiendo o necesitan entenderlo mejor.",
    EUS: "Euskalia euskarak eguneroko bizitza digitalean bere lekua izan dezan sortutako plataforma bat da. Adimen artifizialaren laguntzaz, testuak euskaraz, gaztelaniaz, ingelesez eta frantsesez itzuli eta laburbiltzen ditu modu naturalean, azkar eta zehaztasunez. Helburua euskara ulertzea eta erabilera erraztea da, bai hizkuntza menperatzen dutenentzat bai ikasten ari direnentzat."
  },

  eusFooterAboutTitle2: { ES: "¿Cómo funciona?", EUS: "Nola funtzionatzen du?" },
  eusFooterAboutContent2: {
    ES:  "Solo tienes que pegar un texto, subir un documento o indicar una URL. La IA analiza el contenido y genera una traducción o resumen claro en segundos, cuidando el sentido y el estilo original. No hace falta registrarse: todo es gratis, directo y sin complicaciones.",
    EUS: "Testua itsatsi, dokumentua igo edo URL bat jarri besterik ez duzu egin behar. Adimen artifizialak edukia aztertzen du eta segundo gutxitan itzulpen edo laburpen argi bat sortzen du, jatorrizko esanahia eta estiloa errespetatuz. Ez da beharrezkoa izena ematea: dena doakoa, zuzena eta erraza da."
  },

  eusFooterAboutTitle3: { ES: "Traductor", EUS: "Itzultzailea" },
  eusFooterAboutContent3: {
    ES:  "Euskalia ofrece un traductor inteligente diseñado para entender el contexto y mantener el sentido original de cada frase. Puedes traducir fácilmente entre euskera, castellano, inglés y francés, sin perder naturalidad ni matices. La inteligencia artificial se encarga de que el resultado sea fluido, coherente y preciso.",
    EUS: "Euskaliak testuingurua ulertzeko eta esaldi bakoitzaren jatorrizko esanahia mantentzeko diseinatutako itzultzaile adimenduna eskaintzen du. Erraz itzul dezakezu euskara, gaztelania, ingelesa eta frantsesa artean, naturaltasunik galdu gabe. Adimen artifizialak emaitz arina eta zehatza bermatzen du."
  },

  eusFooterAboutTitle4: { ES: "Crear resumen", EUS: "Laburpena sortu" },
  eusFooterAboutContent4: {
    ES:  "Convierte cualquier texto, documento o enlace en un resumen claro y directo en cuestión de segundos. La IA analiza el contenido, identifica las ideas principales y genera una versión breve que conserva la esencia del original. Perfecto para estudiantes, profesionales o cualquier persona que necesite entender un texto sin leerlo completo.",
    EUS: "Testua, dokumentua edo esteka oro segundo gutxitan laburpen argi eta zuzen batean bihurtzen du. Adimen artifizialak edukia aztertzen du, ideia nagusiak identifikatzen ditu eta jatorrizkoaren esentzia gordetzen duen bertsio laburra sortzen du. Ikasleentzat, profesionalentzat edo testu oso bat irakurri gabe ulertu nahi duen edonorentzat da baliagarria."
  },

  eusFooterAboutTitle5: { ES: "Planes", EUS: "Planak" },
  eusFooterAboutContent5: {
    ES:  "La versión gratuita ofrece lo esencial: traducir y resumir textos de forma rápida y sencilla. El plan de pago, además de eliminar los anuncios, permitirá disfrutar de menos limitaciones y acceder a una cuenta personal de Euskalia, donde podrás guardar tus textos, resúmenes y traducciones en una biblioteca privada para consultarlos cuando quieras.",
    EUS: "Doako bertsioak funtzio hauek eskaintzen ditu: testuak azkar eta erraz itzuli eta laburtzea. Ordainpeko planak, iragarkiak ezabatzeaz gain, murrizketa gutxiago izango ditu eta Euskaliako kontu pertsonal batera sartzeko aukera emango du, non zure testuak, laburpenak eta itzulpenak gordeko dituzun liburutegi pribatu batean, nahi duzunean berrikusteko."
  },

  eusFooterAboutTitle6: { ES: "Idiomas", EUS: "Hizkuntzak" },
  eusFooterAboutContent6: {
    ES:  "Euskalia funciona actualmente con cuatro idiomas principales: Euskera (EU), Castellano (ES), Inglés (GB) y Francés (FR). Puedes traducir o resumir en cualquiera de las combinaciones entre ellos. Aunque el enfoque principal es el uso y la comprensión del euskera, Euskalia está pensada para que el idioma conviva con naturalidad junto al español, el inglés y el francés.",
    EUS: "Euskalia gaur egun lau hizkuntza nagusirekin dabil: euskara (EUS), gaztelania (ES), ingelesa (GB) eta frantsesa (FR). Itzulpenak eta laburpenak haien arteko edozein konbinaziotan egin daitezke, nahiz eta helburu nagusia euskara erabiltzea eta ulertzea sustatzea izan. Euskalia euskara espainierarekin, ingelesarekin eta frantsesarekin modu naturalean bizikidetzan aritzeko pentsatuta dago."
  },


  eusFooterLegalTitle1: { ES: "Aviso legal",                EUS: "Lege-oharra" },
  eusFooterLegalTitle2: { ES: "Política de privacidad",     EUS: "Pribatutasun politika" },
  eusFooterLegalTitle3: { ES: "Términos y condiciones",     EUS: "Baldintzak eta erabilera" },
  eusFooterLegalTitle4: { ES: "Uso de APIs de IA",          EUS: "Adimen Artifizialeko API en erabilera" },
  eusFooterLegalTitle5: { ES: "Política de cookies",        EUS: "Cookie politika" },

/* ==== CTA FINAL ==== */

cta: {
  title: {
    ES: "✨ Lleva tu experiencia Euskalia al siguiente nivel",
    EUS: "✨ Eraman Euskaliako esperientzia hurrengo mailara",
  },
  subtitle: {
    ES: "Guarda tus textos, elimina los anuncios y disfruta sin límites.",
    EUS: "Gorde zure testuak, kendu iragarkiak eta gozatu mugarik gabe.",
  },
  button: {
    ES: "🚀 Empieza gratis",
    EUS: "🚀 Hasi doain",
  },
},


  // Toast genérico usado en el Footer (iconos sociales, etc.)
  eusToastFeatureNotImplementedTitle: {
    ES: "🚧 Funcionalidad no implementada",
    EUS: "🚧 Funtzionaltasuna ez dago erabilgarri oraindik"
  },
  eusToastFeatureNotImplementedDescription: {
    ES: "Esta función aún no está implementada. ¡Pídela en tu próximo mensaje! 🚀",
    EUS: "Funtzio hau oraindik ez dago martxan. Eskatu hurrengo mezua bidaltzean! 🚀"
  },
};



/* ====== i18n runtime ====== */
export const SUPPORTED_LANGS = ["ES", "EUS"]; // Si en el selector usas "EN", el sistema hace fallback a ES automáticamente.
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
