import { iRepartidor } from './../../interfaces/iRepartidor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repartidores',
  templateUrl: './repartidores.component.html',
  styleUrls: ['./repartidores.component.css'],
})
export class RepartidoresComponent implements OnInit {
  repartidores: Array<iRepartidor> = [
    {
      id: 1,
      rep_nom: 'Jorge',
      rep_ape: 'Garnica',
      rep_dni: '48576890',
      rep_est: 'activo',
    },
    {
      id: 2,
      rep_nom: 'Dayana',
      rep_ape: 'Remuzgo',
      rep_dni: '11223344',
      rep_est: 'activo',
    },
  ];

  constructor() {}

  // Funcion que se ejecuta automaticamente
  // una sola vez despues del que el componente se renderiza en el DOM
  // o sea que, carga el html, y en ésta función, podríamos llamar
  // datos asincronos
  ngOnInit(): void {}
}
