"use strict";

// 2.3
// Una empresa que contrata personal requiere determinar la 'edad' de
// las personas que solicitan trabajo, pero cuando se les realiza la entrevista
// sólo se 'les pregunta el año en que nacieron'.Realice el diagrama
// de flujo y pseudocódigo que representen el algoritmo para solucionar
// este problema.
// let edad = 0;
// let anioNacimiento = +prompt("Ingrese el anio de nacimiento");
// edad = 2020 - anioNacimiento;
// console.log("El trabajador tiene " + edad + " años");
// 2.4
// Un estacionamiento requiere determinar el 'cobro' que debe aplicar a
// las personas que lo utilizan.Considere que el cobro es con base en las
// horas que lo disponen y que las fracciones de hora se toman como
// completas y realice un diagrama de flujo y pseudocódigo que representen
// el algoritmo que permita determinar el cobro.
// let cobro = 0;
// let costoPorHora = 4;
// // let horas = +prompt("¿Cuantas horas ha permanecido?");
// console.log(12 % 90);
// 2.12
// Realice un diagrama de flujo y pseudocódigo que representen el
// algoritmo para determinar cuánto pagará finalmente una persona
// por un artículo equis, considerando que tiene un descuento de 20 %,
//  y debe pagar 15 % de IVA(debe mostrar el precio con descuento y el
// precio final).
// let totalPagar = 0;
// let producto = prompt("Ingrese el nombre del producto");
// let precio = +prompt("Ingrese el precio del producto");
// let precioDescontado = precio - (precio*0.2);
// let precioDescontado = precio * 0.8;
// totalPagar = precioDescontado + (precioDescontado * 0.15);
// console.log("****** Boleta ******");
// console.log("** Producto: " + producto);
// console.log("** Precio:   " + precio);
// console.log("** c/Dcto:   " + precioDescontado);
// console.log("** c/IGV:    " + totalPagar);
// console.log("********************");
// 2.20
// determinar el promedio que obtendrá un alumno considerando
// que realiza tres exámenes, de los cuales el primero y el
// segundo tienen una ponderación de 25 %, mientras que el tercero
// de 50 %.
var nota1 = +prompt("Ingrese 1ra Nota");
var nota2 = +prompt("Ingrese 2ra Nota");
var nota3 = +prompt("Ingrese 3ra Nota");
var promedio = nota1 * 0.25 + nota2 * 0.25 + nota3 * 0.5;
console.log("Promedio " + promedio);