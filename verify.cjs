/* Prueba de regresión: ejecuta los eventos reales con un reloj controlado.
 * No sustituye una revisión visual en navegador. Ejecutar: node verify.cjs. */
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(__dirname + '/js/app.js', 'utf8');
let now = 0, nextId = 1;
const timers = new Map();
function advance(ms) {
  now += ms;
  for (const [id, timer] of timers) {
    if (timer.at <= now) { timers.delete(id); timer.fn(); }
  }
}
function node() {
  return {
    events: {}, children: [], style: {}, classList: { add() {}, remove() {} },
    addEventListener(type, fn) { (this.events[type] ||= []).push(fn); },
    emit(type, data = {}) { for (const fn of this.events[type] || []) fn(data); },
    appendChild(child) { this.children.push(child); },
    contains() { return false; }, setPointerCapture() {}, releasePointerCapture() {}
  };
}
const viewport = node(), track = node(), status = node(), document = node();
document.hidden = false;
let opened = 0;
const context = vm.createContext({
  console, document, reduceMotion: false,
  window: { addEventListener() {}, requestAnimationFrame() { return nextId++; }, cancelAnimationFrame() {} },
  $: selector => ({ '#certTrack': track, '#certViewport': viewport, '#certStatus': status }[selector] || null),
  t: x => x, el: node, svg: node, P: {}, phBadge: node,
  promote() {}, openProject() { opened++; },
  setTimeout(fn, ms) { const id = nextId++; timers.set(id, { fn, at: now + ms }); return id; },
  clearTimeout(id) { timers.delete(id); }
});
vm.runInContext(source.slice(source.indexOf('  var CAR ='), source.indexOf('  /* ─────────── FORMULARIO')), context);
vm.runInContext('CAR.looping = true; CAR.count = 5; CAR.loopW = 1490; bindCarousel(); startLoop();', context);
assert(context.CAR.raf, 'Initial automatic movement');
function drag() {
  viewport.emit('pointerdown', { button: 0, pointerId: 1, clientX: 200 });
  viewport.emit('pointermove', { pointerId: 1, clientX: 100 });
  viewport.emit('pointerup');
}
drag();
assert.equal(context.CAR.raf, 0);
advance(2999); assert.equal(context.CAR.raf, 0, 'Pause lasts three seconds');
advance(1); assert(context.CAR.raf, 'Restarts without pointerleave');
drag(); advance(2000); drag(); advance(1000);
assert.equal(context.CAR.raf, 0, 'New drag resets timer');
advance(2000); assert(context.CAR.raf);
context.reduceMotion = true;
drag(); advance(3000); assert.equal(context.CAR.raf, 0, 'Reduced motion never auto-starts');
context.reduceMotion = false;
document.emit('keydown', { key: 'Tab' }); viewport.emit('focusin');
vm.runInContext('startLoop()', context); assert.equal(context.CAR.raf, 0, 'Keyboard focus pauses');
viewport.emit('focusout', { relatedTarget: null }); assert(context.CAR.raf);
vm.runInContext(source.slice(source.indexOf('  function buildCard('), source.indexOf('  function renderProjects(')), context);
document.createTextNode = text => ({ text });
const project = { id: 'test', name: 'Test', tech: [], hue: 210 };
for (const featured of [true, false]) {
  const card = context.buildCard(project, 0, featured);
  const before = opened;
  card.emit('click');
  card.emit('keydown', { key: 'Tab', target: card, preventDefault() {} });
  card.emit('keydown', { key: ' ', target: card, preventDefault() {} });
  assert.equal(opened, before, 'Neither click, Tab nor Space opens details');
  card.emit('keydown', { key: 'Enter', target: card, preventDefault() {} });
  assert.equal(opened, before + 1, 'Enter opens any focused card');
}
console.log('OK: project activation, 3-second resume, repeated drag, keyboard focus and reduced motion.');

// Estructura de la entrega y navegación central.
assert.deepEqual(fs.readdirSync(__dirname + '/css'), ['styles.css']);
assert.deepEqual(fs.readdirSync(__dirname + '/js'), ['app.js']);
for (const name of ['index.html', 'experiencia.html', '404.html']) {
  const html = fs.readFileSync(__dirname + '/' + name, 'utf8');
  assert(!html.includes('class="brand'), name + ': no brand markup');
  assert(!html.includes('href="./LICENSE"'), name + ': no missing license link');
}
const styles = fs.readFileSync(__dirname + '/css/styles.css', 'utf8');
assert(styles.includes('grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr)'));
console.log('OK: one stylesheet, one application script, centered navigation and removed brands.');


const home = fs.readFileSync(__dirname + '/index.html', 'utf8');
const hero = home.slice(home.indexOf('id="hero"'), home.indexOf('id="contentCard"'));
assert(hero.includes('>Jose Luis</span>'));
assert(!hero.includes('[Marcador'));
assert(!hero.includes('hero__greeting'));
assert(!home.includes('<strong>Tecnologías y herramientas</strong>'));
assert(home.includes('id="ai"'));
assert(home.includes('aria-hidden="true"><code>'));
assert(!home.includes('class="sec-head__label"'));
console.log('OK: simplified hero, decorative code, AI section and clean section headings.');

// The reveal observer repeats the same transition on re-entry.
let revealCallback;
const revealed = new Set();
const revealNode = { classList: {
  contains() { return true; },
  add(value) { revealed.add(value); },
  toggle(value, state) { if (state) revealed.add(value); else revealed.delete(value); }
} };
context.$$ = () => [revealNode];
context.IntersectionObserver = function (callback) {
  revealCallback = callback;
  this.observe = function () {};
};
context.window.IntersectionObserver = context.IntersectionObserver;
context.reduceMotion = false;
vm.runInContext(source.slice(source.indexOf('  var revealIO ='), source.indexOf('  /* ─────────── PROGRESO')), context);
context.observeReveals();
revealCallback([{ target: revealNode, isIntersecting: true }]);
assert(revealed.has('is-in'));
revealCallback([{ target: revealNode, isIntersecting: false }]);
assert(!revealed.has('is-in'));
revealCallback([{ target: revealNode, isIntersecting: true }]);
assert(revealed.has('is-in'));
context.reduceMotion = true;
context.observeReveals();
assert(revealed.has('is-in'));
console.log('OK: reveal on entry and re-entry, with reduced-motion fallback.');
