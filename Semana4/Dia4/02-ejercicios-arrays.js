// Algoritmo
// Para pedirle al usuario el ingreso de N notas
// Finalmente, calcular el promedio de todas ellas

let n = +prompt("¿Cuántas notas va a ingresar joven?");
let i = 0;
let acumulado = 0;
while (i < n) {
 let x = +prompt(`Ingrese la nota ${i + 1}`);
 acumulado = acumulado + x;
 i++;
}
let promedio = acumulado / n;
console.log(`Promedio de notas => ${promedio}`);
