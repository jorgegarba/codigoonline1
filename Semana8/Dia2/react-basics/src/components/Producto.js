import React from 'react'

const Producto = ({ producto, aumentar, actualizarCarrito, carrito }) => {

 const agregarAlCarrito = () => {
  // aumentar();
  // 1. Creando una copia del state llamdo 'carrito'
  let carritoTmp = [...carrito];
  // 2. Validar si el producto que intento agregar al carrito,
  // no exista previamente en el carrito
  // 3. en find(), si no se encuentra el producto, el retorno es UNDEFINED
  // si por el contrario, se encuentra el producto, el retorno es el mismo producto
  let elementoEncontrado = carritoTmp.find((p) => (p.id === producto.id));
  if (elementoEncontrado) {
   // significa que ya existe el producto
   console.log("no! el producto ya exsite");
  } else {
   carritoTmp.push(producto)
   actualizarCarrito(carritoTmp);
  }
 }

 return (
  <div>
   <p><strong>Nombre:</strong> {producto.nombre}</p>
   <p><strong>Descripcion:</strong> {producto.descripcion}</p>
   <p><strong>Precio:</strong> S/ {producto.precio}</p>
   <p><button onClick={
    () => { agregarAlCarrito() }
   }>Agregar al Carrito</button></p>
  </div>
 )
}

export default Producto

