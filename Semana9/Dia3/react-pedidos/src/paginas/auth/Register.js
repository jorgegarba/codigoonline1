import React, { useState } from 'react'
import { AuthService } from '../../servicios/AuthService';

const Register = () => {

 const [formulario, setFormulario] = useState({
  usu_nom: "",
  usu_pass: "",
  usu_email: "",
  usu_ape: ""
 });

 const objAuth = new AuthService();
 const { usu_ape, usu_nom, usu_pass, usu_email } = formulario;

 const onSubmit = (e) => {
  e.preventDefault();

  // validar campos llenos
  if (usu_ape.trim() === "" ||
   usu_pass.trim() === "" ||
   usu_nom.trim() === "" ||
   usu_email.trim() === "") {
   // generar el error
  } else {

   let objUsuario = {
    usuario: {
     ...formulario
    }
   }
   objAuth.postUsuario(objUsuario).then(data => {
    console.log(data);
   })

  }


 }

 const handleChange = (e) => {
  setFormulario({
   ...formulario,
   [e.target.name]: e.target.value
  })
 }

 return (
  <div className="row justify-content-center">
   <div className="col-md-6">
    <div className="card shadow">
     <div className="card-header">
      <h2 className="card-title">Crear Cuenta</h2>
     </div>
     <div className="card-body">
      <form className="row" onSubmit={onSubmit}>
       <div className="form-group col-12">
        <label htmlFor="">Nombre:</label>
        <input type="text" className="form-control"
         value={formulario.usu_nom} name="usu_nom"
         onChange={handleChange} />
       </div>
       <div className="form-group col-12">
        <label htmlFor="">Apellido:</label>
        <input type="text" className="form-control"
         value={formulario.usu_ape} name="usu_ape"
         onChange={handleChange} />
       </div>
       <div className="form-group col-12">
        <label htmlFor="">Ingrese Correo</label>
        <input type="email" className="form-control"
         value={formulario.usu_email} name="usu_email"
         onChange={handleChange} />
       </div>
       <div className="form-group col-12">
        <label htmlFor="">Ingrese Password</label>
        <input type="password" className="form-control"
         value={formulario.usu_pass} name="usu_pass"
         onChange={handleChange} />
       </div>
       <div className="form-group col-12">
        <button type="submit" className="btn btn-block btn-primary">Crear Cuenta</button>
       </div>
      </form>

     </div>
    </div>
   </div>
  </div>
 )
}

export default Register
