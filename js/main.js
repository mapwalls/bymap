(() => {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EMAIL = 'paredesmaria.co@gmail.com';
  document.body.dataset.theme = document.body.dataset.theme || 'cream';

  /* ================= i18n ================= */
  const ES = {
    nav_work: 'Trabajo', nav_exp: 'Experiencia', nav_about: 'Sobre mí', nav_contact: 'Contacto',
    // the hero headline (h1a, h1c, h1b) stays in English on purpose
    byline: 'Maria Paredes · Senior Product Designer', cue: 'scroll',
    read1: 'Hola, soy Maria. Hace más de 9 años convierto productos complejos en cosas que la gente sí puede usar. Hoy, eso significa diseñar cómo las personas trabajan con IA.',
    read2: 'Los resultados que puedo defender, con analítica, encuestas y entrevistas sobre trabajo lanzado:',
    st1: 'completación del onboarding', st2: 'inscripciones incompletas', st3: 'usuarios creando reportes',
    read3: 'Este es mi flujo de trabajo en un proyecto.',
    s1_t: 'Descubrir', s1_a: 'Revisión de analítica', s1_b: 'Síntesis de investigación asistida por IA', s1_c: 'Insights de conversaciones con clientes, recopilados por el equipo de soporte',
    s2_t: 'Definir', s2_a: 'Síntesis de los hallazgos de investigación', s2_b: 'Identificación de oportunidades', s2_c: 'Definición del alcance del MVP',
    s3_t: 'Idear', s3_a: 'Flujos de usuario', s3_b: 'Sesiones colaborativas de brainstorming', s3_c: 'Generación de conceptos',
    s4_t: 'Diseñar', s4_a: 'Mockups', s4_b: 'Prototipado', s4_c: 'Implementación del design system',
    s5_t: 'Probar', s5_a: 'Pruebas de usabilidad', s5_b: 'Análisis de feedback con apoyo de IA',
    s6_t: 'Acompañar', s6_a: 'Seguimiento al trabajo de front-end para asegurar la calidad',
    work_eyebrow: 'Trabajo seleccionado', work_title: 'Proyectos recientes de los que estoy orgullosa.', see_all: 'Ver todos los proyectos', life_eyebrow: 'Fuera de la pantalla', life_title: 'Dibujar, viajar y mucho cielo.', cap_art: 'Dibujando', cap_dk: 'Dinamarca', cap_is: 'Islandia', cap_ny: 'Nueva York', cv_btn: 'Descargar mi CV', all_eyebrow: 'Todo el trabajo', all_title: 'Todos los proyectos, con el pensamiento detrás.', back_home: '← Volver al inicio',
    case: 'Caso', m1: 'usuarios creando reportes', m2: 'inscripciones incompletas', m3: 'tasa de completación', m4: 'componentes',
    btn_think: 'Cómo lo pensé', lbl_problem: 'El problema', lbl_decision: 'Mi decisión', lbl_result: 'El resultado', link_case: 'Leer caso de estudio',
    c1_desc: 'Un módulo donde los administradores de HR crean, gestionan y generan sus propios reportes; luego describen uno en lenguaje natural y la IA lo configura.',
    c1_p: 'Los clientes tenían una larga lista de reportes genéricos, pero no podían combinar valores para crear los suyos.',
    c1_d: 'Primero revisé datos de Pendo y entrevisté a administradores de HR. Luego decidí llevar la IA a la creación de reportes y definí un lanzamiento MVP: una plantilla o un reporte creado con IA.',
    c1_r: '2,842 usuarios crearon un reporte (+21%) y construir uno pasó a ser ~30% más rápido que la configuración manual.',
    c2_desc: 'La primera inscripción a beneficios de salud completamente móvil para una plataforma de nómina y HR: un proceso denso de escritorio convertido en pasos guiados.',
    c2_p: 'La inscripción solo existía como un flujo web denso. El 52% de los empleados encuestados no veía el costo total por pago de nómina, y el 72% la pospuso por exceso de opciones o por no poder comparar planes.',
    c2_d: 'Un paso claro a la vez: costo por pago de nómina en cada plan y nivel, comparación lado a lado y una tarjeta en el inicio que muestra el progreso durante la inscripción abierta.',
    c2_r: 'Las inscripciones incompletas o con soporte bajaron de ~40% a ~12% (analítica de producto y datos de soporte).',
    c3_desc: 'Un onboarding autoguiado para empleados y un solo panel de revisión para HR, en escritorio, tablet y móvil.',
    c3_p: 'El onboarding estaba disperso entre correos, PDFs y portales. Los nuevos empleados no sabían qué les faltaba y HR dedicaba gran parte de su tiempo a perseguir recordatorios.',
    c3_d: 'Tras entrevistar a 11 empleados, diseñé un asistente paso a paso con guardar y continuar y un seguimiento del progreso, más un panel de administración para aprobar o rechazar envíos.',
    c3_r: '91% de completación, el onboarding pasó de 5 a 2 días, aprobaciones de administración 40% más rápidas y 70% menos solicitudes de soporte.',
    c4_desc: 'Una única fuente de verdad para una plataforma de nómina usada por miles de administradores de HR.',
    c4_p: 'El producto había crecido de forma orgánica: botones, formularios y tablas se veían y se comportaban distinto en cada módulo.',
    c4_d: 'Primero una auditoría; luego tokens, más de 70 componentes y documentación en Figma con variables y auto layout, diseñados bajo WCAG 2.1 AA.',
    c4_r: 'Handoff de diseño a desarrollo más rápido, una UI consistente en más de 4 áreas del producto y una librería compartida para diseñadores, desarrolladores y PMs.',
    c7_meta: 'Financiación de litigios · Contabilidad de fondos · Plataforma interna', m7: 'flujos de back office en una sola plataforma, en vez de hojas de cálculo',
    c7_desc: 'La plataforma interna del back office de un financiador de litigios: facturas, tickets de pago, instrucciones de giro, conciliación bancaria y reportes de cierre en un solo lugar, en vez de hojas de cálculo.',
    c7_p: 'La facturación vivía en interfaces de Airtable donde cada pantalla tenía sus propios botones, campos, chips y formatos de número, así que la misma tarea se veía distinta de un paso al siguiente.',
    c7_d: 'Los mismos controles y reglas en todas las pantallas: los mismos tamaños, montos con separador de miles y dos decimales, campos que resaltan lo que falta, y Save solo cuando los campos obligatorios están completos.',
    c7_r: '12 pantallas de facturación que funcionan igual, incluido un Invoice Inbox con revisión de presupuesto por asignación y un Payment Ticket Builder, refinadas con el QA de la clienta.',
    c6_meta: 'Demo web · Agente de compras con IA', m6: 'pasos de un deseo a una compra',
    c6_desc: 'Un agente de compras con IA que funciona por MCP, desde el sitio o desde Claude y ChatGPT: agregas un producto y un presupuesto, encuentra tiendas y precios, y compras de una vez o recibes un correo cuando el precio baja.',
    c6_p: 'El agente de Tethral funciona dentro de la IA que la gente ya usa, y eso es difícil de imaginar desde una landing. Los visitantes necesitaban sentir el producto antes de conectar nada.',
    c6_d: 'Un demo guiado en el sitio, con datos de ejemplo claramente señalados: una pregunta por pantalla, el límite de precio desde el inicio, opciones de varias tiendas y dos decisiones claras, cómpralo por mí o solo avísame.',
    c6_r: 'Un demo navegable del recorrido de compra en el sitio público, ampliado con listas, alertas, checkout, revisión de compra y seguimiento del pedido a medida que el cliente daba feedback.',
    c5_meta: 'Plataforma web · Viajes de lujo · IA', m5: 'menos tiempo de trabajo, con agentes de IA que reúnen la información del cliente',
    c5_desc: 'Un centro de operaciones para una agencia de viajes de lujo: llamadas, correos y mensajes de WhatsApp llegan a un solo lugar, un asistente de IA prepara el registro y los asesores solo revisan y aprueban.',
    c5_p: 'Las conversaciones con clientes estaban repartidas entre llamadas, correo y WhatsApp, y los asesores volvían a escribir lo que escuchaban en viajes, tareas y fichas de clientes. Cubrir a un compañero de vacaciones significaba buscar en la bandeja de otra persona.',
    c5_d: 'Una regla para todo el producto: el asistente propone y la persona aprueba. Una sola pantalla de revisión clasifica cada conversación y la vincula a un cliente y a un viaje, My Day muestra lo que falta por revisar y las tareas del SOP llegan listas con cada viaje.',
    c5_r: 'Tres versiones del prototipo iteradas con el cliente, más historias de usuario con reglas de aceptación que definen cada flujo para desarrollo.',
    read4: 'Desde Colombia trabajo en remoto con equipos y clientes de Estados Unidos y Latinoamérica.',
    think_eyebrow: 'Mentalidad', think_title: 'Cómo pienso',
    p1_t: 'Liderazgo', p1_d: 'Trabajo junto a product managers, ingenieros y stakeholders para alinear las decisiones de diseño con los objetivos de negocio, guiando a los equipos desde la investigación y la ideación hasta la entrega con una visión compartida.',
    p2_t: 'El diseño como estrategia', p2_d: 'El diseño no es decoración. Cuando tiene un lugar en la mesa, definiendo roadmaps y conectando las necesidades de los usuarios con los resultados de negocio, se convierte en una de las herramientas más poderosas de un equipo de producto.',
    p3_t: 'Mentalidad de crecimiento', p3_d: 'Me mantengo genuinamente curiosa. Exploro nuevas herramientas y métodos, y ahora mismo estoy profundizando en cómo la IA está transformando la forma en que investigamos, prototipamos y construimos productos. Esa curiosidad moldea directamente cómo diseño.',
    exp_eyebrow: 'Trayectoria', exp_title: 'Experiencia',
    e1_desc: 'Lidero el proceso de diseño de producto de punta a punta para aplicaciones web y móviles, desde el descubrimiento hasta la entrega. Guío a los clientes en sesiones de brainstorming y alineo las soluciones con las necesidades de los usuarios y los objetivos de negocio, iterando las propuestas con métricas de PostHog. Uso Claude para prototipar y validar las ideas con usuarios.',
    e2_desc: 'Lideré la estrategia de UX de una plataforma de nómina e impuestos, trabajando con Product Managers e ingenieros en descubrimiento, ideación y entrega. Construí y escalé el Design System, usé analítica de Pendo y entrevistas con clientes para priorizar mejoras, y aproveché herramientas de IA como Claude para acelerar la síntesis de investigación y el prototipado.',
    e3_desc: 'Lideré el equipo de UX que diseñó soluciones digitales para Bancolombia Empresas, definiendo la estrategia de UX desde la investigación hasta el handoff final. Realicé entrevistas con usuarios y pruebas de usabilidad para guiar mejoras iterativas en flujos de usuario y mockups de alta fidelidad.',
    e4_desc: 'Diseñé wireframes, flujos de usuario y prototipos de alta fidelidad para aplicaciones iOS, Android y web responsive en varios proyectos de clientes, trabajando de cerca con los equipos de desarrollo desde el concepto hasta el lanzamiento.',
    e5_role: 'Diseñadora gráfica y web', e5_desc: 'Diseñé sitios web HTML5/CSS3, plataformas de e-commerce y piezas de marketing, trabajando directamente con los clientes en branding e identidad corporativa.',
    e6_role: 'Diseñadora gráfica', e6_desc: 'Desarrollé campañas publicitarias para empresas del sector automotriz.',
    about_eyebrow: 'Sobre mí', about_title: 'Proactiva, motivada y curiosa.',
    about_text: 'Una diseñadora de producto proactiva y motivada, con fuertes habilidades de liderazgo y pasión por crear experiencias de usuario excepcionales a través de metodologías innovadoras. He trabajado con una amplia variedad de clientes, entregando productos B2B complejos en Colombia y Estados Unidos.',
    f_loc: 'Ubicación', v_loc: 'Bucaramanga, Colombia · Remoto, presencial o disponible para reubicarme', f_lang: 'Idiomas', v_lang: 'Español (nativo), inglés C1',
    f_edu: 'Educación', v_edu: 'Pregrado en Diseño Gráfico, Universidad José María Vargas (2012)',
    notes_title: 'Ideas a las que siempre vuelvo.',
    contact_title: 'Ama lo que haces.', contact_sub: 'Abierta a nuevas oportunidades: remoto, presencial o reubicándome.',
    copy_btn: 'Copiar correo', back_top: 'Volver arriba ↑',
    of_title: 'Objetos que amo, de mi escritorio', of_hint: 'pasa el cursor, toca o haz clic en uno',
  };
  const OBJ = [
    { src: 'assets/godzilla.webp', n: ['Godzilla', 'Godzilla'], t: ['Handles the big, scary problems.', 'Se encarga de los problemas grandes y aterradores.'] },
    { src: 'assets/shiba.webp', n: ['Shiba daruma', 'Shiba daruma'], t: ['Sets a goal, falls down, gets back up.', 'Se pone una meta, se cae y se vuelve a levantar.'] },
    { src: 'assets/dilo.webp', n: ['Dilophosaurus', 'Dilophosaurus'], t: ['Details you notice from across the room.', 'Detalles que se notan desde el otro lado de la sala.'] },
    { src: 'assets/pinata.webp', n: ['Dino piñata', 'Piñata dino'], t: ['Every launch deserves a little celebration.', 'Cada lanzamiento merece una pequeña celebración.'] },
    { src: 'assets/duck.webp', n: ['Viking duck', 'Pato vikingo'], t: ["If I can't explain it out loud, it isn't clear yet.", 'Si no puedo explicarlo en voz alta, todavía no está claro.'] },
  ];
  const EN = {};
  let lang = 'en';
  const hooks = [];
  function collectEN() { $$('[data-t]').forEach(el => { if (!(el.dataset.t in EN)) EN[el.dataset.t] = el.textContent; }); }
  collectEN();
  function applyLang(l, persist = true) {
    lang = l;
    const d = l === 'es' ? ES : EN;
    $$('[data-t]').forEach(el => { const v = d[el.dataset.t]; if (v != null) el.textContent = v; });
    document.documentElement.lang = l;
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    if (persist) { try { localStorage.setItem('mp-lang', l); } catch (e) { /* ignore */ } }
    hooks.forEach(h => h());
  }
  $$('.lang button').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

  /* ================= theme follows the section in view ================= */
  const themeIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) document.body.dataset.theme = e.target.dataset.theme; }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main > section[data-theme]').forEach(s => themeIO.observe(s));

  /* ================= reading statements: words light up as you scroll ================= */
  const reads = $$('.read');
  function splitRead(el) {
    const txt = el.textContent.trim();
    el.setAttribute('aria-label', txt);
    el.textContent = '';
    txt.split(/\s+/).forEach((w, i, arr) => {
      const s = document.createElement('span'); s.className = 'w'; s.textContent = w; s.setAttribute('aria-hidden', 'true');
      el.appendChild(s); if (i < arr.length - 1) el.appendChild(document.createTextNode(' '));
    });
  }
  function updateReads() {
    const vh = innerHeight;
    reads.forEach(el => {
      const ws = el.children; if (!ws.length) return;
      const r = el.getBoundingClientRect();
      const p = reduce ? 1 : clamp((vh * 0.86 - r.top) / (vh * 0.86 - vh * 0.38 + r.height * 0.4), 0, 1);
      const n = Math.round(p * ws.length * 1.0);
      for (let i = 0; i < ws.length; i++) ws[i].classList.toggle('on', i < n);
    });
  }
  reads.forEach(splitRead);
  // the polaroid drops in when the intro comes into view
  const pol = $('#polaroid');
  if (pol) new IntersectionObserver(([e], o) => { if (e.isIntersecting) { pol.classList.add('in'); o.disconnect(); } }, { threshold: .35 }).observe(pol);
  hooks.push(() => { reads.forEach(el => { const k = el.dataset.t; if (k) { el.textContent = (lang === 'es' ? ES : EN)[k]; } splitRead(el); }); updateReads(); });
  let tick = false;
  addEventListener('scroll', () => { if (tick) return; tick = true; requestAnimationFrame(() => { updateReads(); tick = false; }); }, { passive: true });
  addEventListener('resize', updateReads);
  updateReads();

  if ($('#hero')) {
  /* ================= hero: headline letters react to the toy and the cursor ================= */
  const hero = $('#hero'), walker = $('#walker');
  const lines = $$('.hero .line');
  let chars = [];
  const pointer = { x: -999, y: -999 };
  const toy = { x: 0, y: 0, vx: 0, vy: 0, w: 0, h: 0, drag: false, ox: 0, oy: 0, lx: 0, ly: 0, lt: 0, entered: false };
  function splitChars() {
    lines.forEach(l => {
      const txt = l.textContent; l.setAttribute('aria-label', txt); l.textContent = '';
      txt.split(' ').forEach((w, wi, arr) => {
        const wd = document.createElement('span'); wd.className = 'wd'; wd.setAttribute('aria-hidden', 'true');
        [...w].forEach(c => { const s = document.createElement('span'); s.className = 'ch'; s.textContent = c; wd.appendChild(s); });
        l.appendChild(wd); if (wi < arr.length - 1) l.appendChild(document.createTextNode(' '));
      });
    });
    chars = $$('.ch').map(el => ({ el, bx: 0, by: 0, x: 0, y: 0 }));
    fitBig();
    measure();
  }
  // each big word is sized to run a little past both screen edges
  function fitBig() {
    $$('.hero .line.big').forEach(l => {
      l.style.fontSize = '100px';
      const w = [...l.children].reduce((s, c) => s + c.getBoundingClientRect().width, 0) || l.scrollWidth;
      l.style.fontSize = (100 * innerWidth * 1.04 / w).toFixed(1) + 'px';
    });
  }
  function measure() {
    chars.forEach(c => { c.el.style.transform = ''; });
    const hr = hero.getBoundingClientRect();
    chars.forEach(c => { const r = c.el.getBoundingClientRect(); c.bx = r.left - hr.left + r.width / 2; c.by = r.top - hr.top + r.height / 2; c.x = c.y = 0; });
    toy.w = walker.offsetWidth; toy.h = walker.offsetHeight;
  }
  function placeToy() { walker.style.transform = `translate3d(${toy.x}px,${toy.y}px,0)`; }
  function toyTarget() { const W = hero.clientWidth, H = hero.clientHeight; return W < 700 ? { x: W - toy.w - 6, y: H * 0.64 } : { x: W * 0.66, y: H * 0.3 }; }
  let heroVisible = true, heroRaf = 0, heroStart = performance.now();
  function heroLoop(now) {
    const W = hero.clientWidth, H = hero.clientHeight;
    // entrance: the toy walks in from the right
    if (!toy.entered && !toy.drag) {
      const t = clamp((now - heroStart - 500) / 2400, 0, 1), e = 1 - Math.pow(1 - t, 3), tg = toyTarget();
      toy.x = lerp(W + 40, tg.x, reduce ? 1 : e); toy.y = tg.y;
      if (t >= 1) toy.entered = true;
    } else if (!toy.drag && (Math.abs(toy.vx) + Math.abs(toy.vy) > .05)) {
      toy.x += toy.vx; toy.y += toy.vy; toy.vx *= .96; toy.vy *= .96;
      if (toy.x < -toy.w * .3) { toy.x = -toy.w * .3; toy.vx *= -.6; } if (toy.x > W - toy.w * .7) { toy.x = W - toy.w * .7; toy.vx *= -.6; }
      if (toy.y < 40) { toy.y = 40; toy.vy *= -.6; } if (toy.y > H - toy.h) { toy.y = H - toy.h; toy.vy *= -.6; }
    }
    placeToy();
    const hr = hero.getBoundingClientRect();
    const px = pointer.x - hr.left, py = pointer.y - hr.top;
    const tcx = toy.x + toy.w * .5, tcy = toy.y + toy.h * .5, tr = Math.max(toy.w, toy.h) * .42;
    chars.forEach(c => {
      let tx = 0, ty = 0;
      // only the toy pushes letters now (no cursor effect); with the toy hidden the headline stays still
      (walker.hidden ? [] : [[tcx, tcy, tr + 22, .8]]).forEach(([sx, sy, R, k]) => {
        const dx = c.bx - sx, dy = c.by - sy, d = Math.hypot(dx, dy);
        if (d < R && d > .01) { const f = Math.pow(1 - d / R, 1.6) * R * 0.75 * k; tx += dx / d * f; ty += dy / d * f; }
      });
      c.x += (tx - c.x) * .16; c.y += (ty - c.y) * .16;
      c.el.style.transform = (Math.abs(c.x) + Math.abs(c.y) < .05) ? '' : `translate(${c.x.toFixed(1)}px,${c.y.toFixed(1)}px) rotate(${(c.x * .12).toFixed(1)}deg)`;
    });
    heroRaf = heroVisible ? requestAnimationFrame(heroLoop) : 0;
  }
  function heroStartLoop() { if (!heroRaf) heroRaf = requestAnimationFrame(heroLoop); }
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; if (heroVisible) heroStartLoop(); }, { threshold: 0 }).observe(hero);
  addEventListener('pointermove', e => { if (e.pointerType !== 'touch') { pointer.x = e.clientX; pointer.y = e.clientY; } }, { passive: true });
  walker.addEventListener('pointerdown', e => {
    toy.drag = true; toy.entered = true; walker.setPointerCapture(e.pointerId);
    const r = hero.getBoundingClientRect(); toy.ox = e.clientX - r.left - toy.x; toy.oy = e.clientY - r.top - toy.y;
    toy.lx = toy.x; toy.ly = toy.y; toy.lt = performance.now(); toy.vx = toy.vy = 0; walker.classList.add('grab'); e.preventDefault();
  });
  walker.addEventListener('pointermove', e => {
    if (!toy.drag) return;
    const r = hero.getBoundingClientRect();
    const nx = e.clientX - r.left - toy.ox, ny = e.clientY - r.top - toy.oy, now = performance.now(), dt = Math.max(8, now - toy.lt);
    toy.vx = (nx - toy.lx) / dt * 16; toy.vy = (ny - toy.ly) / dt * 16; toy.lx = nx; toy.ly = ny; toy.lt = now; toy.x = nx; toy.y = ny;
  });
  const dropToy = () => { if (!toy.drag) return; toy.drag = false; walker.classList.remove('grab'); if (reduce) toy.vx = toy.vy = 0; };
  walker.addEventListener('pointerup', dropToy); walker.addEventListener('pointercancel', dropToy);
  splitChars();
  hooks.push(() => { lines.forEach(l => { const k = l.dataset.t; l.textContent = (lang === 'es' ? ES : EN)[k] ?? EN[k]; }); splitChars(); });
  // "Clear thinking" grows to the full screen width, then keeps growing until it can no longer be read
  const clearWrap = $('.hero .l1'), clearLine = $('.hero .line.clear'), heroFade = $$('.hero .byline, .hero .cue');
  const bigLines = $$('.hero .line.big');
  const ZOOM = 30; // how many times past "full width" it ends up
  function growClear() {
    if (!clearWrap) return;
    const r = hero.getBoundingClientRect(), room = r.height - innerHeight;
    const p = reduce || room <= 0 ? 0 : clamp(-r.top / room, 0, 1);
    const natural = clearLine.offsetWidth; // layout width, not affected by the scale
    const fit = Math.max(1, innerWidth * 0.96 / natural);
    if (p < .3) { const t = p / .3, e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; clearWrap._s = 1 + (fit - 1) * e; }
    else clearWrap._s = fit * Math.pow(ZOOM, Math.pow((p - .3) / .7, 1.3)); // exponential, so the growth feels steady
    // once it passes full width, the big words step back so the giant letters take the screen
    const fade = String(1 - clamp((p - .3) / .3, 0, 1));
    bigLines.forEach(l => { l.style.opacity = fade; });
    zoomText(clearWrap._s);
    heroFade.forEach(el => { el.style.opacity = String(1 - clamp(p * 3, 0, 1)); });
  }
  // The zoom is drawn by changing the real font size of a copy, not with transform: scale(),
  // so the browser redraws the letters as vectors at every size instead of stretching pixels.
  const heroPin = $('#heroPin');
  let zoomEl = null;
  function zoomText(s) {
    if (s <= 1.001 || !heroPin) {
      if (zoomEl) zoomEl.hidden = true;
      clearLine.style.visibility = '';
      return;
    }
    if (!zoomEl) {
      zoomEl = clearLine.cloneNode(true);
      zoomEl.classList.add('clear-zoom');
      zoomEl.removeAttribute('data-t');
      zoomEl.setAttribute('aria-hidden', 'true');
      heroPin.appendChild(zoomEl);
    }
    if (zoomEl.textContent !== clearLine.textContent) zoomEl.innerHTML = clearLine.innerHTML;
    const pr = heroPin.getBoundingClientRect(), cr = clearLine.getBoundingClientRect();
    const base = parseFloat(getComputedStyle(clearLine).fontSize);
    zoomEl.style.left = `${(cr.left - pr.left + cr.width / 2).toFixed(1)}px`;
    zoomEl.style.top = `${(cr.top - pr.top + cr.height / 2).toFixed(1)}px`;
    zoomEl.style.fontSize = `${(base * s).toFixed(2)}px`;
    zoomEl.hidden = false;
    clearLine.style.visibility = 'hidden';
  }
  addEventListener('scroll', () => requestAnimationFrame(growClear), { passive: true });
  hooks.push(() => { growClear(); });
  growClear();
  addEventListener('resize', () => { fitBig(); measure(); growClear(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { fitBig(); measure(); });
  heroStartLoop();

  }

  /* ================= workflow: one thread through the six steps, drawn as you scroll ================= */
  (function flow() {
    const wrap = $('#flow'); if (!wrap) return;
    const path = $('#threadPath'), steps = $$('.step', wrap);
    function shape() {
      const wr = wrap.getBoundingClientRect();
      const pts = steps.map(s => { const r = s.getBoundingClientRect(); return [r.left - wr.left + r.width / 2, r.top - wr.top + r.height / 2]; });
      if (!pts.length) return;
      // tails run off the left edge, like a thread passing through
      const a = pts[0], z = pts[pts.length - 1], off = -wr.left - 40;
      pts.unshift([off, a[1] + 70]); pts.push([off, z[1] + 70]);
      let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
        const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
      }
      path.setAttribute('d', d);
    }
    function progress() {
      const r = wrap.getBoundingClientRect(), vh = innerHeight;
      const p = reduce ? 1 : clamp((vh * 0.9 - r.top) / r.height, 0, 1);
      path.style.setProperty('--draw', (1 - p).toFixed(3));
    }
    let tk = false;
    addEventListener('scroll', () => { if (tk) return; tk = true; requestAnimationFrame(() => { progress(); tk = false; }); }, { passive: true });

    /* --- a little pixel dino (original sprite) runs across the top of every card --- */
    const runner = $('#runner'), dino = $('#dino');
    const BODY = [
      '..........kkkkk.',
      '.........kgggggk',
      '.........kggkggk',
      '.........kgggggk',
      '..p.p.p..kggkkkk',
      '.kpkpkpkkgggk...',
      'kggggggggggggk..',
      '.kkggggggggggkk.',
      '...kgggggggggk..',
      '....kgggggggkk..',
      '.....kkgggkk....'];
    const LEGS_A = ['....kgk...kgk...', '....kk.....kk...'];
    const LEGS_B = ['......kgkgk.....', '......kk.kk.....'];
    // a pencil held in its little arm, tip down (drawn past the 16px box, svg overflow is visible)
    const PENCIL = [
      '................kkk',
      '................kpk',
      '................kyk',
      '...............kkyk',
      '................kyk',
      '................kyk',
      '................kwk',
      '................kwk',
      '.................k.'];
    const COL = { k: '#131312', g: '#D3FF35', p: '#F3006D', y: '#FFC21A', w: '#F4D7AE' };
    const rects = (rows, y0) => rows.map((r, y) => [...r].map((c, x) => COL[c] ? `<rect x="${x}" y="${y + y0}" width="1" height="1" fill="${COL[c]}"/>` : '').join('')).join('');
    dino.setAttribute('viewBox', `0 0 16 ${BODY.length + 2}`);
    dino.innerHTML = rects(BODY, 0) + rects(PENCIL, 4) + `<g class="fa">${rects(LEGS_A, BODY.length)}</g><g class="fb">${rects(LEGS_B, BODY.length)}</g>`;
    dino.classList.add('a');
    let route = [], total = 0, dist = 0, dw = 56, dh = 56 * (BODY.length + 2) / 16;
    function plan() {
      const wr = wrap.getBoundingClientRect(), pad = 18;
      const cards = steps.map(s => { const r = s.getBoundingClientRect(); return { l: r.left - wr.left + pad + dw / 2, r: r.right - wr.left - pad - dw / 2, t: r.top - wr.top + 1, c: r.left - wr.left + r.width / 2 }; });
      let dir = 1; const legs = [];
      cards.forEach((c, i) => {
        const n = cards[i + 1]; if (n && Math.abs(n.c - c.c) > 30) dir = Math.sign(n.c - c.c);
        legs.push(dir > 0 ? [[c.l, c.t], [c.r, c.t]] : [[c.r, c.t], [c.l, c.t]]);
      });
      const pts = []; const add = (x, y, air) => pts.push({ x, y, air });
      legs.forEach((lg, i) => {
        const [a, b] = lg; for (let s = 0; s <= 1.0001; s += .05) add(a[0] + (b[0] - a[0]) * s, a[1], false);
        const nx = legs[(i + 1) % legs.length][0]; // hop to the next card (and from the last back to the first)
        const top = Math.min(b[1], nx[1]) - 110, cx = (b[0] + nx[0]) / 2;
        for (let s = .04; s < 1; s += .04) { const u = 1 - s; add(u * u * b[0] + 2 * u * s * cx + s * s * nx[0], u * u * b[1] + 2 * u * s * top + s * s * nx[1], true); }
      });
      route = []; total = 0;
      pts.forEach((p, i) => { if (i) total += Math.hypot(p.x - pts[i - 1].x, p.y - pts[i - 1].y); route.push({ ...p, d: total }); });
      total += Math.hypot(pts[0].x - pts[pts.length - 1].x, pts[0].y - pts[pts.length - 1].y);
      place();
    }
    let lo = 0;
    function place() {
      if (!route.length) return;
      const d = ((dist % total) + total) % total;
      while (lo > 0 && route[lo].d > d) lo--;
      while (lo < route.length - 1 && route[lo + 1].d <= d) lo++;
      const p = route[lo], q = route[lo + 1] || route[0], seg = Math.max(.001, (q.d || total) - p.d), t = clamp((d - p.d) / seg, 0, 1);
      const x = p.x + (q.x - p.x) * t, y = p.y + (q.y - p.y) * t, face = q.x - p.x < -.01 ? -1 : 1;
      runner.style.transform = `translate(${(x - dw / 2).toFixed(1)}px,${(y - dh).toFixed(1)}px) scaleX(${face})`;
      const air = p.air || q.air;
      dino.classList.toggle('a', !air && Math.floor(d / 12) % 2 === 0);
      dino.classList.toggle('b', air || Math.floor(d / 12) % 2 === 1);
    }
    let vis = false, raf = 0, last = 0;
    function run(now) { const dt = Math.min(.05, (now - last) / 1000); last = now; dist += dt * 170; place(); raf = vis ? requestAnimationFrame(run) : 0; }
    if (!reduce) new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis && !raf) { last = performance.now(); raf = requestAnimationFrame(run); } }, { threshold: 0 }).observe(wrap);

    addEventListener('resize', () => { shape(); plan(); progress(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { shape(); plan(); });
    hooks.push(() => { shape(); plan(); });
    shape(); plan(); progress();
  })();

  /* ================= notes: a hand-drawn line joins the sticky notes ================= */
  (function doodle() {
    const board = $('#board'); if (!board) return;
    const path = $('#doodlePath'), img = $('.board-img', board); if (!path || !img) return;
    const pins = img ? img.dataset.pins.split(' ').map(p => p.split(',').map(Number)) : [];
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647 - .5;
    function shape() {
      seed = 7;
      const br = board.getBoundingClientRect(), ir = img.getBoundingClientRect();
      const pts = pins.map(([fx, fy]) => [ir.left - br.left + fx * ir.width, ir.top - br.top + fy * ir.height]); /* tied to the pins */
      if (pts.length < 2) return;
      // walk between the notes in small wobbly steps so it reads as drawn by hand
      let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const [x0, y0] = pts[i], [x1, y1] = pts[i + 1], dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy);
        const nx = -dy / len, ny = dx / len, sag = Math.min(90, len * .22) * (i % 2 ? -1 : 1), steps = Math.max(6, Math.round(len / 26));
        for (let s = 1; s <= steps; s++) {
          const t = s / steps, bow = Math.sin(t * Math.PI) * sag, jit = s === steps ? 0 : rnd() * 5;
          d += ` L${(x0 + dx * t + nx * (bow + jit)).toFixed(1)} ${(y0 + dy * t + ny * (bow + jit)).toFixed(1)}`;
        }
      }
      path.setAttribute('d', d);
    }
    function progress() {
      const r = board.getBoundingClientRect(), vh = innerHeight;
      const p = reduce ? 1 : clamp((vh * .85 - r.top) / (r.height + vh * .2), 0, 1);
      path.style.setProperty('--draw', (1 - p).toFixed(3));
    }
    addEventListener('scroll', () => requestAnimationFrame(progress), { passive: true });
    addEventListener('resize', () => { shape(); progress(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { shape(); progress(); });
    hooks.push(() => { shape(); progress(); });
    if (img && !img.complete) img.addEventListener('load', () => { shape(); progress(); });
    shape(); progress();
  })();

  /* ================= cases: details ================= */
  $$('.toggle').forEach(btn => btn.addEventListener('click', () => {
    const cs = btn.closest('.case'); const open = cs.classList.toggle('open'); btn.setAttribute('aria-expanded', String(open));
  }));

  /* ================= footer: her objects, magnetic on hover ================= */
  (function objects() {
    const grid = $('#ogrid'), tpl = $('#otpl'); if (!grid) return;
    const cap = $('#otext') || { textContent: '' }; // the caption was removed; a single row of objects now
    const mqMobile = matchMedia('(max-width: 900px)');
    let cells = [];
    const capText = i => `${OBJ[i].n[lang === 'es' ? 1 : 0]}: ${OBJ[i].t[lang === 'es' ? 1 : 0]}`;
    const hint = () => (lang === 'es' ? ES : EN).of_hint;
    function build() {
      $$('.obj', grid).forEach(n => n.remove()); cells = [];
      const cols = mqMobile.matches ? 5 : 10;
      for (let r = 0; r < 1; r++) for (let c = 0; c < cols; c++) {
        const idx = (c + r * 2) % OBJ.length;
        const b = tpl.content.firstElementChild.cloneNode(true); const img = $('img', b); img.src = OBJ[idx].src; b.setAttribute('aria-label', capText(idx)); b.dataset.i = idx;
        b.addEventListener('click', () => spin(cell)); b.addEventListener('focus', () => { cap.textContent = capText(idx); }); b.addEventListener('blur', () => { cap.textContent = hint(); });
        const cell = { b, img, idx, spin: 0, pull: 0 };
        b.addEventListener('click', () => { cap.textContent = capText(idx); });
        grid.appendChild(b);
        cells.push(cell);
      }
    }
    function spin(cell) { cell.spin += 360; apply(cell, cell.pull, 0, 0); }
    function apply(cell, pull, dx, dy) {
      cell.pull = pull;
      cell.img.style.transform = `translate(${(dx * pull * .38).toFixed(1)}px,${(dy * pull * .38).toFixed(1)}px) scale(${(1 + pull * .85).toFixed(3)}) rotate(${(cell.spin + clamp(dx, -1, 1) * pull * 10).toFixed(1)}deg)`;
      cell.b.style.zIndex = pull > .25 ? 5 : 1;
    }
    let pend = null, raf = 0;
    function run() {
      raf = 0; if (!pend) return; const { x, y } = pend; let best = null, bp = 0;
      cells.forEach(c => {
        const r = c.b.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2, dx = x - cx, dy = y - cy, d = Math.hypot(dx, dy), R = Math.max(110, r.width * .95);
        const pull = clamp(1 - d / R, 0, 1); apply(c, Math.pow(pull, .8), dx, dy); if (pull > bp) { bp = pull; best = c; }
      });
      cap.textContent = best && bp > .5 ? capText(best.idx) : hint();
    }
    const m = e => { if (reduce || e.pointerType === 'touch') return; pend = { x: e.clientX, y: e.clientY }; if (!raf) raf = requestAnimationFrame(run); };
    grid.addEventListener('pointermove', m);
    grid.addEventListener('pointerleave', () => { pend = null; cells.forEach(c => apply(c, 0, 0, 0)); cap.textContent = hint(); });
    build(); mqMobile.addEventListener('change', build);
    hooks.push(() => { cells.forEach(c => c.b.setAttribute('aria-label', capText(c.idx))); cap.textContent = hint(); });
  })();

  /* ================= about: polaroid carousel ================= */
  const polTrack = $('#polTrack');
  if (polTrack) {
    const prev = $('#polPrev'), next = $('#polNext');
    const step = () => { const it = $('.pol', polTrack); return it ? it.getBoundingClientRect().width + parseFloat(getComputedStyle(polTrack).columnGap || 24) : 300; };
    const sync = () => { prev.disabled = polTrack.scrollLeft < 8; next.disabled = polTrack.scrollLeft + polTrack.clientWidth > polTrack.scrollWidth - 8; };
    prev.addEventListener('click', () => polTrack.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' }));
    next.addEventListener('click', () => polTrack.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' }));
    polTrack.addEventListener('scroll', () => requestAnimationFrame(sync), { passive: true });
    addEventListener('resize', sync); sync();
  }

  /* ================= experience: the CV download follows the language ================= */
  const cvBtn = $('#cv-btn');
  if (cvBtn) {
    const setCv = () => { const l = lang === 'es' ? 'es' : 'en'; cvBtn.href = `assets/cv/maria-paredes-cv-${l}.pdf`; cvBtn.download = `Maria-Paredes-CV-${l.toUpperCase()}.pdf`; };
    hooks.push(setCv); setCv();
  }

  /* ================= contact ================= */
  const copyBtn = $('#copy-email'), label = $('#copy-label'), status = $('#copy-status'); let timer;
  if (copyBtn) copyBtn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(EMAIL); }
    catch (e) { const t = document.createElement('textarea'); t.value = EMAIL; t.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (err) { /* ignore */ } t.remove(); }
    const msg = lang === 'es' ? '¡Copiado!' : 'Copied!'; label.textContent = msg; status.textContent = msg;
    clearTimeout(timer); timer = setTimeout(() => { label.textContent = (lang === 'es' ? ES : EN).copy_btn; status.textContent = ''; }, 1800);
  });
  const yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();

  // initial language
  try { const q = new URLSearchParams(location.search).get('lang') || localStorage.getItem('mp-lang'); if (q === 'es') applyLang('es', false); } catch (e) { /* ignore */ }
})();
