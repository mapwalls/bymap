# Portafolio de Maria Paredes (Angie) — v5 "scroll story"

Portafolio bilingüe (EN/ES) de Senior Product Designer, Bucaramanga, Colombia. Angie se comunica en español; responde en español. Público: reclutadores primero, luego clientes y equipos de diseño. Tono ~6/10 juguetón: sobrio y limpio, con su arte/juguetes como acento.

## Stack
HTML/CSS/JS vanilla, sin build. Abrir `index.html` o `npx serve .`. Fuentes: Fraunces (variable, `"SOFT" 100, "WONK" 1`) + Instrument Sans (Google Fonts).
- `index.html`: secciones `main > section[data-theme]`: hero, say, nums-sec, ride, work (4 `.case`), names, think, exp, about, contact, `footer.objfoot`.
- `css/style.css`: tokens en `:root`; temas cream/sage/ink vía `body[data-theme]`.
- `js/main.js`: i18n (EN en el DOM con `data-t`, diccionario ES en JS, persiste en localStorage / `?lang=`), lectura palabra por palabra con scroll, tema por IntersectionObserver, hero con letras que se repelen (Godzilla arrastrable + cursor), chips sobre onda SVG, shader WebGL de bandas radiales por caso (solo en hover), footer de objetos con imán/giro.

## Diseño
Paleta: ink #131312, cream #F8F7F1, sage #E4E8DA, paper #FFF, lime #D3FF35, pink #F3006D.
Dúos por caso (shader + tint): 1 #2A2BD6+#8DF2CB (#E7E8FB) · 2 #FF4FA6+#5B3FD8 (#FDE4F1) · 3 #FF8A1F+#4FA9EA (#FFECD9) · 4 #1F44E6+#D3FF35 (#EEF8C4).
Referencias (solo ideas, nunca copiar ilustraciones): Ollivere (una idea por pantalla, fondo cambiante, personaje que interactúa con el titular), Cindy Ly (un objeto/metáfora), Analogue (seriamente juguetón), Melike Turgut (capítulos), footer de objetos favoritos con hover magnético.

## Restricciones duras
- NADA del Triceratops bebé (es de su proyecto de YouTube). Ni en el portafolio ni como pista.
- Sus fotos de arte son SOLO inspiración: no renderizar, vectorizar ni reproducir.
- No copiar ilustraciones de los sitios de referencia.
- Los juguetes (`assets/*.webp`: godzilla, shiba, dilo, pinata, duck) son recortes suyos; `maria.webp` es su retrato.
- Respetar `prefers-reduced-motion`.

## Contenido / enlaces
Casos enlazan a https://www.bymap.co/case-N.html (imágenes desde bymap.co/img). Contacto: paredesmaria.co@gmail.com, LinkedIn /in/mapwalls/, Behance /mapwalls.

## Preguntas abiertas (sin responder)
1. ¿Mantener la fila Singular (2026) en experiencia?
2. Caso 2: título "70%" vs copy "5→2 días"; el texto del caso 3 dice "70% menos solicitudes de soporte". Unificar.
3. "8+ años" en el sitio vs ~9 años real.
4. Tipografía Fraunces nunca se verificó visualmente en mi sandbox; revisar en navegador real.

## Próximos pasos candidatos
Ajustes tras verla en navegador real (tipografía), más juguetes cruzando la página, más pictogramas de línea originales (flores, ondas, espirales), personalidad por caso, y revisar mobile (390px) tras cada cambio.
