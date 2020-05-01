"use strict";

// ejercicio para insertar N 
// numeros en 1 arreglo y luego
// mostrar el doble de cada numero del arreglo
var n = +prompt("¿Cuantos datos va a ingresar?");
var arreglo = [];

for (var i = 0; i < n; i++) {
  var x = +prompt("Inserta el número");
  arreglo.push(x * 2);
}

console.log(arreglo);