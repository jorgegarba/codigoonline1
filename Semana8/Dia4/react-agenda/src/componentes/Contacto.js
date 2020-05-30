import React from 'react'

const Contacto = ({ contacto, setContactoSelec }) => {
 return (
  <li className="list-group-item" onClick={() => {
   setContactoSelec(contacto);
  }}>
   <img src="https://api.adorable.io/avatars/45/abott@adorable.png"
    className="rounded-circle"
    alt="" />
   <span className="ml-5">{contacto.nombres} {contacto.apellidos}</span>
  </li>
 )
}

export default Contacto


