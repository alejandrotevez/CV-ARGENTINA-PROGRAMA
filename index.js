const articulo = document.querySelector("#contenido")
const button = document.querySelector("#boton")

button.addEventListener("click", boton)

function mostrarMas() {
    if (articulo.classname ==="abierto") {
        articulo.classname = "";
        button.textContent = "Mostar mas"
    }    else {
        articulo.classname = "abierto";
        button.textContent = "mostrar menos"
    }
}