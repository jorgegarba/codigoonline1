// Propiedades de los Strings
// let frase = new String("Al que madr......");
let frase = "Al que madruga, Dios lo ayuda";
let tamanio = frase.length;
console.log(tamanio);

// string.toLowerCase()
// devuelve toda la cadena de texto en minusculas
let minusculas = frase.toLowerCase();
console.log(minusculas);
console.log(frase);

// string.toUpperCase()
// devuelve toda la cadena de texto en mayusculas
let mayusculas = frase.toUpperCase();
console.log(mayusculas);

// string.substr(inicio,cantidad_de_caracteres)
// devuelve una subcadena dado el indice inicial y la
// longitud de los caracteres
let primeraParte = frase.substr(3, 11);
console.log(primeraParte);

// string.substring(inicio, final)
// devuelve una subcadena dado el indice inicial y el final
// OJO, el indice final, no es considerado en la subcadena
let primeraParteV1 = frase.substring(3, 14);
console.log(primeraParteV1);

// string.startsWith("texto")
// compara los caracteres iniciales del string con el texto
// proporcionado, si inicia con dicho texto, la función retorna TRUE
// caso contrario FALSE.
// OJO> no impota de qué extensión sea el texto proporcionado

let iniciaConAl = frase.startsWith("Al qu");
console.log(iniciaConAl);


// endsWith, análogo a la función startsWith
// string.includes("texto")
// Devuelve true, si la cadena contiene el "texto" como parte
// de su contenido, caso contrario devuelve FALSE
let contieneMadruga = frase.includes("madru");
console.log(contieneMadruga);


// indexOf("texto",?posicion)
// Devuelve la posición de una subcadena buscada
// dentro del string.
// Opcionalmente, si se manda un valor a la variable 'posicion'
// el texto será buscado a partir del indice enviado
//  en caso de no entrar ningún resultado, la rpta es -1
let buscarAyuda = frase.indexOf("ayuda");
console.log(buscarAyuda);

let frase2 = "Agua qUe no Has de Beber, jala la cadena Y dejala Correr";
// recomendación, antes de buscar, igualar, comparar, encontrar, etc.
// tener una copia en minusculas de todo el string.
let frase2m = frase2.toLowerCase();
let posicionBeber = frase2m.indexOf("BEBER".toLowerCase());
console.log(posicionBeber);

console.log(frase2[posicionBeber]);


// string.trim()
// devuelve un string sin los espacios en blanco
// de los EXTREMOS del string original, 
let frase3 = " antes de partir       ";
let frase3Trim = frase3.trim();
console.log(frase3Trim);
