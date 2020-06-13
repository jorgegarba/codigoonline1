import { iRepartidor } from './../../../interfaces/iRepartidor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repartidor',
  templateUrl: './repartidor.component.html',
  styleUrls: ['./repartidor.component.css']
})
export class RepartidorComponent implements OnInit {

  @Input() objRepartidor:iRepartidor;

  constructor() { }

  ngOnInit(): void {
  }

}
