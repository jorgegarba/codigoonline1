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
import Login from './paginas/auth/Login';
import AuthState from './context/auth/authState';
function App() {

  return (
    <AuthState>
      <RepartidorState>
        <Router>
          <Header />
          <main className="container-fluid pt-3">
            <Switch>
              <Route exact path={"/clientes"} component={Clientes} />
              <Route exact path={"/pedidos"} component={Pedidos} />
              <Route exact path={"/repartidores"} component={Repartidores} />
              <Route exact path={"/register"} component={Register} />
              <Route exact path={"/login"} component={Login} />

              <Route exact path={"/productos"} component={Productos} />
              <Route exact path={"/"} component={Home} />
            </Switch>
          </main>
        </Router>
      </RepartidorState>
    </AuthState>
  );
}

export default App;
