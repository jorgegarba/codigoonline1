"use strict";

var areaCirculo = function areaCirculo(radio) {
  var PI = 3.1416;

  var cuadrado = function cuadrado(numero) {
    return numero * numero;
  };

  var rpta = PI * cuadrado(radio);
  return rpta;
};

var area = areaCirculo(25);
console.log(area);