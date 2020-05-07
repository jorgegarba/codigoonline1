// ELEMENT, representa a un elemento en DOM
// EJM> button, input, aside, section, nav,
// form, textarea, div, link, script

let titulo = document.querySelector("#titulo");
// let titulo = document.getElementById("titulo");


// propiedad STYLE de tooooodos los elementos
// elemento.style.color settea el color de texto o contenido de un elemento

titulo.style.color = "#ff0000";
// TODOS LOS ESTLOS EN JAVASCRIPT, son iguales que en CSS, excpeto que,
// los estilos que llevan nombre con guion, ejemplo: border-radius, font-size
// en javascript, se transforman con camelCase 
// y si algun elemento recibe valores como por ejemplo => 10px
// ahora los valores se colocan en forma de string => "10px"
// Ejemplo: font-size => fontSize

titulo.style.fontSize = "16px";


let parrafo = document.getElementById("parrafo");
// elemento.clientWidth => devuelve el ancho del elemento incluido el relleno
// elemento.clientHeight => devuelve el alto del elemento incluido el relleno
console.log("ancho " + parrafo.clientWidth);
console.log("alto " + parrafo.clientHeight);

// elemento.offsetTop => Devuelve la cantida de pixeles que el elemento se desplaza desde
// el techo(parte superrior) del viewport (ventana del navegador)

console.log(parrafo.offsetTop);
console.log(parrafo.offsetLeft);// 2, por los 2 pixeles, el negro y el azul

// elemento.offsetWidth => devuelve el ancho del elemento incluido el borde y el relleno
// elemento.offsetHeight => devuelve el ancho del elemento incluido el borde y el relleno
console.log(parrafo.offsetWidth);


// elemento.scrollTop => cantidad de pixeles en los que el contenido del elemento
// se ha desplazado en la parte superior
// PENDIENTE => PARA USARLO CON LA PROPIEDAD html, pero con LISTENERS
console.log(parrafo.scrollTop);

// EJEMPLO>
let html = document.querySelector("html");
console.log(html.scrollTop);



let btnRojo = document.getElementById("btnRojo");
let btnVerde = document.getElementById("btnVerde");
let btnToggle = document.getElementById("btnToggle");

btnRojo.onclick = () => {
 // className => funciona como getter y setter
 parrafo.className = "danger";
}

btnVerde.onclick = () => {
 parrafo.className = "success"
}

btnToggle.onclick = () => {
 if (parrafo.className === "danger") {
  parrafo.className = "success";
 } else {
  parrafo.className = "danger";
 }
}

// elemento.classList = > devuelve un arreglo con todas las clases que tenga un elemento
let miSection = document.getElementById("miSection");
console.log(miSection.classList);
// elemento.classList.remove("nombre_de_clase_a_borrar")
miSection.classList.remove("fondo-naranja")
// elemento.classList.add("nombre_de_clase_a_agregar")
miSection.classList.add("success");

// elemento.innerHTML get y set del contenido del elemento
// OJO si dicho contenido, tiene codigo HTML, éste es renderizado como
// parte del DOM
miSection.innerHTML = `<a href="https://www.google.com"> Click Aqui</a>`;

// elemento.innerTEXT get y set del contenido del elemento
// OJO si dicho contenido, tiene codigo HTML, éste NOOOOO es renderizado como
// parte del DOM
miSection.innerText = `<a href="https://www.google.com"> Click Aqui</a>`;