"use strict";

// FUNCIONES
// Agrupa lineas de codigo que pueden ser
// utilizadas y reutilizadas cuando se vea por
// conveniente
// 1. Funciones que no devuelven valor
// declaración de una función
function imprimirTriangulo() {
  var fila = "";

  for (var i = 0; i < 5; i++) {
    fila = "";

    for (var j = 0; j <= i; j++) {
      fila = fila + "*";
    }

    console.log(fila);
  }
} // llamando a una función


imprimirTriangulo(); // 2. Funciones que no devuelven valor
//    pero que reciben parametros

function imprimirTriangulo2(cantidad, titulo) {
  console.log("-- ".concat(titulo, " --"));
  var fila = "";

  for (var i = 0; i < cantidad; i++) {
    fila = "";

    for (var j = 0; j <= i; j++) {
      fila = fila + "*";
    }

    console.log(fila);
  }
}

imprimirTriangulo2(8, "Triangulo Mediano");
imprimirTriangulo2(3, "Triangulo Peque");
imprimirTriangulo2(15, "Triangulo Grandote"); // 3. Funciones que retornan valor

function indiceMasaCorporal(peso, talla) {
  var imc = peso / (talla * talla);
  return imc;
}

var indice = indiceMasaCorporal(71.5, 1.65);
console.log(indice); // 4. Dada la siguiente función

function sumarsh(a, b) {
  return a + b;
} // RETO=>
// En una sola linea, imprimir la suma de
// 45,3,7,90
// sin usar el operador '+'


console.log(sumarsh(sumarsh(45, 3), sumarsh(7, 90)));