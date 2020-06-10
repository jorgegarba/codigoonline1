
const AuthReducer = (state, action) => {

 switch (action.type) {
  case "INICIO_EXITOSO":
   // SPLIT a un STRING
   // asdasdasd.456456456.sdjnfkjnf
   // toma como separador el "."
   // y devuelve un arreglo con los elementos
   // trozados, en este caso un arreglo de 3
   // posiciones [asdasdasd,456456456,sdjnfkjnf]
   let medioEnc = action.payload.split(".")[1];
   let medioDec = atob(medioEnc);
   let medioDecJson = JSON.parse(medioDec);

   return {
    ...state,
    autenticado: true,
    token: action.payload,
    usuario: medioDecJson.usu_nom
   }
 }


}

export default AuthReducer;