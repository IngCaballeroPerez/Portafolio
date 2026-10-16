/* ═══════════════════════════════════════════════════════════════════════
   PARTE 1 · TRADUCCIONES (es / en / zh-CN)
   Lo que esté entre [corchetes] es un MARCADOR: reemplázalo por datos reales.
   Nunca traduzcas URLs, identificadores técnicos ni nombres propios.
   ═══════════════════════════════════════════════════════════════════════ */
(function (root) {
  'use strict';

  var SUPPORTED = ['es', 'en', 'zh-CN'];
  var DEFAULT = 'es';
  var STORAGE_KEY = 'portfolio.locale';

  var LOCALES = {
    'es':    { short: 'ES', label: 'Español',  htmlLang: 'es',    ogLocale: 'es_ES' },
    'en':    { short: 'EN', label: 'English',  htmlLang: 'en',    ogLocale: 'en_US' },
    'zh-CN': { short: '中', label: '简体中文',  htmlLang: 'zh-CN', ogLocale: 'zh_CN' }
  };

  /* ─────────── ESPAÑOL ─────────── */
  var es = {
    meta: { title: 'Jose Luis C. — Ingeniero de Software', description: 'Portafolio de Jose Luis C., ingeniero de software: proyectos destacados, habilidades técnicas, experiencia profesional y contacto.' },
    a11y: { skip: 'Saltar al contenido principal', primaryNav: 'Navegación principal', language: 'Cambiar idioma', languageList: 'Selecciona un idioma', closeDialog: 'Cerrar diálogo', menuOpen: 'Abrir menú de navegación', menuClose: 'Cerrar menú de navegación', placeholderBadge: 'Marcador', external: 'Se abre en una pestaña nueva' },
    appearance: { open: 'Apariencia', title: 'Apariencia', theme: 'Tema', dark: 'Oscuro', light: 'Claro', accent: 'Color de acento', reset: 'Restablecer', color: 'Color {name}',
      colors: { violet: 'Violeta', blue: 'Azul', cyan: 'Cian', teal: 'Verde azulado', green: 'Verde', lime: 'Lima', amber: 'Ámbar', rose: 'Rosa' } },
    common: { loading: 'Cargando…', error: 'Algo salió mal.', empty: 'Todavía no hay nada que mostrar.', unknown: 'Sin especificar', none: 'Sin caducidad', notDocumented: 'Aún sin documentar — sustituye este marcador por información real.' },
    profile: { name: 'Jose Luis C.', initials: 'JLC', role: 'Desarrollador Python', email: '[tu.correo@ejemplo.com]', location: '[Ciudad, País]' },
    nav: { home: 'Inicio', about: 'Sobre mí', skills: 'Habilidades', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto', cta: 'Hablemos' },
    social: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Correo', x: 'X / Twitter' },
    hero: { name: 'Jose Luis', status: 'Disponible para nuevas oportunidades', greeting: 'Hola, soy',
      headline: 'Desarrollo software desde la arquitectura hasta la experiencia de usuario, con foco en claridad, calidad y mantenibilidad.',
      intro: '[Marcador — sustitúyelo por una presentación breve y precisa: qué construyes, qué problemas te gusta resolver y el impacto de tu trabajo.]',
      ctaProjects: 'Ver mis proyectos', ctaContact: 'Hablemos', cv: 'Descargar CV', scroll: 'Desplázate' },
    about: { label: 'Sobre mí', title: 'Una breve presentación', subtitle: 'Trayectoria, intereses y mi forma de entender la ingeniería.',
      photoPlaceholder: 'Foto de perfil', heading: '[Marcador — tu titular profesional]',
      p1: '[Marcador — tu trayectoria: cómo empezaste, qué estudiaste y en qué trabajas hoy.]',
      p2: '[Marcador — tu filosofía de ingeniería: cómo abordas el diseño, la calidad y la colaboración.]',
      p3: '[Marcador — tus objetivos y qué buscas a continuación.]',
      interestsTitle: 'Áreas de enfoque',
      interests: ['[Área de enfoque]', '[Área de enfoque]', '[Área de enfoque]', '[Área de enfoque]', '[Área de enfoque]'] },
    skills: { label: 'Habilidades', title: 'Tecnologías y herramientas',
      subtitle: 'Busca, filtra por categoría o pulsa una tecnología para ver qué proyectos la usan.',
      empty: 'Aún no hay habilidades registradas.',
      searchPh: 'Buscar una tecnología…', searchLabel: 'Buscar tecnología', searchClear: 'Borrar búsqueda',
      allResults: '{n} tecnologías', results: '{n} coincidencias con “{q}”', noResults: 'Sin resultados para “{q}”',
      collapse: 'Contraer {cat}', expand: 'Expandir {cat}',
      useCount: 'Usada en {n} proyectos', useNone: 'Sin proyectos asociados todavía',
      activeTech: 'Filtrando proyectos por {tech}', clearTech: 'Quitar el filtro de {tech}',
      exampleNote: 'Los datos mostrados son de ejemplo: edita el bloque DATA para poner tu stack real.',
      categories: { languages: 'Lenguajes de programación', frontend: 'Frontend', backend: 'Backend', databases: 'Bases de datos y almacenamiento', cloud: 'Nube y DevOps', tools: 'Frameworks y herramientas' } },
    experience: { label: 'Experiencia', title: 'Trayectoria profesional', subtitle: 'Empleo, formación y certificaciones.',
      tabListLabel: 'Categorías de experiencia', empty: 'Todavía no hay entradas — añádelas en el bloque DATA.',
      kinds: { work: 'Trabajo', education: 'Formación' },
      entries: {
        job1: { period: '[Mes Año] — [Mes Año]', title: '[Puesto]', org: '[Empresa]', points: ['[Marcador — un logro concreto, con cifras cuando las tengas.]', '[Marcador — un sistema o funcionalidad que lideraste de extremo a extremo.]', '[Marcador — impacto en colaboración, mentoría o procesos.]'] },
        job2: { period: '[Mes Año] — [Mes Año]', title: '[Puesto anterior]', org: '[Empresa anterior]', points: ['[Marcador — responsabilidad o entrega.]', '[Marcador — resultado medible.]'] },
        edu1: { period: '[Año inicio] — [Año fin]', title: '[Titulación o programa]', org: '[Institución]', points: ['[Marcador — asignaturas relevantes, tesis o menciones.]', '[Marcador — actividades, asociaciones o premios.]'] }
      } },
    projects: { label: 'Proyectos', title: 'Trabajo seleccionado',
      subtitle: 'Selecciona una tarjeta con Tab y pulsa Intro para abrir sus detalles.',
      hint: 'Usa Tab para seleccionar una tarjeta e Intro para abrir sus detalles. El espacio no abre tarjetas.',
      empty: 'Aún no hay proyectos configurados.', promote: 'Promover {name} al espacio destacado',
      imageAlt: 'Captura de pantalla de {name}',
      filtered: '{n} de {total} proyectos usan {tech}', filteredNone: 'Ningún proyecto usa {tech} todavía',
      clearFilter: 'Quitar el filtro de tecnología',
      items: {
        p1: { description: '[Marcador — una o dos frases sobre qué hace este proyecto y a quién sirve.]', problem: '[Marcador — el problema concreto que aborda y por qué las opciones existentes no bastaban.]', features: ['[Marcador — capacidad principal]', '[Marcador — segunda capacidad]', '[Marcador — tercera capacidad]'], architecture: '[Marcador — servicios, flujo de datos y el razonamiento detrás de las decisiones técnicas clave.]', contribution: '[Marcador — tu rol y responsabilidades exactas.]', challenges: '[Marcador — el reto técnico más difícil y cómo lo resolviste.]', results: '[Marcador — resultados medibles, adopción o las lecciones más importantes.]' },
        p2: { description: '[Marcador — descripción breve del proyecto.]', problem: '[Marcador — el problema que resuelve.]', features: ['[Marcador — funcionalidad]', '[Marcador — funcionalidad]'], architecture: '[Marcador — resumen de la arquitectura.]', contribution: '[Marcador — tu rol.]', challenges: '[Marcador — reto y solución.]', results: '[Marcador — resultado.]' },
        p3: { description: '[Marcador — descripción breve del proyecto.]', problem: '[Marcador — el problema que resuelve.]', features: ['[Marcador — funcionalidad]', '[Marcador — funcionalidad]', '[Marcador — funcionalidad]'], architecture: '[Marcador — resumen de la arquitectura.]', contribution: '[Marcador — tu rol.]', challenges: '[Marcador — reto y solución.]', results: '[Marcador — resultado.]' },
        p4: { description: '[Marcador — descripción breve del proyecto.]', problem: '[Marcador — el problema que resuelve.]', features: ['[Marcador — funcionalidad]', '[Marcador — funcionalidad]'], architecture: '[Marcador — resumen de la arquitectura.]', contribution: '[Marcador — tu rol.]', challenges: '[Marcador — reto y solución.]', results: '[Marcador — resultado.]' }
      },
      modal: { eyebrow: 'Proyecto', overview: 'Resumen', problem: 'Planteamiento del problema', features: 'Funcionalidades clave', architecture: 'Arquitectura y decisiones', technologies: 'Tecnologías', contribution: 'Mi contribución', challenges: 'Retos y soluciones', results: 'Resultados y aprendizajes', repository: 'Repositorio', demo: 'Demo en vivo', docs: 'Documentación', noLinks: 'No hay enlaces públicos para este proyecto.', openCta: 'Pulsa Intro para ver los detalles', openAria: 'Abrir los detalles de {name}' } },
    certs: { title: 'Certificaciones', hint: 'Arrastra para explorar · el movimiento continúa después de 3 segundos',
      carouselLabel: 'Carrusel de certificaciones', viewportLabel: 'Certificaciones. Usa las flechas para navegar e Intro para previsualizar.',
      prev: 'Certificación anterior', next: 'Certificación siguiente', pause: 'Pausar el desplazamiento automático', play: 'Reanudar el desplazamiento automático',
      status: 'Certificación {i} de {n}', empty: 'Aún no hay certificaciones registradas.',
      openAria: 'Previsualizar el certificado {name}', imageAlt: 'Certificado de {name}',
      items: {
        c1: { name: '[Nombre de la certificación]', org: '[Entidad emisora]', issued: '[Fecha de emisión]', expires: '[Fecha de caducidad]' },
        c2: { name: '[Nombre de la certificación]', org: '[Entidad emisora]', issued: '[Fecha de emisión]', expires: '[Fecha de caducidad]' },
        c3: { name: '[Nombre de la certificación]', org: '[Entidad emisora]', issued: '[Fecha de emisión]', expires: '[Fecha de caducidad]' },
        c4: { name: '[Nombre de la certificación]', org: '[Entidad emisora]', issued: '[Fecha de emisión]', expires: '[Fecha de caducidad]' },
        c5: { name: '[Nombre de la certificación]', org: '[Entidad emisora]', issued: '[Fecha de emisión]', expires: '[Fecha de caducidad]' }
      },
      modal: { eyebrow: 'Credencial', issuer: 'Entidad emisora', datesTitle: 'Vigencia', dates: 'Emitido: {issued} · Caduca: {expires}', verify: 'Verificar credencial', noVerify: 'No se ha proporcionado una URL pública de verificación.' } },
    contact: { label: 'Contacto', title: 'Construyamos algo', subtitle: 'Vacantes, colaboraciones o una duda técnica: escríbeme.',
      form: { name: 'Nombre', namePh: 'Tu nombre', email: 'Correo electrónico', emailPh: 'tu@ejemplo.com',
        subject: 'Asunto', subjectPh: '¿Sobre qué escribes?', message: 'Mensaje', messagePh: 'Cuéntame algo sobre el proyecto o el puesto…',
        submit: 'Enviar mensaje', sending: 'Preparando…', validating: 'Revisando tu mensaje…', loading: 'Abriendo tu aplicación de correo…',
        success: 'Tu aplicación de correo debería abrirse con el mensaje listo.',
        fallback: 'Si no ocurrió nada, abre el borrador manualmente.',
        invalid: 'Corrige los campos resaltados.',
        error: 'No pudimos abrir tu aplicación de correo. Escríbeme directamente a {email}.',
        notice: 'Este formulario no tiene backend: al enviarlo se abre tu propia aplicación de correo con el mensaje precargado. Nada se almacena ni se envía a un servidor.',
        errors: { nameRequired: 'Introduce tu nombre (al menos 2 caracteres).', emailRequired: 'Introduce tu correo electrónico.', emailInvalid: 'Ese correo no parece válido.', subjectRequired: 'Añade un asunto breve (al menos 3 caracteres).', messageRequired: 'Escribe un mensaje.', messageShort: 'Escribe al menos 12 caracteres.' } } },
    footer: { tagline: 'Ingeniero de software construyendo sistemas fiables y bien hechos.', navTitle: 'Navegación', connectTitle: 'Conectar', contactTitle: 'Directo', copyright: '© {year} {name}. Todos los derechos reservados.', backToTop: 'Volver arriba', license: 'Licencia Apache 2.0' }
  };

  /* ─────────── ENGLISH ─────────── */
  var en = {
    meta: { title: 'Jose Luis C. — Software Engineer', description: 'Portfolio of Jose Luis C., software engineer: selected projects, technical skills, professional experience and contact details.' },
    a11y: { skip: 'Skip to main content', primaryNav: 'Primary navigation', language: 'Change language', languageList: 'Select a language', closeDialog: 'Close dialog', menuOpen: 'Open navigation menu', menuClose: 'Close navigation menu', placeholderBadge: 'Placeholder', external: 'Opens in a new tab' },
    appearance: { open: 'Appearance', title: 'Appearance', theme: 'Theme', dark: 'Dark', light: 'Light', accent: 'Accent colour', reset: 'Reset', color: '{name} colour',
      colors: { violet: 'Violet', blue: 'Blue', cyan: 'Cyan', teal: 'Teal', green: 'Green', lime: 'Lime', amber: 'Amber', rose: 'Rose' } },
    common: { loading: 'Loading…', error: 'Something went wrong.', empty: 'Nothing to show yet.', unknown: 'Not specified', none: 'No expiry', notDocumented: 'Not documented yet — replace this placeholder with real information.' },
    profile: { name: 'Jose Luis C.', initials: 'JLC', role: 'Desarrollador Python', email: '[your.email@example.com]', location: '[City, Country]' },
    nav: { home: 'Home', about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', contact: 'Contact', cta: 'Get in touch' },
    social: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Email', x: 'X / Twitter' },
    hero: { name: 'Jose Luis', status: 'Open to new opportunities', greeting: 'Hi, I’m',
      headline: 'I develop software from architecture to user experience, with a focus on clarity, quality and maintainability',
      intro: '[Placeholder — replace with a concise, accurate introduction: what you build, the problems you enjoy solving and the impact of your work.]',
      ctaProjects: 'Explore my projects', ctaContact: 'Get in touch', cv: 'Download CV', scroll: 'Scroll' },
    about: { label: 'About', title: 'A short introduction', subtitle: 'Background, interests and the way I approach engineering.',
      photoPlaceholder: 'Profile photo', heading: '[Placeholder — your professional headline]',
      p1: '[Placeholder — your background: how you started, what you studied and what you work on today.]',
      p2: '[Placeholder — your engineering philosophy: how you approach design, quality and collaboration.]',
      p3: '[Placeholder — your goals and what you are looking for next.]',
      interestsTitle: 'Focus areas',
      interests: ['[Focus area]', '[Focus area]', '[Focus area]', '[Focus area]', '[Focus area]'] },
    skills: { label: 'Skills', title: 'Technologies & tools',
      subtitle: 'Search, filter by category, or select a technology to see which projects use it.',
      empty: 'No skills listed yet.',
      searchPh: 'Search a technology…', searchLabel: 'Search technology', searchClear: 'Clear search',
      allResults: '{n} technologies', results: '{n} matches for “{q}”', noResults: 'No results for “{q}”',
      collapse: 'Collapse {cat}', expand: 'Expand {cat}',
      useCount: 'Used in {n} projects', useNone: 'No linked projects yet',
      activeTech: 'Filtering projects by {tech}', clearTech: 'Clear the {tech} filter',
      exampleNote: 'The data shown is sample data: edit the DATA block to use your real stack.',
      categories: { languages: 'Programming languages', frontend: 'Frontend', backend: 'Backend', databases: 'Databases & storage', cloud: 'Cloud & DevOps', tools: 'Frameworks & tooling' } },
    experience: { label: 'Experience', title: 'Professional journey', subtitle: 'Employment, education and certifications.',
      tabListLabel: 'Experience categories', empty: 'No entries yet — add them to the DATA block.',
      kinds: { work: 'Work', education: 'Education' },
      entries: {
        job1: { period: '[Month Year] — [Month Year]', title: '[Job Title]', org: '[Company]', points: ['[Placeholder — a concrete achievement, with numbers where you have them.]', '[Placeholder — a system or feature you owned end to end.]', '[Placeholder — collaboration, mentoring or process impact.]'] },
        job2: { period: '[Month Year] — [Month Year]', title: '[Previous Job Title]', org: '[Previous Company]', points: ['[Placeholder — responsibility or deliverable.]', '[Placeholder — measurable outcome.]'] },
        edu1: { period: '[Start Year] — [End Year]', title: '[Degree or Programme]', org: '[Institution]', points: ['[Placeholder — relevant coursework, thesis or honours.]', '[Placeholder — activities, societies or awards.]'] }
      } },
    projects: { label: 'Projects', title: 'Selected work',
      subtitle: 'Select a card with Tab and press Enter to open its details.',
      hint: 'Tab to a card and press Enter to open its details. Space does not open cards.',
      empty: 'No projects configured yet.', promote: 'Promote {name} to the featured slot',
      imageAlt: 'Screenshot of {name}',
      filtered: '{n} of {total} projects use {tech}', filteredNone: 'No project uses {tech} yet',
      clearFilter: 'Clear the technology filter',
      items: {
        p1: { description: '[Placeholder — one or two sentences on what this project does and who it serves.]', problem: '[Placeholder — the concrete problem it addresses and why existing options fell short.]', features: ['[Placeholder — primary capability]', '[Placeholder — second capability]', '[Placeholder — third capability]'], architecture: '[Placeholder — services, data flow and the reasoning behind the main technical decisions.]', contribution: '[Placeholder — your exact role and responsibilities.]', challenges: '[Placeholder — the hardest technical challenge and how you solved it.]', results: '[Placeholder — measurable outcomes, adoption, or the most important lessons learned.]' },
        p2: { description: '[Placeholder — short description of the project.]', problem: '[Placeholder — the problem it solves.]', features: ['[Placeholder — feature]', '[Placeholder — feature]'], architecture: '[Placeholder — architecture summary.]', contribution: '[Placeholder — your role.]', challenges: '[Placeholder — challenge and solution.]', results: '[Placeholder — outcome.]' },
        p3: { description: '[Placeholder — short description of the project.]', problem: '[Placeholder — the problem it solves.]', features: ['[Placeholder — feature]', '[Placeholder — feature]', '[Placeholder — feature]'], architecture: '[Placeholder — architecture summary.]', contribution: '[Placeholder — your role.]', challenges: '[Placeholder — challenge and solution.]', results: '[Placeholder — outcome.]' },
        p4: { description: '[Placeholder — short description of the project.]', problem: '[Placeholder — the problem it solves.]', features: ['[Placeholder — feature]', '[Placeholder — feature]'], architecture: '[Placeholder — architecture summary.]', contribution: '[Placeholder — your role.]', challenges: '[Placeholder — challenge and solution.]', results: '[Placeholder — outcome.]' }
      },
      modal: { eyebrow: 'Project', overview: 'Overview', problem: 'Problem statement', features: 'Key features', architecture: 'Architecture & decisions', technologies: 'Technologies', contribution: 'My contribution', challenges: 'Challenges & solutions', results: 'Results & lessons', repository: 'Repository', demo: 'Live demo', docs: 'Documentation', noLinks: 'No public links available for this project.', openCta: 'Press Enter to view details', openAria: 'Open details for {name}' } },
    certs: { title: 'Certifications', hint: 'Drag to explore · movement resumes after 3 seconds',
      carouselLabel: 'Certifications carousel', viewportLabel: 'Certifications. Use the arrow keys to browse, Enter to preview.',
      prev: 'Previous certification', next: 'Next certification', pause: 'Pause automatic scrolling', play: 'Resume automatic scrolling',
      status: 'Certification {i} of {n}', empty: 'No certifications listed yet.',
      openAria: 'Preview the {name} certificate', imageAlt: '{name} certificate',
      items: {
        c1: { name: '[Certification Name]', org: '[Issuing Organisation]', issued: '[Issue date]', expires: '[Expiry date]' },
        c2: { name: '[Certification Name]', org: '[Issuing Organisation]', issued: '[Issue date]', expires: '[Expiry date]' },
        c3: { name: '[Certification Name]', org: '[Issuing Organisation]', issued: '[Issue date]', expires: '[Expiry date]' },
        c4: { name: '[Certification Name]', org: '[Issuing Organisation]', issued: '[Issue date]', expires: '[Expiry date]' },
        c5: { name: '[Certification Name]', org: '[Issuing Organisation]', issued: '[Issue date]', expires: '[Expiry date]' }
      },
      modal: { eyebrow: 'Credential', issuer: 'Issuing organisation', datesTitle: 'Validity', dates: 'Issued: {issued} · Expires: {expires}', verify: 'Verify credential', noVerify: 'No public verification URL provided.' } },
    contact: { label: 'Contact', title: 'Let’s build something', subtitle: 'Roles, collaborations or a technical question — write to me.',
      form: { name: 'Name', namePh: 'Your name', email: 'Email', emailPh: 'you@example.com',
        subject: 'Subject', subjectPh: 'What is this about?', message: 'Message', messagePh: 'Tell me a little about the project or role…',
        submit: 'Send message', sending: 'Preparing…', validating: 'Checking your message…', loading: 'Opening your email app…',
        success: 'Your email app should open with the message ready.',
        fallback: 'If nothing happened, open the draft manually.',
        invalid: 'Please correct the highlighted fields.',
        error: 'We could not open your email app. Write to me directly at {email}.',
        notice: 'This form has no backend: submitting opens your own email app with the message pre-filled. Nothing is stored or sent to a server.',
        errors: { nameRequired: 'Please enter your name (at least 2 characters).', emailRequired: 'Please enter your email address.', emailInvalid: 'That email address does not look valid.', subjectRequired: 'Please add a short subject (at least 3 characters).', messageRequired: 'Please write a message.', messageShort: 'Please write at least 12 characters.' } } },
    footer: { tagline: 'Software engineer building dependable, well-crafted systems.', navTitle: 'Navigate', connectTitle: 'Connect', contactTitle: 'Direct', copyright: '© {year} {name}. All rights reserved.', backToTop: 'Back to top', license: 'Apache License 2.0' }
  };

  /* ─────────── 简体中文 ─────────── */
  var zh = {
    meta: { title: 'Jose Luis C. — 软件工程师', description: '软件工程师 Jose Luis C. 的个人作品集：精选项目、技术栈、职业经历与联系方式。' },
    a11y: { skip: '跳到主要内容', primaryNav: '主导航', language: '切换语言', languageList: '选择语言', closeDialog: '关闭对话框', menuOpen: '打开导航菜单', menuClose: '关闭导航菜单', placeholderBadge: '占位内容', external: '在新标签页中打开' },
    appearance: { open: '外观', title: '外观', theme: '主题', dark: '深色', light: '浅色', accent: '强调色', reset: '恢复默认', color: '{name}色',
      colors: { violet: '紫罗兰', blue: '蓝色', cyan: '青色', teal: '蓝绿', green: '绿色', lime: '青柠', amber: '琥珀', rose: '玫红' } },
    common: { loading: '加载中…', error: '出现了一些问题。', empty: '暂无可显示的内容。', unknown: '未填写', none: '长期有效', notDocumented: '尚未记录 —— 请将该占位内容替换为真实信息。' },
    profile: { name: 'Jose Luis C.', initials: 'JLC', role: 'Desarrollador Python', email: '[your.email@example.com]', location: '[城市，国家]' },
    nav: { home: '首页', about: '关于我', skills: '技术栈', experience: '经历', projects: '项目', contact: '联系', cta: '与我联系' },
    social: { github: 'GitHub', linkedin: '领英', email: '邮箱', x: 'X / Twitter' },
    hero: { name: 'Jose Luis', status: '可接受新的工作机会', greeting: '你好，我是',
      headline: '从架构到用户体验，我注重清晰、质量与可维护性。',
      intro: '[占位内容 —— 请替换为简明准确的自我介绍：你构建什么、乐于解决哪些问题、以及你的工作带来的影响。]',
      ctaProjects: '浏览我的项目', ctaContact: '与我联系', cv: '下载简历', scroll: '向下滚动' },
    about: { label: '关于我', title: '简短介绍', subtitle: '我的背景、兴趣，以及我对工程的理解。',
      photoPlaceholder: '个人照片', heading: '[占位内容 —— 你的职业标题]',
      p1: '[占位内容 —— 你的背景：如何入行、学习经历以及目前的工作方向。]',
      p2: '[占位内容 —— 你的工程理念：你如何看待设计、质量与协作。]',
      p3: '[占位内容 —— 你的目标，以及下一步希望做的事。]',
      interestsTitle: '关注领域',
      interests: ['[关注领域]', '[关注领域]', '[关注领域]', '[关注领域]', '[关注领域]'] },
    skills: { label: '技术栈', title: '技术与工具',
      subtitle: '可以搜索、按分类筛选，或点击某项技术查看使用它的项目。',
      empty: '尚未填写技术栈。',
      searchPh: '搜索某项技术…', searchLabel: '搜索技术', searchClear: '清除搜索',
      allResults: '共 {n} 项技术', results: '“{q}” 匹配到 {n} 项', noResults: '没有匹配 “{q}” 的结果',
      collapse: '收起{cat}', expand: '展开{cat}',
      useCount: '在 {n} 个项目中用过', useNone: '暂无关联项目',
      activeTech: '正在按 {tech} 筛选项目', clearTech: '取消 {tech} 筛选',
      exampleNote: '当前显示的是示例数据：请编辑 DATA 代码块填入你真实的技术栈。',
      categories: { languages: '编程语言', frontend: '前端开发', backend: '后端开发', databases: '数据库与存储', cloud: '云与 DevOps', tools: '框架与工具' } },
    experience: { label: '经历', title: '职业历程', subtitle: '工作、教育与认证。',
      tabListLabel: '经历分类', empty: '暂无条目 —— 请在 DATA 代码块中添加。',
      kinds: { work: '工作', education: '教育' },
      entries: {
        job1: { period: '[年份 月份] — [年份 月份]', title: '[职位名称]', org: '[公司名称]', points: ['[占位内容 —— 一项具体成果，如有数据请一并写明。]', '[占位内容 —— 你端到端负责的系统或功能。]', '[占位内容 —— 在协作、指导或流程上的影响。]'] },
        job2: { period: '[年份 月份] — [年份 月份]', title: '[上一份职位]', org: '[上一家公司]', points: ['[占位内容 —— 职责或交付物。]', '[占位内容 —— 可衡量的结果。]'] },
        edu1: { period: '[起始年份] — [结束年份]', title: '[学位或专业]', org: '[学校名称]', points: ['[占位内容 —— 相关课程、毕业论文或荣誉。]', '[占位内容 —— 社团活动、组织或奖项。]'] }
      } },
    projects: { label: '项目', title: '精选作品',
      subtitle: '使用 Tab 选择卡片，然后按回车键查看详情。',
      hint: '提示：使用 Tab 键选中卡片，回车键查看详情，通过提升按钮将其与主展示位互换。',
      empty: '尚未配置项目。', promote: '将 {name} 提升至主展示位',
      imageAlt: '{name} 的界面截图',
      filtered: '{total} 个项目中有 {n} 个使用 {tech}', filteredNone: '暂无项目使用 {tech}',
      clearFilter: '取消技术筛选',
      items: {
        p1: { description: '[占位内容 —— 用一两句话说明该项目做什么、服务于谁。]', problem: '[占位内容 —— 它解决的具体问题，以及既有方案为何不足。]', features: ['[占位内容 —— 核心能力]', '[占位内容 —— 第二项能力]', '[占位内容 —— 第三项能力]'], architecture: '[占位内容 —— 服务划分、数据流，以及关键技术决策背后的思考。]', contribution: '[占位内容 —— 你的确切角色与职责。]', challenges: '[占位内容 —— 最困难的技术挑战及你的解决方式。]', results: '[占位内容 —— 可衡量的成果、使用情况，或最重要的经验教训。]' },
        p2: { description: '[占位内容 —— 项目简述。]', problem: '[占位内容 —— 它解决的问题。]', features: ['[占位内容 —— 功能]', '[占位内容 —— 功能]'], architecture: '[占位内容 —— 架构概述。]', contribution: '[占位内容 —— 你的角色。]', challenges: '[占位内容 —— 挑战与解决方案。]', results: '[占位内容 —— 成果。]' },
        p3: { description: '[占位内容 —— 项目简述。]', problem: '[占位内容 —— 它解决的问题。]', features: ['[占位内容 —— 功能]', '[占位内容 —— 功能]', '[占位内容 —— 功能]'], architecture: '[占位内容 —— 架构概述。]', contribution: '[占位内容 —— 你的角色。]', challenges: '[占位内容 —— 挑战与解决方案。]', results: '[占位内容 —— 成果。]' },
        p4: { description: '[占位内容 —— 项目简述。]', problem: '[占位内容 —— 它解决的问题。]', features: ['[占位内容 —— 功能]', '[占位内容 —— 功能]'], architecture: '[占位内容 —— 架构概述。]', contribution: '[占位内容 —— 你的角色。]', challenges: '[占位内容 —— 挑战与解决方案。]', results: '[占位内容 —— 成果。]' }
      },
      modal: { eyebrow: '项目', overview: '项目概述', problem: '问题陈述', features: '核心功能', architecture: '架构与技术决策', technologies: '使用技术', contribution: '我的贡献', challenges: '挑战与解决方案', results: '成果与收获', repository: '代码仓库', demo: '在线演示', docs: '项目文档', noLinks: '该项目暂无公开链接。', openCta: '按回车键查看详情', openAria: '打开 {name} 的详细信息' } },
    certs: { title: '专业认证', hint: '拖动浏览 · 3 秒后继续滚动',
      carouselLabel: '认证轮播', viewportLabel: '认证列表。使用左右方向键浏览，回车键预览。',
      prev: '上一项认证', next: '下一项认证', pause: '暂停自动滚动', play: '继续自动滚动',
      status: '第 {i} 项，共 {n} 项', empty: '尚未填写认证信息。',
      openAria: '预览 {name} 证书', imageAlt: '{name} 证书',
      items: {
        c1: { name: '[认证名称]', org: '[发证机构]', issued: '[发证日期]', expires: '[到期日期]' },
        c2: { name: '[认证名称]', org: '[发证机构]', issued: '[发证日期]', expires: '[到期日期]' },
        c3: { name: '[认证名称]', org: '[发证机构]', issued: '[发证日期]', expires: '[到期日期]' },
        c4: { name: '[认证名称]', org: '[发证机构]', issued: '[发证日期]', expires: '[到期日期]' },
        c5: { name: '[认证名称]', org: '[发证机构]', issued: '[发证日期]', expires: '[到期日期]' }
      },
      modal: { eyebrow: '凭证', issuer: '发证机构', datesTitle: '有效期', dates: '发证日期：{issued} · 到期日期：{expires}', verify: '验证凭证', noVerify: '暂无公开的凭证验证链接。' } },
    contact: { label: '联系', title: '一起做点东西', subtitle: '无论是职位机会、合作，还是技术问题，都欢迎来信。',
      form: { name: '姓名', namePh: '您的姓名', email: '邮箱', emailPh: 'you@example.com',
        subject: '主题', subjectPh: '这封邮件关于什么？', message: '留言', messagePh: '简单介绍一下项目或职位…',
        submit: '发送留言', sending: '正在准备…', validating: '正在检查您的留言…', loading: '正在打开您的邮件应用…',
        success: '您的邮件应用应已打开，并已填好内容。',
        fallback: '如果没有反应，请手动打开草稿。',
        invalid: '请修正标红的字段。',
        error: '无法打开您的邮件应用，请直接发送邮件至 {email}。',
        notice: '该表单没有后端：提交后会在您本地的邮件应用中生成已填好的邮件，不会存储或发送任何数据到服务器。',
        errors: { nameRequired: '请输入您的姓名（至少 2 个字符）。', emailRequired: '请输入您的邮箱地址。', emailInvalid: '该邮箱地址格式似乎不正确。', subjectRequired: '请填写简短的主题（至少 3 个字符）。', messageRequired: '请填写留言内容。', messageShort: '留言至少需要 12 个字符。' } } },
    footer: { tagline: '软件工程师，专注构建可靠且精良的系统。', navTitle: '站内导航', connectTitle: '保持联系', contactTitle: '直接联系', copyright: '© {year} {name}　保留所有权利', backToTop: '回到顶部', license: 'Apache 许可证 2.0' }
  };

  var TRANSLATIONS = { es: es, en: en, 'zh-CN': zh };
  var current = DEFAULT, dict = TRANSLATIONS[DEFAULT], listeners = [];

  function lookup(obj, path) {
    if (!obj || !path) return undefined;
    var parts = String(path).split('.'), v = obj;
    for (var i = 0; i < parts.length; i++) { if (v == null) return undefined; v = v[parts[i]]; }
    return v;
  }
  function interpolate(str, vars) {
    if (!vars || typeof str !== 'string') return str;
    return str.replace(/\{(\w+)\}/g, function (m, k) {
      return (vars[k] === undefined || vars[k] === null) ? m : String(vars[k]);
    });
  }
  function t(key, vars) {
    var v = lookup(dict, key);
    if (v === undefined) v = lookup(TRANSLATIONS[DEFAULT], key);
    if (v === undefined) return key;
    if (typeof v === 'string') return interpolate(v, vars);
    return v;
  }
  function tl(key) {
    var v = t(key);
    if (Array.isArray(v)) return v.slice();
    if (typeof v === 'string' && v !== key) return [v];
    return [];
  }
  function raw(key) { var v = t(key); return typeof v === 'string' ? v : ''; }

  function $$all(sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); }
  function setMeta(attr, name, content) {
    var n = document.head.querySelector('meta[' + attr + '="' + name + '"]');
    if (n) n.setAttribute('content', content);
  }
  function updateDocumentMeta() {
    var m = LOCALES[current] || LOCALES[DEFAULT];
    document.documentElement.lang = m.htmlLang;
    document.documentElement.setAttribute('dir', 'ltr');
    document.title = t('meta.title');
    setMeta('name', 'description', t('meta.description'));
    setMeta('property', 'og:title', t('meta.title'));
    setMeta('property', 'og:description', t('meta.description'));
    setMeta('property', 'og:locale', m.ogLocale);
  }
  function apply(scope) {
    scope = scope || document;
    var nodes = $$all('[data-i18n],[data-i18n-attr],[data-i18n-placeholder],[data-i18n-title]', scope);
    if (scope.nodeType === 1 && scope.hasAttribute &&
        (scope.hasAttribute('data-i18n') || scope.hasAttribute('data-i18n-attr'))) nodes.unshift(scope);
    nodes.forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      if (key) node.textContent = t(key);
      var ph = node.getAttribute('data-i18n-placeholder');
      if (ph) node.setAttribute('placeholder', t(ph));
      var ti = node.getAttribute('data-i18n-title');
      if (ti) node.setAttribute('title', t(ti));
      var spec = node.getAttribute('data-i18n-attr');
      if (spec) spec.split(';').forEach(function (pair) {
        if (!pair.trim()) return;
        var bits = pair.split(':');
        if (bits.length === 2) {
          var val = t(bits[1].trim());
          if (val !== undefined && val !== null) node.setAttribute(bits[0].trim(), val);
        }
      });
    });
    updateDocumentMeta();
  }
  function normalize(code) {
    if (!code) return null;
    var c = String(code).replace(/_/g, '-').trim();
    if (SUPPORTED.indexOf(c) !== -1) return c;
    var lower = c.toLowerCase();
    if (lower.indexOf('zh') === 0) return 'zh-CN';
    var base = c.split('-')[0].toLowerCase();
    if (base === 'es') return 'es';
    if (base === 'en') return 'en';
    return null;
  }
  function detect() {
    var stored = null;
    try { stored = root.localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var n = normalize(stored); if (n) return n;
    var cand = [];
    if (root.navigator) {
      if (Array.isArray(root.navigator.languages)) cand = cand.concat(root.navigator.languages);
      if (root.navigator.language) cand.push(root.navigator.language);
      if (root.navigator.userLanguage) cand.push(root.navigator.userLanguage);
    }
    var d = document.documentElement.getAttribute('lang');
    if (d) cand.push(d);
    for (var i = 0; i < cand.length; i++) { var m = normalize(cand[i]); if (m) return m; }
    return DEFAULT;
  }
  function persist(l) { try { root.localStorage.setItem(STORAGE_KEY, l); } catch (e) {} }
  function setLocale(locale, opts) {
    var next = normalize(locale);
    if (!next) return false;
    if (next === current && !(opts && opts.force)) { apply(document); return true; }
    current = next;
    dict = TRANSLATIONS[current] || TRANSLATIONS[DEFAULT];
    persist(current);
    apply(document);
    listeners.slice().forEach(function (fn) { try { fn(current); } catch (e) {} });
    return true;
  }
  function onChange(fn) {
    if (typeof fn === 'function') listeners.push(fn);
    return function () { var i = listeners.indexOf(fn); if (i > -1) listeners.splice(i, 1); };
  }

  (function boot() {
    var l = detect();
    current = l; dict = TRANSLATIONS[l] || TRANSLATIONS[DEFAULT];
    document.documentElement.lang = (LOCALES[l] || LOCALES[DEFAULT]).htmlLang;
  })();

  root.I18N = {
    SUPPORTED: SUPPORTED.slice(), DEFAULT: DEFAULT, LOCALES: LOCALES, TRANSLATIONS: TRANSLATIONS,
    get locale() { return current; },
    t: t, tl: tl, raw: raw, apply: apply, normalize: normalize, detect: detect,
    setLocale: setLocale, onChange: onChange,
    init: function () { setLocale(current, { force: true }); }
  };
})(window);


