"use strict";

var formDatos = document.getElementById("formDatos");
var inputNombre = document.getElementById("inputNombre");
var inputApellido = document.getElementById("inputApellido"); /////////Trabajando con JSON/////////

var persona = {
  nombre: 'Julio',
  apellido: 'Cáceres'
};
console.log(persona); // CONVERTIR UN JSON A FORMATO STRING
// JSON.sringify(objeto) => devuelve el objeto en string

var personaString = JSON.stringify(persona);
console.log(personaString); // CONVERTIR UN STRING A FORMATO JSON
// JSON.parse("objeto en formato STRING") => devuelve el objeto string
// en formato JSON

var personaJSON = JSON.parse(personaString);
console.log(personaJSON); //////////////////////////////////////

formDatos.onsubmit = function () {
  var objPersona = {
    nombre: inputNombre.value,
    apellido: inputApellido.value
  };
  var objPersonaString = JSON.stringify(objPersona);
  localStorage.setItem("persona", objPersonaString);
};