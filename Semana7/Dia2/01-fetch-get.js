let endpoint = "https://coronavirus-tracker-api.herokuapp.com/v2/locations";

fetch(endpoint, { method: 'GET', body: null })
 .then((rpta) => {
  // rpta => un objeto de tipo Response, que contiene
  // la información de la respuesta del servidor.
  // Sin embargo, no tiene directamente el json
  // que devuelve la API(no es un tema exclusivo con la API del COVID)
  // ENCADENAMIENTO DE PROMESAS
  rpta.json().then((data) => {

   console.log(data);
   
  }).catch((error) => {
   // error en la segunda promesa
   console.log(error);
  })
 }).catch((error) => {
  // error en la primera promesa
  console.log(error);
 })