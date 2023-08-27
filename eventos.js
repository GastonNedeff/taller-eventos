function mostrarAlertaBoton() {
    alert("¡Hola!");
}

const botonSaludar = document.getElementById("saludarButton");

botonSaludar.addEventListener("click", mostrarAlertaBoton);

function mostrarAlertaDiv(event) {
    if (event.target === divBotonContainer) {
        alert("¡Hola! Soy el div");
    }
}

const divBotonContainer = document.querySelector(".boton-container");

divBotonContainer.addEventListener("click", mostrarAlertaDiv);