import React from "react";

/* ====== DICCIONARIO (solo ES y EUS) ====== */
export const translations = {
  header: {
    tools:     { ES: "Herramientas",  EUS: "Tresnak" },
    resources: { ES: "Recursos",      EUS: "Baliabideak" },
    pricing:   { ES: "Precios",       EUS: "Prezioak" },
    signIn:    { ES: "Iniciar sesión", EUS: "Hasi saioa" },
    startFree: { ES: "Crear cuenta", EUS: "Sortu kontua" },
  },

  resourcesMenu: {
    support: { ES: "Soporte", EUS: "Laguntza" },
    aiChat:  { ES: "Chat de IA", EUS: "IA txata" },
  },
  // =========================
  //        TRADUCTOR
  // =========================
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
   save_button_label: {
    ES: "Guardar",
    EUS: "Gorde",
  },
    library_saved_toast: {
    ES: "Guardado en biblioteca",
    EUS: "Liburutegian gordeta",
  },





  /* === Bloque de Resumen (Euskalia) === */
  summary: {
    title:                 { ES: "Resumen", EUS: "Laburpena" },
    sources_title:         { ES: "Fuentes", EUS: "Iturriak" },
    sources_tab_text:      { ES: "Texto", EUS: "Testua" },
    sources_tab_document:  { ES: "Documento", EUS: "Dokumentua" },
    sources_tab_url:       { ES: "URL", EUS: "URL" },

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

    // Prompt
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

    ready_message: {
      ES: "Resumen listo · Guardar en tu biblioteca",
      EUS: "Laburpena prest · Gorde zure liburutegian",
    },

    save_button_label: {
      ES: "Guardar",
      EUS: "Gorde",
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








  // === CHAT IA / ASSISTANT === //
 assistant_title: {
  ES: "¿Cómo puedo ayudarte?",
  EUS: "Nola lagundu diezazaket?",
 },
 assistant_new_chat: {
  ES: "Nuevo chat",
  EUS: "Txat berria",
 },
 assistant_placeholder: {
  ES: "Pregunta lo que quieras",
  EUS: "Edozer galde dezakezu",
 },
 assistant_send: {
  ES: "Enviar",
  EUS: "Bidali",
 },








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





  
  

     // BENEFITS SECTION //
    homeBenefits: {
  title: {
    ES: "¿Qué podrás conseguir apoyándote en Euskalia?",
    EUS: "Zer lortu dezakezu Euskaliaren laguntzarekin?",
  },

  benefit1_title: {
    ES: "Traduce y resume sin esfuerzo",
    EUS: "Itzuli eta laburtu ahaleginik gabe",
  },
  benefit1_desc: {
    ES: "Convierte cualquier texto, URL o documento en información clara y entendible en segundos.",
    EUS: "Edozein testu, URL edo dokumentu segundo gutxitan ulertzeko moduko eduki argi bihurtu.",
  },

  benefit2_title: {
    ES: "Ahorra horas de trabajo",
    EUS: "Orduak aurreztu lanerako",
  },
  benefit2_desc: {
    ES: "Procesa contenido largo sin leerlo entero. Traduce y resume mientras haces otras tareas.",
    EUS: "Eduki luzeak osorik irakurri gabe prozesatu. Itzuli eta laburtu beste zeregin batzuk egiten dituzun bitartean.",
  },

  benefit3_title: {
    ES: "Cuida el euskera cada día",
    EUS: "Zaindu euskara egunero",
  },
  benefit3_desc: {
    ES: "Pequeñas acciones como traducir, leer y escuchar en euskera ayudan a mantener viva nuestra lengua.",
    EUS: "Itzultzea, irakurtzea eta euskaraz entzutea bezalako keinu txikiek gure hizkuntza bizirik mantentzen laguntzen dute.",
  },

  benefit4_title: {
    ES: "Mejora tu dominio del euskera",
    EUS: "Hobetu zure euskararen maila",
  },
  benefit4_desc: {
    ES: "Lee, traduce y escucha contenido real en euskera para mejorar tu oído, vocabulario y confianza.",
    EUS: "Euskarazko eduki errealak irakurri, itzuli eta entzun, belarria, hiztegia eta konfiantza lantzeko.",
  },

  benefit5_title: {
    ES: "Importa cualquier formato",
    EUS: "Formatu mota guztietatik inportatu",
  },
  benefit5_desc: {
    ES: "PDFs, DOCX, imágenes, páginas web… si tiene texto, Euskalia lo encuentra y lo trabaja por ti.",
    EUS: "PDFak, DOCX fitxategiak, irudiak, web-orriak… testua badu, Euskaliak aurkitu eta lantzen du.",
  },

  benefit6_title: {
    ES: "Sin registros ni instalaciones",
    EUS: "Erregistro eta instalaziorik gabe",
  },
  benefit6_desc: {
    ES: "Empieza a usar Euskalia directamente desde el navegador, sin cuentas obligatorias ni descargas.",
    EUS: "Erabili Euskalia zuzenean nabigatzailetik, konturik sortu gabe eta ezer deskargatu beharrik gabe.",
  },
},



// CARACTERÍSTICAS DE EUSKALIA //
  features: {
  title: {
    ES: "Características de Euskalia",
    EUS: "Euskaliaren ezaugarriak"
  },
  paragraph: {
    ES: "Euskalia combina traducción inteligente, resúmenes automáticos y procesamiento de URLs o documentos para que puedas trabajar con contenido en euskera sin esfuerzo. Detecta el contexto real de cada texto, genera versiones claras y precisas en segundos y, si lo necesitas, convierte el resultado en audio natural para escucharlo mientras estudias o haces otras tareas.Todo funciona de forma rápida, segura y pensada para ayudarte a mejorar tu dominio del euskera en tu día a día.",
    EUS: "Euskalia itzulpen adimentsua, laburpen automatikoei eta URL edo dokumentuen prozesamenduari konbinatzen du, euskarazko edukiarekin ahaleginik gabe lan egin dezazun. Testu bakoitzaren testuinguru erreala detektatzen du, argi eta zehatzak diren bertsioak segundo gutxitan sortzen ditu eta, behar izanez gero, emaitza audio natural batean bihurtzen du, ikasten ari zarenean edo beste lan batzuk egiten dituzunean entzuteko. Denak azkar, seguruan eta euskararen menperaketa hobetzen laguntzeko pentsatuta funtzionatzen du egunerokoan."
  },
  item1_title: {
    ES: "Generación de contenido",
    EUS: "Eduki sortzailea",
  },
  item1_desc: {
    ES: "Crea traducciones o resúmenes con IA en segundos.",
    EUS: "Sortu itzulpenak edo laburpenak IA-rekin segundu gutxitan",
  },
  item2_title: {
    ES: "Variedad de fuentes",
    EUS: "Iturri mota desberdinak",
  },
  item2_desc: {
    ES: "Euskalia funciona con diferentes tipos de entrada: texto, documentos, URLs...",
    EUS: "Euskaliak mota desberdinetako sarrerak onartzen ditu: testua, dokumentua, URLak...",
  },
  
  item3_title: {
    ES: "Traducción inteligente neurorreforzada",
    EUS: "Itzulpen adimendu neuroindartua",
  },
  item3_desc: {
    ES: "Euskalia entiende el contexto real y crea traducciones más naturales y precisas.",
    EUS: "Euskaliak testuingurua ulertu eta itzulpen natural eta zehatzagoak sortzen ditu.",
  },

  item4_title: {
    ES: "Control de longitud del texto",
    EUS: "Testuaren luzeraren kontrola",
  },
  item4_desc: {
    ES: "Decide si quieres un resultado breve, medio o detallado.",
    EUS: "Erabaki emaitza laburra, ertaina edo zehatza nahi duzun.",
  },
  item5_title: {
    ES: "Velocidad optimizada para el día a día",
    EUS: "Abiadura optimizatua eguneroko erabilerarako",
  },
  item5_desc: {
    ES: "Todo se procesa en segundos gracias a una arquitectura rápida y ligera.",
    EUS: "Guztia segundo gutxitan prozesatzen da arkitektura arin eta azkarrari esker.",
  },
  
  item6_title: {
    ES: "Privacidad garantizada",
    EUS: "Pribatutasuna",
  },
  item6_desc: {
    ES: "Tu contenido se elimina automáticamente. Nadie accede a tus datos.",
    EUS: "Zure edukia automatikoki ezabatzen da. Inork ez du datuetara sarbiderik.",
  },

  highlight1_title: {
    ES: "🧠Procesamiento inteligente del contenido",
    EUS: "🧠Edukien prozesamendu adimenduna",
  },
  highlight1_desc: {
    ES: "Euskalia analiza cada texto, documento o URL para entender realmente lo que dice. Detecta estructura, contexto y puntos clave para ofrecerte una traducción o resumen mucho más útil y adaptado a lo que necesitas.",
    EUS: "Euskaliak testu, dokumentu edo URL bakoitza aztertzen du benetan zer esaten duen ulertzeko. Egiturak, testuingurua eta puntu nagusiak detektatzen ditu, eta horri esker itzulpen edo laburpen erabilgarriagoa eskaintzen dizu.",
  },

  highlight2_title: {
    ES: "🎯Resultados claros y naturales",
    EUS: "🎯Emaitza argi eta naturalak",
  },
  highlight2_desc: {
    ES: "El contenido generado por Euskalia está pensado para que lo entiendas rápido. Traducciones limpias, resúmenes estructurados y textos que respetan el sentido original para que estudiar o trabajar sea más fácil y más rápido.",
    EUS: "Euskaliak sortutako edukia azkar ulertzeko pentsatuta dago. Itzulpen garbiak, egituratutako laburpenak eta jatorrizko esanahia errespetatzen duten testuak eskaintzen ditu, ikastea edo lan egitea errazagoa izan dadin.",
  },

  highlight3_title: {
    ES: "🔒Privacidad garantizada",
    EUS: "🔒Segurtasuna bermatuta",
  },
  highlight3_desc: {
    ES: "El contenido no se almacena de forma permanente. Tus textos, documentos y enlaces se procesan de forma segura y temporal.",
    EUS: "Edukia ez da behin betiko gordetzen. Zure testuak, dokumentuak eta estekak modu seguruan eta aldi baterako prozesatzen dira.",
  },
},




// Cómo funciona Euskalia
homeHowItWorks: {
  title: {
    ES: "¿Cómo funciona Euskalia?",
    EUS: "Nola funtzionatzen du Euskaliak ? ", 
  },

  intro: {
    ES: "Euskalia es una web de inteligencia artificial que te permite traducir y resumir textos en euskera de forma fácil y rápida. Solo tienes que pegar un texto, subir un documento o introducir una URL, elegir los idiomas y en segundos se obtiene una versión clara, comprensible y lista para usar. Está pensada para ayudarte en tu día a día, tanto si quieres traducir de otro idioma al euskera como del euskera a cualquier otro, y para que puedas utilizar el idioma sin esfuerzo ni complicaciones.",
    EUS: "Euskalia adimen artifiziala erabiltzen duen webgune bat da, formatu azkar eta errazean testuak euskerara itzuli eta balurtzeko gai dena. Testua itsatsi, dokumentu bat igo edo URL bat sartu besterik ez duzu egin behar. Hizkuntzak aukeratu, eta segundo gutxitan argi ulertzeko moduko bertsio garbi eta erabilgarri bat jasotzen da. Zure beharren arabera laguntzeko pentsatuta dago, bai beste hizkuntza batetik euskarara itzuli nahi baduzu, edo bai euskaratik beste edozein hizkuntzatara, ahalegin eta zailtasunik gabe. ",
  },

  offers_title: {
    ES: "🔍 ¿Qué ofrece Euskalia?",
    EUS: "🔍 Zer eskaintzen du Euskaliak?",
  },

  offers_item1: {
  ES: "Traduce textos largos al euskera o desde el euskera en cuestión de segundos.",
  EUS: "Itzuli testu luzeak euskarara edo euskaratik segundo gutxitan.",
},

offers_item2: {
  ES: "Convierte desde documentos completos o URLs.",
  EUS: "Bihurtu dokumentu bitartez edo URL bidez.",
},

offers_item3: {
  ES: "Trabaja con enlaces y páginas web sin tener que copiar todo el contenido a mano.",
  EUS: "Lan egin esteka edo web-orrien bitartez eduki osoa eskuz kopiatu gabe.",
},

offers_item4: {
  ES: "Combina información de diferentes fuentes en un único resultado ordenado.",
  EUS: "Batu iturri desberdinetako informazioa emaitza bakar eta ordenatu batean.",
},

offers_item5: {
  ES: "Ahorra tiempo en clase, en el trabajo o estudiando por tu cuenta.",
  EUS: "Aurreztu denbora ikasgelan, lanean edo zure kabuz ikasten ari zarenean.",
},

offers_item6: {
  ES: "Utiliza el euskera con más seguridad, aunque todavía no lo domines al cien por cien.",
  EUS: "Erabili euskara konfiantza handiagoz, oraindik guztiz menderatzen ez baduzu ere.",
},

  
},




 // ===================== FAQ SECTION ===================== //
    // ===================== INFO PRINCIPAL =====================

  euskalia_what_is_title: {
    ES: "¿Qué es Euskalia?",
    EUS: "Zer da Euskalia?",
  },
  euskalia_what_is_text: {
    ES: "Euskalia es una plataforma de inteligencia artificial diseñada para trabajadores, estudiantes y cualquier persona que necesite traducir o resumir contenido de forma rápida y sencilla, centrada en el público vasco y en ayudar a cualquiera que necesite trabajar con el euskera. Su objetivo es ayudarte a entender y producir contenido en menos tiempo, sin perder calidad, y permitiéndote usar el euskera en tu día a día sin barreras.",
    EUS: "Euskalia adimen artifizialeko plataforma bat da, langileei, ikasleei eta edukiak modu azkar eta erraz batean itzuli edo laburtu behar dituen edonori zuzendua, euskal herritarrei eta euskararekin lan egin behar duen edonori laguntzera bideratua. Helburua edukiak denbora gutxiagoan ulertzen eta sortzen laguntzea da, kalitatea galdu gabe eta euskara egunerokoan oztoporik gabe erabiltzeko aukera emanez.",
  },

  euskalia_goal_title: {
    ES: "Objetivo de Euskalia",
    EUS: "Euskaliaren helburua",
  },
  euskalia_goal_text: {
    ES: "El objetivo de Euskalia es impulsar el euskera en el ámbito digital, garantizando que las personas que viven, trabajan o estudian en nuestro entorno puedan usarlo como un idioma moderno, completo y plenamente funcional. Buscamos evitar la desinformación, las barreras tecnológicas y los problemas derivados de la falta de herramientas en euskera, ofreciendo soluciones de IA que permitan trabajar, aprender y comunicarse sin limitaciones lingüísticas.",
    EUS: "Euskaliaren helburua euskara eremu digitalean indartzea da, gure inguruan bizi, lan edo ikasten duten pertsonek hizkuntza moderno, oso eta guztiz funtzional gisa erabili ahal izan dezaten. Desinformazioa, oztopo teknologikoak eta euskarazko tresna faltak sortzen dituzten arazoak saihestu nahi ditugu, hizkuntza-mugarik gabe lan, ikasi eta komunikatzeko aukera emango duten AA soluzioak eskainiz.",
  },


    // ===================== FAQ SECTION =====================

  faq_title: {
    ES: "Preguntas frecuentes",
    EUS: "Ohiko galderak",
  },
  faq_subtitle: {
    ES: "Aquí respondemos las dudas más comunes de nuestros usuarios. Esta sección se actualiza constantemente para ayudarte mejor.",
    EUS: "Hemen gure erabiltzaileen ohiko zalantzak erantzuten ditugu. Atal hau etengabe eguneratzen da zuretzat hobe laguntzeko.",
  
  },

  // 1 — ¿Qué es Euskalia?
  faq_item1_question: {
    ES: "🧠 ¿Qué es Euskalia?",
    EUS: "🧠 Zer da Euskalia?",
  },
  faq_item1_answer: {
    ES: "Euskalia es una plataforma de inteligencia artificial diseñada para trabajadores, estudiantes y cualquier persona que necesite traducir o resumir contenido de forma rápida y sencilla. Está centrada en el público vasco o en cualquiera que necesite trabajar con el euskera.\n\nEuskalia está centrada en el euskera como idioma principal. Tanto la traducción como el resto de herramientas funcionan siempre en relación al euskera, utilizando otros idiomas como castellano, inglés o francés únicamente para convertir el contenido hacia el euskera o desde el euskera, según las necesidades.\n\nSu objetivo es ayudarte a entender y producir contenido en menos tiempo, sin perder calidad, y permitiéndote usar el euskera en tu día a día sin barreras.",
    EUS: "Euskalia adimen artifizialeko plataforma bat da, langileei, ikasleei eta edukiak modu azkar eta erraz batean itzuli edo laburtu behar dituen edonori zuzendua. Euskal herritarrei eta euskararekin lan egin behar duen edonori laguntzera bideratua dago.\n\nEuskalia euskararekin lotuta lan egiteko pentsatuta dago. Bai itzulpenak bai gainerako tresnek euskararekin lotuta funtzionatzen dute, eta gaztelania, ingelesa edo frantsesa bezalako beste hizkuntzak euskarara edo euskaratik edukia bihurtzeko erabiltzen dira, erabiltzaileen beharren arabera.\n\nHelburua edukiak denbora gutxiagoan ulertzen eta sortzen laguntzea da, kalitatea galdu gabe eta euskara egunerokoan oztoporik gabe erabiltzeko aukera emanez.",
  },

  // 2 — Objetivo de Euskalia
  faq_item2_question: {
    ES: "🎯 Objetivo de Euskalia",
    EUS: "🎯 Euskaliaren helburua",
  },
  faq_item2_answer: {
    ES: "El objetivo de Euskalia es impulsar el euskera en el ámbito digital, garantizando que las personas que viven, trabajan o estudian en nuestro entorno puedan usarlo como un idioma moderno, completo y plenamente funcional.\n\nBuscamos evitar la desinformación, las barreras tecnológicas y los problemas derivados de la falta de herramientas en euskera, ofreciendo soluciones de IA que permitan trabajar, aprender y comunicarse sin limitaciones lingüísticas.",
    EUS: "Euskaliaren helburua euskara eremu digitalean indartzea da, gure inguruan bizi, lan edo ikasten duten pertsonek hizkuntza moderno, oso eta guztiz funtzional gisa erabili ahal izan dezaten.\n\nDesinformazioa, oztopo teknologikoak eta euskarazko tresna faltak sortzen dituzten arazoak saihestu nahi ditugu, hizkuntza-mugarik gabe lan, ikasi eta komunikatzeko aukera emango duten AA soluzioak eskainiz.",
  },

  // 3
  faq_item3_question: {
    ES: "🌍 ¿Qué idiomas soporta Euskalia?",
    EUS: "🌍 Zein hizkuntza onartzen ditu Euskaliak?",
  },
  faq_item3_answer: {
    ES: "El idioma principal de Euskalia es el euskera. Toda la plataforma está diseñada para utilizar el euskera en relación con el inglés, el español y el francés.",
    EUS: "Hizkuntza nagusia euskara da. Plataforma osoa euskararekin lotuta erabiltzeko diseinatuta dago, ingelesa, gaztelania eta frantsesa tarteko direla.",
  },

  // 4
  faq_item4_question: {
    ES: "📝 ¿Cuál es la diferencia entre traducir y resumir?",
    EUS: "📝 Zein da itzultze eta laburtzearen arteko aldea?",
  },
  faq_item4_answer: {
    ES: "Traducir mantiene la longitud y estructura del texto original, pero lo convierte a otro idioma.\n\nResumir reduce el contenido a las ideas esenciales, manteniendo el idioma seleccionado.",
    EUS: "Itzultzeak jatorrizko testuaren luzera eta egitura mantentzen ditu, baina beste hizkuntza batera eramaten du.\n\nLaburtzeak edukia murrizten du eta ideia nagusiak uzten ditu, aukeratutako hizkuntza errespetatuz.",
  },

  // 5
  faq_item5_question: {
    ES: "📏 ¿Hay límites de caracteres o tamaño de archivo?",
    EUS: "📏 Ba al dago karaktere edo fitxategi-tamainaren mugarik?",
  },
  faq_item5_answer: {
    ES: "Sí, existe un límite de texto y tamaño de archivo para asegurar un uso estable del servicio.\n\nSi tu contenido es muy largo, recomendamos dividirlo en partes.",
    EUS: "Bai, testuaren eta dokumentu-tamainaren muga dago zerbitzua egonkor mantentzeko.\n\nEdukia oso luzea bada, zatika bidaltzea gomendatzen dugu.",
  },

  // 6
  faq_item6_question: {
    ES: "🔐 ¿Son seguras mis traducciones?",
    EUS: "🔐 Seguruak al dira nire itzulpenak?",
  },
  faq_item6_answer: {
    ES: "Tus textos solo se usan para generar el resultado solicitado y no se almacenan para fines externos.",
    EUS: "Zure testuak soilik eskatutako emaitzak sortzeko erabiltzen dira, eta ez dira kanpoko helburuetarako gordetzen.",
  },

  // 7
  faq_item7_question: {
  ES: "💼 ¿Qué opciones ofrece Euskalia?",
  EUS: "💼 Zein aukera eskaintzen ditu Euskaliak?",
},
faq_item7_answer: {
  ES: "Euskalia ofrece dos opciones: una versión gratuita sin registro para usar el traductor y el resumidor, y una cuenta de pago para quienes necesitan más capacidad y una experiencia completa. En el futuro se añadirán nuevas funciones y planes avanzados.",
  EUS: "Euskaliak bi aukera eskaintzen ditu: erregistro gabe doako bertsioa, itzultzailea eta laburtzailea erabiltzeko; eta kontu ordaindua, gaitasun handiagoa eta esperientzia osoa behar dutenentzat. Etorkizunean funtzio eta plan aurreratuak gehituko dira.",
},
  // 10
  faq_item10_question: {
    ES: "💬 ¿Cómo puedo dar mi opinión?",
    EUS: "💬 Nola bidal dezaket nire iritzia?",
  },
  faq_item10_answer: {
    ES: "Puedes escribirnos para sugerencias o mejoras a:\ninfo@euskalia.com",
    EUS: "Iradokizunak edo hobekuntzak bidali hona:\ninfo@euskalia.com",
  },



 // =========================
  //            CTA
  // =========================
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
      ES: "🚀 Empieza sin límites",
      EUS: "🚀 Hasi mugarik gabe",
    },
  },




  // INICIAR SESION //
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
  title: {
    ES: "Elige tu plan",
    EUS: "Aukeratu zure plana",
  },
  subtitle: {
    ES: "Empieza con el Plan Pro y pasa a Premium+ cuando necesites más potencia y menos límites.",
    EUS: "Hasi Pro planarekin eta pasa Premium+ planera potentzia eta muga gutxiago behar dituzunean.",
  },

  pro_name: {
    ES: "Plan Pro",
    EUS: "Plan Pro",
  },
  premium_name: {
    ES: "Plan Premium+",
    EUS: "Plan Premium+",
  },

  perMonth: {
    ES: "/ mes",
    EUS: "/ hilean",
  },

  pro_cta: {
    ES: "Elegir Pro",
    EUS: "Aukeratu Pro",
  },
  premium_cta_soon: {
    ES: "Próximamente",
    EUS: "Laster eskuragarri",
  },

  badge_popular: {
    ES: "Más popular",
    EUS: "Ezagunenak",
  },
  badge_soon: {
    ES: "Próximamente",
    EUS: "Laster",
  },

  features: {
    // ===== PLAN PRO – TUS FRASES =====

    limits_pro: {
      ES: "Limites mas extensos Traducciones y resúmenes con sin preocuparte por los límites básicos",
      EUS: "Muga zabalagoak, itzulpen eta laburpen gehiago oinarrizko mugak kezkatu gabe egiteko.",
    },
    account_pro: {
      ES: "Cuenta personal Tu proia cuenta con diferentes moduz y guardados",
      EUS: "Kontu pertsonala Zure kontua modu eta gordeketa desberdinekin.",
    },
    library_pro: {
      ES: "Biblioteca personal Guarda tus traducciones y resúmenes más importantes.",
      EUS: "Liburutegi pertsonala Zure itzulpen eta laburpen garrantzitsuenak gordetzeko.",
    },
    export_pro: {
      ES: "Opciones cómodas para copiar y descargar Copia o descarga el contenido generado y sigue trabajando fuera de Euskalia.",
      EUS: "Kopiatzeko eta deskargatzeko aukera erosoak Sortutako edukia kopiatu edo deskargatu eta Euskaliatik kanpo lanean jarraitu.",
    },
    upload_pro: {
      ES: "Subida de documentos de tamaño medio Trabaja con archivos cómodamente en euskera y otros idiomas.",
      EUS: "Tamaina ertaineko dokumentuak igotzea Euskaraz eta beste hizkuntzatan eroso lan egiteko.",
    },
    speed_pro: {
      ES: "Procesamiento más rápido y estable Pensado para estudiar y trabajar cada día con fluidez.",
      EUS: "6Prozesatze azkarragoa eta egonkorragoa Egunero ikasi eta lan egiteko pentsatua, arintasunez.",
    },

    // ===== PLAN PREMIUM+ – puedes cambiar estas frases cuando quieras =====

    library_premium: {
      ES: "Biblioteca ampliada para uso intensivo y proyectos grandes.",
      EUS: "Liburutegi handitua erabilera intentsiborako eta proiektu handietarako.",
    },
    export_premium: {
      ES: "Exportaciones avanzadas y más formatos profesionales (laster).",
      EUS: "Esportazio aurreratuak eta formatu profesional gehiago (laster).",
    },
    audio_premium: {
      ES: "Audio premium de mayor calidad y opción de escucha continua tipo podcast (laster).",
      EUS: "Kalitate handiagoko audio premiuma eta jarraian entzuteko aukera, podcast moduan (laster).",
    },
    ai_premium: {
      ES: "IA más potente y límites mucho más altos para un uso intensivo en euskera.",
      EUS: "IA indartsuagoa eta muga askoz handiagoak euskarazko erabilera intentsiborako.",
    },
    file_premium: {
      ES: "Soporte para documentos más grandes y complejos sin interrupciones.",
      EUS: "Dokumentu handiago eta konplexuagoak etenik gabe lantzeko euskarria.",
    },
    speed_premium: {
      ES: "Prioridad en la cola y velocidad máxima incluso en horas punta.",
      EUS: "Lehentasuna ilaran eta abiadura handiena puntako orduetan ere.",
    },
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





                                      // ========= LEGAL ========= //
// AVISO LEGAL //
legal_notice_title: {
  ES: "Aviso Legal",
  EUS: "Lege-oharra",
},

legal_notice_last_update: {
  ES: "Última actualización: [__________]",
  EUS: "Azken eguneratzea: [__________]",
},

legal_notice_section1_title: {
  ES: "1. Información general",
  EUS: "1. Informazio orokorra",
},

legal_notice_section1_p1: {
  ES: "De conformidad con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que la entidad responsable de la gestión y funcionamiento de este sitio web es:",
  EUS: "Uztailaren 11ko 34/2002 Legearen 10. artikuluarekin bat etorriz, Informazioaren Gizarteko Zerbitzuei eta Merkataritza Elektronikoari buruzko Legeak (LSSI-CE) xedatutakoa betez, honako hau jakinarazten da: webgune honen kudeaketaz eta funtzionamenduaz arduratzen den erakundea hau da:",
},

legal_notice_section1_field_name: {
  ES: "Nombre: Euskalia",
  EUS: "Izena: Euskalia",
},

legal_notice_section1_field_domain: {
  ES: "Dominio: https://euskalia.ai",
  EUS: "Domeinua: https://euskalia.ai",
},

legal_notice_section1_field_email: {
  ES: "Email: [__________]",
  EUS: "Emaila: [__________]",
},

legal_notice_section1_field_activity: {
  ES: "Actividad: Servicios digitales de traducción y resumen basados en Inteligencia Artificial.",
  EUS: "Jarduera: Itzulpen eta laburpen digitalen zerbitzuak, adimen artifizialean oinarrituak.",
},

legal_notice_section1_p2: {
  ES: "El acceso y uso del sitio web atribuye la condición de usuario, e implica la aceptación plena y sin reservas del presente Aviso Legal y de las condiciones aquí establecidas.",
  EUS: "Webgunera sartzeak eta hura erabiltzeak erabiltzaile izaera ematen du, eta lege-ohar hau eta hemen ezarritako baldintzak osorik eta erreserbarik gabe onartzea dakar.",
},
legal_notice_section2_title: {
  ES: "2. Objeto",
  EUS: "2. Xedea",
},

legal_notice_section2_p1: {
  ES: "El presente aviso legal regula el uso del sitio web Euskalia, cuyo propósito principal es ofrecer herramientas de traducción y resumen de textos entre euskera, castellano y otros idiomas, apoyadas en inteligencia artificial.",
  EUS: "Lege-ohar honek Euskalia webgunearen erabilera arautzen du. Euskaliaren helburu nagusia da euskararen, gaztelaniaren eta beste hizkuntza batzuen arteko itzulpen eta testu-laburpen tresnak eskaintzea, adimen artifizialaren laguntzarekin.",
},

legal_notice_section2_p2: {
  ES: "A través de esta plataforma, los usuarios pueden introducir textos, documentos o enlaces para obtener traducciones o resúmenes generados por IA, siempre dentro de los límites de uso establecidos.",
  EUS: "Plataforma honen bidez, erabiltzaileek testuak, dokumentuak edo estekak sar ditzakete IA bidez sortutako itzulpenak edo laburpenak lortzeko, ezarritako erabilera-mugen barruan.",
},

legal_notice_section3_title: {
  ES: "3. Condiciones de uso",
  EUS: "3. Erabilera baldintzak",
},

legal_notice_section3_p1: {
  ES: "El usuario se compromete a:",
  EUS: "Erabiltzaileak honako hauek betetzeko konpromisoa hartzen du:",
},

legal_notice_section3_li1: {
  ES: "Hacer un uso adecuado y lícito del sitio web.",
  EUS: "Webgunea behar bezala eta legez erabiltzea.",
},

legal_notice_section3_li2: {
  ES: "No utilizar el contenido con fines ilícitos o contrarios a la buena fe.",
  EUS: "Edukia legez kontrako edo fede onaren aurkako helburuetarako ez erabiltzea.",
},

legal_notice_section3_li3: {
  ES: "No provocar daños en los sistemas de Euskalia ni intentar acceder de forma no autorizada a las áreas restringidas.",
  EUS: "Euskaliaren sistemetan kalterik ez eragitea eta baimenik gabe sarbide mugatuko eremuetara sartzen saiatzea.",
},

legal_notice_section3_li4: {
  ES: "No introducir ni difundir virus informáticos u otros sistemas que puedan causar daños.",
  EUS: "Ez sartzea eta ez zabaltzea kalteak eragin ditzaketen birus informatikoak edo antzeko sistema kaltegarriak.",
},

legal_notice_section3_p2: {
  ES: "Euskalia se reserva el derecho de suspender o retirar el acceso a los usuarios que incumplan estas condiciones.",
  EUS: "Euskaliak eskubidea du baldintza hauek betetzen ez dituzten erabiltzaileei sarbidea eteteko edo kentzeko.",
},

legal_notice_section4_title: {
  ES: "4. Propiedad intelectual e industrial",
  EUS: "4. Jabetza intelektuala eta industriala",
},

legal_notice_section4_p1: {
  ES: "Todos los elementos que forman el sitio web (diseño, logotipos, textos, imágenes, software, código fuente...) son propiedad de Euskalia o cuentan con las licencias necesarias para su uso.",
  EUS: "Webgunea osatzen duten elementu guztiak (diseinua, logotipoak, testuak, irudiak, softwarea, kodea...) Euskaliaren jabetzakoak dira edo beharrezko lizentziak dituzte.",
},

legal_notice_section4_p2: {
  ES: "Queda prohibida la reproducción total o parcial de los contenidos sin autorización expresa y por escrito.",
  EUS: "Debekatuta dago edukiak osorik edo zatika erreproduzitzea, titularraren baimen espresu eta idatzirik gabe.",
},

legal_notice_section4_p3: {
  ES: "El uso de la marca Euskalia y su logotipo queda limitado exclusivamente a fines informativos y no puede utilizarse sin consentimiento previo.",
  EUS: "Euskalia marka eta logotipoaren erabilera helburu informatiboetara mugatzen da soilik, eta ezin da erabili titularraren aldez aurreko baimenik gabe.",
},
legal_notice_section5_title: {
  ES: "5. Responsabilidad",
  EUS: "5. Erantzukizuna",
},

legal_notice_section5_p1: {
  ES: "Euskalia no garantiza la disponibilidad continua del sitio ni la ausencia de errores en sus servicios.",
  EUS: "Euskaliak ez du bermatzen webgunearen erabilgarritasun jarraitua ezta bere zerbitzuetan akatsik ez egotea ere.",
},

legal_notice_section5_p2: {
  ES: "Los resultados generados por inteligencia artificial pueden contener imprecisiones, por lo que el usuario es responsable de su uso.",
  EUS: "Adimen artifizialak sortutako emaitzek zehaztasun faltak izan ditzakete; beraz, erabiltzailea da haien erabileraren erantzule bakarra.",
},

legal_notice_section5_p3: {
  ES: "Euskalia no se hace responsable de los daños derivados del uso indebido de la plataforma.",
  EUS: "Euskalia ez da erantzule izango plataforma desegoki erabiltzetik sortutako kalteen aurrean.",
},

legal_notice_section6_title: {
  ES: "6. Política de enlaces",
  EUS: "6. Esteken politika",
},

legal_notice_section6_p1: {
  ES: "El sitio web puede contener enlaces a páginas de terceros.",
  EUS: "Webguneak hirugarrenen webguneetarako estekak izan ditzake.",
},

legal_notice_section6_p2: {
  ES: "Euskalia no controla ni se responsabiliza de los contenidos o políticas de dichos sitios.",
  EUS: "Euskaliak ez ditu kontrolatzen eta ez da erantzule izango hirugarrenen webguneetatik eratorritako edukien edo politikaren aurrean.",
},

legal_notice_section7_title: {
  ES: "7. Protección de datos personales",
  EUS: "7. Datu pertsonalen babesa",
},

legal_notice_section7_p1: {
  ES: "Los datos personales serán tratados conforme a la Política de Privacidad disponible en el sitio web.",
  EUS: "Datu pertsonalak webgunean eskuragarri dagoen Pribatutasun Politikaren arabera tratatuko dira.",
},

legal_notice_section8_title: {
  ES: "8. Uso de cookies",
  EUS: "8. Cookieen erabilera",
},

legal_notice_section8_p1: {
  ES: "Este sitio utiliza cookies propias y de terceros con fines técnicos y analíticos.",
  EUS: "Webgune honek berezko eta hirugarrenen cookieak erabiltzen ditu helburu tekniko eta analitikoekin.",
},

legal_notice_section8_p2: {
  ES: "El usuario puede configurar o rechazar las cookies desde el banner o configuración.",
  EUS: "Erabiltzaileak cookieak konfiguratu edo baztertu ditzake banner bidez edo konfigurazio ataletik.",
},

legal_notice_section8_p3: {
  ES: "Para más información consulte la Política de Cookies.",
  EUS: "Informazio gehiago lortzeko, kontsultatu Cookieen Politika.",
},

legal_notice_section9_title: {
  ES: "9. Legislación aplicable y jurisdicción",
  EUS: "9. Aplikatu beharreko legeria eta jurisdikzioa",
},

legal_notice_section9_p1: {
  ES: "Las presentes condiciones se rigen por la legislación española.",
  EUS: "Baldintza hauek Espainiako legearen arabera arautzen dira.",
},

legal_notice_section9_p2: {
  ES: "En caso de conflicto, las partes se someten a los Juzgados y Tribunales de [__________].",
  EUS: "Gatazka izanez gero, aldeek [__________]-ko epaitegi eta auzitegien jurisdikzioari men egingo diote.",
},

legal_notice_section10_title: {
  ES: "10. Contacto",
  EUS: "10. Harremana",
},

legal_notice_section10_p1: {
  ES: "Para cualquier duda o consulta relacionada con este aviso legal puede contactar con nosotros:",
  EUS: "Lege-ohar honekin lotutako edozein zalantza edo galderatarako, jar zaitez gurekin harremanetan:",
},

legal_notice_section10_contact_email: {
  ES: "📧 Correo electrónico: []",
  EUS: "📧 Posta elektronikoa: []",
},

legal_notice_section10_contact_address: {
  ES: "📍 Dirección postal: []",
  EUS: "📍 Posta helbidea: []",
},

legal_notice_footer_note: {
  ES: "Este Aviso Legal está actualizado a fecha [__________].",
  EUS: "Lege ohar hau eguneratuta dago honako data honetan: [__________].",
},
  
// POLITÍCA DE PRIVACIDAD // 
privacyPolicy: {
  title: {
    ES: "Política de privacidad",
    EUS: "Pribatutasun politika",
  },
  
  intro: {
    ES: "Esta Política de Privacidad explica cómo se tratan los datos personales en Euskalia y qué derechos tienen las personas usuarias cuando utilizan la plataforma.",
    EUS: "Pribatutasun politika honek azaltzen du Euskalian datu pertsonalak nola tratatzen diren eta erabiltzaileek zer eskubide dituzten plataforma erabiltzen dutenean.",
  },

  section1Title: {
    ES: "1. Ámbito de aplicación",
    EUS: "1. Aplikazio-eremua",
  },
  section1Body: {
    ES: "Euskalia se compromete a respetar la privacidad de quienes visitan y utilizan su web. Esta Política de Privacidad informa sobre el tratamiento de los datos personales recogidos a través del sitio y de los servicios ofrecidos en él. El uso del sitio web implica la aceptación de esta Política y del tratamiento de los datos conforme a la normativa vigente.",
    EUS: "Euskaliak bere webgunea bisitatzen eta erabiltzen duten pertsonen pribatutasuna errespetatzeko konpromisoa hartzen du. Pribatutasun politika honek webgunearen eta bertan eskaintzen diren zerbitzuen bidez jasotako datu pertsonalen tratamendua azaltzen du. Webgunea erabiltzeak politika hau eta indarreko araudia onartzea dakar.",
  },

  section2Title: {
    ES: "2. Responsable del tratamiento de los datos",
    EUS: "2. Datuen tratamenduaren arduraduna",
  },
  section2Body: {
    ES: "Los datos personales facilitados a través de Euskalia se integran en un tratamiento gestionado por el titular del proyecto.",
    EUS: "Euskaliaren bidez emandako datu pertsonalak proiektuaren titularrak kudeatutako tratamendu batean sartzen dira.",
  },
  section2Details: {
    ES: "Titular del sitio: [__________]\nNombre comercial: Euskalia\nActividad: Servicios digitales de traducción y resumen de textos con apoyo de inteligencia artificial.\nCorreo electrónico de contacto: [__________]\nDominio web: https://euskalia.ai",
    EUS: "Webgunearen titularra: [__________]\nIzen komertziala: Euskalia\nJarduera: Testuen itzulpena eta laburpena egiteko zerbitzu digitalak, adimen artifizialaren laguntzarekin.\nHarremanetarako posta elektronikoa: [__________]\nWebgunearen domeinua: https://euskalia.ai",
  },

  section3Title: {
    ES: "3. Finalidades del tratamiento",
    EUS: "3. Tratamenduaren helburuak",
  },
  section3Body: {
    ES: "Los datos podrán utilizarse para: facilitar información sobre el uso de la plataforma, responder consultas o solicitudes de soporte, enviar comunicaciones informativas o novedades (si se ha dado el consentimiento) y mejorar la experiencia de uso mediante análisis estadísticos agregados. La persona usuaria puede darse de baja de estas comunicaciones en cualquier momento a través de los enlaces de cancelación o escribiendo al correo de contacto indicado.",
    EUS: "Datuak honako helburu hauekin erabili ahal izango dira: plataformaren erabilerari buruzko informazioa ematea, kontsultei edo laguntza-eskaerei erantzutea, informazio- edo berritasun-komunikazioak bidaltzea (baimena eman bada) eta esperientzia hobetzea, estatistika-analisien bidez. Erabiltzaileak edozein unetan baja eman dezake komunikazio horietatik, mezuetan agertzen den baja-estekaren bidez edo adierazitako kontaktu-helbidera idatziz.",
  },

  section4Title: {
    ES: "4. Sobre esta Política de Privacidad",
    EUS: "4. Pribatutasun politika honi buruz",
  },
  section4Body: {
    ES: "Euskalia mantiene un compromiso firme con la protección de los datos personales de sus usuarios. Esta Política busca ser clara y sencilla, para que cada persona pueda decidir de forma informada qué información facilita y con qué finalidad se utilizará.",
    EUS: "Euskaliak konpromiso sendoa du bere erabiltzaileen datu pertsonalen babesarekin. Politika honek argia eta ulerterraza izan nahi du, pertsona bakoitzak modu informatuan erabaki ahal izan dezan zer informazio ematen duen eta zertarako erabiliko den.",
  },

  section5Title: {
    ES: "5. Confidencialidad y seguridad",
    EUS: "5. Konfidentzialtasuna eta segurtasuna",
  },
  section5Body: {
    ES: "Los datos personales se tratarán de forma confidencial y se aplicarán medidas técnicas y organizativas razonables para evitar accesos no autorizados, pérdidas o alteraciones. No obstante, ningún sistema es completamente infalible y no se puede garantizar una seguridad absoluta frente a incidentes externos.",
    EUS: "Datu pertsonalak modu konfidentzialean tratatuko dira, eta neurri tekniko eta antolaketa-neurri egokiak aplikatuko dira sartze ez-baimenduak, galerak edo aldaketak saihesteko. Hala ere, ez dago erabat hutsik egiten ez duen sistemarik, eta ezin da kanpoko gertaeren aurkako segurtasun absolutua bermatu.",
  },

  section6Title: {
    ES: "6. Derechos de las personas usuarias",
    EUS: "6. Erabiltzaileen eskubideak",
  },
  section6Body: {
    ES: "De acuerdo con la normativa aplicable, las personas usuarias pueden ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de sus datos. Para ello, pueden dirigirse al correo de contacto indicado, señalando de forma clara el derecho que desean ejercer. En caso necesario, también podrán presentar una reclamación ante la autoridad de control competente.",
    EUS: "Aplikatu beharreko araudiaren arabera, erabiltzaileek honako eskubideak erabil ditzakete: datuetara sartzea, zuzentzea, ezabatzea, aurka egitea, tratamendua mugatzea eta datuen eramangarritasuna. Horretarako, adierazitako kontaktu-helbidera jo dezakete, erabili nahi duten eskubidea argi adieraziz. Beharrezkoa bada, kontrol-agintari eskudunaren aurrean erreklamazioa ere aurkez dezakete.",
  },

  section7Title: {
    ES: "7. Envíos comerciales y comunicaciones",
    EUS: "7. Merkataritza-mezuak eta komunikazioak",
  },
  section7Body: {
    ES: "Euskalia no realiza prácticas de envío masivo de correos electrónicos no solicitados (spam). Cualquier comunicación informativa o promocional se enviará únicamente cuando exista una base legítima o se haya obtenido el consentimiento previo, e incluirá siempre un mecanismo claro para cancelar la suscripción.",
    EUS: "Euskaliak ez du nahi ez diren posta elektroniko masiborik bidaltzen (spam). Edozein komunikazio informatibo edo sustapen-mezu legitimazio egokiarekin edo aldez aurreko baimenarekin bakarrik bidaliko da, eta beti izango du harpidetza uzteko mekanismo argia.",
  },

  section8Title: {
    ES: "8. Publicidad",
    EUS: "8. Publizitatea",
  },
  section8Body: {
    ES: "En la versión gratuita de Euskalia podrían mostrarse anuncios. En ningún caso se cederán datos personales a terceros con fines publicitarios sin una base legal adecuada o sin el consentimiento expreso de la persona usuaria.",
    EUS: "Euskaliaren doako bertsioan iragarkiak erakutsi daitezke. Inolaz ere ez zaizkie datu pertsonalak hirugarrenei emango helburu publizitarioekin, baimen espliziturik edo lege-oinarri egokirik gabe.",
  },

  section9Title: {
    ES: "9. Comentarios y opiniones de terceros",
    EUS: "9. Hirugarrenen iritziak eta iruzkinak",
  },
  section9Body: {
    ES: "Euskalia no se hace responsable de las opiniones, valoraciones o comentarios que terceras personas puedan publicar sobre el servicio en redes sociales, plataformas externas o sitios web ajenos al control del proyecto.",
    EUS: "Euskalia ez da erantzule izango hirugarren pertsonek sare sozialetan, kanpoko plataformetan edo proiektuaren kontrolpean ez dauden webguneetan zerbitzuari buruz argitaratu ditzaketen iritzi, balorazio edo iruzkinengatik.",
  },

  section10Title: {
    ES: "10. Modificaciones de la Política",
    EUS: "10. Politikaren aldaketak",
  },
  section10Body: {
    ES: "Euskalia se reserva el derecho de modificar esta Política de Privacidad para adaptarla a cambios legislativos, criterios de las autoridades de control o mejoras técnicas del servicio. La versión vigente estará siempre disponible en el sitio web y, en caso de cambios relevantes, se informará a las personas usuarias y se recabará de nuevo el consentimiento cuando sea necesario.",
    EUS: "Euskaliak eskubidea du Pribatutasun politika hau aldatzeko, lege-aldaketetara, kontrol-agintarien irizpideetara edo zerbitzuaren hobekuntza teknikoetara egokitzeko. Indarrean dagoen bertsioa beti egongo da webgunean eskuragarri, eta aldaketa esanguratsuak eginez gero, erabiltzaileei jakinaraziko zaie eta, beharrezkoa bada, baimena berriro eskatuko da.",
  },
  footerNote: {
    ES: "Esta Política de Privacidad está actualizada a fecha [__________].",
    EUS: "Pribatutasun-politika hau eguneratuta dago honako data honetan: [__________].",
  },
},


// ====== TÉRMINOS Y CONDICIONES – EUSKALIA ====== //

terms_title: {
  ES: "Términos y Condiciones de Uso",
  EUS: "Erabilera-baldintzak",
},

terms_section1_title: {
  ES: "1. Objeto y aceptación",
  EUS: "1. Xedea eta onarpena",
},

terms_section1_p1: {
  ES: "Los presentes Términos y Condiciones regulan el acceso, navegación y uso de la plataforma Euskalia, así como la contratación de los servicios ofrecidos a través de la misma. El uso del sitio web implica la aceptación plena de estas condiciones por parte de la persona usuaria. En caso de no estar de acuerdo, deberá abstenerse de utilizar la plataforma.",
  EUS: "Erabilera-baldintza hauek Euskalia plataformara sartzea, nabigatzea eta hura erabiltzea arautzen dute, baita bertan eskaintzen diren zerbitzuen kontratazioa ere. Webgunea erabiltzeak baldintza hauek osorik onartzea dakar. Ados ez badago, erabiltzaileak plataformaren erabilerari uko egin beharko dio.",
},

terms_section2_title: {
  ES: "2. Identidad del responsable",
  EUS: "2. Arduradunaren identitatea",
},

terms_section2_p1: {
  ES: "El responsable de la plataforma es Euskalia, en adelante \"el Prestador\", accesible a través del dominio principal https://euskalia.ai.",
  EUS: "Plataformaren arduraduna Euskalia da, aurrerantzean \"Zerbitzu-emailea\", https://euskalia.ai domeinu nagusiaren bidez eskuragarria.",
},

terms_section3_title: {
  ES: "3. Servicios ofrecidos",
  EUS: "3. Eskaintzen diren zerbitzuak",
},

terms_section3_p1: {
  ES: "Euskalia permite a las personas usuarias introducir textos, documentos o enlaces en euskera, castellano eta beste hizkuntza batzuetan para obtener traducciones y resúmenes generados mediante inteligencia artificial.",
  EUS: "Euskaliak aukera ematen die erabiltzaileei testuak, dokumentuak edo estekak sartzeko, euskaraz, gaztelaniaz eta beste hizkuntza batzuetan, eta horien itzulpenak eta laburpenak lortzeko adimen artifiziala erabiliz.",
},

terms_section3_p2: {
  ES: "Podrá existir un acceso gratuito y uno o varios planes de pago con prestaciones ampliadas. Los planes de pago se contratan mediante suscripción con renovación automática, salvo cancelación previa por parte de la persona usuaria.",
  EUS: "Sarbide mota desberdinak izan daitezke: doako sarbidea eta ezaugarri zabalduak dituzten ordainpeko planak. Ordainpeko planak harpidetzaren bidez kontratatzen dira eta automatikoki berritzen dira, erabiltzaileak aldez aurretik ezeztatzen ez baditu.",
},

terms_section4_title: {
  ES: "4. Registro de usuarios",
  EUS: "4. Erabiltzaileen erregistroa",
},

terms_section4_p1: {
  ES: "Para contratar cualquiera de los planes de pago, la persona usuaria deberá registrarse facilitando información veraz y actualizada. La cuenta es personal e intransferible.",
  EUS: "Ordainpeko planetako edozein kontratatzeko, erabiltzaileak erregistratu beharko du, egiazko eta eguneratutako informazioa emanez. Kontua pertsonala eta besterenezinakoa da.",
},

terms_section5_title: {
  ES: "5. Condiciones económicas y facturación",
  EUS: "5. Baldintza ekonomikoak eta fakturazioa",
},

terms_section5_p1: {
  ES: "El precio de cada plan de pago se mostrará en el momento de la contratación. Los pagos se realizan mediante los métodos habilitados en la web. Las suscripciones se renuevan automáticamente cada periodo de facturación, salvo que la persona usuaria cancele su plan antes de la fecha de renovación. En caso de impago, el Prestador podrá suspender o cancelar el acceso al servicio.",
  EUS: "Ordainpeko plan bakoitzaren prezioa kontratazio unean erakutsiko da. Ordainketak webgunean gaitutako metodoen bidez egingo dira. Harpidetzak automatikoki berritzen dira fakturazio epe bakoitzean, erabiltzaileak berritze-data baino lehen plana ezeztatzen ez badu. Ordainketarik ez badago, Zerbitzu-emaileak zerbitzua eteteko edo bertan behera uzteko eskubidea izango du.",
},

terms_section6_title: {
  ES: "6. Uso permitido y prohibido",
  EUS: "6. Onartutako eta debekatutako erabilera",
},

terms_section6_p1: {
  ES: "La persona usuaria se compromete a utilizar Euskalia conforme a la ley, la moral y el orden público. En particular, queda prohibido:",
  EUS: "Erabiltzaileak Euskalia legearen, moralaren eta ordena publikoaren arabera erabiltzeko konpromisoa hartzen du. Bereziki, debekatuta dago:",
},

terms_section6_li1: {
  ES: "Utilizar la plataforma para crear, difundir o almacenar contenidos ilícitos, difamatorios, ofensivos, bortitzak, diskriminatzaileak edo hirugarrenen eskubideen aurkakoak.",
  EUS: "Plataforma edukirik ez-legala, iraingarria, bortitza, diskriminatzailea edo hirugarrenen eskubideen aurkakoa sortu, zabaldu edo gordetzeko erabiltzea.",
},

terms_section6_li2: {
  ES: "Utilizar la plataforma con fines de spam, fraude o manipulación de datos.",
  EUS: "Plataforma spam egiteko, iruzurra burutzeko edo datuak modu desegokian manipulatzeko erabiltzea.",
},

terms_section6_li3: {
  ES: "Intentar kaltetzea, aldatzea edo gainkargatzea Euskaliaren sistemak edo segurtasun-neurriak.",
  EUS: "Euskaliaren sistemak edo segurtasun-neurriak kaltetzen, aldatzen edo gainkargatzen saiatzea.",
},

terms_section6_p2: {
  ES: "El incumplimiento de estas obligaciones podrá dar lugar a la suspensión inmediata de la cuenta sin derecho a reembolso.",
  EUS: "Baldintza hauek ez betetzeak kontua berehala etetea ekar dezake, inolako itzulketarik egiteko eskubiderik gabe.",
},

terms_section7_title: {
  ES: "7. Propiedad intelectual",
  EUS: "7. Jabetza intelektuala",
},

terms_section7_p1: {
  ES: "Todos los elementos que conforman Euskalia (kodea, diseinua, testuak, sortutako audioak, logotipoa, eta abar) son propiedad del Prestador o cuentan con las licencias correspondientes. El uso de la plataforma no otorga a la persona usuaria ningún derecho de propiedad intelectual sobre dichos elementos.",
  EUS: "Euskalia osatzen duten elementu guztiak (kodea, diseinua, testuak, sortutako audioak, logotipoa eta abar) Zerbitzu-emailearen jabetzakoak dira edo dagokien lizentzia dute. Plataformaren erabilerak ez dio erabiltzaileari jabetza intelektualeko eskubiderik ematen elementu horien gainean.",
},

terms_section8_title: {
  ES: "8. Responsabilidad",
  EUS: "8. Erantzukizuna",
},

terms_section8_p1: {
  ES: "Euskalia no garantiza la disponibilidad continua de la plataforma, aunque adoptará medidas razonables para asegurar un servicio estable.",
  EUS: "Euskaliak ez du bermatzen plataformaren etengabeko erabilgarritasuna, nahiz eta zerbitzu egonkorra eskaintzeko neurri arrazoizkoak hartuko diren.",
},

terms_section8_p2: {
  ES: "El Prestador no se responsabiliza del uso indebido de los textos, itzulpenak o laburpenak generados por la persona usuaria, eta erabiltzaileak sartzen dituen eduki, testu edo fitxategien erantzule bakarra izango da.",
  EUS: "Zerbitzu-emailea ez da erantzule izango erabiltzaileak sortutako testu, itzulpen edo laburpenen erabilera desegokiaren aurrean, eta erabiltzailea izango da plataforman sartzen dituen eduki, testu eta fitxategien erantzule bakarra.",
},

terms_section9_title: {
  ES: "9. Cancelación y desistimiento",
  EUS: "9. Baliogabetzea eta atzera egitea",
},

terms_section9_p1: {
  ES: "La persona usuaria podrá cancelar su suscripción en cualquier momento desde su cuenta. La cancelación evitará renovaciones futuras, baina ez da itzulketarik egingo dagoeneko hasitako fakturazio epeei dagokienez, legez kontrakoa ez bada behintzat.",
  EUS: "Erabiltzaileak bere harpidetza edozein unetan baliogabetu ahal izango du bere kontutik. Baliogabetzeak etorkizuneko berritzeak ekidinen ditu, baina ez da itzulketarik egingo dagoeneko hasitako fakturazio epeengatik, legeak kontrakoa agintzen ez badu.",
},

terms_section10_title: {
  ES: "10. Modificaciones",
  EUS: "10. Aldaketak",
},

terms_section10_p1: {
  ES: "Euskalia se reserva el derecho de modificar en cualquier momento los presentes Términos y Condiciones. Las modificaciones se publicarán en el sitio web y serán aplicables desde el momento de su publicación.",
  EUS: "Euskaliak eskubidea du erabilera-baldintza hauek edozein unetan aldatzeko. Aldaketak webgunean argitaratuko dira eta argitaratzen diren unetik aurrera izango dira aplikagarriak.",
},

terms_section11_title: {
  ES: "11. Legislación aplicable y jurisdicción",
  EUS: "11. Aplikatu beharreko legeria eta jurisdikzioa",
},

terms_section11_p1: {
  ES: "Los presentes Términos y Condiciones se rigen por la legislación española. En caso de conflicto, las partes se someterán a los Juzgados y Tribunales que correspondan conforme a la normativa aplicable.",
  EUS: "Erabilera-baldintza hauek Espainiako legeriarekin bat etorriz arautzen dira. Gatazkarik izanez gero, alderdiak aplikatu beharreko araudiaren arabera dagokien epaitegi eta auzitegien jurisdikzioari men egingo diote.",
},
terms_footer_note: {
  ES: "Estos Términos y Condiciones están actualizados a fecha [__________].",
  EUS: "Erabilera-baldintza hauek eguneratuta daude honako data honetan: [__________].",
},



  //USO DE APIS DE INTELIGENCIA ARTIFICIAL //
aiApiUsage: {
  title: {
    ES: "Uso de APIs de Inteligencia Artificial",
    EUS: "Adimen Artifizialaren APIen erabilera",
  },

  intro: {
    ES: "En esta página te explicamos cómo utiliza Euskalia las APIs de inteligencia artificial para traducir y resumir textos, qué datos se envían a estos proveedores y qué recomendaciones debes seguir para usar la herramienta de forma segura.",
    EUS: "Orrialde honetan azaltzen dugu Euskaliak nola erabiltzen dituen adimen artifizialaren APIak testuak itzuli eta laburtzeko, zer datu bidaltzen diren hornitzaileei eta zein gomendio jarraitu behar diren tresna modu seguruan erabiltzeko.",
  },
  section1Title: {
    ES: "1. Qué APIs de IA utiliza Euskalia",
    EUS: "1. Euskaliak erabiltzen dituen AA APIak",
  },
  section1Body: {
    ES: "Para generar traducciones y resúmenes, Euskalia se conecta a servicios de inteligencia artificial ofrecidos por proveedores externos especializados. Estos procesan el texto enviado y devuelven una respuesta generada automáticamente.",
    EUS: "Itzulpenak eta laburpenak sortzeko, Euskalia kanpoko hornitzaile espezializatuen adimen artifizialeko zerbitzuekin konektatzen da. Haiek jasotako testua prozesatu eta erantzun automatikoa itzultzen dute.",
  },
  section1Body2: {
    ES: "Los modelos de IA pueden actualizarse con el tiempo. Cuando esto ocurra, Euskalia mantendrá esta página actualizada para que conozcas qué tecnología está en uso.",
    EUS: "AAko ereduak denborarekin eguneratu daitezke. Hori gertatzen denean, Euskaliak orrialde hau eguneratuta mantenduko du erabiltzen den teknologiari buruzko informazioa eskaintzeko.",
  },
  section2Title: {
    ES: "2. Qué datos se envían a las APIs",
    EUS: "2. Zer datu bidaltzen zaizkien APIei",
  },
  section2Body: {
    ES: "Cuando utilizas Euskalia, el texto que escribes o pegas (o fragmentos de documentos o URLs) se envía al proveedor de IA para generar la traducción o el resumen.",
    EUS: "Euskalia erabiltzen duzunean, idazten edo itsasten duzun testua (edo dokumentuetako zatiak edo URLak) AA hornitzailera bidaltzen da itzulpena edo laburpena sortzeko.",
  },
  section2Li1: {
    ES: "Texto introducido para traducir o resumir.",
    EUS: "Itzultzeko edo laburtzeko sartutako testua.",
  },
  section2Li2: {
    ES: "Idiomen arteko konbinazioa (adibidez, euskera → castellano).",
    EUS: "Hizkuntzen arteko konbinazioa (adibidez, euskara → gaztelania).",
  },
  section2Li3: {
    ES: "Instrucciones técnicas necesarias para que el modelo genere la respuesta.",
    EUS: "Ereduak erantzuna sortzeko behar dituen jarraibide teknikoak.",
  },
  section2Body2: {
    ES: "Evita incluir datos personales o sensibles siempre que sea posible.",
    EUS: "Ahal den guztietan, saihestu datu pertsonalak edo bereziki sentikorrak sartzea.",
  },
  section3Title: {
    ES: "3. Tratamiento, conservación y seguridad de los datos",
    EUS: "3. Datuen tratamendua, kontserbazioa eta segurtasuna",
  },
  section3Body: {
    ES: "Los textos enviados se usan solo para generar la respuesta solicitada. Euskalia no vende tus textos ni los comparte con fines comerciales.",
    EUS: "Bidaltzen diren testuak soilik eskatutako erantzuna sortzeko erabiltzen dira. Euskaliak ez ditu zure testuak saltzen edo helburu komertzialekin partekatzen.",
  },
  section3Body2: {
    ES: "Los proveedores pueden conservar ciertos registros técnicos por seguridad y estabilidad del servicio.",
    EUS: "Hornitzaileek zenbait erregistro tekniko gorde ditzakete zerbitzuaren segurtasuna eta egonkortasuna bermatzeko.",
  },
  section3Body3: {
    ES: "Euskalia utiliza conexiones cifradas y minimiza la información enviada.",
    EUS: "Euskaliak konexio enkriptatuak erabiltzen ditu eta bidaltzen den informazioa ahalik eta gehien murrizten du.",
  },
  section4Title: {
    ES: "4. Recomendaciones de uso responsable",
    EUS: "4. Erabilera arduratsurako gomendioak",
  },
  section4Body: {
    ES: "Para garantizar un uso seguro, sigue estas recomendaciones:",
    EUS: "Erabilera segurua bermatzeko, jarraitu gomendio hauek:",
  },
  section4Li1: {
    ES: "Evita datos personales identificables.",
    EUS: "Saihestu datu pertsonal identifikagarriak.",
  },
  section4Li2: {
    ES: "No incluyas información sensible (salud, finanzas, ideología...).",
    EUS: "Ez sartu informazio sentikorra (osasuna, finantzak, ideologia...).",
  },
  section4Li3: {
    ES: "Revisa siempre la respuesta antes de usarla en contextos importantes.",
    EUS: "Beti berrikusi erantzuna erabilera garrantzitsuetan erabili aurretik.",
  },
  section4Li4: {
    ES: "Respeta la ley y los derechos de terceros.",
    EUS: "Errespetatu legea eta hirugarrenen eskubideak.",
  },
  section5Title: {
    ES: "5. Relación con otras políticas",
    EUS: "5. Beste politika batzuekin harremana",
  },
  section5Body: {
    ES: "Esta información complementa la Política de Privacidad, el Aviso Legal y los Términos de Euskalia.",
    EUS: "Informazio honek Pribatutasun Politika, Lege Oharra eta Euskaliaren Baldintzak osatzen ditu.",
  },
  section5Body2: {
    ES: "Cada proveedor dispone de sus propias políticas, que recomendamos consultar.",
    EUS: "Hornitzaile bakoitzak bere politika propioak ditu; gomendagarria da horiek kontsultatzea.",
  },
  lastUpdate: {
    ES: "Esta información sobre el uso de APIs de IA está actualizada a fecha [________].",
    EUS: "AA APIen erabilerari buruzko informazio hau [________] eguneratu da.",
  },
},



// ====== POLÍTICA DE COOKIES – EUSKALIA ====== //

cookies_title: {
  ES: "Política de Cookies",
  EUS: "Cookieen Politika",
},
cookies_section1_title: {
  ES: "1. ¿Qué son las cookies?",
  EUS: "1. Zer dira cookieak?",
},

cookies_section1_p1: {
  ES: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tableta edo telefono mugikorra) cuando visitas un sitio web. Permiten que la página recuerde determinadas acciones y preferencias, hala nola hizkuntza edo oinarrizko konfigurazioak, zure nabigazio esperientzia hobetzeko eta ez dezazun berriro konfiguratu behar bisita bakoitzean.",
  EUS: "Cookieak testu fitxategi txikiak dira, eta zure gailuan (ordenagailuan, tabletan edo telefono mugikorrean) gordetzen dira webgune bat bisitatzen duzunean. Webguneak zure ekintza eta lehentasun jakin batzuk gogoratzeko balio dute, hala nola hizkuntza edo oinarrizko ezarpenak, nabigazio esperientzia hobetzeko eta bisita bakoitzean berriro konfiguratu beharrik izan ez dezazun.",
},

cookies_section2_title: {
  ES: "2. Tipos de cookies utilizadas por Euskalia",
  EUS: "2. Euskaliak erabiltzen dituen cookie motak",
},

cookies_section2_p1: {
  ES: "Euskalia utiliza únicamente cookies técnicas esentziales, behar-beharrezkoak plataformaren funtzionamendu egokia bermatzeko. Cookie horiei esker, webgunean nabigatu eta eskaintzen diren funtzio oinarrizkoak erabil daitezke.",
  EUS: "Euskaliak cookie tekniko esentzialak baino ez ditu erabiltzen, plataformaren funtzionamendu egokia bermatzeko beharrezkoak direnak. Cookie horiei esker, webgunean nabigatu eta eskaintzen diren funtzio oinarrizkoak erabili daitezke.",
},

cookies_section2_p2: {
  ES: "Euskalia NO utiliza cookies de publizitatea, analisi aurreratua, pertsonalizazio maila altua, jokabidearen jarraipena edo helburu komertzialeko hirugarrenen cookieak.",
  EUS: "Euskaliak EZ ditu erabiltzen publizitate cookieak, analisi aurreratukoak, pertsonalizazio maila handikoak, portaeraren jarraipeneko cookieak edo helburu komertzialeko hirugarrenen cookieak.",
},

cookies_section3_title: {
  ES: "3. Finalidad de las cookies",
  EUS: "3. Cookieen helburua",
},

cookies_section3_p1: {
  ES: "Euskaliak erabiltzen dituen cookie teknikoek helburu bakarra dute: plataforma behar bezala eta modu egonkorrean funtziona dezan bermatzea, oinarrizko konfigurazio batzuk gogoratuz eta webgunea behar bezala jardun dezan bisitan zehar.",
  EUS: "Euskaliak erabiltzen dituen cookie teknikoen helburu bakarra da plataforma behar bezala eta modu egonkorrean funtziona dezan bermatzea, oinarrizko konfigurazio batzuk gogoratuz eta nabigazioan zehar webgunea ongi ibil dadin.",
},

cookies_section4_title: {
  ES: "4. Cómo gestionar las cookies",
  EUS: "4. Nola kudeatu cookieak",
},

cookies_section4_p1: {
  ES: "Zure nabigatzailearen ezarpenen bidez baimendu, blokeatu edo ezaba ditzakezu zure gailuan instalatutako cookieak. Kontuan izan cookie teknikoak blokeatzen badituzu, baliteke webguneko zerbitzu edo funtzionalitate batzuk ez egotea erabilgarri edo behar bezala ez funtzionatzea.",
  EUS: "Zure nabigatzailearen konfigurazioan, zure gailuan instalatutako cookieak baimendu, blokeatu edo ezaba ditzakezu. Gogoratu cookie teknikoak blokeatzen badituzu, baliteke webguneko zerbitzu edo funtzio batzuk ez egotea eskuragarri edo behar bezala ez ibiltzea.",
},

cookies_section5_title: {
  ES: "5. Actualizaciones de la Política de Cookies",
  EUS: "5. Cookieen Politika eguneratzea",
},

cookies_section5_p1: {
  ES: "Euskaliak Cookieen Politika hau eguneratu ahal izango du beharrezkoa denean, bai araudi-aldaketen ondorioz, bai aldaketa teknikoengatik edo plataforman egindako hobekuntzengatik. Aldaketa esanguratsuak egiten badira, erabiltzaileei webgunearen bidez jakinaraziko zaie.",
  EUS: "Euskaliak Cookieen Politika hau eguneratu ahal izango du beharrezkoa denean, araudi-aldaketak, aldaketa teknikoak edo plataforman egindako hobekuntzak direla medio. Aldaketa garrantzitsuak eginez gero, erabiltzaileei webgunearen bidez emango zaie horren berri.",
},
cookies_last_update: {
  ES: "Esta Política de Privacidad está actualizada a fecha [__________].",
    EUS: "Pribatutasun-politika hau eguneratuta dago honako data honetan: [__________].",
},
  


                                    // =========================
                                    // =========================
                                    //        PRO ACCOUNT 
                                    // ========================= 
                                    // =========================

  // =========================
  //        Pro Home
  // ========================= 
  proHome: {
  greeting_prefix: {
    ES: "Hola",
    EUS: "Kaixo",
  },
  title: {
    ES: "Bienvenido a Euskalia",
    EUS: "Ongi etorri Euskalia-ra",
  },
  },
 
  // =========================
  //        Pro Grammar Corrector
  // ========================= 
  grammar: {
  sources_title: {
    ES: "Fuentes",
    EUS: "Iturriak",
  },
  sources_tab_text: {
    ES: "Texto",
    EUS: "Testua",
  },
  sources_tab_document: {
    ES: "Documento",
    EUS: "Dokumentua",
  },
  sources_tab_url: {
    ES: "URL",
    EUS: "URL",
  },
  enter_text_here_full: {
    ES: "Escribe o pega el texto que quieras corregir aquí…",
    EUS: "Idatzi edo itsatsi zuzendu nahi duzun testua hemen…",
  },
  choose_file_title: {
    ES: "Elige tu archivo o carpeta.",
    EUS: "Aukeratu zure fitxategia edo karpeta.",
  },
  accepted_formats: {
    ES: "Formatos admitidos: PDF, DOCX, TXT, MD, imágenes…",
    EUS: "Onartutako formatuak: PDF, DOCX, TXT, MD, irudiak…",
  },
  folder_hint: {
    ES: "Aquí aparecerán los textos o documentos que subas para corregir.",
    EUS: "Hemen agertuko dira zuzendu nahi dituzun testuak edo dokumentuak.",
  },
  paste_urls_label: {
    ES: "Pegar URLs*",
    EUS: "URLak itsatsi*",
  },
  add_url: {
    ES: "Añadir URLs",
    EUS: "URLak gehitu",
  },
  save_urls: {
    ES: "Guardar",
    EUS: "Gorde",
  },
  cancel: {
    ES: "Cancelar",
    EUS: "Ezeztatu",
  },
  urls_note_visible: {
    ES: "Solo se importará el texto visible de la página web.",
    EUS: "Webguneko testu ikusgarria bakarrik inportatuko da.",
  },
  urls_note_paywalled: {
    ES: "No se admiten artículos de pago.",
    EUS: "Ordaineko artikuluak ez dira onartzen.",
  },
  create_help_left: {
    ES: "Aquí verás los textos o documentos que subas para corregir. Puedes añadir archivos PDF, texto copiado o enlaces web…",
    EUS: "Hemen agertuko dira zuzendu nahi dituzun testuak edo dokumentuak. Gehitu ditzakezu PDF fitxategiak, testu kopiatua, web estekak…",
  },
},

  // =========================
  //        Pro library
  // =========================    

  library_filter_all: {
  ES: "Todos",
  EUS: "Denak",
},
library_filter_texts: {
  ES: "Traducciones",
  EUS: "Itzulpenak",
},
library_filter_summaries: {
  ES: "Resúmenes",
  EUS: "Laburpenak",
},
library_filter_folders: {
  ES: "Mis carpetas",
  EUS: "Nire karpetak",
},
library_create_new: {
  ES: "Crear nuevo",
  EUS: "Sortu berria",
},
library_create_text: {
  ES: "Crear traducción:",
  EUS: "Sortu itzulpena:",
},

library_prefix_summary: {
  ES: "Resumen:",
  EUS: "Laburpena:", 
},
library_prefix_translation: {
  ES: "Traducción:",
  EUS: "Itzulpena:",
},
library_create_summary: {
  ES: "Crear resumen",
  EUS: "Sortu laburpena",
},
library_no_folders: {
  ES: "Aún no tienes carpetas. Crea la primera.",
  EUS: "Ez duzu karpetarik oraindik. Sortu lehena.",
},

library_create_folder: {
  ES: "Crear nueva carpeta",
  EUS: "Karpeta berria sortu",
},

folder_modal_title: {
  ES: "Crear nueva carpeta",
  EUS: "Karpeta berria sortu",
},

folder_modal_label: {
  ES: "Nombre de la carpeta",
  EUS: "Karpetaren izena",
},

folder_modal_placeholder: {
  ES: "Ponle un nombre…",
  EUS: "Eman izen bat…",
},

folder_modal_cancel: {
  ES: "Cancelar",
  EUS: "Utzi",
},

folder_modal_save: {
  ES: "Guardar",
  EUS: "Gorde",
},
library_doc_edit_title: {
  ES: "Editar documento",
  EUS: "Editatu dokumentua",
},
library_doc_delete: {
  ES: "Eliminar",
  EUS: "Ezabatu",
},
library_back: {
  ES: "Atras",
  EUS: "Atzera",
},
folder_back: {
  ES: "Atras",
  EUS: "Atzera",
},
folder_modal_select_docs: {
  ES: "Elige qué documentos quieres guardar en esta carpeta",
  EUS: "Aukeratu karpeta honetan gorde nahi dituzun dokumentuak",
},
folder_empty: {
  ES: "Carpeta vacía",
  EUS: "Karpeta hutsa",
},
 

// =========================
  //        Pro Suggestions
  // =========================                          
  proSuggestions: {
  zone_badge: {
    ES: "Zona de ideas y sugerencias de Euskalia",
    EUS: "Euskaliaren ideien eta iradokizunen gunea",
  },

  title: {
    ES: "Ayúdanos a decidir las próximas mejoras de Euskalia",
    EUS: "Lagundu Euskaliaren hurrengo hobekuntzak erabakitzen",
  },

  description_part1: {
    ES: "Esta página es para que nos cuentes ",
    EUS: "Orri hau horretarako da: esan diezagukezun ",
  },

  description_highlight: {
    ES: "qué te gustaría que añadamos o mejoremos en Euskalia",
    EUS: "Euskalien zer gehitzea edo hobetzea gustatuko litzaizukeen",
  },

  description_part2: {
    ES: ": nuevas herramientas, cambios en el diseño, límites, ideas para estudiar mejor, cosas que te molestan… cualquier comentario es bienvenido.",
    EUS: ": tresna berriak, diseinu-aldaketak, mugak, ikasteko hobekuntzak, molestatzen zaizkizun gauzak… edozein iradokizun ongi etorria da.",
  },

  form_title: {
    ES: "Enviar una sugerencia",
    EUS: "Bidali iradokizun bat",
  },

  form_subtitle: {
    ES: "Escríbenos con total libertad. Leemos todas las ideas para decidir las siguientes funciones de Euskalia.",
    EUS: "Idatzi nahi duzuna askatasunez. Jasotzen ditugun ideia guztiak irakurtzen ditugu Euskaliaren hurrengo funtzioak erabakitzeko.",
  },

  form_badge: {
    ES: "Tus sugerencias nos ayudan a mejorar cada semana.",
    EUS: "Zure iradokizunek astero laguntzen digute hobetzen.",
  },

  textarea_label: {
    ES: "Escribe aquí tu sugerencia",
    EUS: "Idatzi hemen zure iradokizuna",
  },

  textarea_placeholder: {
    ES: "Cuéntanos qué herramienta, cambio o mejora te gustaría ver en Euskalia, y por qué crees que sería útil para ti o para otras personas.",
    EUS: "Esan zein tresna, aldaketa edo hobekuntza gustatuko litzaizukeen Euskalian, eta zergatik izango litzatekeen erabilgarria zuretzat edo besteentzat.",
  },

  email_label: {
    ES: "Correo electrónico (opcional)",
    EUS: "Helbide elektronikoa (aukerakoa)",
  },

  email_placeholder: {
    ES: "Solo si quieres que podamos contactarte para aclarar algo.",
    EUS: "Zerbait argitzeko zurekin harremanetan jar gaitezen nahi baduzu bakarrik.",
  },

  characters_suffix: {
    ES: "caracteres",
    EUS: "karaktere",
  },

  error_required: {
    ES: "Por favor, escribe tu sugerencia antes de enviarla.",
    EUS: "Mesedez, bidali aurretik idatzi zure iradokizuna.",
  },

  error_min_length: {
    ES: "Añade un poco más de detalle para que podamos entender bien tu sugerencia.",
    EUS: "Gehitu xehetasun pixka bat gehiago zure iradokizuna hobeto ulertu dezagun.",
  },

  success_message: {
    ES: "Gracias por tu sugerencia. La tendremos en cuenta para las próximas mejoras.",
    EUS: "Eskerrik asko zure iradokizunagatik. Hurrengo hobekuntzetan kontuan hartuko dugu.",
  },

  button_label: {
    ES: "Enviar sugerencia",
    EUS: "Bidali iradokizuna",
  },
},



  // =========================
  //        Pro Help
  // =========================
proHelp: {
  title: {
    ES: "¿En qué podemos ayudarte?",
    EUS: "Nola lagun diezazukegu?",
  },
  search_placeholder: {
    ES: "Describe tu problema o escribe una pregunta",
    EUS: "Deskribatu zure arazoa edo idatzi galdera bat",
  },
  // SECCIÓN: EMPEZAR A USAR EUSKALIA
  section_getting_started_title: {
    ES: "Empezar a usar Euskalia",
    EUS: "Euskalia erabiltzen hasten",
  },

  section_getting_started_q1_title: {
    ES: "¿Qué es Euskalia y para qué sirve?",
    EUS: "Zer da Euskalia eta zertarako balio du?",
  },
  section_getting_started_q1_body: {
    ES: "Euskalia es una herramienta de inteligencia artificial centrada en el euskera. Permite traducir y resumir textos, documentos y páginas web entre euskera, castellano, inglés y francés.",
    EUS: "Euskalia adimen artifizialean oinarritutako tresna bat da, euskara ardatz duena. Testuak, dokumentuak eta webguneak euskararen, gaztelaniaren, ingelesaren eta frantsesaren artean itzuli eta laburtzeko aukera ematen du.",
  },

  section_getting_started_q2_title: {
    ES: "Primeros pasos: ¿cómo empiezo a usar la web?",
    EUS: "Lehen urratsak: nola hasi webgunea erabiltzen?",
  },
  section_getting_started_q2_body: {
    ES: "No necesitas cuenta. En la página principal puedes elegir entre Traductor o Crear resumen, pegar texto, subir un documento o añadir una URL, seleccionar idiomas y generar el resultado.",
    EUS: "Ez duzu konturik behar. Hasierako orrian Itzultzailea edo Laburpena sortzea aukera dezakezu, testua itsatsi, dokumentu bat igo edo URL bat gehitu, hizkuntzak aukeratu eta emaitza sortu.",
  },

  section_getting_started_q3_title: {
    ES: "¿Qué idiomas soporta Euskalia?",
    EUS: "Zein hizkuntza onartzen ditu Euskaliak?",
  },
  section_getting_started_q3_body: {
    ES: "Euskalia funciona con cuatro idiomas: euskera, castellano, inglés y francés. Todas las herramientas están diseñadas para usar siempre el euskera como idioma principal.",
    EUS: "Euskalia lau hizkuntzatan funtzionatzen du: euskaraz, gaztelaniaz, ingelesez eta frantsesez. Tresna guztiak euskara hizkuntza nagusi gisa erabiltzeko diseinatuta daude.",
  },
  // SECCIÓN: TRADUCTOR
  section_translator_title: {
    ES: "Traductor",
    EUS: "Itzultzailea",
  },

  section_translator_q1_title: {
    ES: "¿Cómo traduzco un texto?",
    EUS: "Nola itzul dezaket testu bat?",
  },
  section_translator_q1_body: {
    ES: "Escribe o pega un texto en el cuadro principal, selecciona idioma de origen y destino, y pulsa Generar.",
    EUS: "Idatzi edo itsatsi testua kutxa nagusian, aukeratu jatorri- eta helburu-hizkuntzak, eta sakatu Sortu.",
  },

  section_translator_q2_title: {
    ES: "¿Puedo traducir documentos?",
    EUS: "Dokumentuak itzul ditzaket?",
  },
  section_translator_q2_body: {
    ES: "Sí. Puedes subir archivos PDF, DOCX o TXT pulsando el botón de Documentos en el Traductor.",
    EUS: "Bai. PDF, DOCX edo TXT fitxategiak igo ditzakezu Itzultzailean Dokumentuak botoia sakatuta.",
  },

  section_translator_q3_title: {
    ES: "¿Puedo traducir páginas web o URLs?",
    EUS: "Webguneak edo URLak itzul ditzaket?",
  },
  section_translator_q3_body: {
    ES: "Sí. Copia la URL en la opción de traducir desde enlace. Euskalia obtendrá el contenido y lo convertirá al idioma deseado.",
    EUS: "Bai. Kopiatu URL helbidea loturatik itzultzeko aukeran. Euskalik edukia eskuratuko du eta nahi duzun hizkuntzara bihurtuko du.",
  },
  // SECCIÓN: RESUMEN
  section_summary_title: {
    ES: "Crear resumen",
    EUS: "Laburpena sortu",
  },
  section_summary_q1_title: {
    ES: "¿Cómo crear un resumen?",
    EUS: "Nola sortu laburpen bat?",
  },
  section_summary_q1_body: {
    ES: "Pega un texto, sube un documento o introduce una URL. Elige el idioma del resumen y pulsa Generar.",
    EUS: "Itsatsi testu bat, igo dokumentu bat edo sartu URL bat. Aukeratu laburpenaren hizkuntza eta sakatu Sortu.",
  },
  section_summary_q2_title: {
    ES: "¿Qué tipo de contenidos puedo resumir?",
    EUS: "Zein edukiren laburpenak sor ditzaket?",
  },
  section_summary_q2_body: {
    ES: "Puedes resumir artículos, PDFs, textos largos, trabajos, correos, apuntes y páginas web.",
    EUS: "Artikuluak, PDFak, testu luzeak, lanak, mezuak, apunteak eta webguneak labur ditzakezu.",
  },
  section_summary_q3_title: {
    ES: "¿Se mantienen los detalles importantes?",
    EUS: "Xehetasun garrantzitsuak mantentzen dira?",
  },
  section_summary_q3_body: {
    ES: "Sí. Euskalia prioriza ideas clave, estructura lógica y contexto importante para mantener la coherencia del contenido.",
    EUS: "Bai. Euskalik ideia nagusiak, egitura logikoa eta testuinguru garrantzitsua lehenesten ditu edukiaren koherentzia mantentzeko.",
  },
  // SECCIÓN: FACTURACIÓN Y PLANES
  section_billing_title: {
    ES: "Cuenta y facturación",
    EUS: "Kontua eta fakturazioa",
  },
  section_billing_q1_title: {
    ES: "¿Qué incluye el Plan Pro?",
    EUS: "Zer dauka barne Pro Planak?",
  },
  section_billing_q1_body: {
    ES: "Traducciones y resúmenes más rápidos, límites ampliados, subida de documentos más pesados y funciones exclusivas.",
    EUS: "Itzulpen eta laburpen azkarragoak, muga zabalduak, dokumentu astunagoak igotzeko aukera eta funtzio esklusiboak.",
  },
  section_billing_q2_title: {
    ES: "¿Dónde veo mis recibos?",
    EUS: "Non ikus ditzaket nire ordainagiriak?",
  },
  section_billing_q2_body: {
    ES: "En tu área de Facturación puedes ver tus pagos, historial y gestionar tu suscripción.",
    EUS: "Fakturazio atalean zure ordainketak, historia eta harpidetzaren kudeaketa ikus ditzakezu.",
  },
  section_billing_q3_title: {
    ES: "¿Cómo cambio o cancelo mi plan?",
    EUS: "Nola aldatu edo ezeztatu dezaket nire plana?",
  },
  section_billing_q3_body: {
    ES: "Puedes cambiar entre planes o cancelar desde el apartado Ajustes → Suscripción.",
    EUS: "Planak aldatu edo ezeztatu ditzakezu Ezarpenak → Harpidetza ataletik.",
  }, 
  // SECCIÓN: SOLUCIONAR PROBLEMAS
  section_problems_title: {
    ES: "Solucionar problemas",
    EUS: "Arazoak konpontzea",
  },
  section_problems_q1_title: {
    ES: "No puedo subir un PDF",
    EUS: "Ezin dut PDF bat igo",
  },
  section_problems_q1_body: {
    ES: "Comprueba que el archivo no esté dañado y que no supere el límite del plan actual.",
    EUS: "Egiaztatu fitxategia ez dagoela hondatuta eta uneko planaren mugak ez dituela gainditzen.",
  },
  section_problems_q2_title: {
    ES: "La URL no carga o no se puede traducir",
    EUS: "URLa ez da kargatzen edo ezin da itzuli",
  },
  section_problems_q2_body: {
    ES: "Algunas páginas pueden bloquear el acceso automático. Intenta copiar y pegar el contenido manualmente.",
    EUS: "Zenbait webgunek sarbide automatikoa blokeatzen dute. Saiatu edukia eskuz kopiatu eta itsasten.",
  },
  section_problems_q3_title: {
    ES: "Los resultados tardan demasiado",
    EUS: "Emaitzek gehiegi behar dute",
  },
  section_problems_q3_body: {
    ES: "Puede deberse a tráfico alto o a un documento muy grande. Prueba a reducir el contenido o reintentar unos segundos después.",
    EUS: "Trafiko handia edo dokumentu handiegia izan daiteke arrazoia. Saiatu edukia murrizten edo berriro saiatzen segundo batzuk geroago.",
  },
  bottom_support_text: {
    ES: "Si sigues teniendo alguna duda, nuestro equipo está aquí para ayudarte.",
    EUS: "Zalantzak izanez gero, gure taldea hemen dago laguntzeko.",
  },

  bottom_support_cta: {
    ES: "Contactar con soporte",
    EUS: "Jarri harremanetan laguntzarekin",
  },

  bottom_support_mascot_alt: {
    ES: "Mascota de Euskalia ofreciendo ayuda",
    EUS: "Euskaliaren maskota laguntza eskaintzen",
  },
  support_bubble_text: {
    ES: "Si sigues teniendo alguna duda, nuestro equipo está aquí para ayudarte.",
    EUS: "Zalantzak izanez gero, gure taldea hemen dago laguntzeko.",
  },

  support_button_label: {
    ES: "Contactar con soporte",
    EUS: "Jarri harremanetan",
  },

  support_mascot_alt: {
    ES: "Mascota de Euskalia ofreciendo ayuda",
    EUS: "Euskaliaren maskota laguntza eskaintzen",
  },

},




  //  PRO ACCOUNT – SETTINGS PAGE //

 settings_title: {
    ES: "Ajustes",
    EUS: "Ezarpenak",
  },
  settings_subtitle: {
    ES: "Personaliza tu experiencia en Olondo.AI.",
    EUS: "Pertsonalizatu zure esperientzia Olondo.AI-n.",
  },

  // =========================
  //          PERFIL
  // =========================

  settings_profile_title: {
    ES: "Perfil",
    EUS: "Profila",
  },
  settings_profile_desc: {
    ES: "Información básica para identificar tu cuenta.",
    EUS: "Zure kontua identifikatzeko oinarrizko informazioa.",
  },
  settings_profile_display_name: {
    ES: "Nombre visible",
    EUS: "Izen ikusgaia",
  },
  settings_profile_email: {
    ES: "Email",
    EUS: "Emaila",
  },
  settings_profile_email_placeholder: {
    ES: "nombre@ejemplo.com",
    EUS: "izena@adierazpena.com",
  },
  settings_profile_security_hint: {
    ES: "La edición de contraseña se gestiona desde tu área segura.",
    EUS: "Pasahitzaren aldaketa zure eremu segurutik kudeatzen da.",
  },
  settings_manage_plan: {
    ES: "Gestionar plan",
    EUS: "Plana kudeatu",
  },

  // =========================
  //        APARIENCIA
  // =========================

  settings_appearance_title: {
    ES: "Apariencia",
    EUS: "Itxura",
  },
  settings_appearance_desc: {
    ES: "Elige cómo se ve la interfaz.",
    EUS: "Aukeratu interfazeak nola ikusten den.",
  },
  settings_appearance_theme: {
    ES: "Tema",
    EUS: "Gaia",
  },
  settings_appearance_theme_light: {
    ES: "Claro",
    EUS: "Argia",
  },
  settings_appearance_language: {
    ES: "Idioma",
    EUS: "Hizkuntza",
  },
  settings_appearance_language_hint: {
    ES: "Cambia el idioma desde aquí.",
    EUS: "Aldatu hizkuntza hemendik.",
  },

  // =========================
  //      NOTIFICACIONES
  // =========================

  settings_notifications_title: {
    ES: "Notificaciones",
    EUS: "Jakinarazpenak",
  },
  settings_notifications_desc: {
    ES: "Elige qué correos o avisos quieres recibir.",
    EUS: "Aukeratu zein mezu edo abisu jaso nahi dituzun.",
  },

  settings_notifications_product: {
    ES: "Novedades de producto",
    EUS: "Produktu-berrikuntzak",
  },
  settings_notifications_product_hint: {
    ES: "Lanzamientos, mejoras y anuncios importantes.",
    EUS: "Kaleratzeak, hobekuntzak eta iragarki garrantzitsuak.",
  },

  settings_notifications_tips: {
    ES: "Consejos y buenas prácticas",
    EUS: "Aholkuak eta praktika onak",
  },
  settings_notifications_tips_hint: {
    ES: "Emails breves para aprovechar mejor Olondo.AI.",
    EUS: "Email laburrak Olondo.AI hobeto aprobetxatzeko.",
  },

  settings_notifications_billing: {
    ES: "Facturación",
    EUS: "Fakturazioa",
  },
  settings_notifications_billing_hint: {
    ES: "Recibos, cambios de plan y recordatorios de pago.",
    EUS: "Ordainagiriak, plan-aldaketak eta ordainketa-oharpenak.",
  },

  // =========================
  //            CTA
  // =========================

  settings_cta_save: {
    ES: "Guardar cambios",
    EUS: "Aldaketak gorde",
  },
}





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
