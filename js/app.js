// Cambio de color de fondo a Blue
function cambiarColorFondo() {
    document.body.style.backgroundColor = "blue";
  }
// Contador
const contadorElement = document.getElementById("contador");
const aumentarButton = document.getElementById("aumentar");
const disminuirButton = document.getElementById("disminuir");
let contador = 0;
function actualizarContador(){
    contadorElement.textContent = contador;
    contadorElement.classList.remove("animated");
    setTimeout(() => {
        contadorElement.classList.add("animated");  
    }, 10);  
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
// Cronómetro
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
    actualizarDisplayCronometro();
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
    actualizarDisplayCronometro();
}
function actualizarDisplayCronometro() {
    document.getElementById('minutos').innerText = formatearTiempo(minutos);
    document.getElementById('segundos').innerText = formatearTiempo(segundos);
    document.getElementById('milisegundos').innerText = formatearTiempo(milisegundos);
}
function formatearTiempo(tiempo) {
    return tiempo < 10 ? '0' + tiempo : tiempo;
}
// Calculadora
let display = document.getElementById('display');
let expresion = '';
function limpiarDisplay() {
    expresion = '';
    actualizarDisplayCalculadora();
}
function eliminarCaracter() {
    expresion = expresion.slice(0, -1);
    actualizarDisplayCalculadora();
}
function agregarCaracter(caracter) {
    const ultimoCaracter = expresion.charAt(expresion.length - 1);
    if ('+-*/'.includes(caracter) && '*/'.includes(ultimoCaracter)) {
        return;
    }
    expresion += caracter;
    actualizarDisplayCalculadora();
}
function calcularResultado() {
    console.log("Expresión antes de evaluar:", expresion);
    try {
        let resultado = eval(expresion);
        if (isNaN(resultado) || !isFinite(resultado)) {
            throw new Error('Error de cálculo');
        }
        expresion = resultado.toString();
        actualizarDisplayCalculadora();
        console.log("Expresión después de evaluar:", expresion);
    } catch (error) {
        console.error("Error:", error.message);
        expresion = 'Error';
        actualizarDisplayCalculadora();
    }
}
function actualizarDisplayCalculadora() {
    display.value = expresion;
}
