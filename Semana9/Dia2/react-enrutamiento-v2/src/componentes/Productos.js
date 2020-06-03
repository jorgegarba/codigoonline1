import React from 'react'

const Productos = (props) => {
 console.log(props);
 const verProducto = (idProducto) => {
  // REDIRECCIONAR A OTRA RUTA
  props.history.push(`/producto/${idProducto}`)
 }
 return (
  <div>
   <ul>
    <li>
     Producto de id 789
     <button onClick={() => { verProducto(789); }}>Ver Producto</button>
    </li>
    <li>
     Producto de id 1000
     <button onClick={() => { verProducto(1000); }}>Ver Producto</button>
    </li>
   </ul>
  </div>
 )
}

export default Productos
