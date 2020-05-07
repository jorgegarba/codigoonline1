"use strict";

// La clase window es estatica
// window.location  (GET y SET)
// obtiene o configura informacion de la pagina
// actual en el navegador
console.log(window.location); // window.history, objeto que sirve para manipular
// el historial del navegador CAPITULO 19 del libro

console.log(window.history); // window.document, objeto que nos da acceso a la obtención
// y manipulación del DOM

console.log(window.document); // window.innerWidth, devuelve el ancho del viewport en pixeles

console.log("Ancho de la ventana ".concat(window.innerWidth)); // window.innerHeight, devuelve el alto del viewport en pixeles

console.log("Alto de la ventana ".concat(window.innerHeight)); // window.scrollY, devuelve la cantidad de pixeles en los que
// se ha desplazado el scroll en el eje Y

console.log("Desplazado en Y ".concat(window.scrollY)); // ES POSIBLE OMITIR LA VARIABLE WINDOW Y EN SU LUGAR,
// COLOCAR DIRECTAMENTE LA PROPIEDAD O FUNCION

console.log(document); // ejemplo de cómo modificar o redireccionar 
// PROGRAMATICAMENTE a otra página
// window.location.href = "https://www.google.com";
// funcion que sirve para recargar la pagina
// window.location.reload();