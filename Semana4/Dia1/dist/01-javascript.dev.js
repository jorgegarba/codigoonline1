"use strict";

// Variables
// debugger ==> detiene la applicacion en la linea en que se ubica.
// luego, paso a paso (linea a linea) la aplicación es depurada
// debugger;
// == las variables solo se declaran una vez
// == después, sólo se las usa
// == let => se antenpone a la variable para declarla
var a = 10;
var b = 90;
var c = 0; // == asignando una variable

c = a + b; // == console.log() => sirve para imprmir contenido en la 
// == consola

console.log(c); // == asignacion de una misma variable con modificacion 

c = c + 8;
console.log(c); // TIPOS DE DATOS

var nombre = "Jorgito";
var nickname = "C'oco";
var apellidos = 'Garnica Blanco';
var sueldo = 950.49;
var visto = true;
var soltero = false;
console.log(nombre);
console.log(apellidos);
console.log(soltero); // OPERACIONES ARITMETICAS variables numericas
// + suma
// - resta
// / division
// * multiplicación
// % modulo o residuo de una division entera

c = sueldo * 2 + sueldo * 10 / 100;
console.log(c); // ejemplo del modulo

var numero1 = 20;
var numero2 = 3;
var modulo = numero1 % numero2;
console.log(modulo); // CONCATENAR => Juntar o unir
// String + String
// String + Numerico
// Numerico + String

var alfa = "Lorem ipsum";
var numerico = 123;
var alfaNumerico = alfa + numerico;
console.log(alfaNumerico);
var direccion = "Calle Blondell";
var numero = 105;
var info = direccion + " " + numero;
console.log(info);
console.log("Mi dirección es: " + info);
var resultado = 32 + "32";
console.log(resultado);