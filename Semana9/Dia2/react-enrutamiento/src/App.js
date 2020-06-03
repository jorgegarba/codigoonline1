import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/pages/home/Home';
import Contacto from './components/pages/contacto/Contacto';
import Nosotros from './components/pages/nosotros/Nosotros';
import Pokemones from './components/pages/pokemones/Pokemones';
function App() {
  return (
    <Router>
      <Header />

      {/* SWITCHING DE PAGINAS */}
      <Switch>
        <Route path={'/home'}>
          <Home />
        </Route>
        <Route path={'/nosotros'}>
          <Nosotros />
        </Route>
        <Route path={'/contacto'}>
          <Contacto />
        </Route>
        <Route path={'/pokemones'}>
          <Pokemones />
        </Route>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
