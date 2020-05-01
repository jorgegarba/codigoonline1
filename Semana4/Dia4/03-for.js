// ejercicio para insertar N 
// numeros en 1 arreglo y luego
// mostrar el doble de cada numero del arreglo

let n = +prompt("¿Cuantos datos va a ingresar?");
let arreglo = [];
for (let i = 0; i < n; i++) {
 let x = +prompt("Inserta el número");
 arreglo.push(x * 2);
}
console.log(arreglo);

