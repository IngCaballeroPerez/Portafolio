# Portafolio · Jose Luis

Sitio estático en HTML, CSS y JavaScript. Abre `index.html` o publica la raíz del repositorio con GitHub Pages. Sin compilación, autenticación, backend ni base de datos.

## Archivos

- `index.html`: portada, presentación, pilares, laboratorio interactivo, proyectos, contacto y footer.
- `experiencia.html`: trayectoria y formación; sustituye los marcadores por datos reales.
- `404.html`: página de error independiente.
- `Portafolio.html`: redirección de compatibilidad a `index.html`.
- `css/styles.css`: única hoja del portafolio, organizada en secciones comentadas.
- `js/app.js`: traducciones originales, datos, navegación, animaciones, carrusel y explorador de pilares.
- `assets/code-pattern.svg`: textura de código repetida en toda la sección de pilares.
- `assets/pillars/01.svg` a `10.svg`: ilustraciones conceptuales originales; no son capturas de proyectos.
- `verify.cjs`: pruebas de regresión con Node, sin dependencias adicionales.

Se conservan LICENSE y las imágenes existentes del repositorio. La página 404 mantiene sus estilos y script internos.

## Personalización

El contenido de los pilares y el laboratorio se edita directamente en HTML. Cada botón `data-pillar` corresponde a una ilustración numerada. El título y la descripción de la vista ilustrada se toman del mismo pilar, evitando duplicar textos.

Edita proyectos y certificaciones en `DATA` dentro de `js/app.js`; las traducciones están al principio. La presentación, experiencia, correo y proyectos aún contienen marcadores por completar. No se han inventado puestos, resultados ni certificaciones. Los nuevos bloques editoriales y el laboratorio están en español; el selector conserva las traducciones de las otras secciones.

El acento `--accent-h` controla superficies, portada, iluminación, títulos y detalles en ambos temas. La tarjeta central combina fondo opaco, luces suaves y trama de puntos. La portada extiende sus partículas por todo el fondo; conserva una composición estática si se solicita movimiento reducido.

## Interacciones

- **Pilares:** clic, Intro o Espacio en la flecha abre la vista ilustrada. El encabezado se retira y la lista pasa a la izquierda. El panel de imagen queda a la derecha. «Volver a mis pilares» o Escape restaura la vista y el foco. En móvil sólo se muestra el pilar seleccionado y su imagen hasta volver. Sin JavaScript se conserva todo el texto y se ocultan los botones sin función.
- **Laboratorio:** sustituye la sección de IA. Fragmentos breves a la izquierda y demostraciones reales a la derecha. El switch es un checkbox nativo. En esta versión se solicita activación sólo con clic o toque; JavaScript evita Intro/Espacio. No cambia ninguna configuración del sitio. Las etiquetas aparecen al hacer clic, se cierran con otro clic, un clic fuera o Escape. Son controles de demostración, no enlaces personales.
- **Proyectos:** Clic o toque abre detalles; el botón de destacar sigue cambiando el proyecto principal.
- **Certificaciones:** arrastra; tras soltar, la animación espera tres segundos y continúa. Respeta movimiento reducido, foco de teclado, diálogos y visibilidad.
- **Contacto:** abre un borrador en la aplicación de correo únicamente después de configurar un correo real. No envía ni almacena mensajes.

## Créditos de las demostraciones

El switch adapta el ejemplo de Uiverse.io por **santhosh_2608**, proporcionado por el usuario. Se conservan la moneda, el cambio de expresión y los estados de color; se conserva foco visible. Los tooltips adaptan el segundo ejemplo aportado por el usuario, con estilos limitados al laboratorio. El código mostrado es un fragmento explicativo, no el componente completo; su implementación está en index.html y styles.css.

## Verificación

Ejecuta `node verify.cjs` y `node --check js/app.js`. Las pruebas ejecutan las funciones reales en un entorno simulado y verifican proyectos, carrusel, aparición de secciones y selección/cierre de pilares con restauración del foco. No equivalen a una prueba de navegador.

También se revisan rutas locales, anclas, IDs únicos y estructura XML de las once ilustraciones/texturas SVG. Para revisión visual: alternar tema y acento, revisar la J del nombre, abrir varios pilares, volver con Escape, probar switch y tooltips con clic y comprobar que Tab/Intro/Espacio no los activen y comprobar móvil/zoom.

## Pulido visual

Cabecera transparente sobre la portada y cristal al desplazarse. Presentación alineada abajo a la izquierda de su columna. Los pilares comparten una pista que se desplaza como un bloque; en pantallas pequeñas pasan a una vista apilada. El footer coloca Explorar y Conectar a la izquierda. Las certificaciones adaptan la estética en capas de CodePen Card (Uiverse.io, Praashoo7), sin contadores ni acciones ficticias; su control de ampliación abre la credencial.
