import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos = [];
  cargando = true;
  // inyección por dependencia
  // implementan un patron de diseño arquitectónico llamado SINGLETON
  // SINGLETON => permite crear una unica instancia de una clase
  constructor(public _sProducto: ProductoService) {}
  // funcion que se ejcuta una sola vez luego de renderizado el DOM
  ngOnInit(): void {
    this._sProducto.getAllProductos().then((data) => {
      console.log(data);
      this.productos = data;
      this.cargando = false;
    });
  }
}
