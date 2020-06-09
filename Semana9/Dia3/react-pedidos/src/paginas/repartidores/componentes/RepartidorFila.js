import React, { useState, useEffect, useContext } from 'react'
import Switch from 'react-switch';
import { URL_BACKEND } from '../../../variables/variables';
import RepartidorContext from '../../../context/repartidor/repartidorContext';

const RepartidorFila = ({ repartidor, numero }) => {

  // Codigo para consumir el CONTEXT O EL STATE GLOBAL DE REPARTIDOR
  //
  const repartidorContextLocal = useContext(RepartidorContext);
  const { setObjRepartidor } = repartidorContextLocal;
  //
  // FIN Codigo para consumir el CONTEXT O EL STATE GLOBAL DE REPARTIDOR

  const [checked, setChecked] = useState(false);

  // funcion que se conecta a la BD y cambia el estado del repartidor
  const putRepartidor = () => {

    let nuevoRepartidor = { ...repartidor };
    // Al nuevo repartidor le colocamos el estado contrario
    // al que tiene en el componente actualmente,
    // ESTO SE DA PORQUE SI NO ES TRUE, ES FALSE (dicotomico)
    // rep_est => mandamos la negacion del estado actual
    // pero l o convertimos a STRING porque es el formato del campo que estamos
    // contemplando
    nuevoRepartidor.rep_est = !checked + "";

    const endpoint = `${URL_BACKEND}/repartidor/${repartidor.id}`;
    fetch(endpoint, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(nuevoRepartidor)
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);

        // AQUI NOS ASEGURAMOS DE QUE EL REPARTIDOR, HA CAMBIADO SU 
        // ESTADO EN LA BD
        // En consecuencia, ya podemos hacer el cambio de estao local
        // lo que generará un cambio visual para que el usuario
        // vea el DOM actualizado.
        setChecked(!checked);
      })
    })
  }


  useEffect(() => {
    if (repartidor.rep_est === "true") {
      setChecked(true);
    }
  }, []);


  return (
    <tr>
      <td>{numero}</td>
      <td>{repartidor.id}</td>
      <td>{repartidor.rep_nom}</td>
      <td>{repartidor.rep_ape}</td>
      <td>
        {
          checked ?
            <span className="badge badge-success">Habilitado</span> :
            <span className="badge badge-danger">Inhabilitado</span>
        }
        <Switch
          checked={checked}
          onChange={putRepartidor} />

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
