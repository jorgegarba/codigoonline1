"use strict";

// Algoritmo
// Para pedirle al usuario el ingreso de N notas
// Finalmente, calcular el promedio de todas ellas
var n = +prompt("¿Cuántas notas va a ingresar joven?");
var i = 0;
var acumulado = 0;

while (i < n) {
  var x = +prompt("Ingrese la nota ".concat(i + 1));
  acumulado = acumulado + x;
  i++;
}

var promedio = acumulado / n;
console.log("Promedio de notas => ".concat(promedio));