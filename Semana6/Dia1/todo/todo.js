let inputTarea = document.getElementById("inputTarea");
let btnAgregar = document.getElementById("btnAgregar");
let listaTareas = document.getElementById("listaTareas");
let tareas = [];

const dibujarTareas = () => {
 listaTareas.innerHTML = "";
 tareas.forEach(t => {
  let li = document.createElement("li");
  li.setAttribute("class", "main__item");
  let span = document.createElement("span");
  span.setAttribute("class", "main__tarea");
  span.innerText = t.tarea;
  let button = document.createElement("button");
  button.setAttribute("class", "main__eliminar");
  button.innerText = "Eliminar";
  li.appendChild(span);
  li.appendChild(button);
  listaTareas.appendChild(li);
 })
 // elemento.focus() => forza al cursor a enforcarse o ubicarse en un elemento
 // en este caso, en el input
 inputTarea.focus();
}

inputTarea.onkeyup = e => {
 if (e.keyCode === 13) {
  // elemento.click(), forza el click de un elemento
  btnAgregar.click();
 }
}

btnAgregar.onclick = () => {
 let objTarea = {
  tarea: inputTarea.value
 }
 tareas.push(objTarea);
 // limpiando el input luego de ingresar una tarea
 inputTarea.value = "";
 dibujarTareas();
}



