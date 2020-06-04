import React from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { URL_BACKEND } from '../../../variables/variables';
const RepartidorForm = () => {

 // hooks de useForm
 const { register, handleSubmit, errors } = useForm();
 const errorObligatorio = <small className="text-danger">El campo es obligatorio *</small>;
 const errorDNI = <small className="text-danger">Coloque un DNI de 8 digitos</small>;

 const postRepartidor = (objRepartidor) => {
  const endpoint = `${URL_BACKEND}/repartidor`;
  fetch(endpoint, {
   method: 'POST',
   body: JSON.stringify(objRepartidor),
   headers: {
    "Content-type": "application/json"
   }
  }).then((response) => {
   response.json().then((data) => {
    // data, el resultado de la creacion del Repartidor
    console.log(data);
   })
  })
 }

 const enviarFormulario = (data) => {
  console.log(data);
  Swal.fire({
   title: '¿Seguro que desea crear el registro?',
   icon: 'info',
   text: 'Los cambios harán efecto de inmediato en la base de datos',
   showCancelButton: true
  }).then((result) => {
   if (result.value) {
    console.log("OK PODEMOS CREAR AL USUARIO");
    // stuff PARA CREAR AL USUARIO
    // aqui hacemos un POST  a mockapi
    postRepartidor(data);
   }
  })
 }


 return (
  <div className="card">
   <div className="card-header">
    <h3 className="card-title">Registrar Repartidor</h3>
   </div>
   <div className="card-body">
    <form className="row" onSubmit={handleSubmit(enviarFormulario)}>
     <div className="form-group col-md-3">
      <label htmlFor="">Nombre:</label>
      <input type="text" name="rep_nom"
       className="form-control" ref={register({ required: true })} />
      {errors.rep_nom && errors.rep_nom.type === "required" ?
       errorObligatorio : null}
     </div>
     <div className="form-group col-md-3">
      <label htmlFor="">Apellido:</label>
      <input type="text" name="rep_ape"
       className="form-control" ref={register({ required: true })} />
      {errors.rep_ape && errors.rep_ape.type === "required" ?
       errorObligatorio : null}
     </div>
     <div className="form-group col-md-3">
      <label htmlFor="">Estado:</label>
      <select className="form-control" name="rep_est"
       ref={register({ required: true })}>
       <option value="">-Seleccione-</option>
       <option value="true">Habilitado</option>
       <option value="false">Inhabilitado</option>
      </select>
      {errors.rep_est && errors.rep_est.type === "required" ?
       errorObligatorio : null}
     </div>
     <div className="form-group col-md-3">
      <label htmlFor="">Dni:</label>
      <input type="text" name="rep_dni"
       className="form-control"
       ref={register({ required: true, pattern: /^[0-9]{8,8}$/ })} />
      {errors.rep_dni && errors.rep_dni.type === "required" ?
       errorObligatorio : null}
      {errors.rep_dni && errors.rep_dni.type === "pattern" ?
       errorDNI : null}
     </div>
     <div className="form-group col-md-6">
      <button className="btn btn-primary btn-block" type="submit">
       Crear Repartidor
      </button>
     </div>
     <div className="form-group col-md-6">
      <button className="btn btn-danger btn-block" type="button">
       Cancelar
      </button>
     </div>
    </form>
   </div>
  </div>
 )
}

export default RepartidorForm
