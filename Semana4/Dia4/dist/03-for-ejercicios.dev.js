"use strict";

// nombre, apellido y edad
// Regla => los datos de la persona
// se guardan de la siguiente forma
// arreglo[0] = nombre
// arreglo[1] = apellido
// arreglo[2] = edad
//  elborar un algoritmo para guardar N usuarios
// al finalizar, imprimir a todos los usuarios
var n = +prompt("Cuántos usuarios va a ingresar?");
var personas = [];

for (var i = 0; i < n; i++) {
  var usuario = [];
  usuario[0] = prompt("Ingrese el nombre del usuario ".concat(i + 1));
  usuario[1] = prompt("Ingrese el apellido del usuario ".concat(i + 1));
  usuario[2] = +prompt("Ingrese la edad del usuario ".concat(i + 1));
  personas.push(usuario);
} // A partir del algoritmo anterior
// imprimir, sólo los usuarios con edad
// mayor o igual a 18 años


for (var j = 0; j < personas.length; j++) {
  if (personas[j][2] >= 18) {
    console.log(personas[j]);
  }
}