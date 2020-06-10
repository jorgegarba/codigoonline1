
const AuthReducer = (state, action) => {

 switch (action.type) {
  // Cuando un CASE está seguido de otro
  // la lógica a aplicar es la misma, en este caso
  // tanto AUTENTICAR_LS_EXITOSO como INICIO_EXITOSO
  // reciben el token en el payload y modifican
  // el state autenticando al usuario y creando la
  // sesión
  case "AUTENTICAR_LS_EXITOSO":
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
   // guardar el token el localstorage
   localStorage.setItem("token", action.payload);
   return {
    ...state,
    autenticado: true,
    token: action.payload,
    usuario: medioDecJson.usu_nom
   }
  case "CERRAR_SESION":
   localStorage.removeItem("token");
   return {
    ...state,
    autenticado: null,
    token: "",
    usuario: null
   }
 }


}

export default AuthReducer;