import React, { Fragment } from 'react'





const ContactoSeleccionado = ({ contactoselec }) => {
 return (

  <div className="card shadow">
   <div className="card-header bg-dark">
    <h3 className="card-title text-center text-light">Información de Contacto</h3>
   </div>
   <div className="card-body">
    {
     // SI EL CONTACTO SELECCIONADO TUVIERA EL ATTR NOMBRES,
     // significa que no es un objeto vacío
     contactoselec.nombres ? (
      <Fragment>
       <img src="https://api.adorable.io/avatars/150/abott@adorable.png"
        alt="" className="rounded-circle d-block m-auto" />
       <p className="card-text"><strong>Nombres: </strong>{contactoselec.nombres}</p>
       <p className="card-text"><strong>Apellidos: </strong>{contactoselec.apellidos}</p>
       <p className="card-text"><strong>Fecha de Nacimiento: </strong>{contactoselec.fechaNac}</p>
       <p className="card-text"><strong>Dirección: </strong> {contactoselec.direccion}</p>
       <p className="card-text"><strong>Teléfono de casa: </strong>{contactoselec.telCasa}</p>
       <p className="card-text"><strong>Teléfono celular: </strong>{contactoselec.telCelular}</p>
       <p className="card-text"><strong>Observaciones: </strong>{contactoselec.observaciones}</p>
      </Fragment>
     ) : <p className="card-text text-center"> {"=("} No has seleccionado ningún contacto.</p>
    }


   </div>
  </div>
 )
}

export default ContactoSeleccionado
