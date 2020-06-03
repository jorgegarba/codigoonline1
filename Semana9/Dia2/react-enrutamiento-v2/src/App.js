import React from 'react';

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Contacto from './componentes/Contacto';
import Productos from './componentes/Productos';
import Home from './componentes/Home';
import PageNotFound from './componentes/PageNotFound';
import Producto from './componentes/Producto';

function App() {
  return (

    <Router>
      {/* LINKS */}
      {/* El header es estático, es decir no cambia con el Switch */}
      <header>
        <nav>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/productos"}>Productos</Link> </li>
            <li><Link to={"/contacto"}>Contacto</Link> </li>
          </ul>
        </nav>
      </header>

      {/* SWITCH DE PAGINAS O COMPONENTES */}
      {/* Funciona como la envoltura de todas las paginas que van
      a cambiar de acuerdo a la ruta (URL) */}
      <Switch>
        {/* Cada ruta es representada por un componente Route */}
        {/* path => la ruta despues de http://localhost:3000 */}
        {/* component => El componente importado. */}
        <Route path={"/contacto"} component={Contacto} />
        <Route path={"/productos"} component={Productos} />
        <Route path={"/producto/buscar/:nombre"} component={Producto} />
        <Route path={"/producto/:id"} component={Producto} />
        <Route path={"/"} component={Home} />
        {/* Una ruta que no tenga PATH, significa que corresponde a 
        un path que no existe en nuestra coleccion de rutas */}
        {/* Debe ser la última y por lo general, el 404 */}
        <Route component={PageNotFound} />
      </Switch>

    </Router>
  );
}

export default App;
