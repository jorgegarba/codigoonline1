// capturando al boton por javascript puro
let boton1js = document.getElementById("boton1");
boton1js.innerText = "Nuevo texto";
console.log(boton1js);

// capturando al boton por jquery
// $ => simbolo del dolar => es el simbolo que reprenta a jquery
// 
$("#boton1").text("Un nuevo texto");

// seleccionar varios elementos con jquery
// con js puro => boton1js.style.borderRadius = "12px";
// jquery.css("propiedad css","valor") =>  modifica estilos a un elemento
$(".btn").css("border-radius", "0");
//  la mejor forma en js puro para el codigo de arriba, sería:
///////// let botones = document.querySelectorAll(".btn");
///////// botones.forEach(boton => {
/////////  boton.style.borderRadius = "0";
///////// })

// evento click en jQuery
// boton2.onclick = ( ) => { }

$("#boton2").click(() => {
 // agregar clases a uno o mas elementos
 $(".btn").addClass("fondo-naranja").addClass("borde-10");
})
// dblclick, mouseover, contextmenu, scroll, focus, keyup, keypress
$("#boton3").click(() => {
 // quitar una o mas clases a uno o mas elementos
 $(".btn").removeClass("borde-10");
})

// agregando el atributo a un elemento HTML
$(".card > .card-body").attr("cantidad", 123);