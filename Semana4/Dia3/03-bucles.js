// BUCLES ó ESTRUCTURAS REPETITIVAS

// WHILE - MIENTRAS
let i = 0;
while (i < 10) {
 console.log(`Vuelta ${i} = Hola ke ase`);
 i = i + 1;
}
console.log(`Ultimo valor de i = ${i}`);
console.log("/////////////////////////////////");

// RECORRER UN ARREGLO CON EL SABROSO WHILE
// obtener el promedio del arreglo notas
let notas = [4, 3, 6, 8, 10, 11, 1];
let sumatoria = 0;
let c = 0;
while (c < notas.length) {
 sumatoria = sumatoria + notas[c];
 c += 1;
}
// numero.toFixed(cantidad_de_decimales)
console.log(`Promedio = ${(sumatoria / notas.length).toFixed(2)}`);


// EJERCICIOS
