# prompt: testimonials-section
# cuándo: después de features — construye confianza antes de mostrar precios
# variables: $SECTION_TITLE, $TESTIMONIALS_LIST

Construí la sección de testimonios de DentApp. Insertala después de `.features`.
Estilos bajo `/* section: testimonials */` en `main.css`.

Contenido
* Título: $SECTION_TITLE
* Grid de 3 tarjetas con los ítems de $TESTIMONIALS_LIST.
  Cada tarjeta: avatar (iniciales en círculo), nombre, cargo, clínica y cita.

Diseño de tarjeta
* Fondo blanco, radius 12px, sombra `var(--shadow-default)`.
* Avatar: círculo 48px fondo `var(--color-primary)`, texto blanco, iniciales.
* Comillas decorativas `"` en `var(--color-primary)`, font-size 4rem,
  opacity 0.15, posicionadas arriba a la izquierda con `position: absolute`.
* Estrellas: 5 SVG inline en `var(--color-primary)`.
* Grid: 3 col desktop / 1 col mobile. Gap 24px.
* Fondo de sección: `var(--color-bg)`.

Ejemplo real
$SECTION_TITLE = "Más de 200 clínicas ya confían en DentApp"
$TESTIMONIALS_LIST =
  Dra. Ana Torres · Directora · Clínica Torres Dental ·
  "Redujimos las ausencias un 40 % desde el primer mes.
  Los recordatorios automáticos cambiaron todo."

  Dr. Marcos Ruiz · Odontólogo · Consultorio Ruiz ·
  "Antes usaba planillas de Excel. Ahora en 5 minutos
  tengo la agenda del día lista."

  Dra. Lucía Fernández · Socia · Centro Odontológico del Sur ·
  "El soporte por WhatsApp es increíble.
  Respondieron en menos de 10 minutos."
