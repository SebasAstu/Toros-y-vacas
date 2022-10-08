import ToroVaca from "./toros_y_vacas.js";

let tv = new ToroVaca();

const codigoSecreto = document.querySelector("#codigo-secreto");
const formGuardar = document.querySelector("#guardar-form");
const formAdivinar = document.querySelector("#adivinar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#intentos-div");
const divTv=document.querySelector("#torovaca-div");
const numAdivinar=document.querySelector("#adivinar-numero");

//const firstMul = document.querySelector("#primer-numeroMul");
//const secondMul = document.querySelector("#segundo-numeroMul");
//const formMul =document.querySelector("#multiplicar-form");
//const divMul= document.querySelector("#resultado-divMul");

formGuardar.addEventListener("submit", (event) => {
  event.preventDefault();

  const codigo_secreto = tv.guardarCodigo(codigoSecreto.value);

  div.innerHTML = "<p>" +codigo_secreto + "</p>";
});

formAdivinar.addEventListener("submit", (event) => {
 event.preventDefault();
 console.log(numAdivinar.value);
  let resp=tv.compararCodigo(numAdivinar.value);
  console.log(resp);
  div2.innerHTML = "<p>" + tv._cantidadIntentos+ "</p>";
  divTv.innerHTML = "<p>" + resp + "</p>";
});
