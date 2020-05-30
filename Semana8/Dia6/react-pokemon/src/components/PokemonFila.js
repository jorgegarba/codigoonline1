import React, { useState, useEffect } from 'react'

const PokemonFila = ({ pokemon, nro }) => {

 const [img, setImg] = useState();

 const getImagen = () => {
  let endpoint = pokemon.url;
  fetch(endpoint).then((response) => {
   response.json().then((data) => {
    console.log(data.sprites.front_default);
    setImg(data.sprites.front_default);
   })
  })
 }

 useEffect(() => {
  getImagen();
 }, []);



 return (
  <tr>
   <td>{nro}</td>
   <td>{pokemon.name}</td>
   <td>{pokemon.url}</td>
   <td><img src={img} alt="" /></td>
  </tr>
 )
}

export default PokemonFila
