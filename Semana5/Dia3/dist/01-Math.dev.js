"use strict";

// Clase Math
// Clase 'estática'
// Es una clase que no necesita crear objetos a partir de la misma
// Math.sqrt(numero) obtiene la raíz cuadrada de un numero
var raiz4 = Math.sqrt(4); // Math.floor(numero) obtiene la parte entera de un numero,
// redondea un numero con coma decimal al piso.

console.log(Math.floor(4.99)); // Math.ceil(numero) análogo a floor, redondea un número al 
// próximo entero (techo del numero).

console.log(Math.ceil(2.0001)); // Math.round(numero) redondea un número de acuerdo al estandar

console.log(Math.round(8.3));
console.log(Math.round(8.6)); // Math.random()
// por defecto, nos devuelve un número aleatorio entre 0 y 1

console.log(Math.random()); // Artificio para hallar un numero random entre 2 numeros
// Math.random() * (max - min) + min;

var random2050 = Math.random() * (50 - 20) + 20;
console.log(random2050.toFixed(0));