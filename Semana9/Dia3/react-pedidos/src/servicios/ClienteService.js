import { URL_BACKEND } from "../variables/variables";

export class ClienteService {
 endpoint = '/cliente';
  async getAllClientes() {
  let response = await fetch(`${URL_BACKEND}${this.endpoint}`);
  let clientes = await response.json();
  // OJO, la funcion, por ser ASYNC, no retorna 
  // la lista de clientes, retorna una promesa
  return clientes;
   // .then((response) => {
   //  response.json().then((clientes) => {
   //   resolve(clientes);
   //  })
   // })
 }
}