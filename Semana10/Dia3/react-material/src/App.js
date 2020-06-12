import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Admin from './modulos/admin/Admin';
import Invitado from './modulos/invitado/Invitado';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/admin"} component={Admin} />
        <Route path={"/"} component={Invitado} />
      </Switch>
    </Router>
  );
}

export default App;
