"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_KEY = exports.sumar = void 0;

// cuando querramos exportar una funcion, clase, variable, etc
// se antepone la palabra reservada 'export' la vez, en la que 
// se crea dicho elemento
var sumar = function sumar(a, b) {
  console.log("Suma: " + (a + b));
};

exports.sumar = sumar;
var API_KEY = "293-sdfs3-45-dg5-df4";
exports.API_KEY = API_KEY;