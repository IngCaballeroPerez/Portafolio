/* ═══════════════════════════════════════════════════════════════════════
   PARTE 2 · APLICACIÓN
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var I18N = window.I18N;

  /* ─────────── DATOS ───────────
     Marcadores de posición. Reemplaza por datos reales.
     Los textos traducibles viven en el diccionario de arriba (projects.items.*,
     certs.items.*, experience.entries.*). Aquí van identificadores, URLs,
     nombres técnicos e imágenes — nunca se traducen.            */
  var DATA = {
    social: [
      { id: 'github',   labelKey: 'social.github',   url: 'https://github.com/[username]',          icon: 'github' },
      { id: 'linkedin', labelKey: 'social.linkedin', url: 'https://www.linkedin.com/in/[username]', icon: 'linkedin' },
      { id: 'email',    labelKey: 'social.email',    url: 'mailto:[tu.correo@ejemplo.com]',         icon: 'mail' },
      { id: 'x',        labelKey: 'social.x',        url: 'https://x.com/[username]',               icon: 'x' }
    ],
    cvUrl: '',        // p. ej. './assets/cv.pdf' — vacío oculta el botón
    skills: [
      { id: 'languages', icon: '{ }', items: ['[Lenguaje]', '[Lenguaje]', '[Lenguaje]', '[Lenguaje]'] },
      { id: 'frontend',  icon: '</>', items: ['[Framework]', '[Librería]', '[Estilos]', '[Tooling]'] },
      { id: 'backend',   icon: 'api', items: ['[Runtime]', '[Framework]', '[API]', '[Cola]'] },
      { id: 'databases', icon: 'db',  items: ['[SQL]', '[NoSQL]', '[Caché]', '[Búsqueda]'] },
      { id: 'cloud',     icon: 'cld', items: ['[Proveedor]', '[Contenedores]', '[IaC]', '[CI/CD]'] },
      { id: 'tools',     icon: 'ops', items: ['[VCS]', '[Observabilidad]', '[Testing]', '[Metodología]'] }
    ],
    experience: [
      { id: 'job1', kind: 'work' },
      { id: 'job2', kind: 'work' },
      { id: 'edu1', kind: 'education' }
    ],
    projects: [
      { id: 'p1', name: '[Proyecto Uno]',   hue: 265, tech: ['[Tech]', '[Tech]', '[Tech]', '[Tech]'], repo: 'https://github.com/[username]/[repo-1]', demo: '', docs: '', image: '', placeholder: true },
      { id: 'p2', name: '[Proyecto Dos]',   hue: 198, tech: ['[Tech]', '[Tech]', '[Tech]'],            repo: 'https://github.com/[username]/[repo-2]', demo: '', docs: '', image: '', placeholder: true },
      { id: 'p3', name: '[Proyecto Tres]',  hue: 152, tech: ['[Tech]', '[Tech]', '[Tech]'],            repo: 'https://github.com/[username]/[repo-3]', demo: '', docs: '', image: '', placeholder: true },
      { id: 'p4', name: '[Proyecto Cuatro]',hue:  24, tech: ['[Tech]', '[Tech]', '[Tech]'],            repo: 'https://github.com/[username]/[repo-4]', demo: '', docs: '', image: '', placeholder: true }
    ],
    certifications: [
      { id: 'c1', hue: 265, image: '', credentialUrl: '', placeholder: true },
      { id: 'c2', hue: 198, image: '', credentialUrl: '', placeholder: true },
      { id: 'c3', hue: 152, image: '', credentialUrl: '', placeholder: true },
      { id: 'c4', hue:  24, image: '', credentialUrl: '', placeholder: true },
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
  function svg(path, size, stroke) {
    var s = document.createElement('span');
    s.innerHTML = stroke
      ? '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + path + '</svg>'
      : '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="currentColor" aria-hidden="true">' + path + '</svg>';
    return s.firstChild;
  }
  var ICONS = {
    github:   '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>',
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4z"/>',
    mail:     '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 8.2L4.6 7.5 3.4 9l8.6 6 8.6-6-1.2-1.5z"/>',
    x:        '<path d="M17.53 3H20.5l-6.49 7.42L21.75 21h-5.9l-4.62-6.05L5.9 21H2.93l6.94-7.93L2.25 3h6.05l4.18 5.53zm-1.04 16.2h1.64L7.6 4.7H5.84z"/>',
    seal:     '<circle cx="12" cy="9" r="5.5"/><path d="M8.6 13.6 7 22l5-2.4L17 22l-1.6-8.4"/>'
  };

  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduceMotion = mqReduce.matches;
  if (mqReduce.addEventListener) mqReduce.addEventListener('change', function (e) { reduceMotion = e.matches; });
  else if (mqReduce.addListener) mqReduce.addListener(function (e) { reduceMotion = e.matches; });

  var t  = function (k, v) { return I18N.t(k, v); };
  var tl = function (k)    { return I18N.tl(k); };

  function isPlaceholder(str) { return typeof str === 'string' && str.charAt(0) === '['; }
  function phBadge() { return el('span', { class: 'ph', text: t('a11y.placeholderBadge') }); }

  /* ─────────── REVEALS ─────────── */
  var revealIO = null;
  function observeReveals(scope) {
    var nodes = $$('.reveal', scope || document);
    if (scope && scope.nodeType === 1 && scope.classList.contains('reveal')) nodes.unshift(scope);
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('is-in'); }); return;
    }
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); revealIO.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    }
    var instant = [];
    nodes.forEach(function (n) {
      if (n.classList.contains('is-in')) return;
      var r = n.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) instant.push(n);
      else revealIO.observe(n);
    });
    if (instant.length) window.requestAnimationFrame(function () {
      instant.forEach(function (n) { n.classList.add('is-in'); });
    });
  }

  /* ─────────── SCROLL PROGRESS + NAV ─────────── */
  var bar = $('#scrollBar'), nav = $('#nav'), navMenu = $('#navMenu'), burger = $('#navBurger');
  var lastY = window.scrollY, navHidden = false, ticking = false;

  function onScrollFrame() {
    ticking = false;
    var y = window.scrollY || window.pageYOffset;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, Math.max(0, y / max)) : 0) + ')';
    if (nav) nav.classList.toggle('is-scrolled', y > 8);
    if (!navMenu.classList.contains('is-open')) {
      if (y > 240 && y > lastY + 6 && !navHidden) { nav.classList.add('is-hidden'); navHidden = true; }
      else if (y < lastY - 6 && navHidden) { nav.classList.remove('is-hidden'); navHidden = false; }
      if (y <= 40 && navHidden) { nav.classList.remove('is-hidden'); navHidden = false; }
    }
    lastY = y;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScrollFrame); }
  }, { passive: true });

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
  (function heroCanvas() {
    var cv = $('#heroCanvas');
    if (!cv || !cv.getContext) return;
    if (reduceMotion) { cv.remove(); return; }
    var ctx = cv.getContext('2d'), pts = [], w = 0, h = 0, raf = 0, live = true;

    function size() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      if (!w || !h) return;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(44, Math.max(14, (w * h) / 28000)));
      pts = [];
      for (var i = 0; i < n; i++) pts.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .16, vy: (Math.random() - .5) * .16,
        r: Math.random() * 1.5 + .6
      });
    }
    function frame() {
      raf = 0;
      if (!live) return;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = w + 20; if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20; if (p.y > h + 20) p.y = -20;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832);
        ctx.fillStyle = 'rgba(167,139,250,.5)'; ctx.fill();
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
          if (d2 < 15000) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(139,92,246,' + (0.13 * (1 - d2 / 15000)).toFixed(3) + ')';
            ctx.lineWidth = 1; ctx.stroke();
          }
        }
      }
      raf = window.requestAnimationFrame(frame);
    }
    function start() { if (!raf && live) raf = window.requestAnimationFrame(frame); }
    function stop()  { if (raf) { window.cancelAnimationFrame(raf); raf = 0; } }

    size(); start();
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { size(); start(); }, 200); });
    document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else start(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) { live = e[0].isIntersecting; if (live) start(); else stop(); }, { threshold: 0 }).observe(cv);
    }
  })();

  /* ─────────── SOCIAL / ENLACES DE PERFIL ─────────── */
  function cleanMail(key) {
    var v = I18N.raw(key);
    return v.replace(/^\[/, '').replace(/\]$/, '');
  }
  function renderSocials() {
    var mailTo = 'mailto:' + cleanMail('profile.email');

    [['#heroSocial', false], ['#contactSocial', false], ['#footerSocial', true]].forEach(function (pair) {
      var host = $(pair[0]); if (!host) return;
      host.innerHTML = '';
      DATA.social.forEach(function (s) {
        var href = s.url.indexOf('mailto:') === 0 ? mailTo : s.url;
        var a = el('a', { class: 'soc' + (pair[1] ? ' soc--icon' : ''), href: href, 'aria-label': t(s.labelKey), title: t(s.labelKey) });
        if (href.indexOf('mailto:') !== 0) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
        a.appendChild(svg(ICONS[s.icon] || '', pair[1] ? 17 : 16, false));
        if (!pair[1]) a.appendChild(el('span', { text: t(s.labelKey) }));
        host.appendChild(el('li', null, [a]));
      });
    });

    var connect = $('#footerConnect');
    if (connect) {
      connect.innerHTML = '';
      DATA.social.forEach(function (s) {
        var href = s.url.indexOf('mailto:') === 0 ? mailTo : s.url;
        var a = el('a', { href: href, text: t(s.labelKey) });
        if (href.indexOf('mailto:') !== 0) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
        connect.appendChild(el('li', null, [a]));
      });
      if (DATA.cvUrl) connect.appendChild(el('li', null, [el('a', { href: DATA.cvUrl, download: '', text: t('hero.cv') })]));
    }

    ['#contactMail', '#footerMail'].forEach(function (sel) { var n = $(sel); if (n) n.href = mailTo; });
    var cvLink = $('#cvLink');
    if (cvLink) { if (DATA.cvUrl) { cvLink.href = DATA.cvUrl; cvLink.hidden = false; } else cvLink.hidden = true; }
  }

  /* ─────────── ABOUT / SKILLS / EXPERIENCE ─────────── */
  function renderAbout() {
    var host = $('#aboutInterests');
    if (host) {
      host.innerHTML = '';
      tl('about.interests').forEach(function (txt) { host.appendChild(el('li', { class: 'chip', text: txt })); });
    }
  }

  function renderSkills() {
    var host = $('#skillsGrid'); if (!host) return;
    host.innerHTML = '';
    if (!DATA.skills.length) { host.appendChild(el('p', { class: 'empty', text: t('skills.empty') })); return; }
    DATA.skills.forEach(function (s, i) {
      var card = el('div', { class: 'skill reveal', 'data-d': String(Math.min(i, 5)) });
      card.appendChild(el('div', { class: 'skill__ico', text: s.icon, 'aria-hidden': 'true' }));
      card.appendChild(el('h3', { class: 'skill__name', text: t('skills.categories.' + s.id) }));
      var tags = el('div', { class: 'skill__tags' });
      s.items.forEach(function (it) { tags.appendChild(el('span', { class: 'tag tag--plain', text: it })); });
      card.appendChild(tags);
      host.appendChild(card);
    });
    observeReveals(host);
  }

  var expKind = 'work';
  function renderExperience(noAnim) {
    var host = $('#expPanel'); if (!host) return;
    host.innerHTML = '';
    var rows = DATA.experience.filter(function (e) { return e.kind === expKind; });
    if (!rows.length) { host.appendChild(el('p', { class: 'empty', text: t('experience.empty') })); return; }

    rows.forEach(function (row, i) {
      var base = 'experience.entries.' + row.id + '.';
      var item = el('article', { class: 'tl reveal' + (noAnim ? ' is-in' : ''), 'data-d': String(Math.min(i, 4)) });
      item.appendChild(el('p', { class: 'tl__when', text: t(base + 'period') }));
      item.appendChild(el('h3', { class: 'tl__role', text: t(base + 'title') }));
      var org = el('p', { class: 'tl__org' });
      org.appendChild(document.createTextNode(t(base + 'org')));
      org.appendChild(el('span', { class: 'dot-sep', text: ' · ', 'aria-hidden': 'true' }));
      org.appendChild(el('span', { class: 'kind', text: t('experience.kinds.' + row.kind) }));
      item.appendChild(org);
      var pts = tl(base + 'points');
      if (pts.length) {
        var ul = el('ul', { class: 'tl__pts' });
        pts.forEach(function (p) { ul.appendChild(el('li', { text: p })); });
        item.appendChild(ul);
      }
      host.appendChild(item);
    });
    if (!noAnim) observeReveals(host);
  }

  function bindExpTabs() {
    var tabs = $$('#expTabs .tabs__btn');
    function select(btn, focus) {
      expKind = btn.getAttribute('data-kind');
      tabs.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', String(on));
        if (on) b.removeAttribute('tabindex'); else b.setAttribute('tabindex', '-1');
      });
      var panel = $('#expPanel');
      if (panel) panel.setAttribute('aria-labelledby', btn.id);
      renderExperience(true);
      if (focus) btn.focus();
    }
    tabs.forEach(function (btn, i) {
      btn.addEventListener('click', function () { select(btn, false); });
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Home') { e.preventDefault(); select(tabs[0], true); return; }
        if (e.key === 'End')  { e.preventDefault(); select(tabs[tabs.length - 1], true); return; }
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        select(tabs[(i + d + tabs.length) % tabs.length], true);
      });
    });
  }

  /* ─────────── PROYECTOS + INTERCAMBIO (FLIP) ─────────── */
  var order = DATA.projects.map(function (_, i) { return i; });
  var swapping = false;
  var grid = $('#projectsGrid');
  var currentProject = null, currentCert = null;

  function buildCard(p, idx, featured) {
    var base = 'projects.items.' + p.id + '.';
    var card = el('div', {
      class: 'pcard ' + (featured ? 'pcard--lg' : 'pcard--sm'),
      'data-id': p.id, role: 'button', tabindex: '0',
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
      foot.appendChild(svg('<path d="M5 12h14M12 5l7 7-7 7"/>', 15, true));
      body.appendChild(foot);
    }
    card.appendChild(body);

    if (!featured) {
      var promo = el('button', {
        type: 'button', class: 'pcard__promote', 'data-promote': p.id,
        'aria-label': t('projects.promote', { name: p.name }),
        title: t('projects.promote', { name: p.name })
      });
      promo.appendChild(svg('<path d="M12 19V5M5 12l7-7 7 7"/>', 15, true));
      promo.addEventListener('click', function (e) { e.stopPropagation(); promote(p.id); });
      card.appendChild(promo);
    }

    card.addEventListener('click', function () { if (featured) openProject(p, card); else promote(p.id); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); if (featured) openProject(p, card); else promote(p.id); }
      else if (e.key === ' ' && featured) { e.preventDefault(); openProject(p, card); }
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

    var a = order[0]; order[0] = order[to]; order[to] = a;   // intercambio exacto
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
      swapping = false;
      focusFeatured();
    };
    if (played) setTimeout(finish, 560); else finish();
  }

  function focusFeatured() {
    var node = grid && grid.querySelector('.pcard--lg');
    if (node && typeof node.focus === 'function') {
      try { node.focus({ preventScroll: true }); } catch (e) { node.focus(); }
    }
  }

  /* ─────────── DIÁLOGOS NATIVOS ─────────── */
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
    else { dlg.setAttribute('open', ''); dlg.style.display = 'grid'; }
    var c = $('.dialog__close', dlg);
    if (c) setTimeout(function () { c.focus(); }, 40);
  }

  function closeDialog(dlg) {
    var finish = function () {
      dlg.classList.remove('is-closing');
      if (nativeDialog) { if (dlg.open) dlg.close(); }
      else { dlg.removeAttribute('open'); dlg.style.display = ''; }
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
    } else if (typeof content === 'string' && content && content !== title) {
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
    colA.appendChild(block(t('projects.modal.overview'),    t(base + 'description')));
    colA.appendChild(block(t('projects.modal.problem'),     t(base + 'problem')));
    colA.appendChild(block(t('projects.modal.features'),    tl(base + 'features')));
    colA.appendChild(block(t('projects.modal.architecture'),t(base + 'architecture')));
    colB.appendChild(block(t('projects.modal.contribution'),t(base + 'contribution')));
    colB.appendChild(block(t('projects.modal.challenges'),  t(base + 'challenges')));
    colB.appendChild(block(t('projects.modal.results'),     t(base + 'results')));

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
      var a = el('a', { class: 'btn btn--sm ' + (primary ? 'btn--primary' : 'btn--ghost'), href: href, target: '_blank', rel: 'noopener noreferrer', text: t(key) });
      return a;
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
    var name = t(base + 'name');
    $('#cdTitle').textContent = name;
    body.innerHTML = '';

    var media = el('div', { class: 'certview__media', style: '--hue:' + c.hue });
    if (c.image) {
      var im = el('img', { src: c.image, alt: t('certs.imageAlt', { name: name }), loading: 'lazy' });
      im.addEventListener('error', function () {
        if (im.parentNode) im.parentNode.removeChild(im);
        media.appendChild(el('div', { class: 'certview__seal' }, [svg(ICONS.seal, 26, true)]));
      });
      media.appendChild(im);
    } else {
      media.appendChild(el('div', { class: 'certview__seal' }, [svg(ICONS.seal, 26, true)]));
    }
    body.appendChild(media);

    var meta = el('div', { class: 'certview__meta' });
    meta.appendChild(block(t('certs.modal.issuer'), t(base + 'org')));

    var issued = t(base + 'issued');
    var expires = t(base + 'expires');
    var dates = t('certs.modal.dates', {
      issued: isPlaceholder(issued) ? t('common.unknown') : issued,
      expires: isPlaceholder(expires) ? t('common.none') : expires
    });
    meta.appendChild(block(t('certs.modal.datesTitle'), dates));

    if (c.credentialUrl) {
      meta.appendChild(el('a', { class: 'btn btn--sm btn--ghost', href: c.credentialUrl, target: '_blank', rel: 'noopener noreferrer', text: t('certs.modal.verify') }));
    } else {
      meta.appendChild(el('p', { class: 'mna', text: t('certs.modal.noVerify') }));
    }
    body.appendChild(meta);
    body.scrollTop = 0;
    openDialog(dlg, trigger);
  }

  /* Fallback Escape para navegadores sin <dialog> nativo */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if ($('#langSwitch').classList.contains('is-open')) return;
    if (navMenu.classList.contains('is-open')) { setMenu(false); burger.focus(); return; }
    if (!nativeDialog) {
      if ($('#projectDialog').hasAttribute('open')) closeDialog($('#projectDialog'));
      else if ($('#certDialog').hasAttribute('open')) closeDialog($('#certDialog'));
    }
  });

  /* ─────────── CARRUSEL DE CERTIFICACIONES ─────────── */
  var CAR = {
    track: $('#certTrack'), viewport: $('#certViewport'), status: $('#certStatus'),
    offset: 0, step: 298, loopW: 0, looping: false,
    userPaused: false, hovering: false, onscreen: true, dragging: false, dragMoved: false,
    raf: 0, last: 0, speed: 0.026, index: 0, count: 0
  };

  function measure() {
    var cards = CAR.track.children;
    if (!cards.length) { CAR.step = 298; CAR.loopW = 0; return; }
    var cs = getComputedStyle(CAR.track);
    var gap = parseFloat(cs.columnGap || cs.gap || '0') || 18;
    var w = cards[0].getBoundingClientRect().width || 280;
    CAR.step = w + gap;
    var perSet = CAR.looping ? cards.length / 2 : cards.length;
    CAR.loopW = CAR.step * perSet;
  }

  function applyOffset(instant) {
    CAR.track.style.transition = (instant || reduceMotion) ? 'none' : 'transform 520ms cubic-bezier(.22,1,.36,1)';
    CAR.track.style.transform = 'translate3d(' + (-CAR.offset) + 'px,0,0)';
  }

  function clampOffset(v) {
    if (CAR.looping && CAR.loopW > 0) return ((v % CAR.loopW) + CAR.loopW) % CAR.loopW;
    var vw = CAR.viewport ? CAR.viewport.clientWidth : 0;
    var max = Math.max(0, CAR.loopW - vw);
    return Math.max(0, Math.min(v, max));
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
    CAR.status.textContent = t('certs.status', { i: CAR.index + 1, n: CAR.count });
  }

  function setCarouselUI() {
    var prev = $('#certPrev'), next = $('#certNext'), tog = $('#certToggle');
    if (!prev || !next || !tog) return;
    var vw = CAR.viewport ? CAR.viewport.clientWidth : 0;
    prev.disabled = CAR.count === 0 || (!CAR.looping && CAR.offset <= 0.5);
    next.disabled = CAR.count === 0 || (!CAR.looping && CAR.offset >= CAR.loopW - vw - 0.5);
    var autoOK = CAR.looping && CAR.count > 0;
    tog.disabled = !autoOK;
    tog.hidden = !autoOK;
    var ip = $('.ic-pause', tog), ipl = $('.ic-play', tog);
    if (ip) ip.hidden = CAR.userPaused;
    if (ipl) ipl.hidden = !CAR.userPaused;
    tog.setAttribute('aria-pressed', String(CAR.userPaused));
    tog.setAttribute('aria-label', t(CAR.userPaused ? 'certs.play' : 'certs.pause'));
    if (CAR.status) {
      CAR.status.textContent = CAR.count
        ? t('certs.status', { i: CAR.index + 1, n: CAR.count })
        : t('certs.empty');
    }
  }

  function shouldRun() {
    return CAR.looping && !CAR.userPaused && !CAR.hovering && !CAR.dragging &&
           CAR.onscreen && !reduceMotion && !anyDialogOpen();
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
  function stopLoop()  { if (CAR.raf) { window.cancelAnimationFrame(CAR.raf); CAR.raf = 0; } CAR.last = 0; }
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
      setCarouselUI();
      return;
    }

    CAR.looping = DATA.certifications.length >= 4 && !reduceMotion;
    var sets = CAR.looping ? 2 : 1;

    for (var s = 0; s < sets; s++) {
      DATA.certifications.forEach(function (c) {
        var base = 'certs.items.' + c.id + '.';
        var nm = t(base + 'name');
        var card = el('button', {
          type: 'button', class: 'cert', style: '--hue:' + c.hue, 'data-cert': c.id,
          'aria-label': t('certs.openAria', { name: nm }),
          tabindex: s === 0 ? '0' : '-1'
        });

        var media = el('div', { class: 'cert__media' });
        if (c.image) {
          var im = el('img', { class: 'cert__img', src: c.image, alt: '', loading: 'lazy', decoding: 'async' });
          im.addEventListener('error', function () { if (im.parentNode) im.parentNode.removeChild(im); });
          media.appendChild(im);
        }
        media.appendChild(el('span', { class: 'cert__seal' }, [svg(ICONS.seal, 22, true)]));
        card.appendChild(media);

        var b = el('div', { class: 'cert__body' });
        var nameEl = el('span', { class: 'cert__name' }, [document.createTextNode(nm)]);
        if (c.placeholder) nameEl.appendChild(phBadge());
        b.appendChild(nameEl);
        b.appendChild(el('span', { class: 'cert__org', text: t(base + 'org') }));

        var iss = t(base + 'issued'), exp = t(base + 'expires');
        var dateTxt = isPlaceholder(iss) ? t('common.unknown') : iss;
        if (!isPlaceholder(exp)) dateTxt += ' → ' + exp;
        b.appendChild(el('span', { class: 'cert__date', text: dateTxt }));
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

    $('#certPrev').addEventListener('click', function () { step(-1); });
    $('#certNext').addEventListener('click', function () { step(1); });
    $('#certToggle').addEventListener('click', function () {
      CAR.userPaused = !CAR.userPaused;
      setCarouselUI();
      if (CAR.userPaused) stopLoop(); else startLoop();
    });

    vp.addEventListener('pointerenter', function () { CAR.hovering = true; stopLoop(); });
    vp.addEventListener('pointerleave', function () { CAR.hovering = false; startLoop(); });
    vp.addEventListener('focusin',  function () { CAR.hovering = true; stopLoop(); });
    vp.addEventListener('focusout', function (e) { if (!vp.contains(e.relatedTarget)) { CAR.hovering = false; startLoop(); } });

    var startX = 0, startOff = 0, pid = null;
    vp.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      pid = e.pointerId; startX = e.clientX; startOff = CAR.offset;
      CAR.dragging = true; CAR.dragMoved = false; CAR.userPaused = true;
      stopLoop(); setCarouselUI();
      vp.classList.add('is-dragging');
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
    function endDrag(e) {
      if (!CAR.dragging) return;
      CAR.dragging = false;
      vp.classList.remove('is-dragging');
      try { if (pid !== null) vp.releasePointerCapture(pid); } catch (err) {}
      pid = null;
      CAR.index = CAR.count ? Math.max(0, Math.min(CAR.count - 1, Math.round(CAR.offset / CAR.step))) : 0;
      setCarouselUI();
      setTimeout(function () { CAR.dragMoved = false; startLoop(); }, 80);
    }
    vp.addEventListener('pointerup', endDrag);
    vp.addEventListener('pointercancel', endDrag);
    vp.addEventListener('lostpointercapture', endDrag);

    vp.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')      { e.preventDefault(); step(-1); }
      else if (e.key === 'ArrowRight'){ e.preventDefault(); step(1); }
      else if (e.key === 'Home')      { e.preventDefault(); CAR.userPaused = true; CAR.offset = 0; applyOffset(false); setCarouselUI(); }
      else if (e.key === 'End')       { e.preventDefault(); CAR.userPaused = true; CAR.offset = clampOffset(CAR.loopW); applyOffset(false); setCarouselUI(); }
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        CAR.onscreen = en[0].isIntersecting;
        if (CAR.onscreen) startLoop(); else stopLoop();
      }, { threshold: 0.05 }).observe(vp);
    }
    document.addEventListener('visibilitychange', function () { if (document.hidden) stopLoop(); else startLoop(); });

    var rz;
    window.addEventListener('resize', function () {
      clearTimeout(rz);
      rz = setTimeout(function () { measure(); CAR.offset = clampOffset(CAR.offset); applyOffset(true); setCarouselUI(); }, 160);
    });
  }

  /* ─────────── FORMULARIO DE CONTACTO ─────────── */
  function bindForm() {
    var form = $('#contactForm'); if (!form) return;
    var f = { name: $('#cf-name'), email: $('#cf-email'), subject: $('#cf-subject'), message: $('#cf-message'), hp: $('#cf-website') };
    var status = $('#cf-status'), submit = $('#cf-submit'), label = $('.btn__label', submit);

    function setError(input, key) {
      var box = document.getElementById(input.id + '-err');
      if (key) {
        input.setAttribute('aria-invalid', 'true');
        if (box) { box.textContent = t(key); box.hidden = false; }
        return false;
      }
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
        if (onlyInvalid && c[0].getAttribute('aria-invalid') !== 'true' && !c[1]) { setError(c[0], null); return; }
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
      status.hidden = false;
      status.className = 'form__status';
      status.textContent = t('contact.form.validating');

      if (f.hp && f.hp.value) {          // bot atrapado
        status.className = 'form__status is-ok';
        status.textContent = t('contact.form.success');
        form.reset();
        return;
      }
      if (!validate(false)) {
        status.className = 'form__status is-err';
        status.textContent = t('contact.form.invalid');
        return;
      }

      submit.classList.add('is-loading');
      submit.disabled = true;
      label.textContent = t('contact.form.sending');
      status.className = 'form__status';
      status.textContent = t('contact.form.loading');

      setTimeout(function () {
        var to = cleanMail('profile.email');
        var href = 'mailto:' + to +
                   '?subject=' + encodeURIComponent(f.subject.value.trim()) +
                   '&body=' + encodeURIComponent(f.message.value.trim() + '\n\n— ' + f.name.value.trim() + '\n' + f.email.value.trim());

        submit.classList.remove('is-loading');
        submit.disabled = false;
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
          status.textContent = t('contact.form.error');
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
      var hit = entries.some(function (e) { return e.isIntersecting; });
      if (hit) { footer.classList.add('is-revealed'); io.disconnect(); }
    }, { root: null, threshold: 0, rootMargin: '0px 0px -6% 0px' });
    io.observe(sentinel);
    setTimeout(function () { footer.classList.add('is-revealed'); io.disconnect(); }, 1400);
  }

  /* ─────────── BACK TO TOP + SMOOTH SCROLL ─────────── */
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
    var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 66;
    var top = target.getBoundingClientRect().top + window.scrollY - (navH + 18);
    window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? 'auto' : 'smooth' });
    if (window.history && history.replaceState) history.replaceState(null, '', id);
    if (navMenu.classList.contains('is-open')) setMenu(false);
  });

  /* ─────────── SELECTOR DE IDIOMA ─────────── */
  function bindLangSwitch() {
    var wrap = $('#langSwitch'), trigger = $('#langTrigger'), menu = $('#langMenu');
    var opts = $$('li[role="menuitemradio"]', menu);
    var open = false;

    function syncChecked() {
      opts.forEach(function (o) {
        var on = o.getAttribute('data-locale') === I18N.locale;
        o.setAttribute('aria-checked', String(on));
      });
      var active = menu.querySelector('[aria-checked="true"]');
      if (active) menu.setAttribute('aria-activedescendant', active.id);
    }
    function setOpen(v) {
      open = v;
      wrap.classList.toggle('is-open', v);
      trigger.setAttribute('aria-expanded', String(v));
      if (v) {
        syncChecked();
        opts.forEach(function (o) { o.classList.remove('is-focus'); });
        var cur = menu.querySelector('[aria-checked="true"]') || opts[0];
        cur.classList.add('is-focus');
        menu.setAttribute('aria-activedescendant', cur.id);
        menu.focus();
      }
    }
    function moveFocus(d) {
      var i = -1;
      opts.forEach(function (o, k) { if (o.classList.contains('is-focus')) i = k; });
      opts.forEach(function (o) { o.classList.remove('is-focus'); });
      var n = opts[(i + d + opts.length) % opts.length];
      n.classList.add('is-focus');
      menu.setAttribute('aria-activedescendant', n.id);
    }
    function choose(o) {
      I18N.setLocale(o.getAttribute('data-locale'));
      setOpen(false);
      trigger.focus();
    }

    trigger.addEventListener('click', function (e) { e.stopPropagation(); setOpen(!open); });
    menu.addEventListener('click', function (e) {
      var o = e.target.closest('li[role="menuitemradio"]');
      if (o) choose(o);
    });
    menu.addEventListener('keydown', function (e) {
      if (e.key === 'Escape')     { e.preventDefault(); setOpen(false); trigger.focus(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); moveFocus(1); }
      else if (e.key === 'ArrowUp')   { e.preventDefault(); moveFocus(-1); }
      else if (e.key === 'Home')  { e.preventDefault(); opts.forEach(function (o) { o.classList.remove('is-focus'); }); opts[0].classList.add('is-focus'); menu.setAttribute('aria-activedescendant', opts[0].id); }
      else if (e.key === 'End')   { e.preventDefault(); opts.forEach(function (o) { o.classList.remove('is-focus'); }); opts[opts.length - 1].classList.add('is-focus'); menu.setAttribute('aria-activedescendant', opts[opts.length - 1].id); }
      else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var a = menu.querySelector('.is-focus') || menu.querySelector('[aria-checked="true"]');
        if (a) choose(a);
      } else if (e.key === 'Tab') { setOpen(false); }
    });
    document.addEventListener('click', function (e) { if (open && !wrap.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && open) { setOpen(false); trigger.focus(); }
    });

    I18N.onChange(function () {
      var meta = I18N.LOCALES[I18N.locale] || I18N.LOCALES[I18N.DEFAULT];
      var code = $('#langCode');
      if (code) code.textContent = meta.short;
      syncChecked();
    });
  }

  /* ─────────── TEXTOS DINÁMICOS ─────────── */
  function updateDynamic() {
    var year = new Date().getFullYear();
    var y = $('#footerYear'); if (y) y.textContent = String(year);
    var copy = $('#footerCopy');
    if (copy) copy.textContent = t('footer.copyright', { year: year, name: t('profile.name') });
  }

  /* ─────────── RE-RENDER AL CAMBIAR DE IDIOMA ─────────── */
  function renderAll(noAnim) {
    renderSocials();
    renderAbout();
    renderSkills();
    renderExperience(!!noAnim);
    renderProjects(!!noAnim);
    renderCerts();
    observeReveals(document);
  }

  I18N.onChange(function () {
    renderAll(true);
    updateDynamic();
    setMenu(navMenu.classList.contains('is-open'));
    if (currentProject) openProject(currentProject, triggers.get($('#projectDialog')));
    if (currentCert)    openCert(currentCert, triggers.get($('#certDialog')));
  });

  /* ─────────── INIT ─────────── */
  function init() {
    wireDialog($('#projectDialog'));
    wireDialog($('#certDialog'));
    bindExpTabs();
    bindCarousel();
    bindForm();
    bindLangSwitch();
    bindFooterReveal();

    I18N.init();
    renderAll(false);
    updateDynamic();
    onScrollFrame();

    var meta = I18N.LOCALES[I18N.locale] || I18N.LOCALES[I18N.DEFAULT];
    var code = $('#langCode'); if (code) code.textContent = meta.short;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
