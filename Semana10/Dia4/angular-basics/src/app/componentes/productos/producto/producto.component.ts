import { ProductoService } from 'src/app/services/producto.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  @Input() objProducto;
  constructor(public _sProducto: ProductoService) {}

  ngOnInit(): void {}

  settearProducto(){
    this._sProducto.setProductoSeleccionado(this.objProducto)
  }
}