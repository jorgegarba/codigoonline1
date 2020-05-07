"use strict";

// DOCUMENTO => objeto que sirve para manipular el DOM
// document.getElementById("id_del_elemento");
// obtiene la referencia a un elemento del DOM
// ES COMO QUE EN UNA VARIABLE TUVIERA ACCESO A UN ELEMENTO EN EL DOM
var miDiv = document.getElementById("miDiv"); // miDiv, es de tipo ELEMENT

console.log(miDiv); // document.getElementsByClassName("clase")
// devuelve una colección(tipo arreglo) de elementos
// que referencian a los elemntos que coincidan con la clase dada

var cuadrados = document.getElementsByClassName("cuadrado");

for (var i = 0; i < cuadrados.length; i++) {
  console.log(cuadrados[i]);
} // document.querySelector("Selector de tipo css")
// Devuelve SOLO UN ELEMENTO que coincida con el selector tipo CSS


var miBoton = document.querySelector("#miBoton");
console.log(miBoton); // document.querySelectorAll("Selector de tipo css")

var cuadrados2 = document.querySelectorAll(".cuadrado");
console.log(cuadrados2);