import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Contactos from './componentes/Contactos';

function App() {

  const [contactos, setContactos] = useState([]);

  const agregarContacto = (objContacto) => {
    let contactosAntiguos = [...contactos, objContacto];
    setContactos(contactosAntiguos);
    // setContactos([...contactos, objContacto]);
  }

  return (
    <Fragment>
      <Header />
      <main className="container-fluid">
        <h1 className="display-3 text-center">Agenda<span className="text-danger">APP</span></h1>
        <div className="row">
          <div className="col">
            <Formulario agregarContacto={agregarContacto} />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            {/* Lista de contactos */}
            <Contactos contactos={contactos} />
          </div>
          <div className="col-md-6">
            {/* Contacto seleccionado */}
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
