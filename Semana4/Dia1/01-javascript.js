// Variables

// debugger ==> detiene la applicacion en la linea en que se ubica.
// luego, paso a paso (linea a linea) la aplicación es depurada
// debugger;

// == las variables solo se declaran una vez
// == después, sólo se las usa
// == let => se antenpone a la variable para declarla

let a = 10;
let b = 90;
let c = 0;

// == asignando una variable
c = a + b;
// == console.log() => sirve para imprmir contenido en la 
// == consola
console.log(c);

// == asignacion de una misma variable con modificacion 
c = c + 8;
console.log(c);

// TIPOS DE DATOS
let nombre = "Jorgito";
let nickname = "C'oco";
let apellidos = 'Garnica Blanco'
let sueldo = 950.49;
let visto = true;
let soltero = false;

console.log(nombre);
console.log(apellidos);
console.log(soltero);


// OPERACIONES ARITMETICAS variables numericas
// + suma
// - resta
// / division
// * multiplicación

// % modulo o residuo de una division entera
c = (sueldo * 2) + (sueldo * 10 / 100);
console.log(c);
// ejemplo del modulo
let numero1 = 20;
let numero2 = 3;
let modulo = numero1 % numero2;
console.log(modulo);

// CONCATENAR => Juntar o unir
// String + String
// String + Numerico
// Numerico + String
let alfa = "Lorem ipsum";
let numerico = 123;
let alfaNumerico = alfa + numerico;
console.log(alfaNumerico);

let direccion = "Calle Blondell";
let numero = 105;
let info = direccion + " " + numero;
console.log(info);
console.log("Mi dirección es: " + info);

let resultado = 32 + "32";
console.log(resultado);







