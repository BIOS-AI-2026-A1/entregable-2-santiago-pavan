dentapp — convenciones
Landing page de DentApp, software de gestión dental para clínicas pequeñas.
Construida con HTML5 + CSS3 + JS vanilla. Sin frameworks ni build tools.

Stack
* HTML5 semántico. Landing en `src/index.html`, vista previa mockeada
  del producto en `src/dashboard-preview.html`.
* CSS con custom properties. Tokens en `src/styles/tokens.css`,
  estilos en `src/styles/main.css` (compartido entre ambas páginas).
* JS vanilla en `src/scripts/`. Sin dependencias externas.
* MCP server en `mcp-server/index.js` (design tokens + scaffolding).

Convenciones
* Todos los tokens de color/tipografía viven en `tokens.css`.
  Nunca hex crudo en `main.css`.
* Clases BEM: `.block__element--modifier`.
  Identificadores en inglés, copy visible en español formal (usted).
* Cada sección tiene su bloque en `main.css`
  con comentario `/* section: nombre */`.
* Sin jQuery, sin inline styles, sin `!important`
  salvo override de terceros.
* Imágenes con alt en español.
  Elementos interactivos con roles ARIA.

Estructura
src/
  index.html               # landing — todas las secciones
  dashboard-preview.html   # maqueta mockeada del producto (sin backend)
  styles/
    tokens.css             # :root con custom properties de diseño
    main.css                # estilos por sección (BEM), compartido
  scripts/
    nav.js                 # hamburger menu mobile
    accordion.js           # lógica del FAQ accordion
    pricing-toggle.js      # toggle mensual/anual en precios
    dashboard-preview.js   # tabs + toggle cosmético del dashboard mockeado
mcp-server/
  index.js                 # herramientas: get_tokens / list_sections / get_section_brief
  package.json
prompts/                   # plantillas de prompt reutilizables
docs/
  architecture/            # diagramas C4 (Mermaid), nivel 1 y 2
  adr/                     # Architecture Decision Records
.claude/
  skills/
    section-builder.md
  agents/
    arch-doc-writer.md     # mantiene docs/architecture y docs/adr
    proto-verifier.md      # verifica cambios de frontend antes de darlos por hechos

Comandos
* Abrir `src/index.html` en browser o con Live Server (VS Code).
* `cd mcp-server && npm install && node index.js` — levanta el MCP.
* `claude mcp add dentapp-design -- node ./mcp-server/index.js`
  — registra el MCP en Claude Code.

Subagentes
* `arch-doc-writer` — crea y mantiene los diagramas C4 (`docs/architecture/`)
  y los ADRs (`docs/adr/`) consistentes entre sí y con el estado real del
  repo. Se usa cuando se toma una decisión de arquitectura nueva o cuando
  un diagrama queda desactualizado. Solo toca `docs/`, nunca `src/`.
* `proto-verifier` — levanta el sitio con un server estático mínimo (Node,
  ya que no hay build tools) y verifica que las páginas/scripts tocados
  respondan y contengan el markup esperado, antes de abrir el resultado
  en el navegador para confirmación visual. Se usa después de tocar
  cualquier HTML/CSS/JS en `src/`. Deja explícito qué se verificó de forma
  mecánica y qué falta confirmar a simple vista — este entorno no tiene
  navegador headless.
* Se evaluó adoptar el framework externo `superpowers` (metodología TDD +
  orquestación de subagentes) y se descartó: apunta a proyectos con
  desarrollo continuo y ramas de git, sobredimensionado para una landing
  estática de una sola página sin build tools.

Plan ejecutado — Prototipo con Arquitectura Documentada
Propuesto en orden (documentar antes de programar) y aprobado paso a
paso antes de ejecutar cada fase — no se escribió código hasta tener
C4 Nivel 1, Nivel 2 y el ADR ya definidos.
1. C4 Nivel 1 (Contexto) — `docs/architecture/c4-nivel1-contexto.md`.
   Visitante + landing como único sistema, sin backend ni sistemas
   externos; MCP server excluido por ser tooling de desarrollo.
2. C4 Nivel 2 (Contenedores) — `docs/architecture/c4-nivel2-contenedores.md`.
   Página principal, dashboard mockeado, sistema de estilos compartido y
   capa de scripts, documentados antes de escribir el código.
3. ADR de la decisión más importante —
   `docs/adr/0004-dashboard-mockeado-sin-backend.md`. El dashboard es una
   maqueta estática con datos hardcodeados, sin fetch/localStorage/backend,
   para no desviar el alcance del repo hacia construir el producto real.
4. Prototipo funcional — `src/dashboard-preview.html` +
   `src/scripts/dashboard-preview.js`: tabs (Agenda/Pacientes/Facturación)
   y un toggle cosmético de "completado", enlazado desde el nav y el CTA
   "Ver cómo funciona" de la landing. Verificado sirviendo el sitio
   localmente (curl + `node --check`) y a simple vista en el navegador.
5. Subagentes — `arch-doc-writer` y `proto-verifier` creados en
   `.claude/agents/` para las dos tareas recurrentes que este mismo plan
   requirió: mantener la documentación de arquitectura y verificar los
   cambios de frontend.

Plan aprobado (Claude Code plan mode)
Además del plan de arriba, este es el registro literal de un plan
propuesto por Claude Code en modo plan, revisado y aprobado antes de
ejecutarse (mecanismo `ExitPlanMode` — ningún archivo se toca hasta que
el plan se aprueba explícitamente).

* Contexto: durante la verificación del dashboard mockeado no había
  navegador headless disponible (ver `proto-verifier` arriba) — había
  que abrir el navegador real del usuario para confirmar visualmente.
* Decisión: registrar el MCP oficial de Playwright para tener un
  navegador real controlable desde Claude Code.
* Acción aprobada y ejecutada: `claude mcp add playwright npx
  @playwright/mcp@latest`.
* Verificación: `claude mcp list` confirmó `playwright` con estado
  `✔ Connected`.