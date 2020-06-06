import { URL_BACKEND } from "../variables/variables";

export class ProductoService {
 endpoint = "/producto";
 async getAllProductos() {
  let response = await fetch(`${URL_BACKEND}${this.endpoint}`);
  let productos = await response.json();
  return productos;
 }
}