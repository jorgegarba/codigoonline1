// Creando una promesa
const consumo = () => {
 return new Promise((resolve, reject) => {
  // Todo el código asincrono, es colocado en una promesa
  // sin importar el tiempo que dure dicho código
  setTimeout(() => {
   let rpta = [45, 69, 90];
   // resolve se usa, cuando la promesa se cumplió correctamente
   // tras haber esperado un tiempo
   let mensaje = "Tiempo de espera agotado";
   reject(mensaje);
  }, 2000);
 })
}


// Cuando ejectutamos la funcion 'consumo'
// Nos suscribimos a una promesa, nos anotamos a una promesa
// esperamos la respuesta de una promesa
// y cuando la respuesta de la promesa sea positiva o buena o se cumpla
// la data que recibiremos, llegará en la función THEN (then se conecta con resolve)
// Sin embargo, cuando la promesa no se cumpla o haya un error en ella,
// tendremos que recibir dicho error en la función CATCH (catch se conecta con reject)
consumo().then((respuesta) => {
 
 console.log("éxito");
 console.log(respuesta);

}).catch((error) => {
 
 console.log("Ocurrio un error");
 console.log(error);
 
})