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

  /* === FOOTER === */
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

  authPage: {
    pageTitle:              { ES: "Iniciar sesión",                       EUS: "Saioa hasi" },
    pageDescription:        { ES: "Accede a tu cuenta para seguir usando Euskalia.", EUS: "Sartu zure kontura Euskalia erabiltzen jarraitzeko." },

    welcome:                { ES: "BIENVENIDO",                  EUS: "ONGI ETORRI" },
    continueWithGoogle:     { ES: "Continuar con Google",                 EUS: "Jarraitu Google-rekin" },
    or:                     { ES: "o",                                    EUS: "edo" },

    emailOrUserPlaceholder: { ES: "Introduce tu correo o nombre de usuario", EUS: "Idatzi zure posta edo erabiltzaile-izena" },
    signInButton:           { ES: "Continuar",                            EUS: "Jarraitu" },

    emailRequiredError:     { ES: "Por favor, introduce tu correo electrónico.", EUS: "Mesedez, idatzi zure posta elektronikoa." },
    emailInvalidError:      { ES: "El formato del correo no es válido.",  EUS: "Posta elektronikoaren formatua ez da baliozkoa." },
    passwordRequiredError:  { ES: "Por favor, introduce tu contraseña.",  EUS: "Mesedez, idatzi zure pasahitza." },

    legalText: {
      prefix:  { ES: "Al continuar, aceptas nuestros", EUS: "Jarraitzearen bidez, gure" },
      terms:   { ES: "Términos",                        EUS: "Baldintzak" },
      and:     { ES: "y",                               EUS: "eta" },
      privacy: { ES: "Política de Privacidad",         EUS: "Pribatutasun-politika" },
    },

    noAccount: { ES: "¿No tienes cuenta?", EUS: "Ez duzu konturik?" },
    signUp:    { ES: "Regístrate",         EUS: "Erregistratu" },
  },

  // PRICING PAGE //
  pricing: {
    title:    { ES: "Elige Tu Plan Perfecto", EUS: "Aukeratu Zure Plan Perfectua" },
    subtitle: { ES: "Desbloquea todo el potencial de Euskalia con el plan que mejor se adapte a ti.", EUS: "Askatu Euskaliaren ahalmen osoa, zure beharretara egokitzen den planarekin." },

    plan: {
      free:  { ES: "Prueba Gratis",  EUS: "Probatu Doan" },
      basic: { ES: "Plan Básico",    EUS: "Oinarrizko Plana" },
      pro:   { ES: "Plan Premium",   EUS: "Premium Plana" },
    },

    perMonth: { ES: "/ mes", EUS: "/ hilean" },
    perDay: {
      basic:   { ES: "≈ 0,17 € al día", EUS: "≈ 0,17 € egunean" },
      premium: { ES: "≈ 0,33 € al día", EUS: "≈ 0,33 € egunean" },
    },

    mostPopular: { ES: "Más popular", EUS: "Ezagunenak" },

    cta: {
      free:  { ES: "Empieza gratis",   EUS: "Hasi doan" },
      basic: { ES: "Elegir Básico",    EUS: "Aukeratu Oinarrizkoa" },
      pro:   { ES: "Elegir Premium",   EUS: "Aukeratu Premium" },
    },

    features: {
      // FREE
      library_free: { ES: "", EUS: "" },
      export_free:  { ES: "", EUS: "" },
      audio_free:   { ES: "", EUS: "" },
      ai_free:      { ES: "", EUS: "" },
      file_free:    { ES: "", EUS: "" },
      speed_free:   { ES: "", EUS: "" },

      // BASIC
      library_basic: { ES: "", EUS: "" },
      export_basic:  { ES: "", EUS: "" },
      audio_basic:   { ES: "", EUS: "" },
      ai_basic:      { ES: "", EUS: "" },
      file_basic:    { ES: "", EUS: "" },
      speed_basic:   { ES: "", EUS: "" },

      // PREMIUM
      library_premium: { ES: "", EUS: "" },
      export_premium:  { ES: "", EUS: "" },
      audio_premium:   { ES: "", EUS: "" },
      ai_premium:      { ES: "", EUS: "" },
      file_premium:    { ES: "", EUS: "" },
      speed_premium:   { ES: "", EUS: "" },
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

  // ========= LEGAL (DENTRO de translations) =========
  legalNotice: {
    title: {
      ES: "Aviso legal",
      EUS: "Lege oharra",
    },
    updated: {
      ES: "Última actualización: [__________]",
      EUS: "Azken eguneraketa: [__________]",
    },
    intro: {
      ES: "En cumplimiento de la Ley 34/2002 (LSSI-CE), este Aviso Legal regula el acceso y uso del sitio web Euskalia. El acceso al sitio implica la aceptación plena de este Aviso.",
      EUS: "34/2002 Legeari (LSSI-CE) jarraituz, Lege Ohar honek Euskalia webgunearen sarbidea eta erabilera arautzen du. Webgunera sartzeak ohar hau oso-osorik onartzea dakar.",
    },

    section1Title: { ES: "1. Información general", EUS: "1. Informazio orokorra" },
    section1Body: {
      ES: "Titular del sitio: [__________]. Nombre comercial: Euskalia. NIF/CIF: [__________]. Domicilio social: [__________]. Correo electrónico: [__________].",
      EUS:"Webgunearen titularra: [__________]. Izen komertziala: Euskalia. IFZ/Z: [__________]. Helbide soziala: [__________]. Helbide elektronikoa: [__________].",
    },

    section2Title: { ES: "2. Objeto del sitio", EUS: "2. Webgunearen xedea" },
    section2Body: {
      ES: "Euskalia ofrece herramientas de traducción y resumen de textos. Algunos servicios pueden requerir condiciones adicionales.",
      EUS:"Euskaliak testuen itzulpena eta laburpena egiteko tresnak eskaintzen ditu. Zerbitzu batzuek baldintza gehigarriak izan ditzakete.",
    },

    section3Title: { ES: "3. Condiciones de uso", EUS: "3. Erabilera-baldintzak" },
    section3Body: {
      ES: "El usuario se compromete a usar el sitio de forma lícita, sin vulnerar derechos de terceros ni la normativa vigente.",
      EUS:"Erabiltzaileak webgunea legez erabiltzeko konpromisoa hartzen du, hirugarrenen eskubideak ez urratuz eta indarreko araudia errespetatuz.",
    },

    section4Title: { ES: "4. Propiedad intelectual", EUS: "4. Jabetza intelektuala" },
    section4Body: {
      ES: "Los contenidos propios de Euskalia están protegidos. No se permite su reproducción, distribución o transformación salvo autorización.",
      EUS:"Euskaliaren eduki propioak babestuta daude. Baimenik gabe ezin da eduki horien erreprodukzioa, banaketa edo eraldaketa egin.",
    },

    section5Title: { ES: "5. Responsabilidad", EUS: "5. Erantzukizuna" },
    section5Body: {
      ES: "Euskalia no garantiza la disponibilidad continua del servicio ni se hace responsable del uso que el usuario haga de los contenidos.",
      EUS:"Euskaliak ez du bermatzen zerbitzuaren etengabeko eskuragarritasuna ezta erabiltzaileak edukiak nola erabiltzen dituenengatik erantzukizunik hartzen.",
    },

    section6Title: { ES: "6. Enlaces externos", EUS: "6. Kanpo estekak" },
    section6Body: {
      ES: "El sitio puede incluir enlaces a terceros. Euskalia no se hace responsable de los contenidos o políticas de dichos sitios.",
      EUS:"Webguneak hirugarrenen estekak izan ditzake. Euskaliak ez du lotutako guneen eduki edo politiken erantzukizunik hartzen.",
    },

    section7Title: { ES: "7. Protección de datos", EUS: "7. Datuen babesa" },
    section7Body: {
      ES: "El tratamiento de datos personales se describe en la Política de Privacidad. El usuario debe leerla antes de facilitar datos.",
      EUS:"Datu pertsonalen tratamendua Pribatutasun Politikan zehazten da. Erabiltzaileak datuak eman aurretik irakurri behar du.",
    },

    section8Title: { ES: "8. Cookies", EUS: "8. Cookieak" },
    section8Body: {
      ES: "Este sitio utiliza cookies propias y de terceros con fines técnicos y analíticos. El usuario puede configurar o rechazar el uso de cookies según lo indicado en la Política de Cookies.",
      EUS:"Gune honek cookie propioak eta hirugarrenenak erabiltzen ditu helburu tekniko eta analitikoekin. Erabiltzaileak cookieen erabilera konfiguratu edo baztertu dezake Cookieen Politikan adierazitakoaren arabera.",
    },

    section9Title: { ES: "9. Legislación y jurisdicción", EUS: "9. Aplikatu beharreko legea eta jurisdikzioa" },
    section9Body: {
      ES: "Este Aviso Legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de [__________].",
      EUS:"Lege Ohar hau Espainiako legeriarekin bat etorriz interpretatuko da. Edozein auziren kasuan, aldeek [__________]-ko Epaitegi eta Auzitegien jurisdikzioari men egingo diote.",
    },

    section10Title: { ES: "10. Contacto", EUS: "10. Harremana" },
    section10Body: {
      ES: "Para consultas o reclamaciones: correo electrónico [__________] y dirección postal [__________].",
      EUS:"Kontsulta edo erreklamazioetarako: harremanetarako e-posta [__________] eta helbide postala [__________].",
    }
  }
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
