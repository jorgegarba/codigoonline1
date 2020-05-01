// Algoritmo
// Para pedirle al usuario el ingreso de N notas
// hasta que ingrese -1
// cuando el usuario ingrese -1, significará
// que ya se han ingresado todes les notes

let i = 0;
let acumulado = 0;
let ingresar = true;

while (ingresar === true) {
 let x = +prompt(`Ingrese la nota ${i + 1}`);
 if (x === -1) {
  ingresar = false;
 } else {
  acumulado = acumulado + x;
 }
 i++;
}
let promedio = acumulado / (i - 1);
console.log(`Promedio de notas => ${promedio}`);
