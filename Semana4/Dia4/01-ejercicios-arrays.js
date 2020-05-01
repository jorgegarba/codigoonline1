// Ejercio para contar
// cantidad de numeros positivos
//  "        "     "     negativos
//  "        "     "   iguales a cero
// dentro de un arreglo
let numeros = [1, 20.9, 3, -1, -24, -45, 0, -3, 0];
let i = 0;
let cPositivos = 0;
let cCeros = 0;

while (i < numeros.length) {
 if (numeros[i] > 0) {
  cPositivos += 1;
 } else {
  if (numeros[i] === 0) {
   cCeros += 1;
  }
 }
 i++;
}

console.log(`Positivos => ${cPositivos}`);
console.log(`Ceros => ${cCeros}`);
console.log(`Negativos => ${numeros.length - (cPositivos + cCeros)}`);
