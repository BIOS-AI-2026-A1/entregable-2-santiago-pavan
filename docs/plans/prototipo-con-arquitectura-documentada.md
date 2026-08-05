# Plan ejecutado — Prototipo con Arquitectura Documentada

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
