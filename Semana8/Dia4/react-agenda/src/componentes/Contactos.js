import React from 'react'
import Contacto from './Contacto'

const Contactos = ({ contactos, setContactoSelec }) => {

 // let lis = [];

 // contactos.forEach(c => {
 //  lis.push(<li className="list-group-item">{c.nombres}</li>)
 // });


 return (
  <ul className="list-group list-group-flush">
   {/* {lis} */}
   {
    contactos.map(c => {
     return <Contacto contacto={c} setContactoSelec={setContactoSelec} />
    })
   }
  </ul>
 )
}

export default Contactos
