import React from 'react'

import { withRouter } from 'react-router-dom';

const Nosotros = (props) => {
 console.log("props de Nosotros");
 console.log(props);


 return (
  <div>
   <h2>Página Nosotros</h2>
  </div>
 )
}

export default withRouter(Nosotros)
