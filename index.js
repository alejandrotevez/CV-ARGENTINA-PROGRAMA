const articulo = document.querySelector("#contenido")
const button = document.querySelector("#leer-mas")

button.addEventListener("click", leerMas)

function leerMas() {
    if (articulo.classname ==="abierto") {
        //leer menos
        articulo.classname = "";
        button.textContent = "Mostar mas"
    }    else {
        //leer mas
        articulo.classname = "abierto";
        button.textContent = "mostrar menos"
    }
}