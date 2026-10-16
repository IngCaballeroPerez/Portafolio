# Portafolio · Jose Luis C.

Clona o descarga este repositorio y abre `index.html`. Sitio estático: HTML, CSS y JavaScript, sin instalación, backend, autenticación ni base de datos.

## Archivos y edición

- `index.html`: portada, sobre mí, diez pilares, proyectos, contacto y footer. Edita los pilares y los enlaces de **Repositorios favoritos** directamente aquí.
- `experiencia.html`: página independiente con trabajo y formación. Sustituye los marcadores entre corchetes por datos reales.
- `css/styles.css`: única hoja de estilos del portafolio y Experiencia; incluye base, diseño editorial, navegación centrada y ajustes adaptables.
- `js/app.js`: traducciones originales ES/EN/ZH, datos de proyectos y certificados, navegación y comportamiento. Busca `DATOS` para editar proyectos y certificaciones. Los textos traducidos están en la primera sección.
- `404.html`: página de error independiente; conserva sus estilos y script internos, con enlaces reparados y sin marca.
- `verify.cjs`: comprobaciones de comportamiento sin dependencias; ejecutar con `node verify.cjs`.

## Cambios de esta entrega

Portada sin redes ni botones, con el nombre Jose Luis C.; sin marca, icono ni nombre en la barra. La navegación queda centrada y los controles a la derecha. Mis pilares aparece a la izquierda y los diez pilares a la derecha, apilados en móvil. Los textos nuevos de pilares, footer y Experiencia están en español; el selector mantiene las traducciones de las demás secciones originales.

Experiencia tiene su propia página, enlazada desde el footer. El footer tiene Contactos y Repositorios favoritos, con Qwen Code como primer enlace. No se atribuye ese repositorio como proyecto propio.

Tab recorre las tarjetas de proyectos. **Sólo Intro abre los detalles**; Espacio y clic no los abren. El botón de destacar sigue cambiando el proyecto principal. Esta decisión implica que abrir detalles requiere teclado, también en dispositivos táctiles.

El carrusel no tiene botones de anterior, siguiente o pausa. Al soltar un arrastre espera tres segundos y continúa aunque el puntero siga encima. Una nueva interacción reinicia el plazo. Pausa cuando recibe foco mediante teclado, hay un diálogo abierto, sale de pantalla o la pestaña queda oculta. Respeta la preferencia del sistema de movimiento reducido.

La tarjeta central recorta sus fondos con el mismo radio en las cuatro esquinas. Usa overflow: clip para conservar el título fijo de los pilares; en impresión se desactiva el recorte. La medición de las capas ahora está integrada en js/app.js.

## Datos pendientes

Completa presentación, foto, correo, proyectos, experiencia, certificaciones e imágenes. No se han inventado puestos ni logros. Los enlaces de repositorios de ejemplo se han vaciado: añade URLs reales en `DATA.projects` dentro de `js/app.js`.

El formulario abre un borrador en tu aplicación de correo después de configurar un correo real en `profile.email` (por idioma). No envía mensajes ni almacena datos; mientras exista el marcador, no abre un borrador. El inicio ya no incluye descarga de CV.

## Publicación

Sube el contenido completo de la carpeta a un alojamiento de archivos estáticos, conservando rutas y nombres. Los archivos están versionados en GitHub; no se ha configurado un despliegue del sitio. Las fuentes externas originales requieren conexión, con fuentes del sistema como respaldo. El repositorio conserva LICENSE (Apache-2.0) y los avisos del código original.

## Verificación y límites

Se verificaron sintaxis JavaScript, identificadores, rutas y anclas locales, diez pilares, ausencia de controles retirados y eventos de proyectos/carrusel mediante `verify.cjs`, que ejecuta las funciones reales en un entorno simulado con temporizadores controlados.

No se ha verificado visualmente en navegador: el navegador local no estaba instalado y su descarga falló. Quedan pendientes las comprobaciones visuales de escritorio/móvil, zoom, curvatura inferior y desplazamiento real. No confundir las pruebas de lógica con una prueba en navegador.

## Limpieza de navegación y código

Se eliminaron marcas y SVG sin uso, estilos de habilidades interactivas, pestañas antiguas de experiencia e iconos sociales sin referencias. Los dos CSS principales se unificaron en styles.css y la medición de capas forma parte de app.js. Se corrigieron los enlaces a Experiencia y LICENSE de la página 404. Las hojas externas de fuentes del original no son archivos propios duplicados y se conservan.

En esta revisión también se comprobó la sintaxis de los scripts internos de 404, las anclas entre páginas y la existencia de todos los destinos locales de las tres páginas HTML.

## Compatibilidad del repositorio

`Portafolio.html` redirige a `index.html`. Los scripts antiguos `js/main.js` y `js/i18n.js` se sustituyen por `js/app.js`. Se conservan LICENSE y los recursos existentes de assets/.


## Actualización: presentación e IA

La portada muestra Jose Luis y un titular sobre arquitectura, experiencia de usuario y mantenibilidad, sobre un fondo gris azulado. Se eliminaron el saludo, estado de disponibilidad, párrafo marcador y rótulos con // de las secciones.

La navegación conserva el desplazamiento suave y usa la misma transición de aparición que el scroll, también al volver a una sección. Se eliminaron fondos rectangulares de los enlaces sin retirar el foco visible de teclado. La posición de destino usa la altura real de la barra, evitando el cálculo fijo de rem a píxeles.

Mis pilares incorpora código decorativo desenfocado, oculto para lectores de pantalla. El zoom y sombra al pasar el cursor son suaves y respetan movimiento reducido. Las tecnologías aparecen como texto monoespaciado sin un rótulo repetido.

La sección IA diferencia uso de ChatGPT/Codex, desarrollo propio Knight y referencia externa Qwen Code. El contenido de Knight se contrastó con el README de su repositorio; no se afirma haber entrenado modelos ni se inventan métricas. Para ampliarla, confirmar otras herramientas usadas y aportar más repositorios propios.

Referencias consultadas para la dirección del diseño: brittanychiang.com (presentación y proyectos), joshwcomeau.com (contenido técnico y microinteracciones), bruno-simon.com (experiencia interactiva). No se copiaron sus diseños ni activos.
