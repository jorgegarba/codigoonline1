let numeros = [2, 4, 6, 8, 10, 12, 14, 16];
// arreglo.pop()
// Devuelve el último elemento del arreglo y además
// modifica el arreglo original quitándole ese elemento.
let ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

// ----------------
// No devuelve un nuevo arreglo
// pero sí modifica el original
// pi=posicion_inicial
// borrar = nro_elementos_a_borrar
// vai = ?valores_a_insertar EJM> 7,8,9,5
// El arreglo, dada la posicion inical, borra la cantidad 
// de elementos otorgada como parametro y opcionalmente, 
// inserta los elementos que estén separados por comas
// OJO, si no se desean borrar elementos, la variable borrar
// puede ir un valor de 0
// arreglo.splice(pi,borrar,vai)
numeros.splice(3, 0, 100, 900);
console.log(numeros);

//--------------------
// arreglo.indexOf(elemento,?posicion)
// retorna la posicion de un elemento buscado a partir(opcionalmente)
// de la posición indicada, si no se manda la posición, 
// el punto de partida es la posición 0
// si no encuentra el elemento, devuelve -1
let buscar900 = numeros.indexOf(900);
console.log(buscar900);


// ----------------
// recorrer un arreglo
// arreglo.forEach(()=>{})
// Ejecuta la función otorgada, tantas veces como 
// elementos tenga el arreglo.
// en cada iteracion(vuelta,ciclo,loop,ejecución),
// el callback recibe hasta 3 parametros.
// (elemento,i,arreglo)=>{}
numeros.forEach((nro, i) => {
 console.log(`Indice ${i}, Elemento ${nro}`);
});

// ----------------
// arreglo.filter(()=>{})
// El callback, recibe los mismos parametros que forEach
// Filter, tiene la capacidad de RETORNAR un nuevo arreglo
// con los elementos que cumplan cierta condición.

// let mayoresQue100 = numeros.filter(elemento => (elemento > 100));


let mayoresQue100 = numeros.filter((elemento, i) => {
 if (elemento > 100) {
  return elemento
 }
});
console.log(mayoresQue100);


// ----------------
// arreglo.map(()=>{})
// El callback, recibe los mismos parametros que forEach
// Devuelve un arreglo con todos los elementos del arreglo original
// Sin embargo, todos ellos, con alguna modificación

// let dobles = numeros.map(n => (n * 2))

let dobles = numeros.map((n, i) => {
 return n * 2;
})
console.log(dobles);
