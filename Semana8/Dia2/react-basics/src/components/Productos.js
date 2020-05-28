import React from 'react'
import Producto from './Producto'

const Productos = (props) => {

 return (
  <section>
   {
    props.productos.map((prod) => {
     return (
      // Cada elemento que es generad dinamicamente
      // debe tener una propiedad key que es 
      // un identificador único de cada elemento
      <Producto producto={prod} key={prod.id}
       aumentar={props.aumentar}

       actualizarCarrito={props.actualizarCarrito}
       carrito={props.carrito} />
     )
    })
   }
  </section>
 )
}

export default Productos
