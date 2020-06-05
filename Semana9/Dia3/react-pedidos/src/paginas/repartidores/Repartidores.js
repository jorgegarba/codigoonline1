import React, { useState, useEffect, Fragment } from 'react'
import Cargando from './../../componentes/Cargando';
import RepartidoresTabla from './componentes/RepartidoresTabla';
import RepartidorForm from './componentes/RepartidorForm';
const Repartidores = () => {

  const endpoint = "https://5ec86440155c130016a909c5.mockapi.io/repartidor";
  const [cargando, setCargando] = useState(true);
  const [repartidores, setRepartidores] = useState([]);

  const getRepartidores = () => {
    if (!cargando) {
      setCargando(true);
    }

    fetch(endpoint).then((response) => {
      response.json().then((data) => {
        setCargando(false);
        setRepartidores(data);
      })
    })
  }

  useEffect(() => {
    getRepartidores();
  }, [])

  return (
    <Fragment>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <RepartidorForm getRepartidores={getRepartidores} />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {
            cargando === true ?
              <Cargando tipo="info" texto="Cargando repartidores" /> :
              <RepartidoresTabla repartidores={repartidores} />
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Repartidores
