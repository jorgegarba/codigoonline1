"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Destructuracion de objetos
var objPersona = {
  nombre: "Jorge",
  apellido: "Garnica",
  dni: "11223344",
  edad: 20,
  nacionalidad: {
    pais: "Perú",
    gentilicio: "Peruano"
  },
  coloresFavoritos: ["Azul", "Negro", "Rojo"]
}; // copiando el atributo 'nombre'

var nombre = objPersona.nombre,
    edad = objPersona.edad;
console.log(nombre, edad); // copiando el atribugo 'apellido' con OTRO identificador u otra variable

var ape = objPersona.apellido;
console.log(ape); // copiando el atributo 'gentilicio' del objeto;

var gentilicio = objPersona.nacionalidad.gentilicio;
console.log(gentilicio); // copiar todos los atributos de un objeto a otro.

var nuevoObjPersona = _objectSpread({}, objPersona);

console.log(nuevoObjPersona);

var nombresCompletos = function nombresCompletos(_ref) {
  var nombre = _ref.nombre,
      apellido = _ref.apellido;
  console.log("datos => ".concat(nombre, " ").concat(apellido));
};

nombresCompletos(objPersona);