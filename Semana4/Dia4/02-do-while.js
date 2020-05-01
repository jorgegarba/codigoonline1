

let acumulador = 0;
let i = 0;
let semaforo = true;
do {
 // No hay una condicion para que por lo menos una vez
 // se ejecute el código de la estructura repetitiva
 let x = +prompt(`Ingrese la nota ${i + 1} ó -1 pa' salir`);
 if (x !== -1) {
  acumulador = acumulador + x;
  i++;
 } else {
  semaforo = false
 }
} while (semaforo === true)
console.log(`Promedio ${acumulador / i}`);

