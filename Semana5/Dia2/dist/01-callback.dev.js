"use strict";

var pares = function pares(arreglo, callback) {
  var losPares = [];

  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      losPares.push(arreglo[i]);
    }
  }

  callback(losPares);
};

var numeros = [4, 3, 2, 4, 5, 6, 10, 96];
pares(numeros, function (resultados) {
  console.log(resultados);
}); // /////////////////////////////

var recorrer = function recorrer(arreglo, callback) {
  for (var i = 0; i < arreglo.length; i++) {
    callback(arreglo[i]);
  }
};

recorrer(numeros, function (elemento) {
  console.log(elemento);
}); // EJEMPLO con forEach

numeros.forEach(function (n) {
  console.log("Elemento: ".concat(n));
});