"use strict";

var endpoint = "https://coronavirus-tracker-api.herokuapp.com/v2/locations";
fetch(endpoint, {
  method: 'GET',
  body: null
}).then(function (rpta) {
  // rpta => un objeto de tipo Response, que contiene
  // la información de la respuesta del servidor.
  // Sin embargo, no tiene directamente el json
  // que devuelve la API(no es un tema exclusivo con la API del COVID)
  // ENCADENAMIENTO DE PROMESAS
  rpta.json().then(function (data) {
    console.log(data);
  })["catch"](function (error) {
    // error en la segunda promesa
    console.log(error);
  });
})["catch"](function (error) {
  // error en la primera promesa
  console.log(error);
});