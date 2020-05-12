let formDatos = document.getElementById("formDatos");
let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
/////////Trabajando con JSON/////////
let persona = {
 nombre: 'Julio',
 apellido: 'Cáceres'
}
console.log(persona);
// CONVERTIR UN JSON A FORMATO STRING
// JSON.sringify(objeto) => devuelve el objeto en string
let personaString = JSON.stringify(persona);
console.log(personaString);
// CONVERTIR UN STRING A FORMATO JSON
// JSON.parse("objeto en formato STRING") => devuelve el objeto string
// en formato JSON
let personaJSON = JSON.parse(personaString);
console.log(personaJSON);
//////////////////////////////////////


formDatos.onsubmit = () => {
 let objPersona = {
  nombre: inputNombre.value,
  apellido: inputApellido.value
 }
 let objPersonaString = JSON.stringify(objPersona);
 localStorage.setItem("persona", objPersonaString);

}


