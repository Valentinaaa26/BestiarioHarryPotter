
const listaCabezas = [
    "./assets/cabeza1.png",
    "./assets/cabeza2.png",
    "./assets/cabeza3.png",
    "./assets/cabeza4.png",
    "./assets/cabeza5.png"
];

const listaTorzos = [
    "./assets/torzo1.png",
    "./assets/torzo2.png",
    "./assets/torzo3.png",
    "./assets/torzo4.png",
    "./assets/torzo5.png"
];

const listaPiernas = [
    "./assets/piernas1.png",
    "./assets/piernas2.png",
    "./assets/piernas3.png",
    "./assets/piernas4.png",
    "./assets/piernas5.png"
];

const cabeza = document.getElementById("cabeza");
const torzo = document.getElementById("torzo");
const piernas = document.getElementById("piernas");
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

function elegirAlAzar(lista) {
    const numero = Math.floor(Math.random() * lista.length);
    return lista[numero];
}

function mezclar() {
    cabeza.src = elegirAlAzar(listaCabezas);
    torzo.src = elegirAlAzar(listaTorzos);
    piernas.src = elegirAlAzar(listaPiernas);

    mensaje.textContent = "¡El hechizo ha mezclado las piezas!";
}

boton.addEventListener("click", mezclar);
