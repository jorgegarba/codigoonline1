import { URL_BACKEND } from './../variables/variables';
export class RepartidorService {
  endpoint = "/repartidor";
  /**
   * Funcion que trae toooooooodos los repartidores
   */
  getAllRepartidores() {
    return new Promise((resolve, reject) => {
      fetch(`${URL_BACKEND}${this.endpoint}`, {
        // method: "GET",
        // headers: {
        //   "Authorization": "Bearer !@#$!@#$#.!@#$#@!@#$#@!.@#@!@",
        //   "Content-type": "application/json"
        // },
        // body: null
      })
        .then((response) => {
          response.json().then((repartidores) => {
            resolve(repartidores);
          })
        })
    })
  }

}