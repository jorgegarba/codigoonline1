import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { RepartidoresComponent } from './componentes/repartidores/repartidores.component';
import { RepartidorComponent } from './componentes/repartidores/repartidor/repartidor.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ClientesComponent,
     RepartidoresComponent, RepartidorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
