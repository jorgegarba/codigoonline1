// nombre, apellido y edad
// Regla => los datos de la persona
// se guardan de la siguiente forma

// arreglo[0] = nombre
// arreglo[1] = apellido
// arreglo[2] = edad

//  elborar un algoritmo para guardar N usuarios
// al finalizar, imprimir a todos los usuarios

let n = +prompt("Cuántos usuarios va a ingresar?");
let personas = [];
for (let i = 0; i < n; i++) {
 let usuario = [];
 usuario[0] = prompt("Ingrese su nombre");
 usuario[1] = prompt("Ingrese su apellido");
 usuario[2] = +prompt("Ingrese su edad");
 personas.push(usuario);
}
// A partir del algoritmo anterior
// imprimir, sólo los usuarios con edad
// mayor o igual a 18 años
for (let j = 0; j < personas.length; j++) {
 if (personas[j][2] >= 18) {
  console.log(personas[j]);
 }
}