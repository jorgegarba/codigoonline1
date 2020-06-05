import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import { URL_BACKEND } from '../../../variables/variables';

const RepartidorFormV2 = ({ getRepartidores, objRepartidor, setObjRepartidor }) => {

  let formVacio = {
    rep_nom: '',
    rep_ape: '',
    rep_est: '',
    rep_dni: ''
  };



  const [formulario, setFormulario] = useState({});

  useEffect(() => {
    console.log("efecto objRepartidor");
    if (objRepartidor) {
      setFormulario(objRepartidor);
    } else {
      setFormulario(formVacio)
    }
  }, [objRepartidor])

  console.log("state form", formulario);



  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

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
        Swal.fire({
          title: 'Éxito!',
          icon: 'success',
          text: 'El Repartidor ha sido creado con éxito en la base de datos',
          timer: 2000,
        });
        getRepartidores();


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
        getRepartidores();
        setObjRepartidor(null);
      })
    })
  }
  const enviarFormulario = (e) => {
    e.preventDefault()
    if (objRepartidor) {
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
          putRepartidor(formulario);
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
          postRepartidor(formulario);
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
        <form className="row" onSubmit={enviarFormulario}>
          <div className="form-group col-md-3">
            <label htmlFor="">Nombre:</label>
            <input type="text" name="rep_nom"
              className="form-control"
              onChange={handleChange}
              value={formulario.rep_nom} />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="">Apellido:</label>
            <input type="text" name="rep_ape"
              className="form-control" onChange={handleChange}
              value={formulario.rep_ape} />

          </div>
          <div className="form-group col-md-3">
            <label htmlFor="">Estado:</label>
            <select className="form-control" name="rep_est"
              onChange={handleChange}
              value={formulario.rep_est}>
              <option value="">-Seleccione-</option>
              <option value="true">Habilitado</option>
              <option value="false">Inhabilitado</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="">Dni:</label>
            <input type="text" name="rep_dni"
              className="form-control"
              value={formulario.rep_dni}
              onChange={handleChange} />

          </div>
          <div className="form-group col-md-6">
            {
              objRepartidor ?
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

export default RepartidorFormV2
