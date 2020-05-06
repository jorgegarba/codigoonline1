"use strict";

// Tipo de dato DATE
var hoy = new Date(); // getFullYear() Este método devuelve un número entero que representa el año(un valor
// de 4 dígitos).
// getMonth() Este método devuelve un número entero que representa el mes(un valor
// de 0 a 11).
// getDate() Este método devuelve un número entero que representa el día del mes(un
// valor de 1 a 31).
// getDay() Este método devuelve un número entero que representa el día de la semana
//     (un valor de 0 a 6).
// getHours() Este método devuelve un número que representa las horas(un valor de 0 a 23).
// getMinutes() Este método devuelve un número entero que representa los minutos(un
// valor de 0 a 59).

var anioActual = hoy.getFullYear();
console.log("Anio => ".concat(anioActual));
var mesActual = hoy.getMonth();
console.log("Mes => ".concat(mesActual));
var diaCalendario = hoy.getDate();
console.log("Dia Calendario => ".concat(diaCalendario));
var horas = hoy.getHours();
console.log("horas => ".concat(horas));
var minutos = hoy.getMinutes();
console.log("minutos => ".concat(minutos));
var segundos = hoy.getSeconds();
console.log("segundos => ".concat(segundos));
var milisegundos = hoy.getMilliseconds();
console.log("milisegundos => ".concat(milisegundos)); // ----- Crear una fecha con datos distintos a hoy
// Colocar los numeros en el siguiente orden
// let fecha = new Date(anio,mes[0-11],dia,hora,minutos,segundos);
// se puede obviar las horas, minutos y segundos

var navidad = new Date(2020, 11, 25); // El resultado de restar dos fechas se obtiene en milisegundos

console.log(navidad - hoy); // a partir de la respuesta, calulcar la cantidad de semanas, dias y horas 
// que quedan para navidad.