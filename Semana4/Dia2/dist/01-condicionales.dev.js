"use strict";

// condicionales
// Comparadores aritmeticos
// > mayor
// < menor
// == igual de comparacion (en valor solamente)
// === igual de comparacion (en valor y tipo de dato)
// != diferente
// >= mayor o igual
// <= menor o igual
// Ejercicio 1
var valor = 547;
var modulo = valor % 2;

if (modulo === 0) {
  // si la pregunta da una respuesta verdadera
  // el codigo interno, es el que se va a ejecutar
  console.log("El numero ".concat(valor, " es par"));
} else {
  console.log("El numero ".concat(valor, " es impar"));
}

console.log("///////////////////////////////"); // Ejercicio 2

var precio = 500;

if (precio > 100) {
  console.log("Total a pagar ".concat(precio - precio * 0.1));
} else {
  console.log("Total a pagar ".concat(precio));
}

console.log("Fin del programa");
console.log("///////////////////////////////"); // Operadores Logicos
//  && => y
//  || => o
//   ! => negación
// Ejercicio 3

var precioProducto = 1000;
var genero = "varon";

if (precioProducto > 500 && genero === "varon") {
  console.log("Promocion activada!");
  console.log("Total ".concat(precioProducto * 0.9));
} else {
  console.log("Total ".concat(precioProducto));
} // if (precioProducto > 500) {
//  if (genero === "varon") {
//   console.log("Promocion activada!");
//   console.log(`Total ${precioProducto * 0.9}`);
//  } else {
//   console.log(`Total ${precioProducto}`);
//  }
// } else {
//  console.log(`Total ${precioProducto}`);
// }
// Ejercicio 4
// Calcular si un año es bisiesto
// Un año es bisiesto si es divisible por 4, excepto aquel divisible por 100,
// ó que el anio sea divisible por 400 simplemente.


console.log("///////////////////////"); // let anio = +prompt("Ingrese un año");

var anio = 1989;

if (anio % 4 === 0 && anio % 100 != 0 || anio % 400 === 0) {
  console.log("".concat(anio, " SI es a\xF1o bisiesto"));
} else {
  console.log("".concat(anio, " NO es a\xF1o bisiesto"));
}