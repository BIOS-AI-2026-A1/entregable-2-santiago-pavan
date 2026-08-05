# 0006 — Dirección visual elegida: confianza clínica editorial

## Estado
Aceptado

## Contexto
El sitio original (hero, features, testimonials) usa el patrón visual
por defecto de cualquier landing generada rápido: un solo tono de rojo,
tipografía Inter para todo, grid simétrico de tarjetas blancas
idénticas, iconos outline genéricos estilo Feather/Heroicons, sin
fotografía real. El usuario pidió explícitamente que el sitio se sienta
menos "creado por IA" y más original, además de creíble para un
odontólogo real evaluando software de gestión — no alcanza con cambiar
un color, hace falta una dirección deliberada que se aplique de punta a
punta (incluyendo lo ya construido, no solo las secciones nuevas).

Se evaluó usar el plugin oficial `frontend-design` de Anthropic
(instalado en este repo — `claude plugin install
frontend-design@claude-code-plugins`) para guiar esta elección; quedó
instalado pero no se pudo invocar como skill dentro de la misma sesión
en la que se instaló (Claude Code no recarga skills nuevas a mitad de
conversación). Esta decisión aplica manualmente el mismo criterio que
ese plugin promueve: elegir una dirección estética concreta y deliberada
antes de tocar código, en vez de dejar que cada sección se diseñe sola.

## Decisión
Dirección elegida: **confianza clínica editorial**. Concretamente:

- **Tipografía**: se agrega `--font-display` (Fraunces, serif con
  carácter) para titulares grandes (hero, títulos de sección) — rompe el
  "todo Inter" genérico y da un aire editorial/premium. `--font-heading`
  (Inter) se mantiene para UI compacta (nav, botones, títulos de
  tarjeta). `--font-body` (system-ui) sin cambios.
- **Color**: el rojo de marca (`--color-primary`) se mantiene — ya es
  distintivo, no es el violeta genérico típico de IA. Se agrega
  `--color-secondary` (verde azulado clínico oscuro) como acento
  secundario deliberado, para no depender de un solo color en toda la
  página. El fondo `--color-bg` pasa de gris frío plano a un tono papel
  cálido — menos "gris de sistema de diseño por defecto".
- **Fotografía real** (ver ADR 0005) tratada de forma consistente,
  complementando en vez de reemplazar los elementos CSS que ya
  funcionan (ej. el mockup del hero).
- **Iconografía**: se reemplazan los SVG outline genéricos por Phosphor
  Icons en variante duotone — más peso visual, menos "grid de iconos
  de plantilla".
- **Aplicación retroactiva**: esta dirección se aplica también a
  hero/features/testimonials ya construidos, no solo a pricing/faq/
  footer — una página mitad rediseñada se ve peor que una completamente
  genérica.

## Consecuencias
- Todo cambio de tipografía/color pasa por tokens nuevos en
  `tokens.css` — nunca hex/font-family crudo en `main.css` (ADR 0002
  se mantiene intacto).
- Cargar una tipografía adicional (Fraunces vía Google Fonts) agrega un
  segundo `<link>` de fuente externa — ya existía una dependencia
  equivalente para Inter, no es una dependencia nueva en tipo, solo en
  cantidad.
- El reemplazo de iconos y el restyle retroactivo tocan HTML/CSS ya
  existente y probado — el trabajo de verificación (Fase 5) tiene que
  volver a confirmar visualmente hero/features/testimonials, no solo
  las secciones nuevas.
- Esta ADR documenta la dirección ya elegida, no una intención futura —
  se escribe recién ahora que la decisión es concreta, para no repetir
  el patrón de "documentar algo aspiracional" que este proyecto ya
  corrigió dos veces (C4 Nivel 2, `mcp-server/index.js`).
