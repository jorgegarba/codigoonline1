import React from 'react';


// como si fueran parametros de la funcion, 
// se recibe el objeto PROPS
// que es un objeto que tiene todas las propiedades
// que se envían a Header, obviamente desde otro lugar
const Header = (props) => {
 // Todo componente debe retornar como máximo.
 // 1 etiqueta
 console.log(props.links);

 return (
  <header>
   <h1>{props.titulo}</h1>
  </header>
 );

}

export default Header;