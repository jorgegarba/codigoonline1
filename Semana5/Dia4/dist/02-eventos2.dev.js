"use strict";

var seccion1 = document.getElementById("seccion1");
var inputNombre = document.getElementById("nombre");
var contador = document.getElementById("contador");
var quedan = document.getElementById("quedan"); // onmousemove => evento que se dispara
// cada vez que le mouse se mueve pixel a pixel 
// sobre un elemento

seccion1.onmousemove = function (e) {
  console.log("Mouse X => ".concat(e.offsetX, ", Mouse Y => ").concat(e.offsetY)); // crear el elemento
  // ponerle las propieades al elemento(abosulte, top, left)
  // elemento.style.top = "10px" por ejemplo.
  // y agregarlo al body con un append child
}; // onkeyup => eventeo que se dispara
// cada vez que una tecla es soltada luego de ser presionada en 
// un determinado elemento


inputNombre.onkeyup = function (e) {
  // e.key => tecla presionada
  console.log(e); // input.value => se obtiene el valor o contenido del input

  var texto = inputNombre.value;
  contador.innerText = texto.length + " caracteres";
  quedan.innerText = "Quedan ".concat(15 - texto.length, " caracteres");
};