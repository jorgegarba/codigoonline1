import React, { useState, Fragment, useEffect } from 'react'
import Cargando from './../../Cargando';
import TablaPokemones from './componentes/TablaPokemones';

const Pokemones = () => {

  console.log("Inicio de Pokemones");

  const [pokemones, setPokemones] = useState([]);
  const [siguiente, setSiguiente] = useState("");
  const [anterior, setAnterior] = useState("");
  const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon");
  const [cargando, setCargando] = useState(true);

  const traerPokemones = () => {
    fetch(endpoint).then((response) => {
      response.json().then((data) => {
        console.log("La data llegó");
        console.log(data);
        console.log("Vamos a modificar el state de los Pokemon");

        setCargando(false);
        setSiguiente(data.next);
        setAnterior(data.previous);
        setPokemones(data.results);
      })
    })
  }

  useEffect(() => {
    console.log("Ejecutando UseEffect() por primera vez o 'endpoint' se ha modificado");

    traerPokemones();
  }, [endpoint]);


  return (
    <Fragment>
      {
        cargando ?
          <Cargando /> :
          <main className="container-fluid mt-5">
            <div className="row mb-5">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <button className="btn btn-block btn-danger"
                      disabled={anterior === null ? true : false}
                      onClick={() => {
                        setEndpoint(anterior);
                        setCargando(true)
                      }}>
                      Anterior
                </button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-block btn-danger"
                      disabled={siguiente === null ? true : false}
                      onClick={() => {
                        setEndpoint(siguiente);
                        setCargando(true)
                      }}>
                      Siguiente
                </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <TablaPokemones pokemones={pokemones} />
            </div>
          </main>
      }


    </Fragment >
  );

}

export default Pokemones
