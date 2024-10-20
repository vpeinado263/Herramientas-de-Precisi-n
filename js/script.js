//contador
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
//cronómetro
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
        segundos++;
    }
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    actualizarDisplay();
}
function actualizarDisplayCalculadora() {
    document.getElementById('minutos').innerText = formatearTiempo(minutos);
    document.getElementById('segundos').innerText = formatearTiempo(segundos);
    document.getElementById('milisegundos').innerText = formatearTiempo(milisegundos)
}
function formatearTiempo(tiempo) {
    return tiempo < 10 ? '0' + tiempo : tiempo;
}
//calculadora
let display = document.getElementById('display');
let expresion = '';
function limpiarDisplay() {
    expresion = '';
    actualizarDisplay();
}
function eliminarCaracter() {
    expresion = expresion.slice(0, -1);
    actualizarDisplay();
}
function agragarCaracter(caracter) {
    const ultimoCaracter = expresion.charAt(expresion.length - 1);
    if ('+-*/' .includes(caracter) && '*/' .includes(ultimoCaracter)) {
        return;
    }
    expresion += caracter;
    actualizarDisplay();
}
function calcularResultado() {
    console.log("Expresión antes de evaluar:", expresion);
    try {
        let resultado = eval(expresion);
        if(isNaN(resultado) || !isFinite(resultado)) {
            throw new Error('Error de cálculo');
        }
        expresion = resultado.toString();
        actualizarDisplay();
        console.log("Expresion después de evaluar:", expresion);
    } catch (error) {
        console.error("Error:", error.message);
        expresion = 'Error';
        actualizarDisplay();
    }
}
function actualizarDisplay() {
       display.value = expresion; 
}