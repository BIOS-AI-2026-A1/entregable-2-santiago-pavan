# prompt: pricing-cards
# cuándo: después de testimonials — convierte visitantes en usuarios
# variables: $PLAN_FREE, $PLAN_PRO, $CURRENCY

Construí la sección de precios de DentApp. Insertala después de `.testimonials`.
Estilos bajo `/* section: pricing */` en `main.css`.

Toggle mensual/anual en JS puro (`src/scripts/pricing-toggle.js`).
Anual muestra badge "2 meses gratis" sobre el precio.

Plan $PLAN_FREE
* Precio: gratis (con límites).
* 5 ítems de funciones.
* CTA outline rojo.

Plan $PLAN_PRO — destacado
* Precio en $CURRENCY.
* 8 ítems de funciones.
* CTA fondo rojo, texto blanco.
* Badge "Más elegido" esquina superior derecha.
* Border 2px `var(--color-primary)`, scale(1.02).

Nota: "Todos los planes incluyen 30 días de prueba
sin tarjeta de crédito."

Ejemplo real
$PLAN_FREE = "Básico — hasta 50 pacientes, 1 usuario, soporte email"
$PLAN_PRO = "Pro — $29 USD/mes · pacientes ilimitados, 5 usuarios,
WhatsApp, facturación, reportes"
$CURRENCY = "USD"