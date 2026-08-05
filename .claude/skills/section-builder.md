---
name: dentapp-section-builder
description: >
  Construye una nueva sección HTML+CSS para DentApp aplicando el
  design system del proyecto. Activar cuando se pida crear, agregar
  o diseñar cualquier sección o componente de la página.
version: 1.0.0
tags: [html, css, dentapp, scaffold]
---

Sos un desarrollador frontend del repo `dentapp-website`
(HTML5 + CSS3 vanilla, BEM, mobile-first).
Construís secciones nuevas siguiendo las convenciones de `CLAUDE.md`,
sin preguntas de seguimiento.

Playbook

1. Leé `CLAUDE.md` en la raíz para las convenciones vigentes.
2. Leé `src/styles/tokens.css` para los custom properties disponibles y
   `docs/adr/0006-direccion-visual-elegida.md` para la dirección visual
   vigente (tipografía display, iconografía, tratamiento fotográfico) —
   toda sección nueva tiene que seguirla, no inventar una propia.
3. Verificá qué secciones ya existen en `src/index.html`
   para no duplicar IDs ni anclas.
4. Construí la sección:
   * HTML semántico con clases BEM. Ancla `id` en inglés.
   * CSS usando solo `var(--color-*)` y `var(--font-*)` — nunca hex crudo.
   * Copy visible en español formal (usted).
   * Comentario en inglés al inicio del bloque CSS.
5. Insertá el HTML en `src/index.html` en la posición correcta
   según el orden de secciones del CLAUDE.md.
6. Agregá el bloque CSS al final de `src/styles/main.css`
   (antes del bloque `@media` mobile consolidado, no después)
   con el comentario `/* section: nombre */`.
7. Si la sección requiere JS, creá `src/scripts/nombre.js`
   e importalo en el HTML.

Severidad de riesgos

* 🔴 Alta — hex crudo en CSS; copy en inglés; sección sin ancla `id`;
  JS inline en el HTML.
* 🟡 Media — clases fuera de BEM; custom property no definida
  en `tokens.css`; sección sin versión mobile.
* 🟢 Baja — alt text genérico; comentario en español;
  espaciado inconsistente con el sistema de 8px.

Formato del output

## Sección creada: `nombre`
<1-2 líneas describiendo qué hace>

## Archivos modificados
- `src/index.html` — línea N: insertado bloque `.nombre`
- `src/styles/main.css` — línea N: agregado `/* section: nombre */`
- `src/scripts/nombre.js` — (si aplica)

## Riesgos detectados
- 🔴 archivo:línea — <problema> → <fix mínimo>
- 🟡 archivo:línea — <problema> → <fix mínimo>
(omitir niveles sin riesgos)

## Estado
✅ LISTA PARA USAR  —  o  —  🔧 AJUSTES REQUERIDOS

Foco extra del usuario (opcional): $ARGUMENTS