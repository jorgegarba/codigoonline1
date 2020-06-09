import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';

import Clientes from './paginas/clientes/Clientes';
import Pedidos from './paginas/pedidos/Pedidos';
import Repartidores from './paginas/repartidores/Repartidores';
import Productos from './paginas/productos/Productos';
import Home from './paginas/home/Home';
import Header from './componentes/Header';
import RepartidorState from './context/repartidor/repartidorState';
import Register from './paginas/auth/Register';

function App() {

  const logeado = false;

  return (
    <RepartidorState>
      <Router>
        <Header />
        <main className="container-fluid pt-3">
          <Switch>
            <Route exact path={"/clientes"} component={Clientes} />
            <Route exact path={"/pedidos"} component={Pedidos} />

            <Route exact path={"/repartidores"} render={() => {
              if (logeado) {
                return <Repartidores />
              } else {
                return <Redirect to={{ pathname: '/' }} />
              }
            }} />
            <Route exact path={"/register"} component={Register} />

            <Route exact path={"/productos"} component={Productos} />
            <Route exact path={"/"} component={Home} />
          </Switch>
        </main>
      </Router>
    </RepartidorState>
  );
}

export default App;
