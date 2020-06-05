import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { URL_BACKEND } from '../../../variables/variables';


const formVacio = {
  rep_nom: '',
  rep_ape: '',
  rep_est: '',
  rep_dni: ''
};
// objRepartidor => es la variable de estado de Repartidores.js
// la cual representa al objeto que necesita ser editado
// en caso contrario, el valor recibido será {null}
const RepartidorForm = ({ getRepartidores, objRepartidor, setObjRepartidor }) => {

  let modoEditar = false;

  // si el objRepartidor no es null
  if (objRepartidor) {
    modoEditar = true;
  }

  // hooks de useForm
  const { register, handleSubmit, errors, reset } = useForm();

  const errorObligatorio = <small className="text-danger">El campo es obligatorio *</small>;
  const errorDNI = <small className="text-danger">Coloque un DNI de 8 digitos</small>;

  const postRepartidor = (nuevoRepartidor) => {
    const endpoint = `${URL_BACKEND}/repartidor`;

    console.log(JSON.stringify(nuevoRepartidor));

    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(nuevoRepartidor),
      headers: {
        "Content-type": "application/json"
      }
    }).then((response) => {
      response.json().then((data) => {
        // reset() => es parte de useForm() y es una función que sirve para
        // reiniciar un formualrio con un conjunto de datos por defecto para todos
        // los campos.
        reset(formVacio);
        // data, el resultado de la creacion del Repartidor
        Swal.fire({
          title: 'Éxito!',
          icon: 'success',
          text: 'El Repartidor ha sido creado con éxito en la base de datos',
          timer: 2000,
          // showConfirmButton: false
        });
        getRepartidores();
        console.log(data);
      })
    })
  }
  // Funcion que actualiza un repartidor en la BD
  const putRepartidor = (nuevoRepartidor) => {
    const endpoint = `${URL_BACKEND}/repartidor/${objRepartidor.id}`;
    fetch(endpoint, {
      method: 'PUT',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(nuevoRepartidor)
    }).then((response) => {
      response.json().then((data) => {
        Swal.fire({
          title: "Actualizado!",
          text: "Registro actualizado correctamente",
          icon: "success",
          timer: 1500
        });
        // limpiar el form
        reset(formVacio);
        getRepartidores();
        setObjRepartidor(null);
      })
    })
  }

  const enviarFormulario = (data) => {
    console.log(data);
    if (modoEditar) {
      // tengo editar el registro
      // LLAMADA A LA API CON EL VERBO PUT (fetch)
      Swal.fire({
        title: '¿Seguro que desea editar el registro?',
        icon: 'info',
        text: 'Los cambios harán efecto de inmediato en la base de datos',
        showCancelButton: true
      }).then((result) => {
        if (result.value) {
          console.log("OK PODEMOS EDITAR AL REPARTIDOR");
          putRepartidor(data);
        }
      })
    } else {
      // tengo crear el registro
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
              className="form-control"
              ref={register({ required: true })}
              // defaultValue => un valor por defecto que puede ser modificado
              // sin alterar el state.
              defaultValue={modoEditar ? objRepartidor.rep_nom : ""} />

            {errors.rep_nom && errors.rep_nom.type === "required" ?
              errorObligatorio : null}
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="">Apellido:</label>
            <input type="text" name="rep_ape"
              className="form-control" ref={register({ required: true })}
              defaultValue={modoEditar ? objRepartidor.rep_ape : ""} />

            {errors.rep_ape && errors.rep_ape.type === "required" ?
              errorObligatorio : null}
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="">Estado:</label>
            <select className="form-control" name="rep_est"
              ref={register({ required: true })}
              defaultValue={modoEditar ? objRepartidor.rep_est : ""}>
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
              ref={register({ required: true, pattern: /^[0-9]{8,8}$/ })}
              defaultValue={modoEditar ? objRepartidor.rep_dni : ""} />
            {errors.rep_dni && errors.rep_dni.type === "required" ?
              errorObligatorio : null}
            {errors.rep_dni && errors.rep_dni.type === "pattern" ?
              errorDNI : null}
          </div>
          <div className="form-group col-md-6">
            {
              modoEditar ?
                <button className="btn btn-success btn-block" type="submit">
                  Actualizar Repartidor
                </button> :
                <button className="btn btn-primary btn-block" type="submit">
                  Crear Repartidor
                </button>
            }
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
