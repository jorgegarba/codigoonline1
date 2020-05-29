import React, { Fragment } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <Fragment>
      <Header />
      <main className="container-fluid">
        <h1 className="display-3 text-center">Agenda<span className="text-danger">APP</span></h1>
        <div className="row">
          <div className="col">
            <Formulario />
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
