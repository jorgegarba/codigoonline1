"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Destructurar es obtener elementos
// de una estructura (ejm, arreglo, objeto)
// para obtener un nuevo elemento( ejm, arreglo, objeto)
var numeros = [234, 4, 45, 38, 498, 542]; // NO ES CORRECTO // no es una buena practica;
// let primerNumero = numeros[0];
// CORRECTA FORMA DE COPIAR ELEMENTOS DE UN ARREGLO

var primerNumero = numeros[0],
    segundoNumero = numeros[1];
console.log(primerNumero);
console.log(segundoNumero);
var ultimo = numeros[5]; // ¿como copiar todos los elementos de un arreglo, en otro?
// ... => spread operator, significa que hay muchos elementos antes del nombre
// de la nueva variable

var arreglo2 = numeros.slice(0);
console.log(arreglo2); // cuando se usa el spread operator, dicho operador, debe ser el
// ultimo de los elementos copiados, no puede ser ni el primero,
// ni uno del medio

var a = numeros[0],
    b = numeros[1],
    resto = numeros.slice(2);
console.log(a);
console.log(b);
console.log(resto);

var sumar = function sumar(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      nro1 = _ref2[0],
      nro2 = _ref2[1];

  // funcion que suma los dos primero numeros de un arreglo
  console.log("Suma ".concat(nro1 + nro2));
};

sumar(numeros);