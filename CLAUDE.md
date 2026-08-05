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
* Imágenes con alt en español (vacío si es decorativa y el texto
  adyacente ya la describe). Elementos interactivos con roles ARIA.
* Dirección visual vigente: ver
  [ADR 0006](docs/adr/0006-direccion-visual-elegida.md) — `--font-display`
  (Fraunces) para títulos grandes, `--font-heading` (Inter) para UI,
  íconos estilo Phosphor duotone (dos `<path>`, uno con `opacity="0.2"`).
* Imágenes reales en `src/assets/images/`, autoalojadas desde Pexels
  (nunca vía API en runtime) — ver
  [ADR 0005](docs/adr/0005-imagenes-autohospedadas-desde-pexels.md).
  Procedencia de cada una en `src/assets/images/CREDITS.md`.
* DentApp es un producto **uruguayo** — precios en USD, cumplimiento
  DGI/CFE (no AFIP), ciudades uruguayas en copy de ejemplo.

Estructura
src/
  index.html               # landing — hero/features/testimonials/pricing/faq/footer
  dashboard-preview.html   # maqueta mockeada del producto (sin backend)
  styles/
    tokens.css             # :root con custom properties de diseño
    main.css                # estilos por sección (BEM), compartido
  scripts/
    nav.js                 # hamburger menu mobile
    accordion.js           # accordion del FAQ (un ítem abierto a la vez)
    pricing-toggle.js      # toggle mensual/anual en precios
    dashboard-preview.js   # tabs, día de agenda, expand pacientes, facturas
  assets/
    images/
      hero/                # foto del hero
      testimonials/        # fotos de los 3 testimonios
      CREDITS.md           # procedencia de cada imagen (Pexels)
mcp-server/
  index.js                 # herramientas: get_tokens / list_sections / get_section_brief
  package.json
prompts/                   # plantillas de prompt reutilizables
docs/
  architecture/            # diagramas C4 (Mermaid), nivel 1 y 2
  adr/                     # Architecture Decision Records
  plans/                   # plan ejecutado + plan aprobado (Claude Code plan mode)
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
* `claude mcp add playwright npx @playwright/mcp@latest` — registra un
  navegador real controlable desde Claude Code (usado por `proto-verifier`
  para confirmación visual, ya no depende de que un humano mire la
  pantalla).
* `claude plugin marketplace add anthropics/claude-code` seguido de
  `claude plugin install frontend-design@claude-code-plugins` — plugin
  oficial para elegir una dirección visual deliberada y evitar estética
  genérica de IA. Decisión y dirección elegida en
  [ADR 0006](docs/adr/0006-direccion-visual-elegida.md).

Subagentes
* `arch-doc-writer` — crea y mantiene los diagramas C4 (`docs/architecture/`)
  y los ADRs (`docs/adr/`) consistentes entre sí y con el estado real del
  repo. Se usa cuando se toma una decisión de arquitectura nueva o cuando
  un diagrama queda desactualizado. Solo toca `docs/`, nunca `src/`.
* `proto-verifier` — levanta el sitio con un server estático mínimo (Node,
  ya que no hay build tools) y verifica que las páginas/scripts tocados
  respondan y contengan el markup esperado. Confirmación visual con el
  MCP de Playwright (navegación, resize mobile/desktop, screenshots y
  clicks reales) en vez de depender de que un humano mire la pantalla.
  Se usa después de tocar cualquier HTML/CSS/JS en `src/`. Deja explícito
  qué se verificó de forma mecánica y qué queda como juicio visual/subjetivo.
* Se evaluó adoptar el framework externo `superpowers` (metodología TDD +
  orquestación de subagentes) y se descartó: apunta a proyectos con
  desarrollo continuo y ramas de git, sobredimensionado para una landing
  estática de una sola página sin build tools.

Planes
Ver `docs/plans/` — un archivo por plan: el plan ejecutado del prototipo
(documentar antes de programar, aprobado paso a paso) y el plan aprobado
formalmente vía el modo plan de Claude Code (`ExitPlanMode`).