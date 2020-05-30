import React, { useState, Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ agregarContacto }) => {

  const [contacto, setContacto] = useState({
    nombres: '',
    apellidos: '',
    fechaNac: '',
    direccion: '',
    telCasa: '',
    telCelular: '',
    observaciones: ''
  });

  const [error, setError] = useState(false);

  // funcion que modifica el state de acuerdo a los inputs del formulario.
  const handleChange = (e) => {
    let contactoAntiguo = { ...contacto };
    contactoAntiguo[e.target.name] = e.target.value;
    setContacto(contactoAntiguo);
  }

  const enviarFormulario = (e) => {
    // Prevenir que la pagina se recargue
    e.preventDefault();
    // Validar que todos los campos estén llenos
    let { nombres, apellidos, fechaNac, telCelular,
      direccion, observaciones, telCasa } = contacto;

    // let nombres = contacto.nombres;

    if (nombres.trim() === "" || apellidos.trim() === "" ||
      fechaNac.trim() === "" || telCelular.trim() === "" ||
      direccion.trim() === "" || observaciones.trim() === "" ||
      telCasa.trim() === "") {
      // hay un error y todos los campos deben ser llenados
      setError(true);
      return;
    } else {
      // significa que no hay errores en el formulario
      // por sí acaso, cambiamos el error a false, sin importar su valor anterior
      setError(false);
      // crear el contacto en la agenda
      let copiaContacto = { ...contacto };
      // generando un nuevo atributo a la copiaContacto
      copiaContacto.id = uuidv4();
      agregarContacto(copiaContacto);
      // reiniciar el formulario, es decir el state
      setContacto({
        nombres: '',
        apellidos: '',
        fechaNac: '',
        direccion: '',
        telCasa: '',
        telCelular: '',
        observaciones: ''
      });
    }

  }

  return (
    <Fragment>

      <form className="row" onSubmit={enviarFormulario}>

        {
          error ?
            <div className="col-12">
              <div className="alert alert-danger text-center" role="alert">
                <strong>Error!</strong> Todos los campos, deben estar debidamente llenados
              </div>
            </div> : null
        }


        <div className="form-group col-md-3">
          <label htmlFor="inputNombre">Nombres:</label>
          <input type="text" id="inputNombre" className="form-control"
            name="nombres" onChange={handleChange} value={contacto.nombres} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputApellidos">Apellidos:</label>
          <input type="text" id="inputApellidos" className="form-control"
            name="apellidos" onChange={handleChange} value={contacto.apellidos} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputFecha">Fecha de Nacimiento:</label>
          <input type="date" id="inputFecha" className="form-control"
            name="fechaNac" onChange={handleChange} value={contacto.fechaNac} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputDireccion">Dirección:</label>
          <input type="text" id="inputDireccion" className="form-control"
            name="direccion" onChange={handleChange} value={contacto.direccion} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputTelCasa">Teléfono de Casa:</label>
          <input type="text" id="inputTelCasa" className="form-control"
            name="telCasa" onChange={handleChange} value={contacto.telCasa} />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputTelCelular">Telefono Celular:</label>
          <input type="text" id="inputTelCelular" className="form-control"
            name="telCelular" onChange={handleChange} value={contacto.telCelular} />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputObservaciones">Observaciones:</label>
          <textarea cols="30" id="inputObservaciones" rows="2" className="form-control"
            name="observaciones" onChange={handleChange} value={contacto.observaciones}></textarea>
        </div>
        <div className="form-group col-12">
          <button type="submit" className="btn btn-block btn-outline-primary">
            Agregar Contacto
        </button>
        </div>
      </form>
    </Fragment>
  )
}

export default Formulario
