let seccion1 = document.getElementById("seccion1");
let inputNombre = document.getElementById("nombre");
let contador = document.getElementById("contador");
let quedan = document.getElementById("quedan");
// onmousemove => evento que se dispara
// cada vez que le mouse se mueve pixel a pixel 
// sobre un elemento

seccion1.onmousemove = (e) => {
 console.log(`Mouse X => ${e.offsetX}, Mouse Y => ${e.offsetY}`);
 // crear el elemento
 // ponerle las propieades al elemento(abosulte, top, left)
 // elemento.style.top = "10px" por ejemplo.
 // y agregarlo al body con un append child
}

// onkeyup => eventeo que se dispara
// cada vez que una tecla es soltada luego de ser presionada en 
// un determinado elemento
inputNombre.onkeyup = (e) => {
 // e.key => tecla presionada
 console.log(e);
 // input.value => se obtiene el valor o contenido del input
 let texto = inputNombre.value;
 contador.innerText = texto.length + " caracteres";

 quedan.innerText = `Quedan ${15 - texto.length} caracteres`;

}