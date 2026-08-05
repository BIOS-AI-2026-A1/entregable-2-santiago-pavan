# 0005 — Imágenes reales autoalojadas desde Pexels

## Estado
Aceptado

## Contexto
El sitio no tenía ni una sola imagen real — solo íconos SVG inline y un
mockup CSS del hero. El usuario pidió fotografía real para que el sitio
se sienta creíble para un odontólogo real y menos genérico. El proyecto
no tiene build tools ni backend (ADR 0001), así que cualquier solución
de imágenes tiene que ser estática, sin llamadas a APIs externas en
runtime.

## Decisión
Búsqueda manual de fotos en Pexels (sin MCP ni API key), descargadas y
auto-alojadas como archivos estáticos en `src/assets/images/`:

- `hero/dentista-consultorio.jpg` — foto del hero, complementa (no
  reemplaza) el mockup CSS existente.
- `testimonials/*.jpg` — reemplazan los avatares de iniciales por fotos
  reales de las 3 personas citadas.

Todas bajo la [licencia de Pexels](https://www.pexels.com/license/)
(uso comercial libre, sin atribución obligatoria). Se documenta la
procedencia de cada una en `src/assets/images/CREDITS.md` de todos
modos, para trazabilidad — no porque la licencia lo exija.

Nota sobre las fotos de testimonios: usar fotos de stock como si fueran
las personas citadas es una convención estándar y ampliamente aceptada
en sitios de marketing — no es un engaño material sobre el producto en
sí, y no se trató como bloqueante.

## Consecuencias
- El repo crece con archivos binarios (sin Git LFS) — aceptable a esta
  escala (4 imágenes, <100 KB cada una).
- No hay pipeline de resourcing dinámico — si se necesitan más
  imágenes en el futuro, se repite el mismo proceso manual.
- Coherente con el ADR 0001: cero llamadas a servicios externos en
  runtime, todo se sirve como archivo estático propio.