/* ═══════════════════════════════════════════════════════════════════════
   PARTE 2 · APLICACIÓN
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var I18N = window.I18N;

  /* ─────────── APARIENCIA (tema + acento) ─────────── */
  var THEME_KEY = 'portfolio.editorial.theme', ACCENT_KEY = 'portfolio.editorial.accent';
  var DEFAULT_ACCENT = 217;
  var ACCENTS = [
    { id: 'violet', h: 265 }, { id: 'blue', h: 217 }, { id: 'cyan', h: 190 }, { id: 'teal', h: 168 },
    { id: 'green', h: 142 },  { id: 'lime', h: 88 },  { id: 'amber', h: 38 }, { id: 'rose', h: 344 }
  ];
  var appearance = { theme: 'light', hue: DEFAULT_ACCENT };

  function readAppearance() {
    try {
      var th = localStorage.getItem(THEME_KEY);
      var ac = localStorage.getItem(ACCENT_KEY);
      appearance.theme = (th === 'light' || th === 'dark') ? th
        : (document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
      var n = parseInt(ac, 10);
      appearance.hue = (!isNaN(n) && n >= 0 && n <= 360) ? n : DEFAULT_ACCENT;
    } catch (e) {
      appearance.theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      appearance.hue = DEFAULT_ACCENT;
    }
  }
  function paintAppearance(save) {
    var d = document.documentElement;
    d.setAttribute('data-theme', appearance.theme);
    d.style.setProperty('--accent-h', String(appearance.hue));
    var tc = document.querySelector('meta[name="theme-color"]');
    if (tc) tc.setAttribute('content', appearance.theme === 'light' ? '#f7f7fa' : '#08080a');
    if (save) {
      try { localStorage.setItem(THEME_KEY, appearance.theme); localStorage.setItem(ACCENT_KEY, String(appearance.hue)); } catch (e) {}
    }
    document.dispatchEvent(new CustomEvent('appearance:change', { detail: { theme: appearance.theme, hue: appearance.hue } }));
  }

  /* ─────────── DATOS ───────────
     MARCADORES entre [corchetes] = información personal por completar.
     Las tecnologías listadas son DATOS DE EJEMPLO (se indica en la UI):
     reemplázalas por tu stack real. Los textos traducibles viven arriba. */
  var DATA = {
    projects: [
      { id: 'p1', name: '[Proyecto Uno]',    hue: 265, tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'], repo: '', demo: '', docs: '', image: '', placeholder: true },
      { id: 'p2', name: '[Proyecto Dos]',    hue: 198, tech: ['Python', 'FastAPI', 'Redis', 'AWS'],                      repo: '', demo: '', docs: '', image: '', placeholder: true },
      { id: 'p3', name: '[Proyecto Tres]',   hue: 152, tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Vercel'],          repo: '', demo: '', docs: '', image: '', placeholder: true },
      { id: 'p4', name: '[Proyecto Cuatro]', hue: 24,  tech: ['Go', 'gRPC', 'Kubernetes', 'Prometheus'],                 repo: '', demo: '', docs: '', image: '', placeholder: true }
    ],
    certifications: [
      { id: 'c1', hue: 265, image: '', credentialUrl: '', placeholder: true },
      { id: 'c2', hue: 198, image: '', credentialUrl: '', placeholder: true },
      { id: 'c3', hue: 152, image: '', credentialUrl: '', placeholder: true },
      { id: 'c4', hue: 24,  image: '', credentialUrl: '', placeholder: true },
      { id: 'c5', hue: 320, image: '', credentialUrl: '', placeholder: true }
    ]
  };

  /* ─────────── HELPERS ─────────── */
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k.slice(0, 2) === 'on') n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? '' : v);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }
  var P = {
    chevron: '<path d="m6 9 6 6 6-6"/>', arrowR: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    arrowUp: '<path d="M12 19V5M5 12l7-7 7 7"/>', close: '<path d="M18 6 6 18M6 6l12 12"/>',
    seal: '<circle cx="12" cy="9" r="5.5"/><path d="M8.6 13.6 7 22l5-2.4L17 22l-1.6-8.4"/>'
  };
  function svg(path, size, stroke) {
    var s = document.createElement('span');
    s.innerHTML = stroke
      ? '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + path + '</svg>'
      : '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="currentColor" aria-hidden="true">' + path + '</svg>';
    return s.firstChild;
  }

  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduceMotion = mqReduce.matches;
  if (mqReduce.addEventListener) mqReduce.addEventListener('change', function (e) { reduceMotion = e.matches; });
  else if (mqReduce.addListener) mqReduce.addListener(function (e) { reduceMotion = e.matches; });

  var t  = function (k, v) { return I18N.t(k, v); };
  var tl = function (k)    { return I18N.tl(k); };
  function isPh(s) { return typeof s === 'string' && s.charAt(0) === '['; }
  function phBadge() { return el('span', { class: 'ph', text: t('a11y.placeholderBadge') }); }
  function cleanMail() { return I18N.raw('profile.email').replace(/^\[/, '').replace(/\]$/, ''); }

  /* ─────────── REVEALS ─────────── */
  var revealIO = null;
  function observeReveals(scope) {
    var nodes = $$('.reveal', scope || document);
    if (scope && scope.nodeType === 1 && scope.classList.contains('reveal')) nodes.unshift(scope);
    if (!('IntersectionObserver' in window) || reduceMotion) {
      nodes.forEach(function (node) { node.classList.add('is-in'); });
      return;
    }
    if (!revealIO) {
      // The same visibility transition applies to wheel scrolling and anchor navigation.
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          entry.target.classList.toggle('is-in', entry.isIntersecting);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    }
    nodes.forEach(function (node) { revealIO.observe(node); });
  }

  /* ─────────── PROGRESO DE SCROLL ─────────── */
  var bar = $('#scrollBar'), ticking = false;
  function onScrollFrame() {
    ticking = false;
    if (!bar) return;
    var y = window.scrollY || window.pageYOffset;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, Math.max(0, y / max)) : 0) + ')';
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; window.requestAnimationFrame(onScrollFrame); } }, { passive: true });

  /* ─────────── NAV ─────────── */
  var navMenu = $('#navMenu'), burger = $('#navBurger');
  var navLinks = $$('.nav__link');
  if ('IntersectionObserver' in window) {
    var secIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id;
        navLinks.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('data-section') === id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    $$('main section[id]').forEach(function (s) { secIO.observe(s); });
  }
  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', t(open ? 'a11y.menuClose' : 'a11y.menuOpen'));
    navMenu.classList.toggle('is-open', open);
  }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  navMenu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  /* ─────────── HERO CANVAS ─────────── */
  var heroAccent = { h: appearance.hue || 265 };
  (function heroCanvas() {
    var cv = $('#heroCanvas');
    if (!cv || !cv.getContext) return;
    var ctx = cv.getContext('2d');
    if (!ctx) return;
    var pts = [], w = 0, h = 0, raf = 0, live = true;

    function col(a) {
      var lightness = document.documentElement.getAttribute('data-theme') === 'light' ? 40 : 70;
      return 'hsl(' + heroAccent.h + ' 75% ' + lightness + '% / ' + a + ')';
    }
    function size() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      if (!w || !h) return;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(42, Math.max(12, (w * h) / 30000)));
      pts = [];
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .16, vy: (Math.random() - .5) * .16, r: Math.random() * 1.5 + .6 });
    }
    function frame() {
      raf = 0;
      if (!live || document.hidden) return;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = w + 20; if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20; if (p.y > h + 20) p.y = -20;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832);
        ctx.fillStyle = col(.85); ctx.fill();
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
          if (d2 < 15000) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = col((0.40 * (1 - d2 / 15000)).toFixed(3));
            ctx.lineWidth = 1; ctx.stroke();
          }
        }
      }
      if (!reduceMotion) raf = window.requestAnimationFrame(frame);
    }
    function start() { if (!raf && live && !document.hidden) raf = window.requestAnimationFrame(frame); }
    function stop() { if (raf) { window.cancelAnimationFrame(raf); raf = 0; } }

    size(); start();
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { size(); start(); }, 200); });
    document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else start(); });
    document.addEventListener('appearance:change', function (e) { heroAccent.h = e.detail.hue; start(); });
    if (mqReduce.addEventListener) mqReduce.addEventListener('change', function () { stop(); start(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) { live = e[0].isIntersecting; if (live) start(); else stop(); }, { threshold: 0 }).observe(cv);
    }
  })();

  /* ─────────── ABOUT ─────────── */
  function renderAbout() {
    var host = $('#aboutInterests');
    if (host) { host.innerHTML = ''; tl('about.interests').forEach(function (x) { host.appendChild(el('li', { class: 'chip', text: x })); }); }
  }

  /* ─────────── PROYECTOS + INTERCAMBIO (FLIP) ─────────── */
  var order = DATA.projects.map(function (_, i) { return i; });
  var swapping = false, grid = $('#projectsGrid');
  var currentProject = null, currentCert = null;

  function buildCard(p, idx, featured) {
    var base = 'projects.items.' + p.id + '.';
    var card = el('div', {
      class: 'pcard ' + (featured ? 'pcard--lg' : 'pcard--sm'),
      'data-id': p.id, role: 'group', tabindex: '0', 'aria-keyshortcuts': 'Enter',
      'aria-label': t('projects.modal.openAria', { name: p.name }),
      style: '--hue:' + p.hue
    });
    var media = el('div', { class: 'pcard__media' });
    media.appendChild(el('div', { class: 'pcard__glyph', text: featured ? p.name.replace(/[\[\]]/g, '').slice(0, 2).toUpperCase() : '0' + (idx + 1) }));
    if (p.image) {
      var img = el('img', { class: 'pcard__img', src: p.image, alt: t('projects.imageAlt', { name: p.name }), loading: 'lazy', decoding: 'async' });
      img.addEventListener('error', function () { if (img.parentNode) img.parentNode.removeChild(img); });
      media.appendChild(img);
    }
    if (p.placeholder) media.appendChild(el('span', { class: 'pcard__ph' }, [phBadge()]));
    card.appendChild(media);

    var body = el('div', { class: 'pcard__body' });
    if (featured) {
      var tags = el('div', { class: 'pcard__tags' });
      p.tech.slice(0, 5).forEach(function (x) { tags.appendChild(el('span', { class: 'tag', text: x })); });
      body.appendChild(tags);
    }
    var nameEl = el('h3', { class: 'pcard__name' }, [document.createTextNode(p.name)]);
    if (p.placeholder && featured) nameEl.appendChild(phBadge());
    body.appendChild(nameEl);
    body.appendChild(el('p', { class: 'pcard__desc', text: t(base + 'description') }));
    if (featured) {
      var foot = el('p', { class: 'pcard__foot' });
      foot.appendChild(el('span', { text: t('projects.modal.openCta') }));
      foot.appendChild(svg(P.arrowR, 15, true));
      body.appendChild(foot);
    }
    card.appendChild(body);

    if (!featured) {
      var promo = el('button', {
        type: 'button', class: 'pcard__promote', 'data-promote': p.id,
        'aria-label': t('projects.promote', { name: p.name }),
        title: t('projects.promote', { name: p.name })
      });
      promo.appendChild(svg(P.arrowUp, 15, true));
      promo.addEventListener('click', function (e) { e.stopPropagation(); promote(p.id); });
      card.appendChild(promo);
    }
    card.addEventListener('click', function () { if (!featured) promote(p.id); });
    card.addEventListener('keydown', function (e) {
      if (e.target !== card) return;
      if (e.key === 'Enter') { e.preventDefault(); openProject(p, card); }
    });
    return card;
  }

  function renderProjects(noAnim) {
    if (!grid) return;
    grid.innerHTML = '';
    if (!DATA.projects.length) { grid.appendChild(el('p', { class: 'empty', text: t('projects.empty') })); return; }
    var mainCol = el('div', { class: 'projects__main' });
    mainCol.appendChild(buildCard(DATA.projects[order[0]], order[0], true));
    var side = el('div', { class: 'projects__side' });
    order.slice(1).forEach(function (idx) { side.appendChild(buildCard(DATA.projects[idx], idx, false)); });
    grid.appendChild(mainCol);
    grid.appendChild(side);
    if (noAnim) $$('.reveal', grid).forEach(function (n) { n.classList.add('is-in'); });
    else observeReveals(grid);
  }

  function promote(id) {
    if (swapping) return;
    var pi = -1;
    for (var i = 0; i < DATA.projects.length; i++) if (DATA.projects[i].id === id) pi = i;
    var to = order.indexOf(pi);
    if (to <= 0) return;
    swapping = true;

    var first = {};
    if (!reduceMotion) $$('.pcard', grid).forEach(function (c) { first[c.getAttribute('data-id')] = c.getBoundingClientRect(); });

    var a = order[0]; order[0] = order[to]; order[to] = a;
    renderProjects(true);

    if (reduceMotion) { swapping = false; focusFeatured(); return; }

    var played = false;
    $$('.pcard', grid).forEach(function (c) {
      var f = first[c.getAttribute('data-id')];
      if (!f) return;
      var l = c.getBoundingClientRect();
      var dx = f.left - l.left, dy = f.top - l.top;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
      played = true;
      c.style.transition = 'none';
      c.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
      void c.offsetWidth;
      c.classList.add('is-flipping');
      c.style.transition = '';
      c.style.transform = '';
    });
    var finish = function () {
      $$('.pcard', grid).forEach(function (c) { c.classList.remove('is-flipping'); c.style.transform = ''; });
      swapping = false; focusFeatured();
    };
    if (played) setTimeout(finish, 560); else finish();
  }
  function focusFeatured() {
    var node = grid && grid.querySelector('.pcard--lg');
    if (node) { try { node.focus({ preventScroll: true }); } catch (e) { node.focus(); } }
  }

  /* ─────────── DIÁLOGOS ─────────── */
  var triggers = new WeakMap();
  var nativeDialog = (typeof window.HTMLDialogElement === 'function');

  function wireDialog(dlg) {
    dlg.addEventListener('click', function (e) {
      if (e.target !== dlg) return;
      var panel = dlg.querySelector('.dialog__panel');
      if (panel && !panel.contains(e.target)) closeDialog(dlg);
    });
    dlg.addEventListener('cancel', function (e) { e.preventDefault(); closeDialog(dlg); });
    dlg.addEventListener('close', function () { startLoop(); });
    $$('[data-close]', dlg).forEach(function (b) { b.addEventListener('click', function () { closeDialog(dlg); }); });
  }
  function openDialog(dlg, trigger) {
    if (trigger) triggers.set(dlg, trigger);
    stopLoop();
    if (nativeDialog && typeof dlg.showModal === 'function') { if (!dlg.open) dlg.showModal(); }
    else { dlg.setAttribute('open', ''); }
    var c = $('.dialog__close', dlg);
    if (c) setTimeout(function () { c.focus(); }, 40);
  }
  function closeDialog(dlg) {
    var finish = function () {
      dlg.classList.remove('is-closing');
      if (nativeDialog) { if (dlg.open) dlg.close(); } else dlg.removeAttribute('open');
      var back = triggers.get(dlg);
      if (back && document.contains(back)) { try { back.focus({ preventScroll: true }); } catch (e) { back.focus(); } }
      startLoop();
    };
    if (reduceMotion) finish();
    else { dlg.classList.add('is-closing'); setTimeout(finish, 200); }
  }
  function block(title, content) {
    var w = el('div', { class: 'mblock' });
    w.appendChild(el('h3', { class: 'mblock__h', text: title }));
    var c = el('div', { class: 'mblock__c' });
    if (Array.isArray(content) && content.length) {
      var ul = el('ul', { class: 'mlist' });
      content.forEach(function (x) { ul.appendChild(el('li', { text: x })); });
      c.appendChild(ul);
    } else if (typeof content === 'string' && content) {
      c.textContent = content;
    } else {
      c.appendChild(el('span', { class: 'mna', text: t('common.notDocumented') }));
    }
    w.appendChild(c);
    return w;
  }
  function openProject(p, trigger) {
    currentProject = p;
    var dlg = $('#projectDialog'), body = $('#pdBody'), foot = $('#pdFoot'), base = 'projects.items.' + p.id + '.';
    $('#pdTitle').textContent = p.name;
    body.innerHTML = '';

    var media = el('div', { class: 'mmedia', style: '--hue:' + p.hue });
    media.appendChild(el('div', { class: 'mmedia__glyph', text: p.name.replace(/[\[\]]/g, '').slice(0, 2).toUpperCase() }));
    if (p.image) {
      var im = el('img', { src: p.image, alt: t('projects.imageAlt', { name: p.name }), loading: 'lazy' });
      im.addEventListener('error', function () { if (im.parentNode) im.parentNode.removeChild(im); });
      media.appendChild(im);
    }
    body.appendChild(media);

    var row = el('div', { class: 'mrow' }), colA = el('div'), colB = el('div');
    colA.appendChild(block(t('projects.modal.overview'), t(base + 'description')));
    colA.appendChild(block(t('projects.modal.problem'), t(base + 'problem')));
    colA.appendChild(block(t('projects.modal.features'), tl(base + 'features')));
    colA.appendChild(block(t('projects.modal.architecture'), t(base + 'architecture')));
    colB.appendChild(block(t('projects.modal.contribution'), t(base + 'contribution')));
    colB.appendChild(block(t('projects.modal.challenges'), t(base + 'challenges')));
    colB.appendChild(block(t('projects.modal.results'), t(base + 'results')));
    var tb = el('div', { class: 'mblock' });
    tb.appendChild(el('h3', { class: 'mblock__h', text: t('projects.modal.technologies') }));
    var tags = el('div', { class: 'mtags' });
    if (p.tech && p.tech.length) p.tech.forEach(function (x) { tags.appendChild(el('span', { class: 'tag', text: x })); });
    else tags.appendChild(el('span', { class: 'mna', text: t('common.notDocumented') }));
    tb.appendChild(tags);
    colB.appendChild(tb);
    row.appendChild(colA); row.appendChild(colB);
    body.appendChild(row);
    body.scrollTop = 0;

    foot.innerHTML = '';
    function linkBtn(key, href, primary) {
      return el('a', { class: 'btn btn--sm ' + (primary ? 'btn--primary' : 'btn--ghost'), href: href, target: '_blank', rel: 'noopener noreferrer', text: t(key) });
    }
    if (p.repo) foot.appendChild(linkBtn('projects.modal.repository', p.repo, true));
    if (p.demo) foot.appendChild(linkBtn('projects.modal.demo', p.demo, false));
    if (p.docs) foot.appendChild(linkBtn('projects.modal.docs', p.docs, false));
    if (!p.repo && !p.demo && !p.docs) foot.appendChild(el('span', { class: 'mna', text: t('projects.modal.noLinks') }));
    openDialog(dlg, trigger);
  }
  function openCert(c, trigger) {
    currentCert = c;
    var dlg = $('#certDialog'), body = $('#cdBody'), base = 'certs.items.' + c.id + '.';
    var nm = t(base + 'name');
    $('#cdTitle').textContent = nm;
    body.innerHTML = '';
    var media = el('div', { class: 'certview__media', style: '--hue:' + c.hue });
    if (c.image) {
      var im = el('img', { src: c.image, alt: t('certs.imageAlt', { name: nm }), loading: 'lazy' });
      im.addEventListener('error', function () {
        if (im.parentNode) im.parentNode.removeChild(im);
        media.appendChild(el('div', { class: 'certview__seal' }, [svg(P.seal, 26, true)]));
      });
      media.appendChild(im);
    } else media.appendChild(el('div', { class: 'certview__seal' }, [svg(P.seal, 26, true)]));
    body.appendChild(media);

    var meta = el('div', { class: 'certview__meta' });
    meta.appendChild(block(t('certs.modal.issuer'), t(base + 'org')));
    var iss = t(base + 'issued'), exp = t(base + 'expires');
    meta.appendChild(block(t('certs.modal.datesTitle'), t('certs.modal.dates', {
      issued: isPh(iss) ? t('common.unknown') : iss,
      expires: isPh(exp) ? t('common.none') : exp
    })));
    if (c.credentialUrl) meta.appendChild(el('a', { class: 'btn btn--sm btn--ghost', href: c.credentialUrl, target: '_blank', rel: 'noopener noreferrer', text: t('certs.modal.verify') }));
    else meta.appendChild(el('p', { class: 'mna', text: t('certs.modal.noVerify') }));
    body.appendChild(meta);
    body.scrollTop = 0;
    openDialog(dlg, trigger);
  }

  /* ─────────── CARRUSEL ─────────── */
  var CAR = {
    track: $('#certTrack'), viewport: $('#certViewport'), status: $('#certStatus'),
    offset: 0, step: 298, loopW: 0, looping: false,
    resumeTimer: 0, keyboardInput: false, userPaused: false, hovering: false, onscreen: true, dragging: false, dragMoved: false,
    raf: 0, last: 0, speed: 0.026, index: 0, count: 0
  };
  function measure() {
    var cards = CAR.track.children;
    if (!cards.length) { CAR.step = 298; CAR.loopW = 0; return; }
    var cs = getComputedStyle(CAR.track);
    var gap = parseFloat(cs.columnGap || cs.gap || '0') || 18;
    var w = cards[0].getBoundingClientRect().width || 280;
    CAR.step = w + gap;
    CAR.loopW = CAR.step * (CAR.looping ? cards.length / 2 : cards.length);
  }
  function applyOffset(instant) {
    CAR.track.style.transition = (instant || reduceMotion) ? 'none' : 'transform 520ms cubic-bezier(.22,1,.36,1)';
    CAR.track.style.transform = 'translate3d(' + (-CAR.offset) + 'px,0,0)';
  }
  function clampOffset(v) {
    if (CAR.looping && CAR.loopW > 0) return ((v % CAR.loopW) + CAR.loopW) % CAR.loopW;
    var vw = CAR.viewport ? CAR.viewport.clientWidth : 0;
    return Math.max(0, Math.min(v, Math.max(0, CAR.loopW - vw)));
  }
  function step(dir) {
    if (!CAR.count) return;
    CAR.userPaused = true;
    CAR.offset = clampOffset(CAR.offset + dir * CAR.step);
    applyOffset(false);
    stopLoop(); setCarouselUI();
    CAR.index = CAR.looping
      ? ((Math.round(CAR.offset / CAR.step) % CAR.count) + CAR.count) % CAR.count
      : Math.min(CAR.count - 1, Math.round(CAR.offset / CAR.step));
    if (CAR.status) CAR.status.textContent = t('certs.status', { i: CAR.index + 1, n: CAR.count });
  }
  function setCarouselUI() {
    if (CAR.status) CAR.status.textContent = CAR.count ? t('certs.status', { i: CAR.index + 1, n: CAR.count }) : t('certs.empty');
  }
  function shouldRun() {
    return CAR.looping && !CAR.userPaused && !CAR.hovering && !CAR.dragging && CAR.onscreen && !reduceMotion && !anyDialogOpen() && !document.hidden;
  }
  function tick(now) {
    CAR.raf = 0;
    if (!shouldRun()) return;
    var dt = CAR.last ? Math.min(64, now - CAR.last) : 16;
    CAR.last = now;
    CAR.offset = clampOffset(CAR.offset + CAR.speed * dt);
    CAR.track.style.transition = 'none';
    CAR.track.style.transform = 'translate3d(' + (-CAR.offset) + 'px,0,0)';
    CAR.raf = window.requestAnimationFrame(tick);
  }
  function startLoop() { if (!CAR.raf && shouldRun()) { CAR.last = 0; CAR.raf = window.requestAnimationFrame(tick); } }
  function stopLoop() { if (CAR.raf) { window.cancelAnimationFrame(CAR.raf); CAR.raf = 0; } CAR.last = 0; }
  function anyDialogOpen() {
    var a = $('#projectDialog'), b = $('#certDialog');
    return !!(a && (a.open || a.hasAttribute('open'))) || !!(b && (b.open || b.hasAttribute('open')));
  }
  function renderCerts() {
    var track = CAR.track; if (!track) return;
    var prevOffset = CAR.offset;
    track.innerHTML = '';
    if (!DATA.certifications.length) {
      CAR.count = 0; CAR.loopW = 0;
      track.appendChild(el('p', { class: 'empty', text: t('certs.empty') }));
      setCarouselUI(); return;
    }
    CAR.looping = DATA.certifications.length >= 4 && !reduceMotion;
    var sets = CAR.looping ? 2 : 1;
    for (var s = 0; s < sets; s++) {
      DATA.certifications.forEach(function (c) {
        var base = 'certs.items.' + c.id + '.';
        var nm = t(base + 'name');
        var card = el('button', {
          type: 'button', class: 'cert', style: '--hue:' + c.hue, 'data-cert': c.id,
          'aria-label': t('certs.openAria', { name: nm }), tabindex: s === 0 ? '0' : '-1'
        });
        var media = el('div', { class: 'cert__media' });
        if (c.image) {
          var im = el('img', { class: 'cert__img', src: c.image, alt: '', loading: 'lazy', decoding: 'async' });
          im.addEventListener('error', function () { if (im.parentNode) im.parentNode.removeChild(im); });
          media.appendChild(im);
        }
        media.appendChild(el('span', { class: 'cert__seal' }, [svg(P.seal, 22, true)]));
        card.appendChild(media);
        var b = el('div', { class: 'cert__body' });
        var nameEl = el('span', { class: 'cert__name' }, [document.createTextNode(nm)]);
        if (c.placeholder) nameEl.appendChild(phBadge());
        b.appendChild(nameEl);
        b.appendChild(el('span', { class: 'cert__org', text: t(base + 'org') }));
        var iss = t(base + 'issued'), exp = t(base + 'expires');
        var dt = isPh(iss) ? t('common.unknown') : iss;
        if (!isPh(exp)) dt += ' → ' + exp;
        b.appendChild(el('span', { class: 'cert__date', text: dt }));
        card.appendChild(b);
        card.addEventListener('click', function () { if (!CAR.dragMoved) openCert(c, card); });
        track.appendChild(card);
      });
    }
    CAR.count = DATA.certifications.length;
    measure();
    CAR.offset = clampOffset(prevOffset);
    applyOffset(true);
    setCarouselUI();
    startLoop();
  }
  function bindCarousel() {
    var vp = CAR.viewport; if (!vp) return;
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') CAR.keyboardInput = true;
    });
    vp.addEventListener('focusin', function () {
      if (CAR.keyboardInput) { CAR.hovering = true; stopLoop(); }
    });
    vp.addEventListener('focusout', function (e) {
      if (!vp.contains(e.relatedTarget)) {
        CAR.hovering = false;
        CAR.userPaused = false;
        startLoop();
      }
    });

    var startX = 0, startOff = 0, pid = null;
    vp.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      clearTimeout(CAR.resumeTimer);
      CAR.keyboardInput = false; CAR.hovering = false;
      pid = e.pointerId; startX = e.clientX; startOff = CAR.offset;
      CAR.dragging = true; CAR.dragMoved = false; CAR.userPaused = true;
      stopLoop(); setCarouselUI(); vp.classList.add('is-dragging');
      try { vp.setPointerCapture(pid); } catch (err) {}
    });
    vp.addEventListener('pointermove', function (e) {
      if (!CAR.dragging || (pid !== null && e.pointerId !== pid)) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4) CAR.dragMoved = true;
      CAR.offset = clampOffset(startOff - dx);
      CAR.track.style.transition = 'none';
      CAR.track.style.transform = 'translate3d(' + (-CAR.offset) + 'px,0,0)';
    });
    function endDrag() {
      if (!CAR.dragging) return;
      CAR.dragging = false; vp.classList.remove('is-dragging');
      try { if (pid !== null) vp.releasePointerCapture(pid); } catch (err) {}
      pid = null;
      CAR.index = CAR.count ? Math.max(0, Math.min(CAR.count - 1, Math.round(CAR.offset / CAR.step))) : 0;
      setCarouselUI();
      setTimeout(function () { CAR.dragMoved = false; }, 80);
      // Restart three seconds after the last drag, even while the pointer stays over it.
      clearTimeout(CAR.resumeTimer);
      CAR.resumeTimer = setTimeout(function () {
        CAR.userPaused = false;
        startLoop();
      }, 3000);
    }
    vp.addEventListener('pointerup', endDrag);
    vp.addEventListener('pointercancel', endDrag);
    vp.addEventListener('lostpointercapture', endDrag);
    vp.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
      else if (e.key === 'Home') { e.preventDefault(); CAR.userPaused = true; CAR.offset = 0; applyOffset(false); setCarouselUI(); }
      else if (e.key === 'End') { e.preventDefault(); CAR.userPaused = true; CAR.offset = clampOffset(CAR.loopW); applyOffset(false); setCarouselUI(); }
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { CAR.onscreen = en[0].isIntersecting; if (CAR.onscreen) startLoop(); else stopLoop(); }, { threshold: 0.05 }).observe(vp);
    }
    document.addEventListener('visibilitychange', function () { if (document.hidden) stopLoop(); else startLoop(); });
    var rz;
    window.addEventListener('resize', function () {
      clearTimeout(rz);
      rz = setTimeout(function () { measure(); CAR.offset = clampOffset(CAR.offset); applyOffset(true); setCarouselUI(); }, 160);
    });
  }

  /* ─────────── FORMULARIO ─────────── */
  function bindForm() {
    var form = $('#contactForm'); if (!form) return;
    var f = { name: $('#cf-name'), email: $('#cf-email'), subject: $('#cf-subject'), message: $('#cf-message'), hp: $('#cf-website') };
    var status = $('#cf-status'), submit = $('#cf-submit'), label = $('.btn__label', submit);

    function setError(input, key) {
      var box = document.getElementById(input.id + '-err');
      if (key) { input.setAttribute('aria-invalid', 'true'); if (box) { box.textContent = t(key); box.hidden = false; } return false; }
      input.removeAttribute('aria-invalid');
      if (box) { box.textContent = ''; box.hidden = true; }
      return true;
    }
    function validate(onlyInvalid) {
      var ok = true, firstBad = null, re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      var checks = [
        [f.name,    f.name.value.trim().length >= 2 ? null : 'contact.form.errors.nameRequired'],
        [f.email,   re.test(f.email.value.trim()) ? null : (f.email.value.trim() ? 'contact.form.errors.emailInvalid' : 'contact.form.errors.emailRequired')],
        [f.subject, f.subject.value.trim().length >= 3 ? null : 'contact.form.errors.subjectRequired'],
        [f.message, f.message.value.trim().length >= 12 ? null : (f.message.value.trim() ? 'contact.form.errors.messageShort' : 'contact.form.errors.messageRequired')]
      ];
      checks.forEach(function (c) {
        var good = setError(c[0], c[1]);
        if (!good && !firstBad) firstBad = c[0];
        ok = ok && good;
      });
      if (!ok && !onlyInvalid && firstBad) firstBad.focus();
      return ok;
    }
    ['name', 'email', 'subject', 'message'].forEach(function (k) {
      var input = f[k]; if (!input) return;
      input.addEventListener('blur', function () { if (input.value.trim()) validate(false); });
      input.addEventListener('input', function () { if (input.getAttribute('aria-invalid') === 'true') validate(true); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.hidden = false; status.className = 'form__status';
      status.textContent = t('contact.form.validating');

      if (f.hp && f.hp.value) {
        status.className = 'form__status is-ok';
        status.textContent = t('contact.form.success');
        form.reset(); return;
      }
      if (!validate(false)) { status.className = 'form__status is-err'; status.textContent = t('contact.form.invalid'); return; }

      if (isPh(I18N.raw('profile.email'))) {
        status.className = 'form__status is-err';
        status.textContent = t('common.notDocumented');
        return;
      }
      submit.classList.add('is-loading'); submit.disabled = true;
      label.textContent = t('contact.form.sending');
      status.className = 'form__status'; status.textContent = t('contact.form.loading');

      setTimeout(function () {
        var to = cleanMail();
        var href = 'mailto:' + to + '?subject=' + encodeURIComponent(f.subject.value.trim()) +
                   '&body=' + encodeURIComponent(f.message.value.trim() + '\n\n— ' + f.name.value.trim() + '\n' + f.email.value.trim());
        submit.classList.remove('is-loading'); submit.disabled = false;
        label.textContent = t('contact.form.submit');
        try {
          window.location.href = href;
          status.className = 'form__status is-ok';
          status.textContent = '';
          status.appendChild(document.createTextNode(t('contact.form.success') + ' '));
          status.appendChild(el('a', { href: href, text: t('contact.form.fallback') }));
          form.reset();
          ['name', 'email', 'subject', 'message'].forEach(function (k) { if (f[k]) setError(f[k], null); });
        } catch (err) {
          status.className = 'form__status is-err';
          status.textContent = t('contact.form.error', { email: to });
        }
      }, 460);
    });
  }

  /* ─────────── FOOTER REVEAL ─────────── */
  function bindFooterReveal() {
    var footer = $('#footer'), sentinel = $('#footerSentinel');
    if (!footer || !sentinel) return;
    if (!('IntersectionObserver' in window) || reduceMotion) { footer.classList.add('is-revealed'); return; }
    footer.classList.add('is-pending');
    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) { footer.classList.add('is-revealed'); io.disconnect(); }
    }, { root: null, threshold: 0, rootMargin: '0px 0px -6% 0px' });
    io.observe(sentinel);
    setTimeout(function () { footer.classList.add('is-revealed'); io.disconnect(); }, 1400);
  }

  /* ─────────── POPOVERS (idioma + apariencia) ─────────── */
  function closeAllPops(except) {
    $$('.pop.is-open').forEach(function (p) {
      if (p === except) return;
      p.classList.remove('is-open');
      var trg = $('.pop__trigger', p);
      if (trg) trg.setAttribute('aria-expanded', 'false');
    });
  }

  function bindLangSwitch() {
    var wrap = $('#langSwitch'), trigger = $('#langTrigger'), menu = $('#langMenu');
    var opts = $$('[role="menuitemradio"]', menu), open = false;
    function sync() {
      opts.forEach(function (o) { o.setAttribute('aria-checked', String(o.getAttribute('data-locale') === I18N.locale)); });
      var act = menu.querySelector('[aria-checked="true"]');
      if (act) menu.setAttribute('aria-activedescendant', act.id);
    }
    function setOpen(v) {
      open = v;
      closeAllPops(v ? wrap : null);
      wrap.classList.toggle('is-open', v);
      trigger.setAttribute('aria-expanded', String(v));
      if (v) {
        sync();
        opts.forEach(function (o) { o.classList.remove('is-focus'); });
        var cur = menu.querySelector('[aria-checked="true"]') || opts[0];
        cur.classList.add('is-focus');
        menu.setAttribute('aria-activedescendant', cur.id);
        menu.focus();
      }
    }
    function move(d) {
      var i = -1;
      opts.forEach(function (o, k) { if (o.classList.contains('is-focus')) i = k; });
      opts.forEach(function (o) { o.classList.remove('is-focus'); });
      var n = opts[(i + d + opts.length) % opts.length];
      n.classList.add('is-focus');
      menu.setAttribute('aria-activedescendant', n.id);
    }
    function choose(o) { I18N.setLocale(o.getAttribute('data-locale')); setOpen(false); trigger.focus(); }

    trigger.addEventListener('click', function (e) { e.stopPropagation(); setOpen(!open); });
    menu.addEventListener('click', function (e) { var o = e.target.closest('[role="menuitemradio"]'); if (o) choose(o); });
    menu.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); setOpen(false); trigger.focus(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Home') { e.preventDefault(); opts.forEach(function (o) { o.classList.remove('is-focus'); }); opts[0].classList.add('is-focus'); menu.setAttribute('aria-activedescendant', opts[0].id); }
      else if (e.key === 'End') { e.preventDefault(); opts.forEach(function (o) { o.classList.remove('is-focus'); }); opts[opts.length - 1].classList.add('is-focus'); menu.setAttribute('aria-activedescendant', opts[opts.length - 1].id); }
      else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); var a = menu.querySelector('.is-focus') || menu.querySelector('[aria-checked="true"]'); if (a) choose(a); }
      else if (e.key === 'Tab') setOpen(false);
    });
    I18N.onChange(function () {
      var m = I18N.LOCALES[I18N.locale] || I18N.LOCALES[I18N.DEFAULT];
      var code = $('#langCode'); if (code) code.textContent = m.short;
      sync();
    });
  }

  function bindAppearance() {
    var wrap = $('#appearSwitch'), trigger = $('#appearTrigger'), panel = $('#appearPanel');
    var host = $('#swatches'), open = false;

    host.innerHTML = '';
    ACCENTS.forEach(function (a, i) {
      var b = el('button', {
        type: 'button', class: 'swatch', role: 'radio', 'data-hue': String(a.h),
        'aria-checked': String(a.h === appearance.hue), tabindex: i === 0 ? '0' : '-1',
        style: 'background:hsl(' + a.h + ' 78% 58%)',
        'aria-label': t('appearance.color', { name: t('appearance.colors.' + a.id) })
      });
      b.addEventListener('click', function () { setAccent(a.h); });
      host.appendChild(b);
    });

    function refresh() {
      $$('.seg__btn').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-theme-set') === appearance.theme)); });
      $$('.swatch', host).forEach(function (s) {
        var on = Number(s.getAttribute('data-hue')) === appearance.hue;
        s.setAttribute('aria-checked', String(on));
        if (on) s.setAttribute('tabindex', '0'); else s.setAttribute('tabindex', '-1');
      });
      var moon = $('.ic-moon', trigger), sun = $('.ic-sun', trigger);
      if (moon) moon.hidden = appearance.theme === 'light';
      if (sun) sun.hidden = appearance.theme !== 'light';
      $$('.swatch', host).forEach(function (s) {
        var hid = Number(s.getAttribute('data-hue'));
        var found = null;
        ACCENTS.forEach(function (a) { if (a.h === hid) found = a; });
        s.setAttribute('aria-label', t('appearance.color', { name: t('appearance.colors.' + (found ? found.id : 'violet')) }));
      });
    }
    function setTheme(th) { appearance.theme = th; paintAppearance(true); refresh(); }
    function setAccent(h) { appearance.hue = h; paintAppearance(true); refresh(); }

    $$('.seg__btn').forEach(function (b) {
      b.addEventListener('click', function () { setTheme(b.getAttribute('data-theme-set')); });
    });
    $('#appearReset').addEventListener('click', function () {
      appearance.theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      appearance.hue = DEFAULT_ACCENT;
      paintAppearance(true); refresh();
    });

    function setOpen(v) {
      open = v;
      closeAllPops(v ? wrap : null);
      wrap.classList.toggle('is-open', v);
      trigger.setAttribute('aria-expanded', String(v));
      if (v) { refresh(); panel.focus(); }
    }
    trigger.addEventListener('click', function (e) { e.stopPropagation(); setOpen(!open); });
    panel.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); setOpen(false); trigger.focus(); return; }
      var items = $$('.swatch', host);
      var i = items.indexOf(document.activeElement);
      if (i === -1) return;
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowDown' ? 4 : e.key === 'ArrowUp' ? -4 : 0;
      if (!d) return;
      e.preventDefault();
      var n = items[(i + d + items.length) % items.length];
      n.focus(); setAccent(Number(n.getAttribute('data-hue')));
    });
    document.addEventListener('click', function (e) { if (open && !wrap.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && open) { setOpen(false); trigger.focus(); } });

    refresh();
    I18N.onChange(refresh);
  }

  /* ─────────── TECLADO GLOBAL ─────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if ($('.pop.is-open')) return;
    if (navMenu.classList.contains('is-open')) { setMenu(false); burger.focus(); return; }
    if (!nativeDialog) {
      var pd = $('#projectDialog'), cd = $('#certDialog');
      if (pd.hasAttribute('open')) closeDialog(pd);
      else if (cd.hasAttribute('open')) closeDialog(cd);
    }
  });

  /* ─────────── SCROLL SUAVE + BACK TO TOP ─────────── */
  $('#backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    var first = $('.nav__link');
    if (first) { try { first.focus({ preventScroll: true }); } catch (e) { first.focus(); } }
  });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    if (!id || id === '#') return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    var navH = document.getElementById('nav').getBoundingClientRect().height;
    var top = target.getBoundingClientRect().top + window.scrollY - (navH + 18);
    window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? 'auto' : 'smooth' });
    if (window.history && history.replaceState) history.replaceState(null, '', id);
    if (navMenu.classList.contains('is-open')) setMenu(false);
    closeAllPops(null);
  });

  /* ─────────── TEXTOS DINÁMICOS ─────────── */
  function updateDynamic() {
    var year = new Date().getFullYear();
    var copy = $('#footerCopy');
    if (copy) copy.textContent = t('footer.copyright', { year: year, name: t('profile.name') });
    var lic = $('.footer__license');
    if (lic) lic.setAttribute('title', t('footer.license'));
  }

  function renderAll(noAnim) {
    renderAbout();
    renderProjects(!!noAnim);
    renderCerts();
    observeReveals(document);
  }

  I18N.onChange(function () {
    renderAll(true);
    updateDynamic();
    setMenu(navMenu.classList.contains('is-open'));
    if (currentProject) openProject(currentProject, triggers.get($('#projectDialog')));
    if (currentCert) openCert(currentCert, triggers.get($('#certDialog')));
  });

  /* ─────────── INIT ─────────── */
  function init() {
    readAppearance();
    paintAppearance(false);

    wireDialog($('#projectDialog'));
    wireDialog($('#certDialog'));
    bindCarousel();
    bindForm();
    bindLangSwitch();
    bindAppearance();
    bindFooterReveal();

    I18N.init();
    renderAll(false);
    updateDynamic();
    onScrollFrame();

    var m = I18N.LOCALES[I18N.locale] || I18N.LOCALES[I18N.DEFAULT];
    var code = $('#langCode'); if (code) code.textContent = m.short;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();


/* CAPAS: medición de portada y footer. */
/**
 * Mejora progresiva de capas: nunca fija un bloque más alto que la ventana.
 * Conserva la navegación, traducciones y controles de la página original.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var hero = document.getElementById('hero');
  var footer = document.getElementById('footer');
  var header = document.querySelector('header');

  function measureLayers() {
    var height = window.innerHeight;
    var headerHeight = header ? header.offsetHeight : 80;

    root.classList.toggle('can-pin-hero', hero.offsetHeight <= height + 1);
    root.classList.toggle('can-pin-footer', footer.offsetHeight + headerHeight < height);
  }

  if (!hero || !footer || !('ResizeObserver' in window)) {
    return;
  }

  var observer = new ResizeObserver(measureLayers);
  observer.observe(hero);
  observer.observe(footer);
  window.addEventListener('resize', measureLayers, { passive: true });
  measureLayers();
})();



/* PILARES: mejora progresiva sobre contenido HTML editable. */
(function bindPillarExplorer() {
  'use strict';
  var layout = document.querySelector('.pillars-layout');
  if (!layout) return;
  var heading = layout.querySelector('.pillars-heading');
  var preview = document.getElementById('pillarPreview');
  var image = document.getElementById('pillarImage');
  var title = document.getElementById('pillarPreviewTitle');
  var description = document.getElementById('pillarPreviewDescription');
  var back = document.getElementById('pillarsBack');
  var buttons = Array.from(layout.querySelectorAll('[data-pillar]'));
  var active = null;

  function close() {
    var trigger = active;
    layout.classList.remove('is-exploring');
    heading.inert = false;
    heading.removeAttribute('aria-hidden');
    preview.inert = true;
    preview.setAttribute('aria-hidden', 'true');
    buttons.forEach(function (button) {
      button.setAttribute('aria-expanded', 'false');
      button.closest('.pillar').classList.remove('is-selected');
    });
    active = null;
    if (trigger) trigger.focus({ preventScroll: true });
  }

  preview.hidden = false;
  preview.inert = true;
  preview.setAttribute('aria-hidden', 'true');
  buttons.forEach(function (button) {
    button.hidden = false;
    button.addEventListener('click', function () {
      if (active === button) { close(); return; }
      buttons.forEach(function (other) {
        other.setAttribute('aria-expanded', String(other === button));
        other.closest('.pillar').classList.toggle('is-selected', other === button);
      });
      active = button;
      var card = button.closest('.pillar');
      title.textContent = card.querySelector('h3').textContent;
      description.textContent = card.querySelector('p').textContent;
      image.src = 'assets/pillars/' + button.dataset.pillar + '.svg';
      image.alt = 'Ilustración conceptual de ' + title.textContent.toLowerCase();
      heading.inert = true;
      heading.setAttribute('aria-hidden', 'true');
      preview.inert = false;
      preview.removeAttribute('aria-hidden');
      layout.classList.add('is-exploring');
      // On narrow screens, collapse to the selected pillar without leaving it above the viewport.
      if (window.matchMedia('(max-width: 54rem)').matches) {
        card.scrollIntoView({ block: 'start', behavior: 'auto' });
      }
    });
  });
  back.addEventListener('click', close);
  layout.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && active) { event.preventDefault(); close(); }
  });
})();

/* Escape dismisses demonstration tooltips without moving keyboard focus. */
(function bindDemoTooltips() {
  'use strict';
  var items = document.querySelectorAll('.example-2 .icon-content');
  items.forEach(function (item) {
    item.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') item.classList.add('is-dismissed');
    });
    item.addEventListener('focusout', function () { item.classList.remove('is-dismissed'); });
    item.addEventListener('mouseleave', function () {
      if (!item.contains(document.activeElement)) item.classList.remove('is-dismissed');
    });
  });
})();
