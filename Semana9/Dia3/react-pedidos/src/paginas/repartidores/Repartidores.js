import React, { useState, useEffect } from 'react'

const Repartidores = () => {

 const endpoint = "https://5ec86440155c130016a909c5.mockapi.io/repartidor";
 const [cargando, setCargando] = useState(true);
 const [repartidores, setRepartidores] = useState([]);

 const getRepartidores = () => {
  fetch(endpoint).then((response) => {
   response.json().then((data) => {
    setRepartidores(data);
   })
  })
 }

 useEffect(() => {
  getRepartidores();
 }, [])



 return (
  <div className="row justify-content-center">
   <div className="col-md-8">
    {/* {
     cargando === true ? // Alerta : // Tabla
    } */}
   </div>
  </div>
 )
}

export default Repartidores
