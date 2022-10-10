import ToroVaca from "./toros_y_vacas.js";

let juego = new ToroVaca();

const codigoSecreto = document.querySelector("#codigo-secreto");
const formGuardarCodigo = document.querySelector("#guardar-form");
const formAdivinarCodigo = document.querySelector("#adivinar-form");
const divRespuestaPatida = document.querySelector("#respuesta-div");
const divCantidadIntentos = document.querySelector("#intentos-div");
const divJuego=document.querySelector("#torovaca-div");
const numAdivinar=document.querySelector("#adivinar-numero");
const numIntentos = document.querySelector("#numero-intentos");

formGuardarCodigo.addEventListener("submit", (event) => {
  event.preventDefault();

  if(numIntentos.value==8)
  {
    juego.definirIntentos(8);
  }
  if(numIntentos.value>0)
  {
    juego.definirIntentos(numIntentos.value);
    const codigo_secreto = juego.partida(codigoSecreto.value,"");
    divCantidadIntentos.innerHTML = "<p>" + juego._cantidadIntentos+ "</p>";
    alert(codigo_secreto);
  }
  else
  {
    const mensaje = juego.definirIntentos(numIntentos.value);
    alert(mensaje);
  }
  
  
});

formAdivinarCodigo.addEventListener("submit", (event) => {
 event.preventDefault();

  let respuestaAdivinar=juego.partida("",numAdivinar.value);
  divCantidadIntentos.innerHTML = "<p>" + juego._cantidadIntentos+ "</p>";
  divJuego.innerHTML = "<p>" + respuestaAdivinar + "</p>";
});
