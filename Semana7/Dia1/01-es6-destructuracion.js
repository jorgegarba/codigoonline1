// Destructurar es obtener elementos
// de una estructura (ejm, arreglo, objeto)
// para obtener un nuevo elemento( ejm, arreglo, objeto)
let numeros = [234, 4, 45, 38, 498, 542];

// NO ES CORRECTO // no es una buena practica;
// let primerNumero = numeros[0];
// CORRECTA FORMA DE COPIAR ELEMENTOS DE UN ARREGLO
let [primerNumero, segundoNumero] = numeros;
console.log(primerNumero);
console.log(segundoNumero);
let [, , , , , ultimo] = numeros;

// ¿como copiar todos los elementos de un arreglo, en otro?
// ... => spread operator, significa que hay muchos elementos antes del nombre
// de la nueva variable
let [...arreglo2] = numeros;
console.log(arreglo2);

// cuando se usa el spread operator, dicho operador, debe ser el
// ultimo de los elementos copiados, no puede ser ni el primero,
// ni uno del medio
let [a, b, ...resto] = numeros;
console.log(a);
console.log(b);
console.log(resto);

const sumar = ([nro1, nro2]) => {
  // funcion que suma los dos primero numeros de un arreglo
  console.log(`Suma ${nro1 + nro2}`);
};

sumar(numeros);
