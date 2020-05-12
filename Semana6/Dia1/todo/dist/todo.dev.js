"use strict";

var inputTarea = document.getElementById("inputTarea");
var btnAgregar = document.getElementById("btnAgregar");
var listaTareas = document.getElementById("listaTareas");
var tareas = [];

var dibujarTareas = function dibujarTareas() {
  listaTareas.innerHTML = "";
  tareas.forEach(function (t) {
    var li = document.createElement("li");
    li.setAttribute("class", "main__item");
    var span = document.createElement("span");
    span.setAttribute("class", "main__tarea");
    span.innerText = t.tarea;
    var button = document.createElement("button");
    button.setAttribute("class", "main__eliminar");
    button.innerText = "Eliminar";
    li.appendChild(span);
    li.appendChild(button);
    listaTareas.appendChild(li);
  }); // elemento.focus() => forza al cursor a enforcarse o ubicarse en un elemento
  // en este caso, en el input

  inputTarea.focus();
};

inputTarea.onkeyup = function (e) {
  if (e.keyCode === 13) {
    // elemento.click(), forza el click de un elemento
    btnAgregar.click();
  }
};

btnAgregar.onclick = function () {
  var objTarea = {
    tarea: inputTarea.value
  };
  tareas.push(objTarea); // limpiando el input luego de ingresar una tarea

  inputTarea.value = "";
  dibujarTareas();
};