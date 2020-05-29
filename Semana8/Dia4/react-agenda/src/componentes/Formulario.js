import React, { useState } from 'react'

const Formulario = () => {

 const [contacto, setContacto] = useState({
  nombres: '',
  apellidos: '',
  fechaNac: '',
  direccion: '',
  telCasa: '',
  telCelular: '',
  observaciones: ''
 });

 return (
  <form className="row">
   <div className="form-group col-md-3">
    <label htmlFor="inputNombre">Nombres:</label>
    <input type="text" id="inputNombre" className="form-control"
     onChange={(e) => {
      // creando una copia del contacto antiguo
      let copiaContacto = { ...contacto };
      // modificando el contacto angotuo con los nuevos atributos
      copiaContacto.nombres = e.target.value;
      // actualizando el contacto con la copia modificada
      setContacto(copiaContacto)
     }}    value={contacto.nombres} />
   </div>
   <div className="form-group col-md-3">
    <label htmlFor="inputApellidos">Apellidos:</label>
    <input type="text" id="inputApellidos" className="form-control"
     onChange={(e) => {
      let contactoAntiguo = { ...contacto };
      contactoAntiguo.apellidos = e.target.value;
      setContacto(contactoAntiguo)
     }} value={contacto.apellidos} />
   </div>
   <div className="form-group col-md-3">
    <label htmlFor="">Fecha de Nacimiento:</label>
    <input type="text" className="form-control" />
   </div>
   <div className="form-group col-md-3">
    <label htmlFor="">Dirección:</label>
    <input type="text" className="form-control" />
   </div>
   <div className="form-group col-md-3">
    <label htmlFor="">Teléfono de Casa:</label>
    <input type="text" className="form-control" />
   </div>
   <div className="form-group col-md-3">
    <label htmlFor="">Telefono Celular:</label>
    <input type="text" className="form-control" />
   </div>
   <div className="form-group col-md-6">
    <label htmlFor="">Observaciones:</label>
    <textarea cols="30" rows="2" className="form-control"></textarea>
   </div>
  </form>
 )
}

export default Formulario
