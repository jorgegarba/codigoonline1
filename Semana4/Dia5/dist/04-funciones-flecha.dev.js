"use strict";

// FUNCIONES DE FLECHA O FUNCIONES ANONIMAS
var imprimirTriangulo = function imprimirTriangulo() {
  var fila = "";

  for (var i = 0; i < 5; i++) {
    fila = "";

    for (var j = 0; j <= i; j++) {
      fila = fila + "*";
    }

    console.log(fila);
  }
}; // llamando a una función


imprimirTriangulo();
console.log("////////////////////////");
/**
 * 
 * @param {*} peso Peso de la persona en Kg.
 * @param {*} talla Talla de la persona en Mt.
 * @returns {imc} indice de masa corporal
 */

var indiceMasaCorporal = function indiceMasaCorporal(peso, talla) {
  var imc = peso / (talla * talla);
  return imc;
};

var indice = indiceMasaCorporal(71.5, 1.65);
console.log(indice);