// condicionales

// Comparadores aritmeticos
// > mayor
// < menor
// == igual de comparacion (en valor solamente)
// === igual de comparacion (en valor y tipo de dato)
// != diferente
// >= mayor o igual
// <= menor o igual

// Ejercicio 1
let valor = 547;
let modulo = valor % 2;
if (modulo === 0) {
 // si la pregunta da una respuesta verdadera
 // el codigo interno, es el que se va a ejecutar
 console.log(`El numero ${valor} es par`);
} else {
 console.log(`El numero ${valor} es impar`);
}

console.log(`///////////////////////////////`);

// Ejercicio 2
let precio = 500;
if (precio > 100) {
 console.log(`Total a pagar ${precio - (precio * 0.1)}`);
} else {
 console.log(`Total a pagar ${precio}`);
}
console.log(`Fin del programa`);
console.log(`///////////////////////////////`);

// Operadores Logicos

//  && => y
//  || => o
//   ! => negación

// Ejercicio 3

let precioProducto = 1000;
let genero = "varon";

if ((precioProducto > 500) && (genero === "varon")) {
 console.log("Promocion activada!");
 console.log(`Total ${precioProducto * 0.9}`);
} else {
 console.log(`Total ${precioProducto}`);
}

// if (precioProducto > 500) {
//  if (genero === "varon") {
//   console.log("Promocion activada!");
//   console.log(`Total ${precioProducto * 0.9}`);
//  } else {
//   console.log(`Total ${precioProducto}`);
//  }
// } else {
//  console.log(`Total ${precioProducto}`);
// }



// Ejercicio 4
// Calcular si un año es bisiesto
// Un año es bisiesto si es divisible por 4, excepto aquel divisible por 100,
// ó que el anio sea divisible por 400 simplemente.
console.log("///////////////////////");

// let anio = +prompt("Ingrese un año");
let anio = 1989;
if ((anio % 4 === 0 && anio % 100 != 0) || (anio % 400 === 0)) {
 console.log(`${anio} SI es año bisiesto`);
} else {
 console.log(`${anio} NO es año bisiesto`);
}


// Ejercicio 5
let anio = 1989;
if ((anio % 4 === 0 && !(anio % 100 === 0)) || (anio % 400 === 0)) {
 console.log(`${anio} SI es año bisiesto`);
} else {
 console.log(`${anio} NO es año bisiesto`);
}

// Ejercicio 6
// Algoritmo para hallar el mayor de 3 numeros
// teniendo en cuenta que los 3 son diferentes
// let a = 10;
// let b = 20;
// let c = 30;
// let result;
// let ab = a > b;
// let bc = b > c;
// if (ab && bc) {
//  console.log(`El numero mayor es a`);
// } else {
//  if (!ab && !bc) {
//   console.log(`El numero mayor es c`);
//  } else {
//   console.log(`El numero mayor es b`);
//  }
// }


// version 2

let a = 10;
let b = 20;
let c = 30;
let result;
if (a > b && a > c) {
 result = `${a} es elmayor`;
}
if (b > a && b > c) {
 result = `${b} es el mayor`;
} else {
 result = `${c} es el mayor`;
}
console.log(result);