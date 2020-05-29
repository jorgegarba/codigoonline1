import React from 'react'
// importando una hoja de estilos
// exclusiva para Carrito.js
// OJO> El nombre del archivo
// no tiene nada que ver
import './../estilos/carrito.css';
const Carrito = ({ carrito, actualizarCarrito }) => {


 const eliminarProductoDeCarrito = (id) => {
  // 1. obtener una copia del state 'carrito';
  let copiaCarrito = [...carrito];
  // 2. filtrar todos los productos del carrito
  // y solo quedarnos con los que no tengan el ID 
  // recibido por parametros.
  let productosFiltrados = copiaCarrito.filter((producto) => (producto.id !== id));

  // 3. actualizar el state 'carrito', es decir
  // usar la funcion actualizarCarrito() para modificar dicho state
  actualizarCarrito(productosFiltrados);

 }

 return (
  <div className="carrito">
   {
    carrito.length === 0 ?
    
     <p>No hay elementos en el carrito</p> :

     carrito.map((producto) => {
      return (
       <div key={producto.id}>
        <p><strong>Nombre:</strong> {producto.nombre}</p>
        <p><strong>Descripcion:</strong> {producto.descripcion}</p>
        <p><strong>Precio:</strong> S/ {producto.precio} </p>
        <p>
         <button type="button" onClick={() => {
          eliminarProductoDeCarrito(producto.id);
         }}>Eliminar &times;</button>
        </p>
        <hr />
       </div>
      )
     })
   }
  </div>
 )
}

export default Carrito
