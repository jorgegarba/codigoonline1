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

let cobro = 0;
let costoPorHora = 4;
let horas = +prompt("¿Cuantas horas ha permanecido?");

cobro = horas * costoPorHora;
