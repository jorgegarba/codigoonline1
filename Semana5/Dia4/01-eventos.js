let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let linkTema = document.getElementById("colorTema");
let html = document.getElementById("html");
let cuadradoNaranja = document.getElementById("cuadradoNaranja");



// forma 1 de asociar un evento a un elemento.

let handleClickBoton = (event) => {
 console.log(event);
 console.log(event.target);
 // elemento.getAttribute("atributo_html")
 // sirve para obtenerel valor de un atributo de un elemento
 // del dom por ejemplo, <button id="boton1">CLICK</button>
 // elemento.getAttibute("id")// retorna "boton1"

 if (event.target.getAttribute("id") === "boton1") {
  console.log("Click en el boton 1");
 } else {
  console.log("Click en el boton 2");
 }
}

// configurar la la funcion para cuando le den 
// click
boton1.onclick = handleClickBoton;
boton2.onclick = handleClickBoton;
// forma 2
// boton1.addEventListener("click", () => {
//  console.log("Alguien hizo click en el boton1");
// })


// ejercicio cambio de tema
boton3.onclick = () => {
 let archivo = linkTema.getAttribute("href");
 if (archivo === "./css/dark.css") {
  linkTema.setAttribute("href", "./css/light.css");
 } else {
  linkTema.setAttribute("href", "./css/dark.css");
 }
}


// INFORMACION DE UN EVENTO (EN EL CASO DEL CLICK)
cuadradoNaranja.onclick = (e) => {
 console.log(e);
 console.log(`Click en X respecto del ViewPort ${e.clientX}px`);
 console.log(`Click en Y respecto del ViewPort ${e.clientY}px`);

 console.log(`Click en X respecto del elemento ${e.offestX}px`);
 console.log(`Click en Y respecto del elemento ${e.offsetY}px`);

 
}

