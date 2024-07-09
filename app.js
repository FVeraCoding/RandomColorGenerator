// Seleccionar los elementos del DOM.
const boton = document.getElementById("boton-color");
const texto = document.getElementById("color");
const body = document.querySelector("body");

boton.addEventListener("click", function () {
    texto.innerText = generarColorHexAleatorio();
    body.style.backgroundColor = generarColorHexAleatorio();
  });


function generarColorHexAleatorio() {
  let digitos = '0123456789ABCDEF';
  let color = "#";

  for(let i = 0; i<6; i++){
    color+=digitos.charAt(Math.floor(Math.random()*(15)));
  }

  return color;
}