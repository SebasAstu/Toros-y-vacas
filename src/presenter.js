import ToroVaca from "./toros_y_vacas.js";

let tv = new ToroVaca();

const codigoSecreto = document.querySelector("#codigo-secreto");
const btnIniciar = document.querySelector("#btn-iniciar");
const formGuardar = document.querySelector("#guardar-form");
const div = document.querySelector("#resultado-div");

//const firstMul = document.querySelector("#primer-numeroMul");
//const secondMul = document.querySelector("#segundo-numeroMul");
//const formMul =document.querySelector("#multiplicar-form");
//const divMul= document.querySelector("#resultado-divMul");

formGuardar.addEventListener("submit", (event) => {
  event.preventDefault();

  const codigo_secreto = tv.guardarCodigo(codigoSecreto.value);

  div.innerHTML = "<p>" +codigo_secreto + "</p>";
});

//formMul.addEventListener("submit", (event) => {
//  event.preventDefault();
//
//  const firstNumberMul = Number.parseInt(firstMul.value);
//  const secondNumberMul = Number.parseInt(secondMul.value);
//
//  divMul.innerHTML = "<p>" + multiplicar(firstNumberMul, secondNumberMul) + "</p>";
//});
