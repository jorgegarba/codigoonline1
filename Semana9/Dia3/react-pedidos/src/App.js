import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import Clientes from './paginas/clientes/Clientes';
import Pedidos from './paginas/pedidos/Pedidos';
import Repartidores from './paginas/repartidores/Repartidores';
import Productos from './paginas/productos/Productos';
import Home from './paginas/home/Home';
import Header from './componentes/Header';
import RepartidorState from './context/repartidor/repartidorState';

function App() {
  return (
    <RepartidorState>
      <Router>
        <Header />
        <main className="container-fluid pt-3">
          <Switch>
            <Route path={"/clientes"} component={Clientes} />
            <Route path={"/pedidos"} component={Pedidos} />
            <Route path={"/repartidores"} component={Repartidores} />
            <Route path={"/productos"} component={Productos} />
            <Route path={"/"} component={Home} />
          </Switch>
        </main>
      </Router>
    </RepartidorState>
  );
}

export default App;
