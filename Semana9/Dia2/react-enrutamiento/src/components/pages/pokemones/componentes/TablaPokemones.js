import React from 'react'
import PokemonFila from './PokemonFila'

const TablaPokemones = ({ pokemones }) => {
 return (
  <div className="col-md-6">
   <table className="table">
    <thead>
     <tr>
      <th><strong>#</strong></th>
      <th>Nombre</th>
      <th>API</th>
      <th>Fotex</th>
     </tr>
    </thead>
    <tbody>
     {
      pokemones.map((pokemon, i) => {
       return <PokemonFila pokemon={pokemon}
        key={pokemon.name} nro={i + 1} />
      })
     }
    </tbody>
   </table>

  </div>
 )
}

export default TablaPokemones
