let nombreInput = document.getElementById("nombreInput");
let selectDistrito = document.getElementById("selectDistrito");
let enviarGatos = document.getElementById("enviarGatos");
let formulario = document.getElementById("formulario");
let menu = document.getElementById("menu");
let opcion1 = document.getElementById("opcion1");
let opcion2 = document.getElementById("opcion2");
let opcion3 = document.getElementById("opcion3");
// elemento.onchange
// cuando sucede un cambio en el contenido de un elemeto y el focus
// sale del elemento.
nombreInput.onchange = (e) => {
 console.log("onchange");
 console.log(e);
}

nombreInput.onfocus = (e) => {
 console.log("onfocus");
 nombreInput.style.borderRadius = "5px";
 console.log(e);
}

nombreInput.onblur = (e) => {
 console.log("onblur");
 nombreInput.style.borderRadius = "0px";

 console.log(e);

}


selectDistrito.onchange = (e) => {
 // select.selectedIndex => es el numero o posicion del
 // conjunto de options que tiene el select
 let posicion = selectDistrito.selectedIndex;
 console.log(posicion);
 // select.options => devuelve el arreglo de <option> que tiene
 // un elemento select
 console.log(selectDistrito.options[posicion].innerText);
 console.log(e.target.value);
}


// form.onsubmit=> evento que se dispara cuando se presiona click
// en un botón de tipo SUBMIT que se encuentre dentro del formulario
// ó cuando se presione la tecla enter en cualquiera de los inputs
// de un formulario
formulario.onsubmit = (e) => {
 // e.preventDefault() => cancela todas las acciones por defecto que iban a suceder
 // tras desencadenarse el evento. SI Y SOLO SI, tenían acciones por defecto
 // EJM. el click de una etiqueta <a> redirecciona a una pagina
 // EJM. el submit de un fornulario envía los datos a un servidor.
 // EJM. el click derecho abre un menu contextual en el navegador
 e.preventDefault();
 let info = {
  nombre: nombreInput.value,
  distrito: selectDistrito.value
 }
 console.log("ENVIANDO GATOS");
 console.log(info);
}

// elemento.oncontextmenu => evento que se dispara cuando se hace
// un click derecho sobre el elemento
window.oncontextmenu = (e) => {
 e.preventDefault();
 // Por si acaso, oculto el menú
 menu.setAttribute("hidden", "hidden");
 let x = e.clientX;
 let y = e.clientY;
 // elemento.removeAttribue("nombre_del_atributo")
 // elimina el atributo de un elemento
 menu.style.left = `${x}px`;
 menu.style.top = `${y}px`;
 menu.removeAttribute("hidden");
}

window.onclick = () => {
 menu.setAttribute("hidden", "hidden");
}


const clickOpcion = (e) => {
 let id = e.target.getAttribute("id");
 switch (id) {
  case "opcion1":
   console.log("click en la opcion1");
   break;
  case "opcion2":
   window.print();
   break;
  case "opcion3":
   console.log("click en la opcion3");
   break;
  default:
   break;
 }
}

opcion1.onclick = clickOpcion;
opcion2.onclick = clickOpcion;
opcion3.onclick = clickOpcion;