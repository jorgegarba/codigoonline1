import React from 'react'
import RepartidorFila from './RepartidorFila'

const RepartidoresTabla = ({ repartidores }) => {
 return (
  <table className="table table-hover table-bordered table-striped">
   <thead>
    <tr>
     <th><strong>#</strong></th>
     <th>Id</th>
     <th>Nombre</th>
     <th>Apellido</th>
     <th>Estado</th>
     <th>Dni</th>
     <th>Acciones</th>
    </tr>
   </thead>
   <tbody>
    {
     repartidores.map((repartidor, i) => {
      return <RepartidorFila numero={i}
       repartidor={repartidor}
       key={repartidor.id} />
     })
    }
   </tbody>
  </table>
 )
}

export default RepartidoresTabla
