const pares = (arreglo, callback) => {
 let losPares = [];
 for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] % 2 === 0) {
   losPares.push(arreglo[i]);
  }
 }
 callback(losPares);
}

let numeros = [4, 3, 2, 4, 5, 6, 10, 96];
pares(numeros, (resultados) => {
 console.log(resultados);
});

// /////////////////////////////
const recorrer = (arreglo, callback) => {
 for (let i = 0; i < arreglo.length; i++) {
  callback(arreglo[i])
 }
}

recorrer(numeros, (elemento) => {
 console.log(elemento);
})


// EJEMPLO con forEach
numeros.forEach((n) => {
 console.log(`Elemento: ${n}`);
})