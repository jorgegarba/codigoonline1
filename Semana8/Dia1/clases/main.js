import { Repartidor } from './Repartidor.js'
import { Cliente } from './Cliente.js'
// creando una instancia de la clase Repartidor
let objRepartidor = new Repartidor("Jorge", "Garnica", "", 123);

console.log(objRepartidor);


// CLiente() => significa que están llamando al método construtor del objeto
let objCliente = new Cliente('Pancho', 'Hernandez', '34232312', 1, "123-123");
console.log(objCliente);
console.log(JSON.stringify(objCliente));

objCliente.imprimirDatos();


objCliente.nroClienteFinal = "cli900";
console.log(objCliente.nroClienteFinal);


console.log(objCliente);
console.log(JSON.stringify(objCliente));

