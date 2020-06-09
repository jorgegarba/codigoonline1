import React, { useReducer } from 'react';
import RepartidorReducer from './repartidorReducer';
import RepartidorContext from './repartidorContext';

const RepartidorState = (props) => {

 // Creamos un objeto inical como state inicial de REPARTIDOR
 const estadoInicial = {
  objRepartidor: null
 }

 // Crear un state y el (setState) que ahora lo llamaremos dispatch
 const [state, dispatch] = useReducer(RepartidorReducer, estadoInicial);

 // Lista de funciones que van a trabajar e intentar modificar el STATE

 // Funcion que intenta settear el valor del objRepartidor del STATE
 const setObjRepartidor = (nuevoValor) => {

  dispatch({
   type: "CAMBIAR_OBJREPARTIDOR",
   payload: nuevoValor
  });

 }


 return (
  <RepartidorContext.Provider value={{
   objRepartidor: state.objRepartidor,
   setObjRepartidor: setObjRepartidor
  }}>
   {props.children}

  </RepartidorContext.Provider>
 )
}


export default RepartidorState;