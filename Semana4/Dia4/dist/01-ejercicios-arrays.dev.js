"use strict";

// Ejercio para contar
// cantidad de numeros positivos
//  "        "     "     negativos
//  "        "     "   iguales a cero
// dentro de un arreglo
var numeros = [1, 20.9, 3, -1, -24, -45, 0, -3, 0];
var i = 0;
var cPositivos = 0;
var cCeros = 0;

while (i < numeros.length) {
  if (numeros[i] > 0) {
    cPositivos += 1;
  } else {
    if (numeros[i] === 0) {
      cCeros += 1;
    }
  }

  i++;
}

console.log("Positivos => ".concat(cPositivos));
console.log("Ceros => ".concat(cCeros));
console.log("Negativos => ".concat(numeros.length - (cPositivos + cCeros)));