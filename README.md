# DentApp — Website

Landing page de DentApp, software de gestión dental para clínicas pequeñas.

## Demo video
[![Ver demo 1](https://img.shields.io/badge/▶%20Ver%20Demo-Loom-625DF5?style=for-the-badge&logo=loom)](https://www.loom.com/share/e4ad9a5ad62546f8a4d8ab2ba41aca74)

> 5 minutos: MCP server, prompts y skill en uso real.

[![Ver demo 2](https://img.shields.io/badge/▶%20Ver%20Demo-Loom-625DF5?style=for-the-badge&logo=loom)](https://www.loom.com/share/5e6f27f2bb684d57953234d5b577592f)

> 5 minutos: Diagramas C4, ADR, plan y Prototipo.

## Stack
HTML5 · CSS3 (custom properties, BEM) · JS vanilla · MCP server

## Levantar el proyecto
```bash
# MCP server
cd mcp-server && npm install && node index.js

# Registrar en Claude Code
claude mcp add dentapp-design -- node ./mcp-server/index.js

# Abrir la página
# Usar Live Server en VS Code sobre src/index.html
```