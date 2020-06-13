import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Mi Primera App!';
  enlaces = ['Home', 'Nosotros', 'Contacto'];
  nombre = 'Jorge Garnica Blanco';
  autenticado = true;

  cambiarSesion() {
    this.autenticado = !this.autenticado;
  }
}
