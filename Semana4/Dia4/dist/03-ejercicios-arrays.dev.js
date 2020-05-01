"use strict";

// Algoritmo
// Para pedirle al usuario el ingreso de N notas
// hasta que ingrese -1
// cuando el usuario ingrese -1, significará
// que ya se han ingresado todes les notes
var i = 0;
var acumulado = 0;
var ingresar = true;

while (ingresar === true) {
  var x = +prompt("Ingrese la nota ".concat(i + 1));

  if (x === -1) {
    ingresar = false;
  } else {
    acumulado = acumulado + x;
  }

  i++;
}

var promedio = acumulado / (i - 1);
console.log("Promedio de notas => ".concat(promedio));