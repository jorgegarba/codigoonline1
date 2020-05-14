let inputEmail = document.getElementById("inputEmail");
let helpEmail = document.getElementById("helpEmail");

let usuarios = [
 { nombre: 'Carlos', email: 'ca@gmail.com' },
 { nombre: 'Diana', email: 'diana@gmail.com' },
 { nombre: 'Sebastian', email: 'sebas@gmail.com' }
];

// cada vez que presione una tecla en el input
// debo obtener el valor del input, 
// para compararlo con todos los emails que tengo en la bse 
// de gatos y ver si existe o no existe para tomar una decisión

inputEmail.onkeyup = () => {
 // obteniendo el texto del input
 let texto = inputEmail.value;
 // filtrar todos los emails que coincidan con el email insertado
 let resultados = usuarios.filter((usu) => {
  if (usu.email === texto) {
   return usu;
  }
 });
 // evaluar si hay mas de 0 coincidencias comparando el email ingresa
 // con el arreglo de resultados
 if (resultados.length > 0) {
  // error, ya existe ese email en la BD
  inputEmail.classList.remove("is-valid");
  inputEmail.classList.add("is-invalid");
  helpEmail.removeAttribute("hidden");
  helpEmail.innerText = "Lo sentimos, el usuario ya existe =(";
  helpEmail.classList.remove("text-success");
  helpEmail.classList.add("text-danger")

 } else {
  inputEmail.classList.remove("is-invalid");
  inputEmail.classList.add("is-valid")
  helpEmail.removeAttribute("hidden");
  helpEmail.innerText = "Bien! el email está disponible";
  helpEmail.classList.remove("text-danger");
  helpEmail.classList.add("text-success")
 }
}
