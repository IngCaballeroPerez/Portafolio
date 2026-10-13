/* ═══════════════════════════════════════════════════════════════════════
   PARTE 1 · TRADUCCIONES (es / en / zh-CN)
   Todo lo que esté entre [corchetes] es un MARCADOR DE POSICIÓN:
   sustitúyelo por información real. Nunca traduzcas URLs de repositorio,
   identificadores técnicos, código ni nombres propios.
   ═══════════════════════════════════════════════════════════════════════ */
(function (root) {
  'use strict';

  var SUPPORTED   = ['es', 'en', 'zh-CN'];
  var DEFAULT     = 'es';
  var STORAGE_KEY = 'portfolio.locale';

  var LOCALES = {
    'es':    { short: 'ES', label: 'Español',    htmlLang: 'es',    ogLocale: 'es_ES' },
    'en':    { short: 'EN', label: 'English',    htmlLang: 'en',    ogLocale: 'en_US' },
    'zh-CN': { short: '中', label: '简体中文',    htmlLang: 'zh-CN', ogLocale: 'zh_CN' }
  };

  /* ─────────────── ESPAÑOL ─────────────── */
  var es = {
    meta: { title: 'Ingeniero de Software — Portafolio', description: 'Portafolio de un ingeniero de software: proyectos destacados, habilidades técnicas, experiencia profesional y contacto.' },
    a11y: { skip: 'Saltar al contenido principal', primaryNav: 'Navegación principal', language: 'Cambiar idioma', languageList: 'Selecciona un idioma', closeDialog: 'Cerrar diálogo', menuOpen: 'Abrir menú de navegación', menuClose: 'Cerrar menú de navegación', placeholderBadge: 'Marcador', external: 'Se abre en una pestaña nueva' },
    common: { loading: 'Cargando…', error: 'Algo salió mal.', empty: 'Todavía no hay nada que mostrar.', unknown: 'Sin especificar', none: 'Sin caducidad', notDocumented: 'Aún sin documentar — sustituye este marcador por información real.' },
    profile: { name: '[Tu nombre]', initials: 'TN', role: 'Ingeniero de Software · Full-Stack · Sistemas Distribuidos', email: '[tu.correo@ejemplo.com]', location: '[Ciudad, País]' },
    nav: { home: 'Inicio', about: 'Sobre mí', skills: 'Habilidades', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto', cta: 'Hablemos' },
    social: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Correo', x: 'X / Twitter' },
    hero: {
      status: 'Disponible para nuevas oportunidades',
      greeting: 'Hola, soy',
      headline: 'Construyo software fiable de extremo a extremo: del modelo de datos a la interfaz desplegada.',
      intro: '[Marcador — sustitúyelo por una presentación breve y precisa: qué construyes, qué problemas te gusta resolver y el impacto de tu trabajo.]',
      ctaProjects: 'Ver mis proyectos', ctaContact: 'Hablemos', cv: 'Descargar CV', scroll: 'Desplázate'
    },
    about: {
      label: '// Sobre mí', title: 'Una breve presentación',
      subtitle: 'Trayectoria, intereses y mi forma de entender la ingeniería.',
      photoPlaceholder: 'Foto de perfil',
      heading: '[Marcador — tu titular profesional]',
      p1: '[Marcador — tu trayectoria: cómo empezaste, qué estudiaste y en qué trabajas hoy.]',
      p2: '[Marcador — tu filosofía de ingeniería: cómo abordas el diseño, la calidad y la colaboración.]',
      p3: '[Marcador — tus objetivos y qué buscas a continuación.]',
      interestsTitle: 'Áreas de enfoque',
      interests: ['[Área de enfoque]', '[Área de enfoque]', '[Área de enfoque]', '[Área de enfoque]', '[Área de enfoque]']
    },
    skills: {
      label: '// Habilidades', title: 'Tecnologías y herramientas',
      subtitle: 'El stack al que recurro para llevar software a producción.',
      empty: 'Aún no hay habilidades registradas.',
      categories: { languages: 'Lenguajes de programación', frontend: 'Frontend', backend: 'Backend', databases: 'Bases de datos y almacenamiento', cloud: 'Nube y DevOps', tools: 'Frameworks y herramientas' }
    },
    experience: {
      label: '// Experiencia', title: 'Trayectoria profesional', subtitle: 'Empleo, formación y certificaciones.',
      tabListLabel: 'Categorías de experiencia', empty: 'Todavía no hay entradas — añádelas en el archivo de datos.',
      kinds: { work: 'Trabajo', education: 'Formación' },
      entries: {
        job1: { period: '[Mes Año] — [Mes Año]', title: '[Puesto]', org: '[Empresa]', points: ['[Marcador — un logro concreto, con cifras cuando las tengas.]', '[Marcador — un sistema o funcionalidad que lideraste de extremo a extremo.]', '[Marcador — impacto en colaboración, mentoría o procesos.]'] },
        job2: { period: '[Mes Año] — [Mes Año]', title: '[Puesto anterior]', org: '[Empresa anterior]', points: ['[Marcador — responsabilidad o entrega.]', '[Marcador — resultado medible.]'] },
        edu1: { period: '[Año inicio] — [Año fin]', title: '[Titulación o programa]', org: '[Institución]', points: ['[Marcador — asignaturas relevantes, tesis o menciones.]', '[Marcador — actividades, asociaciones o premios.]'] }
      }
    },
    projects: {
      label: '// Proyectos', title: 'Trabajo seleccionado',
      subtitle: 'Elige cualquier tarjeta para destacarla. Abre la destacada para ver todos los detalles.',
      hint: 'Consejo: usa Tab para llegar a una tarjeta, Intro para abrir los detalles y el botón de promover para intercambiarla con la destacada.',
      empty: 'Aún no hay proyectos configurados.',
      promote: 'Promover {name} al espacio destacado',
      imageAlt: 'Captura de pantalla de {name}',
      items: {
        p1: { description: '[Marcador — una o dos frases sobre qué hace este proyecto y a quién sirve.]', problem: '[Marcador — el problema concreto que aborda y por qué las opciones existentes no bastaban.]', features: ['[Marcador — capacidad principal]', '[Marcador — segunda capacidad]', '[Marcador — tercera capacidad]'], architecture: '[Marcador — servicios, flujo de datos y el razonamiento detrás de las decisiones técnicas clave.]', contribution: '[Marcador — tu rol y responsabilidades exactas.]', challenges: '[Marcador — el reto técnico más difícil y cómo lo resolviste.]', results: '[Marcador — resultados medibles, adopción o las lecciones más importantes.]' },
        p2: { description: '[Marcador — descripción breve del proyecto.]', problem: '[Marcador — el problema que resuelve.]', features: ['[Marcador — funcionalidad]', '[Marcador — funcionalidad]'], architecture: '[Marcador — resumen de la arquitectura.]', contribution: '[Marcador — tu rol.]', challenges: '[Marcador — reto y solución.]', results: '[Marcador — resultado.]' },
        p3: { description: '[Marcador — descripción breve del proyecto.]', problem: '[Marcador — el problema que resuelve.]', features: ['[Marcador — funcionalidad]', '[Marcador — funcionalidad]', '[Marcador — funcionalidad]'], architecture: '[Marcador — resumen de la arquitectura.]', contribution: '[Marcador — tu rol.]', challenges: '[Marcador — reto y solución.]', results: '[Marcador — resultado.]' },
        p4: { description: '[Marcador — descripción breve del proyecto.]', problem: '[Marcador — el problema que resuelve.]', features: ['[Marcador — funcionalidad]', '[Marcador — funcionalidad]'], architecture: '[Marcador — resumen de la arquitectura.]', contribution: '[Marcador — tu rol.]', challenges: '[Marcador — reto y solución.]', results: '[Marcador — resultado.]' }
      },
      modal: { eyebrow: 'Proyecto', overview: 'Resumen', problem: 'Planteamiento del problema', features: 'Funcionalidades clave', architecture: 'Arquitectura y decisiones', technologies: 'Tecnologías', contribution: 'Mi contribución', challenges: 'Retos y soluciones', results: 'Resultados y aprendizajes', repository: 'Repositorio', demo: 'Demo en vivo', docs: 'Documentación', noLinks: 'No hay enlaces públicos para este proyecto.', openCta: 'Ver el caso completo', openAria: 'Abrir los detalles de {name}' }
    },
    certs: {
      title: 'Certificaciones', hint: 'Pasa el cursor para pausar · haz clic en una tarjeta para verla',
      carouselLabel: 'Carrusel de certificaciones',
      viewportLabel: 'Certificaciones. Usa las flechas para navegar e Intro para previsualizar.',
      prev: 'Certificación anterior', next: 'Certificación siguiente',
      pause: 'Pausar el desplazamiento automático', play: 'Reanudar el desplazamiento automático',
      status: 'Certificación {i} de {n}', empty: 'Aún no hay certificaciones registradas.',
      openAria: 'Previsualizar el certificado {name}', imageAlt: 'Certificado de {name}',
      items: {
        c1: { name: '[Nombre de la certificación]', org: '[Entidad emisora]', issued: '[Fecha de emisión]', expires: '[Fecha de caducidad]' },
        c2: { name: '[Nombre de la certificación]', org: '[Entidad emisora]', issued: '[Fecha de emisión]', expires: '[Fecha de caducidad]' },
        c3: { name: '[Nombre de la certificación]', org: '[Entidad emisora]', issued: '[Fecha de emisión]', expires: '[Fecha de caducidad]' },
        c4: { name: '[Nombre de la certificación]', org: '[Entidad emisora]', issued: '[Fecha de emisión]', expires: '[Fecha de caducidad]' },
        c5: { name: '[Nombre de la certificación]', org: '[Entidad emisora]', issued: '[Fecha de emisión]', expires: '[Fecha de caducidad]' }
      },
      modal: { eyebrow: 'Credencial', issuer: 'Entidad emisora', datesTitle: 'Vigencia', dates: 'Emitido: {issued} · Caduca: {expires}', verify: 'Verificar credencial', noVerify: 'No se ha proporcionado una URL pública de verificación.' }
    },
    contact: {
      label: '// Contacto', title: 'Construyamos algo',
      subtitle: 'Vacantes, colaboraciones o una duda técnica: la bandeja está abierta.',
      availability: 'Abierto a remoto',
      form: {
        name: 'Nombre', namePh: 'Tu nombre', email: 'Correo electrónico', emailPh: 'tu@ejemplo.com',
        subject: 'Asunto', subjectPh: '¿Sobre qué escribes?', message: 'Mensaje', messagePh: 'Cuéntame algo sobre el proyecto o el puesto…',
        submit: 'Enviar mensaje', sending: 'Preparando…', validating: 'Revisando tu mensaje…', loading: 'Abriendo tu aplicación de correo…',
        success: 'Tu aplicación de correo debería abrirse con el mensaje listo.',
        fallback: 'Si no ocurrió nada, abre el borrador manualmente.',
        invalid: 'Corrige los campos resaltados.',
        error: 'No pudimos abrir tu aplicación de correo. Escribe a la dirección indicada arriba.',
        notice: 'Este formulario no tiene backend: al enviarlo se abre tu propia aplicación de correo con el mensaje precargado. Nada se almacena ni se envía a un servidor.',
        errors: { nameRequired: 'Introduce tu nombre (al menos 2 caracteres).', emailRequired: 'Introduce tu correo electrónico.', emailInvalid: 'Ese correo no parece válido.', subjectRequired: 'Añade un asunto breve (al menos 3 caracteres).', messageRequired: 'Escribe un mensaje.', messageShort: 'Escribe al menos 12 caracteres.' }
      }
    },
    footer: { tagline: 'Ingeniero de software construyendo sistemas fiables y bien hechos.', navTitle: 'Navegación', connectTitle: 'Conectar', contactTitle: 'Directo', copyright: '© {year} {name}. Todos los derechos reservados.', backToTop: 'Volver arriba', built: 'Hecho con HTML, CSS y JavaScript sin dependencias.' }
  };

  /* ─────────────── ENGLISH ─────────────── */
  var en = {
    meta: { title: 'Software Engineer — Portfolio', description: 'Portfolio of a software engineer: selected projects, technical skills, professional experience and contact details.' },
    a11y: { skip: 'Skip to main content', primaryNav: 'Primary navigation', language: 'Change language', languageList: 'Select a language', closeDialog: 'Close dialog', menuOpen: 'Open navigation menu', menuClose: 'Close navigation menu', placeholderBadge: 'Placeholder', external: 'Opens in a new tab' },
    common: { loading: 'Loading…', error: 'Something went wrong.', empty: 'Nothing to show yet.', unknown: 'Not specified', none: 'No expiry', notDocumented: 'Not documented yet — replace this placeholder with real information.' },
    profile: { name: '[Your Name]', initials: 'YN', role: 'Software Engineer · Full-Stack · Distributed Systems', email: '[your.email@example.com]', location: '[City, Country]' },
    nav: { home: 'Home', about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', contact: 'Contact', cta: 'Get in touch' },
    social: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Email', x: 'X / Twitter' },
    hero: {
      status: 'Open to new opportunities',
      greeting: 'Hi, I’m',
      headline: 'I build reliable software end to end — from data model to deployed interface.',
      intro: '[Placeholder — replace with a concise, accurate introduction: what you build, the problems you enjoy solving and the impact of your work.]',
      ctaProjects: 'Explore my projects', ctaContact: 'Get in touch', cv: 'Download CV', scroll: 'Scroll'
    },
    about: {
      label: '// About', title: 'A short introduction',
      subtitle: 'Background, interests and the way I approach engineering.',
      photoPlaceholder: 'Profile photo',
      heading: '[Placeholder — your professional headline]',
      p1: '[Placeholder — your background: how you started, what you studied and what you work on today.]',
      p2: '[Placeholder — your engineering philosophy: how you approach design, quality and collaboration.]',
      p3: '[Placeholder — your goals and what you are looking for next.]',
      interestsTitle: 'Focus areas',
      interests: ['[Focus area]', '[Focus area]', '[Focus area]', '[Focus area]', '[Focus area]']
    },
    skills: {
      label: '// Skills', title: 'Technologies & tools',
      subtitle: 'The stack I reach for when shipping production software.',
      empty: 'No skills listed yet.',
      categories: { languages: 'Programming languages', frontend: 'Frontend', backend: 'Backend', databases: 'Databases & storage', cloud: 'Cloud & DevOps', tools: 'Frameworks & tooling' }
    },
    experience: {
      label: '// Experience', title: 'Professional journey', subtitle: 'Employment, education and certifications.',
      tabListLabel: 'Experience categories', empty: 'No entries yet — add them to the data file.',
      kinds: { work: 'Work', education: 'Education' },
      entries: {
        job1: { period: '[Month Year] — [Month Year]', title: '[Job Title]', org: '[Company]', points: ['[Placeholder — a concrete achievement, with numbers where you have them.]', '[Placeholder — a system or feature you owned end to end.]', '[Placeholder — collaboration, mentoring or process impact.]'] },
        job2: { period: '[Month Year] — [Month Year]', title: '[Previous Job Title]', org: '[Previous Company]', points: ['[Placeholder — responsibility or deliverable.]', '[Placeholder — measurable outcome.]'] },
        edu1: { period: '[Start Year] — [End Year]', title: '[Degree or Programme]', org: '[Institution]', points: ['[Placeholder — relevant coursework, thesis or honours.]', '[Placeholder — activities, societies or awards.]'] }
      }
    },
    projects: {
      label: '// Projects', title: 'Selected work',
      subtitle: 'Pick any card to promote it. Open the featured card for full details.',
      hint: 'Tip: Tab to a card, Enter to open details, and use the promote button to swap it into the featured slot.',
      empty: 'No projects configured yet.',
      promote: 'Promote {name} to the featured slot',
      imageAlt: 'Screenshot of {name}',
      items: {
        p1: { description: '[Placeholder — one or two sentences on what this project does and who it serves.]', problem: '[Placeholder — the concrete problem it addresses and why existing options fell short.]', features: ['[Placeholder — primary capability]', '[Placeholder — second capability]', '[Placeholder — third capability]'], architecture: '[Placeholder — services, data flow and the reasoning behind the main technical decisions.]', contribution: '[Placeholder — your exact role and responsibilities.]', challenges: '[Placeholder — the hardest technical challenge and how you solved it.]', results: '[Placeholder — measurable outcomes, adoption, or the most important lessons learned.]' },
        p2: { description: '[Placeholder — short description of the project.]', problem: '[Placeholder — the problem it solves.]', features: ['[Placeholder — feature]', '[Placeholder — feature]'], architecture: '[Placeholder — architecture summary.]', contribution: '[Placeholder — your role.]', challenges: '[Placeholder — challenge and solution.]', results: '[Placeholder — outcome.]' },
        p3: { description: '[Placeholder — short description of the project.]', problem: '[Placeholder — the problem it solves.]', features: ['[Placeholder — feature]', '[Placeholder — feature]', '[Placeholder — feature]'], architecture: '[Placeholder — architecture summary.]', contribution: '[Placeholder — your role.]', challenges: '[Placeholder — challenge and solution.]', results: '[Placeholder — outcome.]' },
        p4: { description: '[Placeholder — short description of the project.]', problem: '[Placeholder — the problem it solves.]', features: ['[Placeholder — feature]', '[Placeholder — feature]'], architecture: '[Placeholder — architecture summary.]', contribution: '[Placeholder — your role.]', challenges: '[Placeholder — challenge and solution.]', results: '[Placeholder — outcome.]' }
      },
      modal: { eyebrow: 'Project', overview: 'Overview', problem: 'Problem statement', features: 'Key features', architecture: 'Architecture & decisions', technologies: 'Technologies', contribution: 'My contribution', challenges: 'Challenges & solutions', results: 'Results & lessons', repository: 'Repository', demo: 'Live demo', docs: 'Documentation', noLinks: 'No public links available for this project.', openCta: 'View full case study', openAria: 'Open details for {name}' }
    },
    certs: {
      title: 'Certifications', hint: 'Hover to pause · click a card to preview',
      carouselLabel: 'Certifications carousel',
      viewportLabel: 'Certifications. Use the arrow keys to browse, Enter to preview.',
      prev: 'Previous certification', next: 'Next certification',
      pause: 'Pause automatic scrolling', play: 'Resume automatic scrolling',
      status: 'Certification {i} of {n}', empty: 'No certifications listed yet.',
      openAria: 'Preview the {name} certificate', imageAlt: '{name} certificate',
      items: {
        c1: { name: '[Certification Name]', org: '[Issuing Organisation]', issued: '[Issue date]', expires: '[Expiry date]' },
        c2: { name: '[Certification Name]', org: '[Issuing Organisation]', issued: '[Issue date]', expires: '[Expiry date]' },
        c3: { name: '[Certification Name]', org: '[Issuing Organisation]', issued: '[Issue date]', expires: '[Expiry date]' },
        c4: { name: '[Certification Name]', org: '[Issuing Organisation]', issued: '[Issue date]', expires: '[Expiry date]' },
        c5: { name: '[Certification Name]', org: '[Issuing Organisation]', issued: '[Issue date]', expires: '[Expiry date]' }
      },
      modal: { eyebrow: 'Credential', issuer: 'Issuing organisation', datesTitle: 'Validity', dates: 'Issued: {issued} · Expires: {expires}', verify: 'Verify credential', noVerify: 'No public verification URL provided.' }
    },
    contact: {
      label: '// Contact', title: 'Let’s build something',
      subtitle: 'Roles, collaborations or a technical question — the inbox is open.',
      availability: 'Open to remote',
      form: {
        name: 'Name', namePh: 'Your name', email: 'Email', emailPh: 'you@example.com',
        subject: 'Subject', subjectPh: 'What is this about?', message: 'Message', messagePh: 'Tell me a little about the project or role…',
        submit: 'Send message', sending: 'Preparing…', validating: 'Checking your message…', loading: 'Opening your email app…',
        success: 'Your email app should open with the message ready.',
        fallback: 'If nothing happened, open the draft manually.',
        invalid: 'Please correct the highlighted fields.',
        error: 'We could not open your email app. Please write to the address shown above.',
        notice: 'This form has no backend: submitting opens your own email app with the message pre-filled. Nothing is stored or sent to a server.',
        errors: { nameRequired: 'Please enter your name (at least 2 characters).', emailRequired: 'Please enter your email address.', emailInvalid: 'That email address does not look valid.', subjectRequired: 'Please add a short subject (at least 3 characters).', messageRequired: 'Please write a message.', messageShort: 'Please write at least 12 characters.' }
      }
    },
    footer: { tagline: 'Software engineer building dependable, well-crafted systems.', navTitle: 'Navigate', connectTitle: 'Connect', contactTitle: 'Direct', copyright: '© {year} {name}. All rights reserved.', backToTop: 'Back to top', built: 'Built with vanilla HTML, CSS & JavaScript.' }
  };

  /* ─────────────── 简体中文 ─────────────── */
  var zh = {
    meta: { title: '软件工程师 — 个人作品集', description: '软件工程师个人作品集：精选项目、技术栈、职业经历与联系方式。' },
    a11y: { skip: '跳到主要内容', primaryNav: '主导航', language: '切换语言', languageList: '选择语言', closeDialog: '关闭对话框', menuOpen: '打开导航菜单', menuClose: '关闭导航菜单', placeholderBadge: '占位内容', external: '在新标签页中打开' },
    common: { loading: '加载中…', error: '出现了一些问题。', empty: '暂无可显示的内容。', unknown: '未填写', none: '长期有效', notDocumented: '尚未记录 —— 请将该占位内容替换为真实信息。' },
    profile: { name: '[您的姓名]', initials: '姓名', role: '软件工程师 · 全栈开发 · 分布式系统', email: '[your.email@example.com]', location: '[城市，国家]' },
    nav: { home: '首页', about: '关于我', skills: '技术栈', experience: '经历', projects: '项目', contact: '联系', cta: '与我联系' },
    social: { github: 'GitHub', linkedin: '领英', email: '邮箱', x: 'X / Twitter' },
    hero: {
      status: '可接受新的工作机会',
      greeting: '你好，我是',
      headline: '我从数据模型到上线界面，端到端地构建可靠的软件。',
      intro: '[占位内容 —— 请替换为简明准确的自我介绍：你构建什么、乐于解决哪些问题、以及你的工作带来的影响。]',
      ctaProjects: '浏览我的项目', ctaContact: '与我联系', cv: '下载简历', scroll: '向下滚动'
    },
    about: {
      label: '// 关于我', title: '简短介绍',
      subtitle: '我的背景、兴趣，以及我对工程的理解。',
      photoPlaceholder: '个人照片',
      heading: '[占位内容 —— 你的职业标题]',
      p1: '[占位内容 —— 你的背景：如何入行、学习经历以及目前的工作方向。]',
      p2: '[占位内容 —— 你的工程理念：你如何看待设计、质量与协作。]',
      p3: '[占位内容 —— 你的目标，以及下一步希望做的事。]',
      interestsTitle: '关注领域',
      interests: ['[关注领域]', '[关注领域]', '[关注领域]', '[关注领域]', '[关注领域]']
    },
    skills: {
      label: '// 技术栈', title: '技术与工具',
      subtitle: '交付生产级软件时我所依赖的技术组合。',
      empty: '尚未填写技术栈。',
      categories: { languages: '编程语言', frontend: '前端开发', backend: '后端开发', databases: '数据库与存储', cloud: '云与 DevOps', tools: '框架与工具' }
    },
    experience: {
      label: '// 经历', title: '职业历程', subtitle: '工作、教育与认证。',
      tabListLabel: '经历分类', empty: '暂无条目 —— 请在数据配置中添加。',
      kinds: { work: '工作', education: '教育' },
      entries: {
        job1: { period: '[年份 月份] — [年份 月份]', title: '[职位名称]', org: '[公司名称]', points: ['[占位内容 —— 一项具体成果，如有数据请一并写明。]', '[占位内容 —— 你端到端负责的系统或功能。]', '[占位内容 —— 在协作、指导或流程上的影响。]'] },
        job2: { period: '[年份 月份] — [年份 月份]', title: '[上一份职位]', org: '[上一家公司]', points: ['[占位内容 —— 职责或交付物。]', '[占位内容 —— 可衡量的结果。]'] },
        edu1: { period: '[起始年份] — [结束年份]', title: '[学位或专业]', org: '[学校名称]', points: ['[占位内容 —— 相关课程、毕业论文或荣誉。]', '[占位内容 —— 社团活动、组织或奖项。]'] }
      }
    },
    projects: {
      label: '// 项目', title: '精选作品',
      subtitle: '点击任意卡片即可将其提升为主展示位；打开主展示卡片查看完整详情。',
      hint: '提示：使用 Tab 键选中卡片，回车键查看详情，通过提升按钮将其与主展示位互换。',
      empty: '尚未配置项目。',
      promote: '将 {name} 提升至主展示位',
      imageAlt: '{name} 的界面截图',
      items: {
        p1: { description: '[占位内容 —— 用一两句话说明该项目做什么、服务于谁。]', problem: '[占位内容 —— 它解决的具体问题，以及既有方案为何不足。]', features: ['[占位内容 —— 核心能力]', '[占位内容 —— 第二项能力]', '[占位内容 —— 第三项能力]'], architecture: '[占位内容 —— 服务划分、数据流，以及关键技术决策背后的思考。]', contribution: '[占位内容 —— 你的确切角色与职责。]', challenges: '[占位内容 —— 最困难的技术挑战及你的解决方式。]', results: '[占位内容 —— 可衡量的成果、使用情况，或最重要的经验教训。]' },
        p2: { description: '[占位内容 —— 项目简述。]', problem: '[占位内容 —— 它解决的问题。]', features: ['[占位内容 —— 功能]', '[占位内容 —— 功能]'], architecture: '[占位内容 —— 架构概述。]', contribution: '[占位内容 —— 你的角色。]', challenges: '[占位内容 —— 挑战与解决方案。]', results: '[占位内容 —— 成果。]' },
        p3: { description: '[占位内容 —— 项目简述。]', problem: '[占位内容 —— 它解决的问题。]', features: ['[占位内容 —— 功能]', '[占位内容 —— 功能]', '[占位内容 —— 功能]'], architecture: '[占位内容 —— 架构概述。]', contribution: '[占位内容 —— 你的角色。]', challenges: '[占位内容 —— 挑战与解决方案。]', results: '[占位内容 —— 成果。]' },
        p4: { description: '[占位内容 —— 项目简述。]', problem: '[占位内容 —— 它解决的问题。]', features: ['[占位内容 —— 功能]', '[占位内容 —— 功能]'], architecture: '[占位内容 —— 架构概述。]', contribution: '[占位内容 —— 你的角色。]', challenges: '[占位内容 —— 挑战与解决方案。]', results: '[占位内容 —— 成果。]' }
      },
      modal: { eyebrow: '项目', overview: '项目概述', problem: '问题陈述', features: '核心功能', architecture: '架构与技术决策', technologies: '使用技术', contribution: '我的贡献', challenges: '挑战与解决方案', results: '成果与收获', repository: '代码仓库', demo: '在线演示', docs: '项目文档', noLinks: '该项目暂无公开链接。', openCta: '查看完整案例', openAria: '打开 {name} 的详细信息' }
    },
    certs: {
      title: '专业认证', hint: '悬停暂停 · 点击卡片查看大图',
      carouselLabel: '认证轮播',
      viewportLabel: '认证列表。使用左右方向键浏览，回车键预览。',
      prev: '上一项认证', next: '下一项认证',
      pause: '暂停自动滚动', play: '继续自动滚动',
      status: '第 {i} 项，共 {n} 项', empty: '尚未填写认证信息。',
      openAria: '预览 {name} 证书', imageAlt: '{name} 证书',
      items: {
        c1: { name: '[认证名称]', org: '[发证机构]', issued: '[发证日期]', expires: '[到期日期]' },
        c2: { name: '[认证名称]', org: '[发证机构]', issued: '[发证日期]', expires: '[到期日期]' },
        c3: { name: '[认证名称]', org: '[发证机构]', issued: '[发证日期]', expires: '[到期日期]' },
        c4: { name: '[认证名称]', org: '[发证机构]', issued: '[发证日期]', expires: '[到期日期]' },
        c5: { name: '[认证名称]', org: '[发证机构]', issued: '[发证日期]', expires: '[到期日期]' }
      },
      modal: { eyebrow: '凭证', issuer: '发证机构', datesTitle: '有效期', dates: '发证日期：{issued} · 到期日期：{expires}', verify: '验证凭证', noVerify: '暂无公开的凭证验证链接。' }
    },
    contact: {
      label: '// 联系', title: '一起做点东西',
      subtitle: '无论是职位机会、合作，还是技术问题，都欢迎来信。',
      availability: '接受远程工作',
      form: {
        name: '姓名', namePh: '您的姓名', email: '邮箱', emailPh: 'you@example.com',
        subject: '主题', subjectPh: '这封邮件关于什么？', message: '留言', messagePh: '简单介绍一下项目或职位…',
        submit: '发送留言', sending: '正在准备…', validating: '正在检查您的留言…', loading: '正在打开您的邮件应用…',
        success: '您的邮件应用应已打开，并已填好内容。',
        fallback: '如果没有反应，请手动打开草稿。',
        invalid: '请修正标红的字段。',
        error: '无法打开您的邮件应用，请直接发送到上方显示的邮箱地址。',
        notice: '该表单没有后端：提交后会在您本地的邮件应用中生成已填好的邮件，不会存储或发送任何数据到服务器。',
        errors: { nameRequired: '请输入您的姓名（至少 2 个字符）。', emailRequired: '请输入您的邮箱地址。', emailInvalid: '该邮箱地址格式似乎不正确。', subjectRequired: '请填写简短的主题（至少 3 个字符）。', messageRequired: '请填写留言内容。', messageShort: '留言至少需要 12 个字符。' }
      }
    },
    footer: { tagline: '软件工程师，专注构建可靠且精良的系统。', navTitle: '站内导航', connectTitle: '保持联系', contactTitle: '直接联系', copyright: '© {year} {name}　保留所有权利', backToTop: '回到顶部', built: '使用原生 HTML、CSS 与 JavaScript 构建。' }
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
    var node = document.head.querySelector('meta[' + attr + '="' + name + '"]');
    if (node) node.setAttribute('content', content);
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
      if (spec) {
        spec.split(';').forEach(function (pair) {
          if (!pair.trim()) return;
          var bits = pair.split(':');
          if (bits.length === 2) {
            var val = t(bits[1].trim());
            if (val !== undefined && val !== null) node.setAttribute(bits[0].trim(), val);
          }
        });
      }
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
    var n = normalize(stored);
    if (n) return n;
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

  /* Primer pintado: adoptar el idioma detectado antes de renderizar */
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
