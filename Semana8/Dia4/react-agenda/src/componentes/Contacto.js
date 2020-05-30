import React from 'react'

const Contacto = ({ contacto }) => {
 return (
  <li className="list-group-item">
   {contacto.nombres}
  </li>
 )
}

export default Contacto
