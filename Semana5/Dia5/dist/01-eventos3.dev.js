"use strict";

// elemento.onload => evento que se dispara luego
// de que un elemento haya cargado todos los recursos
// internos del mismo.
window.onload = function () {
  var seccion1 = document.getElementById("seccion1");
  seccion1.innerText = "Todo el DOM ha cargado";
}; // elemento.scroll => se dispara cada vez que 
// se el scroll del mouse reubica nuesstra página
/// ojo solo funciona si la altura de la página mide más del 100vh


window.onscroll = function (e) {
  console.log(e);
};