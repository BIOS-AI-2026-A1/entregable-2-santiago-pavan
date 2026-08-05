# Plan aprobado — MCP de Playwright (Claude Code plan mode)

Registro literal de un plan propuesto por Claude Code en modo plan,
revisado y aprobado antes de ejecutarse (mecanismo `ExitPlanMode` —
ningún archivo se toca hasta que el plan se aprueba explícitamente).

* Contexto: durante la verificación del dashboard mockeado no había
  navegador headless disponible (ver `proto-verifier` en `CLAUDE.md`) —
  había que abrir el navegador real del usuario para confirmar
  visualmente.
* Decisión: registrar el MCP oficial de Playwright para tener un
  navegador real controlable desde Claude Code.
* Acción aprobada y ejecutada: `claude mcp add playwright npx
  @playwright/mcp@latest`.
* Verificación: `claude mcp list` confirmó `playwright` con estado
  `✔ Connected`.
