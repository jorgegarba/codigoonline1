// continue
// sentencia que se salta de las operaciones
// de la iteración en la que se encuentra y continúa con la sgt
// iteración
// Agoritmo que imprima los números positivos solamente
let numeros = [8, 3, 9, -1, 9, 3, 4];

for (let i = 0; i < numeros.length; i++) {
 if (numeros[i] < 0) {
  continue;
 }
 console.log(`i = ${i}`);
 console.log(numeros[i]);
}


console.log("--------------------");

// break;
for (let i = 0; i < numeros.length; i++) {
 if (numeros[i] < 0) {
  break;
 }
 console.log(`i = ${i}`);
 console.log(numeros[i]);
}