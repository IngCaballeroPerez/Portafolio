/**
GAMEPLAY PORTFOLIO — Internationalisation (EN native + ES).
No cookies, no analytics, no browser storage.
*/
(function () {
  'use strict';

  var translations = {
    en: {
      skip: 'Skip to content',
      brand: 'Jose Caballero',
      menu: 'Menu',
      menu_close: 'Close',
      nav_projects: 'Projects',
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_experience: 'Experience',
      nav_contact: 'Contact',
      hero_eyebrow: 'JOSE CABALLERO · GAMEPLAY PROGRAMMER & TOOLS',
      hero_title: 'Building systems you can <em>trust.</em>',
      hero_description: 'Industrial software, AI agent orchestration and performance-focused apps. Here I share my projects, the decisions behind each system and what I learn while shipping them.',
      hero_cta_projects: 'Explore projects',
      hero_cta_contact: 'Get in touch',
      hero_cta_cv: 'Download CV',
      hero_role: 'Gameplay Programmer · Unreal Engine & Python',
      hero_tagline: 'From an idea to a system that holds up in production.',
      hero_approach: 'See my approach',
      projects_eyebrow: '01 / SELECTED WORK',
      projects_title: 'A selection of <em>my work.</em>',
      projects_subtitle: 'The problem, the decisions and the result behind each build.',
      project_details: 'Learn about the project',
      detail_challenge: 'The challenge',
      detail_role: 'My contribution',
      detail_decision: 'Technical decision',
      detail_result: 'Result or takeaway',
      link_repo: 'View code on GitHub',
      capture_placeholder: '[ Your project screenshot ]',
      projects_dev_label: 'AI / 02',
      projects_perf_label: 'PERFORMANCE / 03',
      p1_type: 'INDUSTRIAL / MES',
      p1_name: 'M.E.S — Industrial Manufacturing Execution System',
      p1_summary: 'Multi-business MES for plant operations: centralised identity, permissions and audit, a Python-served web interface, and a design canvas kept in sync with the repository. Ten active businesses run on the same base.',
      p1_challenge: 'An industrial MES that runs on Windows with no prior installation, centralised control of users, permissions and audit per business, and a decoupled architecture that allows future Oracle integrations without blocking the pilot.',
      p1_role: 'Architect, full-stack developer and release owner: SQLite Control Plane, Python backend (auth, authorisation, Root recovery), web interface (hierarchical menu, requests, approvals, MES Config), synced design canvas and Oracle scripts generated without manual editing.',
      p1_decision: 'Separate design artefacts (canvas.json, .dc.html) from runtime code in a satellite repository with two-way repo-to-canvas sync, so the decision plan and the screens evolve without breaking the pilot.',
      p1_result: 'Ten active businesses, real login/logout with mandatory password change, supervisor-to-ADMIN request flow, automated tests in CI/CD and a Windows Portable package with embedded runtime.',
      p2_type: 'TOOLS / AI',
      p2_name: 'Knight-Plugin 4.3',
      p2_summary: 'Engineering plugin for Claude, Codex and Qwen that coordinates seven specialised agents with on-demand loading of seventeen specialties, configurable verification and persistent evidence.',
      p2_challenge: 'Unify specialisation, verification and evidence without duplicating configuration across Claude, Codex and Qwen; remove manual checks and automate recovery of interrupted runs.',
      p2_role: 'Designed the seven-agent plus seventeen-specialty framework, configurable checks (quick/extended), a lock and recovery system by PID, per-environment adapters and deterministic packaging with SHA-256.',
      p2_result: 'Working plugin in Claude Code, Codex and Qwen with no npm dependencies; confirmed recovery of interrupted runs and a deterministic ZIP package with a SHA-256 manifest.',
      p3_type: 'DESKTOP APP',
      p3_name: 'LocalChat v0.2.1',
      p3_summary: 'Fully local desktop messaging (no server, no internet) in Python/Tkinter with SQLite, built as an educational baseline for GUI optimisation and code comprehensibility.',
      p3_challenge: 'Prove that a Tkinter GUI scales to many contacts without degradation: eliminate N+1 queries, repeated reconnections and redundant repaints.',
      p3_role: 'Redesigned the update pattern to a single query plus cache, a single SQLite connection with RLock and WAL, an in-memory EventBus for multiple windows, history debounce and receipt batching; documented every module.',
      p3_result: 'No N+1 queries, multiple windows synced without a server, presence and message state computed without an extra column, and passwords hashed with scrypt (N=2^14).',
      mes_alt_login: 'MES login screen showing the ten active businesses and the sign-in form',
      mes_alt_requests: 'MES requests screen with the list of permission requests and the approval workflow detail',
      mes_alt_help: 'MES help centre with the topic list and the step-by-step sign-in guide',
      mes_alt_password: 'MES change-password form with security guidance and validation rules',
      mes_alt_error: 'MES error state showing a traceable folio and recovery actions',
      about_eyebrow: '02 / ABOUT ME',
      about_title: 'The person <em>behind the code.</em>',
      about_p1: 'I am a programmer focused on turning real operational needs into solid systems. Although my goal is gameplay programming with Unreal Engine and C++, much of my work is building the systems, tools and pipelines that make teams — and games — run: identity and permissions, request workflows, agent orchestration and performance work.',
      about_p2: 'I enjoy the problems that live at the intersection of design and engineering: how a screen stays clear under real data, how a tool stays intuitive, how a system scales without becoming fragile. I care about clean, maintainable code and about shipping things people can actually use.',
      about_approach_title: 'How I work',
      about_approach: 'I start by understanding the real need, choose the simplest solution that holds up, and verify it works before moving on. I iterate in small, testable steps, keep design and runtime separated, and leave the code readable for the next person — including future me.',
      skills_eyebrow: '03 / SKILLS',
      skills_title: 'The tools <em>behind the ideas.</em>',
      skills_subtitle: 'Knowledge that shows up in the work, not just on the list.',
      skill1_title: 'Python & backend',
      skill1_desc: 'SQLite, Oracle/PLSQL, authentication, authorisation and audit; local services and portable runtimes.',
      skill1_proof: 'Applied in M.E.S',
      skill2_title: 'Interfaces & UX',
      skill2_desc: 'HTML/CSS/JS and Tkinter: clear screens, safe forms and useful error states for real operators.',
      skill2_proof: 'Applied in M.E.S and LocalChat',
      skill3_title: 'AI & automation',
      skill3_desc: 'Agent orchestration, configurable verification checks and persistent evidence across dev environments.',
      skill3_proof: 'Applied in Knight-Plugin',
      skill4_title: 'Performance & quality',
      skill4_desc: 'Removing N+1 queries, caching, automated tests, CI/CD and deterministic packaging.',
      skill4_proof: 'Applied in LocalChat and M.E.S',
      exp_eyebrow: '04 / TRAJECTORY',
      exp_title: 'Learn. Build. <em>Evolve.</em>',
      exp_note: 'What I have learned, and what I have put into practice.',
      exp1_date: '[ PERIOD ]',
      exp1_kind: 'EXPERIENCE',
      exp1_role: '[ Role or independent activity ]',
      exp1_place: '[ Organization or project ]',
      exp1_desc: '[ Responsibilities, contributions and a real result. If you have no work experience yet, replace this block with personal project experience. ]',
      exp2_date: '[ PERIOD ]',
      exp2_kind: 'EDUCATION',
      exp2_role: '[ Studies or relevant training ]',
      exp2_place: '[ Institution or platform ]',
      exp2_desc: '[ Knowledge gained and how you apply it. Include certifications only if you have earned them. ]',
      contact_eyebrow: '05 / CONTACT',
      contact_title: 'Let us start with <em>a conversation.</em>',
      contact_desc: 'Open to gameplay programming roles, tools engineering and systems work. If your team needs someone who ships reliable software, write to me.',
      contact_email_label: 'Email',
      contact_linkedin: '[ Link to your profile ]',
      footer_eyebrow: 'SHALL WE TALK?',
      footer_title: 'Let us build something <em>with purpose.</em>',
      footer_text: 'If you have a project or an idea in mind, write to me and we will build it together.',
      footer_cta: 'Start a conversation',
      footer_tagline: 'Gameplay programming & tools portfolio',
      footer_top: 'Back to top ↑'
    },
    es: {
      skip: 'Saltar al contenido',
      brand: 'Jose Caballero',
      menu: 'Menú',
      menu_close: 'Cerrar',
      nav_projects: 'Proyectos',
      nav_about: 'Sobre mí',
      nav_skills: 'Habilidades',
      nav_experience: 'Experiencia',
      nav_contact: 'Contacto',
      hero_eyebrow: 'JOSE CABALLERO · GAMEPLAY PROGRAMMER Y HERRAMIENTAS',
      hero_title: 'Construyo sistemas en los que <em>puedes confiar.</em>',
      hero_description: 'Software industrial, orquestación de agentes de IA y aplicaciones enfocadas en rendimiento. Aquí comparto mis proyectos, las decisiones detrás de cada sistema y lo que aprendo al construirlos.',
      hero_cta_projects: 'Explorar proyectos',
      hero_cta_contact: 'Contactar',
      hero_cta_cv: 'Descargar CV',
      hero_role: 'Gameplay Programmer · Unreal Engine y Python',
      hero_tagline: 'De una idea a un sistema que aguanta en producción.',
      hero_approach: 'Conoce mi enfoque',
      projects_eyebrow: '01 / TRABAJO SELECCIONADO',
      projects_title: 'Una selección de <em>mi trabajo.</em>',
      projects_subtitle: 'El problema, las decisiones y el resultado de cada desarrollo.',
      project_details: 'Conocer el proyecto',
      detail_challenge: 'El reto',
      detail_role: 'Mi aportación',
      detail_decision: 'Decisión técnica',
      detail_result: 'Resultado o aprendizaje',
      link_repo: 'Ver código en GitHub',
      capture_placeholder: '[ Captura de tu proyecto ]',
      projects_dev_label: 'IA / 02',
      projects_perf_label: 'RENDIMIENTO / 03',
      p1_type: 'INDUSTRIAL / MES',
      p1_name: 'M.E.S — Sistema MES Industrial',
      p1_summary: 'MES multi-negocio para operación de planta: identidad, permisos y auditoría centralizados, interfaz web servida por Python y un lienzo de diseño sincronizado con el repositorio. Diez negocios activos operan sobre la misma base.',
      p1_challenge: 'Un MES industrial que funcione en Windows sin instalación previa, con control centralizado de usuarios, permisos y auditoría por negocio, y una arquitectura desacoplada que permita futuras integraciones Oracle sin bloquear el piloto.',
      p1_role: 'Arquitecto, desarrollador full-stack y responsable de liberación: Control Plane en SQLite, backend Python (autenticación, autorización, recuperación Root), interfaz web (menú jerárquico, solicitudes, aprobaciones, MES Config), lienzo de diseño sincronizado y scripts Oracle generados sin edición manual.',
      p1_decision: 'Separar los artefactos de diseño (canvas.json, .dc.html) del código de runtime en un repositorio satélite con sincronía bidireccional repositorio-lienzo, para que el plan de decisiones y las pantallas evolucionen sin romper el piloto.',
      p1_result: 'Diez negocios activos, login/logout real con cambio obligatorio de contraseña, flujo de solicitudes supervisor-a-ADMIN, tests automatizados en CI/CD y paquete Windows Portable con runtime embebido.',
      p2_type: 'HERRAMIENTAS / IA',
      p2_name: 'Knight-Plugin 4.3',
      p2_summary: 'Plugin de ingeniería para Claude, Codex y Qwen que coordina siete agentes especializados con carga bajo demanda de diecisiete especialidades, verificación configurable y evidencia persistente.',
      p2_challenge: 'Unificar especialización, verificación y evidencia sin duplicar configuración entre Claude, Codex y Qwen; eliminar checks manuales y automatizar la recuperación de ejecuciones interrumpidas.',
      p2_role: 'Diseñé el framework de siete agentes y diecisiete especialidades, checks configurables (quick/extended), sistema de locks y recuperación por PID, adaptadores por entorno y empaquetado determinista con SHA-256.',
      p2_result: 'Plugin funcional en Claude Code, Codex y Qwen sin dependencias npm; recuperación confirmada de ejecuciones interrumpidas y paquete ZIP determinista con manifiesto SHA-256.',
      p3_type: 'APLICACIÓN DE ESCRITORIO',
      p3_name: 'LocalChat v0.2.1',
      p3_summary: 'Mensajería de escritorio totalmente local (sin servidor ni Internet) en Python/Tkinter con SQLite, construida como baseline educativo de optimización de GUI y comprensibilidad del código.',
      p3_challenge: 'Demostrar que una GUI de Tkinter escala a muchos contactos sin degradación: eliminar queries N+1, reconexiones repetidas y repintados redundantes.',
      p3_role: 'Rediseñé el patrón de actualización a una sola consulta más caché, una única conexión SQLite con RLock y WAL, un EventBus en memoria para varias ventanas, debounce de historial y batch de recibos; documenté cada módulo.',
      p3_result: 'Sin queries N+1, múltiples ventanas sincronizadas sin servidor, presencia y estado de mensajes calculados sin columna extra, y contraseñas con scrypt (N=2^14).',
      mes_alt_login: 'Pantalla de inicio de sesión del MES con los diez negocios activos y el formulario de acceso',
      mes_alt_requests: 'Pantalla de solicitudes del MES con la lista de peticiones y el detalle del flujo de aprobación',
      mes_alt_help: 'Centro de ayuda del MES con la lista de temas y la guía paso a paso de inicio de sesión',
      mes_alt_password: 'Formulario de cambio de contraseña del MES con guía de seguridad y reglas de validación',
      mes_alt_error: 'Estado de error del MES mostrando un folio trazable y acciones de recuperación',
      about_eyebrow: '02 / SOBRE MÍ',
      about_title: 'La persona <em>detrás del código.</em>',
      about_p1: 'Soy programador centrado en convertir necesidades operativas reales en sistemas sólidos. Aunque mi objetivo es la programación de gameplay con Unreal Engine y C++, gran parte de mi trabajo es construir los sistemas, herramientas y pipelines que hacen que los equipos — y los juegos — funcionen: identidad y permisos, flujos de solicitudes, orquestación de agentes y trabajo de rendimiento.',
      about_p2: 'Disfruto los problemas que viven en la frontera entre diseño e ingeniería: cómo una pantalla sigue clara con datos reales, cómo una herramienta sigue siendo intuitiva, cómo un sistema escala sin volverse frágil. Me importa el código limpio y mantenible, y entregar cosas que la gente pueda usar de verdad.',
      about_approach_title: 'Mi forma de trabajar',
      about_approach: 'Empiezo entendiendo la necesidad real, elijo la solución más simple que se sostiene y compruebo que funciona antes de avanzar. Itero en pasos pequeños y verificables, mantengo separados diseño y runtime, y dejo el código legible para la siguiente persona, incluido mi yo del futuro.',
      skills_eyebrow: '03 / HABILIDADES',
      skills_title: 'Las herramientas <em>detrás de las ideas.</em>',
      skills_subtitle: 'Conocimientos que se reflejan en el trabajo, no solo en la lista.',
      skill1_title: 'Python y backend',
      skill1_desc: 'SQLite, Oracle/PLSQL, autenticación, autorización y auditoría; servicios locales y runtimes portables.',
      skill1_proof: 'Aplicado en M.E.S',
      skill2_title: 'Interfaces y UX',
      skill2_desc: 'HTML/CSS/JS y Tkinter: pantallas claras, formularios seguros y estados de error útiles para operadores reales.',
      skill2_proof: 'Aplicado en M.E.S y LocalChat',
      skill3_title: 'IA y automatización',
      skill3_desc: 'Orquestación de agentes, checks de verificación configurables y evidencia persistente entre entornos.',
      skill3_proof: 'Aplicado en Knight-Plugin',
      skill4_title: 'Rendimiento y calidad',
      skill4_desc: 'Eliminación de queries N+1, caché, tests automatizados, CI/CD y empaquetado determinista.',
      skill4_proof: 'Aplicado en LocalChat y M.E.S',
      exp_eyebrow: '04 / TRAYECTORIA',
      exp_title: 'Aprender. Construir. <em>Evolucionar.</em>',
      exp_note: 'Lo aprendido y lo puesto en práctica.',
      exp1_date: '[ PERIODO ]',
      exp1_kind: 'EXPERIENCIA',
      exp1_role: '[ Puesto o actividad independiente ]',
      exp1_place: '[ Organización o proyecto ]',
      exp1_desc: '[ Responsabilidades, contribuciones y un resultado real. Si aún no tienes experiencia laboral, sustituye este bloque por experiencia en proyectos personales. ]',
      exp2_date: '[ PERIODO ]',
      exp2_kind: 'FORMACIÓN',
      exp2_role: '[ Estudios o formación relevante ]',
      exp2_place: '[ Institución o plataforma ]',
      exp2_desc: '[ Conocimientos adquiridos y cómo los aplicas. Incluye certificaciones solo si las has obtenido. ]',
      contact_eyebrow: '05 / CONTACTO',
      contact_title: 'Empecemos con <em>una conversación.</em>',
      contact_desc: 'Abierto a puestos de gameplay programming, tools engineering y trabajo de sistemas. Si tu equipo necesita alguien que entregue software fiable, escríbeme.',
      contact_email_label: 'Correo electrónico',
      contact_linkedin: '[ Enlace a tu perfil ]',
      footer_eyebrow: '¿HABLAMOS?',
      footer_title: 'Construyamos algo <em>con propósito.</em>',
      footer_text: 'Si tienes un proyecto o una idea en mente, escríbeme y lo desarrollamos juntos.',
      footer_cta: 'Iniciar conversación',
      footer_tagline: 'Portafolio de gameplay y herramientas',
      footer_top: 'Volver al inicio ↑'
    }
  };

  window.I18N = translations;
  var current = 'en';

  function apply(lang) {
    var dict = translations[lang];
    if (!dict) { return; }
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) { el.textContent = dict[key]; }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) { el.innerHTML = dict[key]; }
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var parts = el.getAttribute('data-i18n-attr').split(':');
      if (dict[parts[1]] !== undefined) { el.setAttribute(parts[0], dict[parts[1]]); }
    });
    document.querySelectorAll('[data-lang-current]').forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });
    document.querySelectorAll('[data-lang-button]').forEach(function (btn) {
      btn.setAttribute('aria-label', 'Switch to ' + (lang === 'en' ? 'Español' : 'English'));
    });
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
  }

  function detect() {
    var nav = (navigator.language || 'en').toLowerCase();
    return nav.indexOf('es') === 0 ? 'es' : 'en';
  }

  function toggle() { apply(current === 'en' ? 'es' : 'en'); }

  window.setLanguage = apply;
  window.toggleLanguage = toggle;
  window.getLanguage = function () { return current; };
  window.t = function (key) {
    var dict = translations[current];
    return dict && dict[key] !== undefined ? dict[key] : key;
  };

  document.querySelectorAll('[data-lang-button]').forEach(function (btn) {
    btn.addEventListener('click', toggle);
  });

  apply(detect());
})();