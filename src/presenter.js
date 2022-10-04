import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const firstMul = document.querySelector("#primer-numeroMul");
const secondMul = document.querySelector("#segundo-numeroMul");
const formMul =document.querySelector("#multiplicar-form");
const divMul= document.querySelector("#resultado-divMul");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formMul.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumberMul = Number.parseInt(firstMul.value);
  const secondNumberMul = Number.parseInt(secondMul.value);

  divMul.innerHTML = "<p>" + multiplicar(firstNumberMul, secondNumberMul) + "</p>";
});
