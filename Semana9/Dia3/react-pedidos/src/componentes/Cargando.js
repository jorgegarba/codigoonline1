import React from 'react'

const Cargando = ({ tipo, texto }) => {

 let claseAlerta = "";
 switch (tipo) {
  case "success":
   claseAlerta = "alert alert-success text-center";
   break;
  case "danger":
   claseAlerta = "alert alert-danger text-center";
   break;
  case "warning":
   claseAlerta = "alert alert-warning text-center";
   break;
  case "info":
   claseAlerta = "alert alert-info text-center";
   break;
  default:
   claseAlerta = "alert alert-light text-center";
   break;
 }


 return (
  <div className={claseAlerta} role="alert">
   <h4 className="alert-heading">Cargando</h4>
   <p>{texto}</p>
   <p className="mb-0"></p>
  </div>
 )
}

export default Cargando
