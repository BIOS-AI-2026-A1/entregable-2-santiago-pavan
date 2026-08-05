# Plan ejecutado — Landing completa y dirección visual propia

Pedido: llevar el proyecto a "modo más serio" — terminar la landing,
hacer la demo más robusta, y que el sitio se vea menos "creado por IA".
Documentado antes de programar (plan mode de Claude Code), ejecutado en
6 fases en orden.

1. **Drift-fixes previos** — corregido copy que asumía Argentina (AFIP,
   ciudades argentinas) cuando DentApp es un producto uruguayo (DGI/CFE,
   ciudades uruguayas); sincronizados `docs/architecture/c4-nivel2-contenedores.md`,
   `mcp-server/index.js` y los prompts que referenciaban una sección
   `demo` fantasma nunca construida.
2. **Dirección visual** — instalado el plugin oficial `frontend-design`;
   elegida y documentada en
   [ADR 0006](../adr/0006-direccion-visual-elegida.md): tipografía
   Fraunces para títulos, verde azulado como color secundario, íconos
   Phosphor duotone, fondo cálido. Aplicada retroactivamente a
   hero/features/testimonials, no solo a las secciones nuevas.
3. **Pricing, FAQ, footer** — construidos en `index.html` siguiendo
   `prompts/05-pricing.md` y `06-faq-footer.md` (con moneda en USD y
   colores de footer vía tokens nuevos, no los hex crudos del prompt
   original). Implementados `pricing-toggle.js` y `accordion.js`, antes
   archivos vacíos.
4. **Dashboard enriquecido** — `dashboard-preview.html` suma selector de
   día en Agenda, expand/colapso en Pacientes, y lista de facturas
   recientes en Facturación. Sigue el [ADR 0004](../adr/0004-dashboard-mockeado-sin-backend.md)
   al pie de la letra: todo hardcodeado, cero backend.
5. **Imágenes reales** — 4 fotos de Pexels autoalojadas en
   `src/assets/images/`, ver
   [ADR 0005](../adr/0005-imagenes-autohospedadas-desde-pexels.md).
   Elegidas mirando cada candidata directamente (no confiando en
   descripciones de texto de terceros), buscando evitar el cliché de
   foto de stock genérica.
6. **Consistencia y verificación** — `arch-doc-writer` releyó C4 Nivel 2
   y los ADRs 0005/0006 contra el código final. Cada fase se verificó
   con `proto-verifier` (server local + `node --check` + curl/grep) y
   con el MCP de Playwright (screenshots e interacciones reales en
   desktop y mobile) antes de pasar a la siguiente — incluyendo un bug
   real detectado y corregido en el momento (`.dashboard-preview__list`
   pisaba el `display:none` del atributo `hidden`, mostrando los 3 días
   de agenda superpuestos).
