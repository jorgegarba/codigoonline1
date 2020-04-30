// ARREGLOS

let marcas = ["Nissan", "Mazda", "Kia", "Toyota"];
// imprimiendo todo un arreglo
console.log(marcas);

// imprimiendo un elemento
let modelos = ["Picanto", "CX-3", "Compass", "Auris"];
console.log(modelos[2]);

// arreglo vacio
let sinElementos = [];
sinElementos[0] = false;
sinElementos[1] = true;
console.log(sinElementos);

// Algunas propiedades de los arreglos

// length => obtiene la cantida de elemento que tiene el arreglo
console.log(`Tamanio del arreglo modelos =>  ${modelos.length}`);
console.log(`Tamanio del arreglo sinElementos =>  ${sinElementos.length}`);

// push(elemento) => inserta un elemento al final de un arreglo
marcas.push("Audi");
console.log(marcas);


let arreglos = [90, 2, 30, 4, 5, "Jorge", true, ["Azul", "Rojo"]];
// Imprimiendo la palabra Rojo
console.log(arreglos[7][1]);

// ¿como imprimir el ultimo elemento de un arreglo, 
// sin usar un número como posición?
//  HINT> Usando la propiedad length
console.log(arreglos[arreglos.length - 1]);

