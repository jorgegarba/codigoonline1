"use strict";

var acumulador = 0;
var i = 0;
var semaforo = true;

do {
  // No hay una condicion para que por lo menos una vez
  // se ejecute el código de la estructura repetitiva
  var x = +prompt("Ingrese la nota ".concat(i + 1, " \xF3 -1 pa' salir"));

  if (x !== -1) {
    acumulador = acumulador + x;
    i++;
  } else {
    semaforo = false;
  }
} while (semaforo === true);

console.log("Promedio ".concat(acumulador / i));