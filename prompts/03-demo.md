# prompt: demo-section
# ⚠️ OBSOLETO — superado por ADR 0004: la "demo" terminó siendo la
# página separada `dashboard-preview.html` (dashboard mockeado
# interactivo), no una sección in-page con video. Esta sección nunca
# se construyó dentro de `index.html` y no se va a construir. Se deja
# el archivo como historial, no como spec vigente.
# cuándo: después de features — muestra el producto en acción
# variables: $SECTION_TITLE, $BENEFITS, $CTA_LABEL

Construí la sección demo de DentApp. Insertala después de `.features`.
Estilos bajo `/* section: demo */` en `main.css`.

Layout dos columnas (55/45), colapsa a una en mobile (video primero).

Columna izquierda — video
* Contenedor ratio 16:9, border 2px `var(--color-primary)`, radius 12px.
* Overlay con botón play centrado (círculo SVG + triángulo).
* Caption: "Demo de 2 minutos — sin registro requerido."

Columna derecha — beneficios
* Título: $SECTION_TITLE
* Lista $BENEFITS con checkmark SVG en `var(--color-primary)` por ítem.
* CTA full-width al pie: $CTA_LABEL, fondo `var(--color-primary)`.

Ejemplo real
$SECTION_TITLE = "En menos de 24 horas, su clínica estará funcionando."
$BENEFITS =
  Configuración guiada paso a paso
  Importación de pacientes existentes
  Soporte por WhatsApp incluido
  Sin contrato de permanencia
$CTA_LABEL = "Solicitar acceso gratuito"