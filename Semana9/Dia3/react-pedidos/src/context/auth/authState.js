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
  usuario: null
 }

 // Creamos el state global
 const [state, dispatch] = useReducer(AuthReducer, initialState);

 // FUNCIONES DE AUTH STATE
 const iniciarSesion = (email, password) => {

  objAuthService.postLoggin(email, password)
   .then(data => {
    // DEBERIA USAR EL DISPATCH
    console.log(data);
   })

 }


 return (
  <AuthContext.Provider value={{
   iniciarSesion: iniciarSesion
  }}>

   {props.children}
  </AuthContext.Provider>
 )
}

export default AuthState
