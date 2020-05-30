import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import TablaPokemones from './components/TablaPokemones';

function App() {

  console.log("Inicio de App");

  const [pokemones, setPokemones] = useState([]);
  // const [siguiente, setSiguiente] = useState("");

  const traerPokemones = () => {
    let endpoint = "https://pokeapi.co/api/v2/pokemon";
    fetch(endpoint).then((response) => {
      response.json().then((data) => {
        console.log(data);
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
    console.log("Ejecutando UseEffect()");
    traerPokemones();
  }, []);

  return (
    <Fragment>
      <Header />
      <main className="container-fluid">
        <div className="row">
          <TablaPokemones pokemones={pokemones} />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
