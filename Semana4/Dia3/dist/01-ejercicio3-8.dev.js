"use strict";

// Cierta empresa proporciona un bono mensual a sus trabajadores, el
// cual puede ser por su {antigüedad} o bien por el {monto} de su sueldo
//  (el que sea mayor), de la siguiente forma:
// Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga
// 20 % de su sueldo; cuando es de 5 años o más, 30 %.
//Ahora bien, el
// bono por concepto de sueldo, si éste es menor a $1000, se da 25 %
//  de éste, cuando éste es mayor a $1000, pero menor o igual a $3500,
//   se otorga 15 % de su sueldo, para más de $3500. 10 %.Realice el
// algoritmo correspondiente para calcular los dos tipos de bono, asignando
// el mayor, y represéntelo con un diagrama de flujo y pseudocódigo.
var bonoMensualAnios = 0;
var bonoMensualSueldo = 0;
var sueldo = 1000;
var aniosServicio = 2;

if (aniosServicio > 2 && aniosServicio < 5) {
  bonoMensualAnios = sueldo * 0.2;
} else {
  if (aniosServicio >= 5) {
    bonoMensualAnios = sueldo * 0.3;
  }
}

if (sueldo < 1000) {
  bonoMensualSueldo = sueldo * 0.25;
} else {
  if (sueldo >= 1000 && sueldo <= 3500) {
    bonoMensualSueldo = sueldo * 0.15;
  } else {
    // ya  se sabe que iran los mayores a 3500
    bonoMensualSueldo = sueldo * 0.1;
  }
}

if (bonoMensualSueldo > bonoMensualAnios) {
  console.log("Bono ganador: Sueldo => ".concat(bonoMensualSueldo));
} else {
  console.log("Bono ganador: Anios => ".concat(bonoMensualAnios));
}