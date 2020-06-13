import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  endpoint = 'https://5ec86440155c130016a909c5.mockapi.io';

  // productos = [];

  constructor() {
    // this.getAllProductos();
  }

  async getAllProductos() {
    let response = await fetch(`${this.endpoint}/producto`);
    let data = await response.json();
    return data;
  }
}
