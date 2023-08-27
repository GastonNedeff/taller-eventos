function mostrarAlerta() {
    alert("¡Hola!");
}

function mostrarAlertaDiv() {
    alert("¡Hola! Soy el div");
}


const divBotonContainer = document.querySelector(".boton-container");


divBotonContainer.addEventListener("click", mostrarAlertaDiv);