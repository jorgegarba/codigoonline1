import React, { useReducer } from 'react'
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { AuthService } from '../../servicios/AuthService';

const AuthState = (props) => {

  // creando un objeto del servicio AUTH
  const objAuthService = new AuthService();

  const initialState = {
    autenticado: null,
    token: "",
    usuario: null,
    mensaje: null,
  }

  // Creamos el state global
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // FUNCIONES DE AUTH STATE
  const iniciarSesion = (email, password) => {

    objAuthService.postLoggin(email, password)
      .then(data => {
        // DEBERIA USAR EL DISPATCH
        console.log(data);
        if (data.message === "ok") {
          dispatch({
            type: "INICIO_EXITOSO",
            payload: data.token
          })
        } else {
          // GENERAR UN ERROR
          dispatch({
            type: "ERROR_SESION",
            payload: data.contenido
          })
        }
      })
  }

  const cerrarSesion = () => {
    dispatch({
      type: "CERRAR_SESION"
    })
  }

  // Esta funcion sirve para autenticar a un usuario
  // cuando la pagina se recargue y aún tenga un token
  // válido en el LS
  const autenticarConStorage = () => {
    const token = localStorage.getItem("token");
    if (token) {
      // validar el tiempo de vida del TOKEN
      let rpta = objAuthService.validarToken(token);
      if (rpta === true) {
        dispatch({
          type: "AUTENTICAR_LS_EXITOSO",
          payload: token
        })
      } else {
        dispatch({
          type: "BORRAR_SESION",
        })
      }
    }

  }


  return (
    <AuthContext.Provider value={{
      autenticado: state.autenticado,
      usuario: state.usuario,
      mensaje: state.mensaje,
      cerrarSesion: cerrarSesion,
      iniciarSesion: iniciarSesion,
      autenticarConStorage: autenticarConStorage
    }}>

      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
