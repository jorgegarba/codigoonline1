"use strict";

// BUCLES ó ESTRUCTURAS REPETITIVAS
// WHILE - MIENTRAS
var i = 0;

while (i < 10) {
  console.log("Vuelta ".concat(i, " = Hola ke ase"));
  i = i + 1;
}

console.log("Ultimo valor de i = ".concat(i));
console.log("/////////////////////////////////"); // RECORRER UN ARREGLO CON EL SABROSO WHILE
// obtener el promedio del arreglo notas

var notas = [4, 3, 6, 8, 10, 11, 1];
var sumatoria = 0;
var c = 0;

while (c < notas.length) {
  sumatoria = sumatoria + notas[c];
  c += 1;
} // numero.toFixed(cantidad_de_decimales)


console.log("Promedio = ".concat((sumatoria / notas.length).toFixed(2))); // EJERCICIOS