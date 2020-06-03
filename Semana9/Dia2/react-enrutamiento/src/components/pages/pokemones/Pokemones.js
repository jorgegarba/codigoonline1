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

 // La finalidad del useEffect, es que contenga código que NO NECESARIAMENTE,
 // se ejecute cada vez que una variable de estado cambie
 // porque como sabemos, cada vez que se ejecuta un actuailzador de estado, 
 // el componente (App en este caso), se vuelve a ejecutar
 useEffect(() => {
  // Es una funcion que cuando la página carga por primera vez,
  // se ejecuta automáticamente
  console.log("Ejecutando UseEffect() por primera vez o 'endpoint' se ha modificado");

  traerPokemones();
 }, [endpoint]);

 // [], significa que no tiene dependencias...
 // ¿Pero, qué es una dependencia?
 // una dependencia es una variable del state (Ejm: pokemones, siguiente, anterior, endpoint)
 // Que lo que hace es indicarle al useEffect, que se ejecute nuevamente
 // cada vez que cualquier variable que esté en el arreglo de dependencias, sea modificada.
 // CONCLUSIONES 
 // Cuando el useEffect tiene el arreglo de dependencias vacío, sólo se ejecuta 1 vez
 // Sin embargo si tuviera por ejemplo [endpoint], el useEffect se ejecutaría 
 // la primera vez(es decir, la vez que el componente carga)
 // y luego, todas las veces que la variable 'endpoint' cambie

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
