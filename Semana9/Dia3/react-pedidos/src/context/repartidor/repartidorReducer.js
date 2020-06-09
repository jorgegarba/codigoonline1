// state, ULTIMO ESTADO O ESTADO ANTIGUO 

// action, INFORMACION PARA EL CAMBIO DE ESTADO
// action, ES EL OBJETO ENVIADO POR EL DISPATCH


const RepartidorReducer = (state, action) => {
  // El reducer toma la decisión bajo distinas
  // acciones solicitadas por el dispatch para modificar el estado
  // En Cristiano, tiene una lista de funciones para settear el State
  // al nuevo State
  

  switch (action.type) {
    case "CAMBIAR_OBJREPARTIDOR":
      // el valor que retorne, será el nuevo STATE
      return {
        ...state,
        objRepartidor: action.payload
      }
  }


}

export default RepartidorReducer;