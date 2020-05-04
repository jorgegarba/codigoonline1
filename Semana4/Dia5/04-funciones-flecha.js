// FUNCIONES DE FLECHA O FUNCIONES ANONIMAS

let imprimirTriangulo = () => {
 let fila = ""
 for (let i = 0; i < 5; i++) {
  fila = "";
  for (let j = 0; j <= i; j++) {
   fila = fila + "*";
  }
  console.log(fila);
 }
}
// llamando a una función
imprimirTriangulo();




console.log("////////////////////////");

/**
 * 
 * @param {*} peso Peso de la persona en Kg.
 * @param {*} talla Talla de la persona en Mt.
 * @returns {imc} indice de masa corporal
 */
let indiceMasaCorporal = (peso, talla) => {
 let imc = peso / (talla * talla);
 return imc;
}

let indice = indiceMasaCorporal(71.5, 1.65);
console.log(indice);
