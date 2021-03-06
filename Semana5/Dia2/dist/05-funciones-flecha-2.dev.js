"use strict";

var cuadrado = function cuadrado(numero) {
  return numero * numero;
}; // de manera chevere
// Cuando una funcion de flecha, recibe UN parametro solamente
// se pueden obviar los paréntesis
// Cuando la operacion de retono es de una sola linea
// se pueden obviar las llaves y la palabra reservada
// 'return' pero se colcan paréntesis


var cuadrado2 = function cuadrado2(n) {
  return n * n;
};

console.log(cuadrado2(25)); // -----------------------
// OPERADOR TERNARIO
// Manera sencilla de expresar un if-else SI Y SOLO SI
// tenemos una linea en cada SCOPE

var soltero = true;
var resultado = "";

if (soltero === true) {
  resultado = "El usuario está soltero";
} else {
  resultado = "El usuario no está soltero";
} // -------------------


var resultado2 = soltero ? "El usuario esta soltero" : "El usuario no está soltero";
console.log(resultado2);