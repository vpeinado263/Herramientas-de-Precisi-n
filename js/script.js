/*****Contador*****/
const contadorElement = document.getElementById("contador");
const aumentarButton = document.getElementById("aumentar");
const disminuirButton = document.getElementById("disminuir");
let contador = 0;
function actualizarContador(){
    contadorElement.textContent = contador;
    contadorElement.classList.remove("animated");
    setTimeout(() => {
        contadorElement.classList.remove("animated");
    }, 300);
}
aumentarButton.addEventListener("click", function() {
    contador++;
    actualizarContador();
});
disminuirButton.addEventListener("click", function() {
    if (contador > 0) {
        contador--;
        actualizarContador();
    }
});
actualizarContador();
