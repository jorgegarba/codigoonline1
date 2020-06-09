export class AuthService {
 endpoint = "https://autenticacion-codigo.herokuapp.com"



 async postUsuario(objUsuario) {
  let response = await fetch(`${this.endpoint}/usuario`, {
   method: 'POST',
   headers: { "Content-type": "application/json" },
   body: JSON.stringify(objUsuario)
  });
  let data = await response.json();
  return data;
 }
}