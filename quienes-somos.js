document.addEventListener("DOMContentLoaded", function () {
    // Cargar el encabezado desde header.html
    fetch("quienessomos.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el encabezado:", error));
});