import React from 'react'

const Producto = (props) => {
  // 
  let id = props.match.params.id;
  let nombre = props.match.params.nombre;

  return (
    <div>
      {
        id ?
          <span>Id recibido: {id}</span> :

          <span>Nombre recibido:{nombre}</span>
      }
    </div>
  )
}

export default Producto
