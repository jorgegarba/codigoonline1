"use strict";

// ASINCRONIA
console.log("Hola");

var sumar = function sumar() {
  console.log("Sumando...");
};

console.log("Intermedio"); // setTimeout => recibe una funcion y el tiempo antes de que
// se ejecute la funcion

setTimeout(function () {
  console.log("Asicrono");
}, 2000);
setTimeout(function () {
  console.log("Asincrono 2");
}, 3000);
sumar();
console.log("Adiós");