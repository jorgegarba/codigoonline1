// ASINCRONIA
console.log("Hola");
const sumar = () => {
  console.log("Sumando...");
};
console.log("Intermedio");

// setTimeout => recibe una funcion y el tiempo antes de que
// se ejecute la funcion
setTimeout(() => {
  console.log("Asicrono");
}, 2000);

setTimeout(() => {
  console.log("Asincrono 2");
}, 3000);

sumar();
console.log("Adiós");
