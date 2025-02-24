¿Quién soy?
[Tu nombre o nombre de la empresa] es un emprendimiento dedicado a la reparación y mantenimiento de computadoras, surgido con el objetivo de ofrecer soluciones rápidas, efectivas y personalizadas a cada cliente. Aunque llevo menos de un año en este camino, mi pasión por la tecnología y el compromiso con la calidad me han impulsado a brindar un servicio confiable y accesible para todos.

Como profesional independiente, me enfoco en ofrecer atención directa y cercana, asegurándome de que cada equipo que llega a mis manos reciba el cuidado que necesita. Ya sea para una reparación urgente, optimización del rendimiento o mantenimiento preventivo, estoy aquí para garantizar que tu PC funcione de la mejor manera posible.

¿Por qué elegirnos?
Atención 100% personalizada: Al ser una empresa pequeña, puedo darte el tiempo y la atención que tu equipo necesita, sin intermediarios.
Compromiso y dedicación: Cada trabajo es importante, y trato cada dispositivo con el mismo nivel de seriedad, sin importar su tamaño.
Precios accesibles: Ofrezco soluciones de calidad a precios justos, sin costos ocultos.
Rapidez: Sé lo crucial que es para ti tener tu equipo de vuelta lo antes posible. Trabajo de manera eficiente para reducir tiempos de espera.
En [nombre de la empresa], me esfuerzo por brindarte un servicio cercano y profesional, con el objetivo de que siempre cuentes con un equipo en perfecto estado para tus actividades diarias. ¡Permíteme ser tu aliado en el cuidado de tus dispositivos!






TEXTO RESPONSIVO
Para lograr que el texto "GER Soluciones Informáticas" se justifique (es decir, se mantenga en la misma línea) en pantallas de menos de 481px de ancho, puedes utilizar media queries de CSS y hacer algunos ajustes en el estilo.

Lo que necesitamos hacer es asegurarnos de que el texto no se desborde en dispositivos más pequeños, y que se ajuste de forma fluida dentro del espacio disponible.

Aquí tienes una posible solución utilizando un media query para manejar el cambio en pantallas pequeñas:

1. Modificar tu código HTML (en la etiqueta <a> que contiene el nombre de la empresa):
Asegúrate de que no haya un salto de línea innecesario o espacio que cause que el texto se desborde.

html
Copiar
<a class="navbar-brand ms-3 fs-2 text-darkorchid font-weight-bold" href="#">GER Soluciones Informáticas</a>
2. Agregar un media query a tu archivo CSS:
Añadir el siguiente CSS te ayudará a mantener el texto en una sola línea y justificarlo en dispositivos con un ancho de pantalla menor a 481px. Usamos white-space: nowrap; para evitar que el texto se divida en varias líneas.

css
Copiar
/* Ajuste para pantallas más pequeñas */
@media (max-width: 481px) {
    .navbar-brand {
        white-space: nowrap; /* Evita que el texto se divida en varias líneas */
        font-size: 1.5rem; /* Ajusta el tamaño de la fuente si es necesario */
    }

    .container-fluid {
        display: flex;
        justify-content: space-between; /* Asegura que el logo y el texto estén bien alineados */
        align-items: center;
    }
}
Explicación:
@media (max-width: 481px): Este bloque de CSS se aplica solo en pantallas de 481px o menos (móviles y pantallas pequeñas).
white-space: nowrap;: Esta propiedad evita que el texto se divida en múltiples líneas, manteniéndolo en una sola línea.
font-size: 1.5rem;: Puedes ajustar el tamaño de la fuente para que se vea bien en pantallas pequeñas sin que se desborde o quede demasiado grande.
justify-content: space-between;: Asegura que el logo y el nombre de la empresa estén alineados correctamente.
¿Qué hará este código?
En pantallas pequeñas (menos de 481px de ancho), el nombre "GER Soluciones Informáticas" se mantendrá en una sola línea.
El logo y el nombre de la empresa se distribuirán de manera que se vean bien en pantallas estrechas.
Este código debería resolver el problema y mantener todo en la misma línea. Si necesitas más ajustes o tienes otra pregunta, ¡avísame!


Para mantener un orden en tu proyecto y seguir las convenciones de nomenclatura, es recomendable utilizar un nombre de archivo CSS que sea claro, sencillo y fácil de identificar. A continuación, te explico cómo llamarlo y cómo vincularlo correctamente con tu archivo HTML.

