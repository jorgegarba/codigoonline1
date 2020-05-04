"use strict";

// continue
// sentencia que se salta de las operaciones
// de la iteración en la que se encuentra y continúa con la sgt
// iteración
// Agoritmo que imprima los números positivos solamente
var numeros = [8, 3, 9, -1, 9, 3, 4];

for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] < 0) {
    continue;
  }

  console.log("i = ".concat(i));
  console.log(numeros[i]);
}

console.log("--------------------"); // break;

for (var _i = 0; _i < numeros.length; _i++) {
  if (numeros[_i] < 0) {
    break;
  }

  console.log("i = ".concat(_i));
  console.log(numeros[_i]);
}