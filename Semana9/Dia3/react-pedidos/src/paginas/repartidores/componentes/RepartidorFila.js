import React from 'react'

const RepartidorFila = ({ repartidor, numero, setObjRepartidor }) => {
  return (
    <tr>
      <td>{numero}</td>
      <td>{repartidor.id}</td>
      <td>{repartidor.rep_nom}</td>
      <td>{repartidor.rep_ape}</td>
      <td>
        {
          repartidor.rep_est === true ?
            <span className="badge badge-success">Habilitado</span> :
            <span className="badge badge-danger">Inhabilitado</span>
        }
      </td>
      <td>{repartidor.rep_dni}</td>
      <td>
        <button className="btn btn-info" onClick={() => {
          setObjRepartidor(repartidor);
        }}>
          Editar
        </button>
      </td>
    </tr>
  )
}

export default RepartidorFila
