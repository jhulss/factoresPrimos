import factoresPrimos from "./sumador";


const first = document.querySelector("#primer-numero");

const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const calcular = new factoresPrimos();
  const firstNumber = Number.parseInt(first.value);
  

  div.innerHTML = "<p>" + "[" + calcular.calcularFactores(firstNumber) + "]" + "</p>";
});