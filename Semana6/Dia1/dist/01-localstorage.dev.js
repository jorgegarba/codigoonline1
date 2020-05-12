"use strict";

var inputColor = document.getElementById("inputColor");
var formColor = document.getElementById("formColor");
var body = document.querySelector("body");

formColor.onsubmit = function (e) {
  // impedir que la pagina se recargue o envie datos
  e.preventDefault();
  var color = inputColor.value; // Guardar un elemento en el localStorage
  // localStorage.setItem("clave","valor");

  localStorage.setItem("color", color);
  body.style.backgroundColor = color;
};

var verificarStorage = function verificarStorage() {
  // obtener un valor del localstorage
  // localStorage.getItem("clave"), retorna el valor 
  // de dicha clave en el localStorage
  // OJO, si el localStorage no existe, retorna null
  var colorGuardado = localStorage.getItem("color"); // Si el color guardado existe...

  if (colorGuardado) {
    body.style.backgroundColor = colorGuardado;
  }
};

verificarStorage();