### **1. Nomenclatura para el archivo CSS:**

La nomenclatura para el archivo CSS puede seguir algunas convenciones comunes, dependiendo de tus preferencias o las del equipo. Algunas opciones populares son:

- **style.css**: Nombre genérico, claro, que indica que es el archivo de estilos.
- **main.css**: Si es el archivo principal de estilos.
- **styles.css**: También es una opción muy común.
- **[nombre_del_proyecto].css**: Si prefieres un nombre más relacionado con el proyecto, como por ejemplo `ger-soluciones.css`.

### **2. Ubicación del archivo CSS:**
Es habitual colocar el archivo CSS en una carpeta llamada `css` dentro del proyecto para mantener todo organizado.

La estructura de tu proyecto podría quedar de esta manera:
```
/mi-proyecto
    /css
        style.css
    /images
        PClogo.png
    index.html
```

### **3. Vincular el archivo CSS con tu archivo HTML:**

Para vincular el archivo CSS con tu página HTML, debes usar la etiqueta `<link>` dentro del `<head>` de tu documento HTML. Aquí te muestro cómo hacerlo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GER Soluciones Informáticas</title>
    <!-- Vincula tu archivo CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg" style="background-color: rgb(228, 225, 231);">
        <div class="container-fluid">
            <img src="image/PClogo.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top">
            <a class="navbar-brand ms-3 fs-2 text-darkorchid font-weight-bold" href="#">GER Soluciones Informáticas</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link active" href="#">Quienes Somos</a></li>
                    <li class="nav-item"><a class="nav-link" href="servicios.html">Servicios</a></li>
                    <li class="nav-item"><a class="nav-link" href="contacto.html">Contáctanos!</a></li>
                </ul>
                <span class="navbar-text" style="color: magenta; font-weight: bolder; font-style: italic;">
                    <p class="fs-4 mt-2">¡Tenemos todo lo que tu PC necesita!</p>
                </span>
            </div>
        </div>
    </nav>
</body>
</html>
```

### **Explicación del código:**
- **`<link rel="stylesheet" href="css/style.css">`**: Esta línea es la clave para vincular tu archivo CSS con el HTML. El `href` debe apuntar al archivo CSS que deseas usar. En este caso, el archivo CSS se encuentra dentro de la carpeta `css` y se llama `style.css`.
- **Ubicación del archivo CSS**: Si el archivo CSS estuviera en otro directorio o tuviera otro nombre, solo necesitarías cambiar el valor de `href` con la ruta correcta.

### **4. Estilo para Media Query (ejemplo en el archivo CSS)**:
En el archivo `css/style.css` (o el nombre que elijas), agrega el código CSS para que se apliquen los cambios en dispositivos con un ancho menor a 481px.

```css
/* Ajuste para pantallas más pequeñas */
@media (max-width: 481px) {
    .navbar-brand {
        white-space: nowrap; /* Evita que el texto se divida en varias líneas */
        font-size: 1.5rem; /* Ajusta el tamaño de la fuente si es necesario */
    }

    .container-fluid {
        display: flex;
        justify-content: space-between; /* Asegura que el logo y el texto estén bien alineados */
        align-items: center;
    }
}
```

### Resumen:
- **Nombra tu archivo CSS** de forma clara, como `style.css` o `main.css`, y colócalo en una carpeta como `css`.
- **Vincula el archivo CSS en el `<head>` de tu HTML** usando la etiqueta `<link>`.
- **Usa media queries** dentro del archivo CSS para aplicar estilos específicos según el tamaño de la pantalla.

Si necesitas más ayuda con la estructura o algún detalle adicional, ¡avísame!






QUIENES Somos


    <div class=" container mt-5">
        <!-- CONTENIDO CARDS -->
        <div class="content-section">

            <div class="card ms-5 mt-5" style="width: 40rem;">
                <img src="image/acthard.jpg" class="card-img-top" alt="Actualización de Hardware">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>

            <div class="card ms-auto me-5 mt-5" style="width: 40rem;">
                <img src="image/mantpc.jpg" class="card-img-top" alt="Actualización de Hardware">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div class="card ms-5 mt-5" style="width: 40rem;">
                <img src="image/sistop.png" class="card-img-top" alt="Actualización de Hardware">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

        </div>
    </div>