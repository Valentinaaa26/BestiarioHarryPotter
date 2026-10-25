
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

// Elementos del HTML
const cabeza = document.getElementById("cabeza");
const torzo = document.getElementById("torzo");
const piernas = document.getElementById("piernas");
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

// Guarda el número de cada fragmento
let numeroCabeza = 1;
let numeroTorzo = 2;
let numeroPiernas = 3;

// Escoge una posición al azar
function elegirAlAzar(lista) {
  const posicion = Math.floor(Math.random() * lista.length);
  return posicion;
}

// Cambia las tres piezas
function mezclar() {
  numeroCabeza = elegirAlAzar(listaCabezas);
  numeroTorzo = elegirAlAzar(listaTorzos);
  numeroPiernas = elegirAlAzar(listaPiernas);

  cabeza.src = listaCabezas[numeroCabeza];
  torzo.src = listaTorzos[numeroTorzo];
  piernas.src = listaPiernas[numeroPiernas];

  // Comprueba si las piezas pertenecen al mismo personaje
  if (
    numeroCabeza === numeroTorzo &&
    numeroTorzo === numeroPiernas
  ) {
    mensaje.textContent = "¡Hechizo logrado! Has reconstruido la imagen.";
    boton.textContent = "✦ Volver a mezclar ✦";
  } else {
    mensaje.textContent = "Las piezas todavía están encantadas. ¡Inténtalo otra vez!";
    boton.textContent = "✦ Lanzar hechizo ✦";
  }

  // Pequeño movimiento de las piezas
  const piezas = [cabeza, torzo, piernas];

  piezas.forEach(function(pieza) {
    pieza.classList.remove("cambio");

    void pieza.offsetWidth;

    pieza.classList.add("cambio");
  });
}

// Al hacer clic, se mezclan las piezas
boton.addEventListener("click", mezclar);

