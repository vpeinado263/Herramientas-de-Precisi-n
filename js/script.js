//Contador
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
//Cronómetro
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let intervalo;

function iniciarCronometro() {
    detenerCronometro();
    intervalo = setInterval(actualizarCronometro, 10);
}
function detenerCronometro() {
    clearInterval(intervalo);
}
function resetearCronometro() {
    detenerCronometro();
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
    actualizarDisplay();
}
function actualizarCronometro() {
    milisegundos += 10;
    if (milisegundos === 1000) {
        milisegundos = 0;
        minutos++;
    }
    actualizarDisplay();
}
function actualizarDisplay() {
    document.getElementById('minutos').innerText = formatearTiempo(minutos);
    document.getElementById('segundos').innerText = formatearTiempo(segundos);
    document.getElementById('milisegundos').innerText = formatearTiempo(milisegundos)
}
function formatearTiempo() {
    return tiempo < 10 ? '0' + tiempo : tiempo;
}