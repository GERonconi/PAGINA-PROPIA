document.addEventListener("DOMContentLoaded", function () {
    // Cargar el encabezado desde header.html
    fetch("quienessomos.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el encabezado:", error));
});


//era el main.js
function autoExpand(field) {
    field.style.height = 'auto';  // Reseteamos la altura para calcular el nuevo valor
    field.style.height = (field.scrollHeight) + 'px';  // Ajustamos la altura según el contenido
  }