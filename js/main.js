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
    h1a: 'Productos complejos.', h1b: 'Pensamiento claro.',
    byline: 'Maria Paredes · Senior Product Designer · Bucaramanga, Colombia', cue: 'scroll',
    read1: 'Hola, soy Maria. Hace más de 8 años convierto productos B2B complejos de nómina, HR y banca en cosas que la gente sí puede usar.',
    read2: 'Los resultados que puedo defender, con analítica, encuestas y entrevistas sobre trabajo lanzado:',
    st1: 'completación del onboarding', st2: 'inscripciones incompletas', st3: 'usuarios creando reportes',
    read3: 'Me muevo entre investigación, UX, UI y sistemas, y mantengo el hilo claro.',
    work_eyebrow: 'Trabajo seleccionado', work_title: 'Cuatro proyectos, con los números detrás.',
    case: 'Caso', m1: 'usuarios creando reportes', m2: 'inscripciones incompletas', m3: 'tasa de completación', m4: 'componentes',
    btn_think: 'Cómo lo pensé', lbl_problem: 'El problema', lbl_decision: 'Mi decisión', lbl_result: 'El resultado', link_case: 'Leer caso de estudio',
    c1_desc: 'Un módulo donde los administradores de HR crean, gestionan y generan sus propios reportes; luego describen uno en lenguaje natural y la IA lo configura.',
    c1_p: 'Los clientes tenían una larga lista de reportes genéricos, pero no podían combinar valores para crear los suyos.',
    c1_d: 'Primero revisé datos de Pendo y entrevisté a administradores de HR. Luego decidí llevar la IA a la creación de reportes y definí un lanzamiento MVP: una plantilla o un reporte creado con IA.',
    c1_r: '2,842 usuarios crearon un reporte (+42.3%) y construir uno pasó a ser ~30% más rápido que la configuración manual.',
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
    read4: 'Desde Bucaramanga trabajo en remoto con equipos y clientes de Estados Unidos y Latinoamérica.',
    think_eyebrow: 'Mentalidad', think_title: 'Cómo pienso',
    p1_t: 'Liderazgo', p1_d: 'Trabajo junto a product managers, ingenieros y stakeholders para alinear las decisiones de diseño con los objetivos de negocio, guiando a los equipos desde la investigación y la ideación hasta la entrega con una visión compartida.',
    p2_t: 'El diseño como estrategia', p2_d: 'El diseño no es decoración. Cuando tiene un lugar en la mesa, definiendo roadmaps y conectando las necesidades de los usuarios con los resultados de negocio, se convierte en una de las herramientas más poderosas de un equipo de producto.',
    p3_t: 'Mentalidad de crecimiento', p3_d: 'Me mantengo genuinamente curiosa. Exploro nuevas herramientas y métodos, y ahora mismo estoy profundizando en cómo la IA está transformando la forma en que investigamos, prototipamos y construimos productos. Esa curiosidad moldea directamente cómo diseño.',
    exp_eyebrow: 'Trayectoria', exp_title: 'Experiencia',
    e1_desc: 'Lidero el proceso de diseño de producto de punta a punta para aplicaciones web y móviles, desde el descubrimiento hasta la entrega. Guío a los clientes en sesiones de brainstorming y alineo las soluciones con las necesidades de los usuarios y los objetivos de negocio, iterando las propuestas con métricas de PostHog.',
    e2_desc: 'Lideré la estrategia de UX de una plataforma de nómina e impuestos, trabajando con Product Managers e ingenieros en descubrimiento, ideación y entrega. Construí y escalé el Design System, usé analítica de Pendo y entrevistas con clientes para priorizar mejoras, y aproveché herramientas de IA como Claude para acelerar la síntesis de investigación y el prototipado.',
    e3_desc: 'Lideré el equipo de UX que diseñó soluciones digitales para Bancolombia Empresas, definiendo la estrategia de UX desde la investigación hasta el handoff final. Realicé entrevistas con usuarios y pruebas de usabilidad para guiar mejoras iterativas en flujos de usuario y mockups de alta fidelidad.',
    e4_desc: 'Diseñé wireframes, flujos de usuario y prototipos de alta fidelidad para aplicaciones iOS, Android y web responsive en varios proyectos de clientes, trabajando de cerca con los equipos de desarrollo desde el concepto hasta el lanzamiento.',
    e5_role: 'Diseñadora gráfica y web', e5_desc: 'Diseñé sitios web HTML5/CSS3, plataformas de e-commerce y piezas de marketing, trabajando directamente con los clientes en branding e identidad corporativa.',
    e6_role: 'Diseñadora gráfica', e6_desc: 'Desarrollé campañas publicitarias para empresas del sector automotriz.',
    about_eyebrow: 'Sobre mí', about_title: 'Proactiva, motivada y curiosa.',
    about_text: 'Una diseñadora de producto proactiva y motivada, con fuertes habilidades de liderazgo y pasión por crear experiencias de usuario excepcionales a través de metodologías innovadoras. He trabajado con una amplia variedad de clientes, entregando productos B2B complejos en Colombia y Estados Unidos.',
    f_loc: 'Ubicación', v_loc: 'Bucaramanga, Colombia · Remoto, presencial o disponible para reubicarme', f_lang: 'Idiomas', v_lang: 'Español (nativo), inglés C1',
    f_edu: 'Educación', v_edu: 'Pregrado en Diseño Gráfico, Universidad José María Vargas (2012)',
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
  hooks.push(() => { reads.forEach(el => { const k = el.dataset.t; if (k) { el.textContent = (lang === 'es' ? ES : EN)[k]; } splitRead(el); }); updateReads(); });
  let tick = false;
  addEventListener('scroll', () => { if (tick) return; tick = true; requestAnimationFrame(() => { updateReads(); tick = false; }); }, { passive: true });
  addEventListener('resize', updateReads);
  updateReads();

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
    measure();
  }
  function measure() {
    chars.forEach(c => { c.el.style.transform = ''; });
    const hr = hero.getBoundingClientRect();
    chars.forEach(c => { const r = c.el.getBoundingClientRect(); c.bx = r.left - hr.left + r.width / 2; c.by = r.top - hr.top + r.height / 2; c.x = c.y = 0; });
    toy.w = walker.offsetWidth; toy.h = walker.offsetHeight;
  }
  function placeToy() { walker.style.transform = `translate3d(${toy.x}px,${toy.y}px,0)`; }
  function toyTarget() { const W = hero.clientWidth, H = hero.clientHeight; return W < 700 ? { x: W - toy.w - 6, y: H * 0.64 } : { x: W * 0.64, y: H * 0.47 }; }
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
      [[tcx, tcy, tr + 22, .8], [px, py, 80, .5]].forEach(([sx, sy, R, k]) => {
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
  hooks.push(() => { lines.forEach(l => { l.textContent = (lang === 'es' ? ES : EN)[l.dataset.t]; }); splitChars(); });
  addEventListener('resize', measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  heroStartLoop();

  /* ================= skills riding a wave ================= */
  (function ride() {
    const track = $('#track'); if (!track) return;
    const path = $('#trackPath'), chips = $$('.chip', track);
    let W = 0, H = 0, vis = false, raf = 0, t = 0, last = 0, widths = [];
    const yAt = x => H * 0.5 + Math.sin(x / W * Math.PI * 2 * 1.4 + t * 0.35) * H * 0.26;
    function size() { W = track.clientWidth; H = track.clientHeight; widths = chips.map(c => c.offsetWidth); }
    function draw() {
      let d = ''; for (let x = -20; x <= W + 20; x += 20) d += (x < 0 ? 'M' : 'L') + x + ' ' + yAt(x).toFixed(1) + ' ';
      path.setAttribute('d', d);
      const total = W + 260, gap = total / chips.length;
      chips.forEach((c, i) => {
        const x = ((i * gap + t * 46) % total) - 130, y = yAt(x), y2 = yAt(x + 6);
        const a = Math.atan2(y2 - y, 6) * 180 / Math.PI;
        c.style.transform = `translate(${(x - widths[i] / 2).toFixed(1)}px,${(y - 22).toFixed(1)}px) rotate(${a.toFixed(1)}deg)`;
      });
    }
    function loop(now) { const dt = Math.min(.05, (now - last) / 1000); last = now; if (!reduce) t += dt; draw(); raf = vis && !reduce ? requestAnimationFrame(loop) : 0; }
    new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis && !raf) { last = performance.now(); raf = requestAnimationFrame(loop); } }, { threshold: 0 }).observe(track);
    addEventListener('resize', () => { size(); draw(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { size(); draw(); });
    size(); draw();
  })();

  /* ================= cases: details + quiet hover bands ================= */
  $$('.toggle').forEach(btn => btn.addEventListener('click', () => {
    const cs = btn.closest('.case'); const open = cs.classList.toggle('open'); btn.setAttribute('aria-expanded', String(open));
  }));
  const hexv = v => { v = v.trim().replace('#', ''); return [0, 2, 4].map(i => parseInt(v.slice(i, i + 2), 16) / 255); };
  (function bands() {
    const VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
    const FS = `
#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif
precision mediump float;
uniform vec2 uRes, uFocus; uniform float uTime, uHover; uniform vec3 uC1, uC2, uInk, uPaper;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f);
  return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
float fw(float x){
#ifdef GL_OES_standard_derivatives
  return max(fwidth(x), 1e-4);
#else
  return 0.03;
#endif
}
void main(){
  vec2 uv = gl_FragCoord.xy / uRes; float asp = uRes.x / uRes.y;
  vec2 p = (uv - uFocus) * vec2(asp, 1.); float r = length(p), a = atan(p.y, p.x); float t = uTime * .2;
  float warp = 1.4 * sin(r * 3. - t * 2.) + 1.5 * (n(p * 1.9 + vec2(t, -t)) - .5) * (1. + uHover);
  float f = sin(a * 6. + r * (1. + 2. * uHover) * 2.4 + warp + t * 1.3);
  float aa = fw(f);
  vec3 col = mix(uC2, uC1, smoothstep(-aa, aa, f));
  col = mix(col, uPaper, (1. - smoothstep(aa * .6, aa * 1.6, abs(f - .52))) * step(0., f) * .9);
  col = mix(col, uInk, 1. - smoothstep(aa * 1.8, aa * 3.6, abs(f)));
  col += (h(gl_FragCoord.xy * .7) - .5) * .05;
  gl_FragColor = vec4(col, 1.);
}`;
    const items = [];
    $$('.case').forEach(cs => {
      const media = $('.media', cs), cv = $('canvas.bands', media);
      const gl = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
      if (!gl) return;
      gl.getExtension('OES_standard_derivatives');
      const mk = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return gl.getShaderParameter(o, gl.COMPILE_STATUS) ? o : null; };
      const vs = mk(gl.VERTEX_SHADER, VS), fs = mk(gl.FRAGMENT_SHADER, FS); if (!vs || !fs) return;
      const pr = gl.createProgram(); gl.attachShader(pr, vs); gl.attachShader(pr, fs); gl.linkProgram(pr); if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return;
      gl.useProgram(pr); gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      const U = {}; ['uRes', 'uFocus', 'uTime', 'uHover', 'uC1', 'uC2', 'uInk', 'uPaper'].forEach(k => U[k] = gl.getUniformLocation(pr, k));
      const st = getComputedStyle(cs);
      gl.uniform3fv(U.uC1, hexv(st.getPropertyValue('--c1'))); gl.uniform3fv(U.uC2, hexv(st.getPropertyValue('--c2')));
      gl.uniform3fv(U.uInk, hexv('#131312')); gl.uniform3fv(U.uPaper, hexv('#F8F7F1'));
      const it = { cs, media, cv, gl, U, on: false, hov: 0, hovT: 0, fx: .5, fy: .5, tx: .5, ty: .5, time: Math.random() * 10, stopAt: 0 };
      const size = () => { const d = Math.min(devicePixelRatio || 1, 1.5), w = Math.max(2, Math.round(media.clientWidth * d)), h = Math.max(2, Math.round(media.clientHeight * d)); if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; gl.viewport(0, 0, w, h); gl.uniform2f(U.uRes, w, h); } };
      it.size = size;
      const setT = e => { const r = media.getBoundingClientRect(); it.tx = clamp((e.clientX - r.left) / r.width, 0, 1); it.ty = 1 - clamp((e.clientY - r.top) / r.height, 0, 1); };
      const on = () => { it.on = true; it.hovT = 1; size(); media.classList.add('live'); wake(); };
      const off = () => { it.hovT = 0; it.tx = it.ty = .5; media.classList.remove('live'); it.stopAt = performance.now() + 800; wake(); };
      cs.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') on(); });
      cs.addEventListener('pointerleave', off);
      cs.addEventListener('focusin', on); cs.addEventListener('focusout', e => { if (!cs.contains(e.relatedTarget)) off(); });
      media.addEventListener('pointermove', e => { if (e.pointerType !== 'touch') setT(e); });
      items.push(it);
    });
    if (!items.length) return;
    let raf = 0, last = 0;
    function wake() { if (reduce) { items.forEach(i => { if (i.on) { i.hov = i.hovT; draw(i); } }); return; } if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); } }
    function draw(it) { const { gl, U } = it; gl.uniform1f(U.uTime, it.time); gl.uniform1f(U.uHover, it.hov); gl.uniform2f(U.uFocus, it.fx, it.fy); gl.drawArrays(gl.TRIANGLES, 0, 3); }
    function loop(now) {
      const dt = Math.min(.05, (now - last) / 1000); last = now; let busy = false;
      items.forEach(it => {
        if (!it.on) return;
        if (!it.hovT && now > it.stopAt) { it.on = false; return; }
        busy = true;
        it.hov += (it.hovT - it.hov) * (1 - Math.exp(-dt * 4)); it.fx += (it.tx - it.fx) * (1 - Math.exp(-dt * 6)); it.fy += (it.ty - it.fy) * (1 - Math.exp(-dt * 6));
        it.time += dt * (.6 + it.hov * 1.4); draw(it);
      });
      raf = busy ? requestAnimationFrame(loop) : 0;
    }
  })();

  /* ================= footer: her objects, magnetic on hover ================= */
  (function objects() {
    const grid = $('#ogrid'), tpl = $('#otpl'), cap = $('#otext'); if (!grid) return;
    const mqMobile = matchMedia('(max-width: 900px)');
    let cells = [];
    const capText = i => `${OBJ[i].n[lang === 'es' ? 1 : 0]}: ${OBJ[i].t[lang === 'es' ? 1 : 0]}`;
    const hint = () => (lang === 'es' ? ES : EN).of_hint;
    function build() {
      $$('.obj', grid).forEach(n => n.remove()); cells = [];
      const cols = mqMobile.matches ? 5 : 10, rowsEach = 2, capEl = $('.ocap', grid);
      for (let r = 0; r < rowsEach * 2; r++) for (let c = 0; c < cols; c++) {
        const idx = (c + r * 2) % OBJ.length;
        const b = tpl.content.firstElementChild.cloneNode(true); const img = $('img', b); img.src = OBJ[idx].src; b.setAttribute('aria-label', capText(idx)); b.dataset.i = idx;
        b.addEventListener('click', () => spin(cell)); b.addEventListener('focus', () => { cap.textContent = capText(idx); }); b.addEventListener('blur', () => { cap.textContent = hint(); });
        const cell = { b, img, idx, spin: 0, pull: 0 };
        b.addEventListener('click', () => { cap.textContent = capText(idx); });
        if (r < rowsEach) grid.insertBefore(b, capEl); else grid.appendChild(b);
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

  /* ================= contact ================= */
  const copyBtn = $('#copy-email'), label = $('#copy-label'), status = $('#copy-status'); let timer;
  copyBtn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(EMAIL); }
    catch (e) { const t = document.createElement('textarea'); t.value = EMAIL; t.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (err) { /* ignore */ } t.remove(); }
    const msg = lang === 'es' ? '¡Copiado!' : 'Copied!'; label.textContent = msg; status.textContent = msg;
    clearTimeout(timer); timer = setTimeout(() => { label.textContent = (lang === 'es' ? ES : EN).copy_btn; status.textContent = ''; }, 1800);
  });
  const yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();

  // initial language
  try { const q = new URLSearchParams(location.search).get('lang') || localStorage.getItem('mp-lang'); if (q === 'es') applyLang('es', false); } catch (e) { /* ignore */ }
})();
