import React, { Fragment, useContext, useEffect } from 'react'
import PedidoForm from './componentes/PedidoForm'
import AuthContext from '../../context/auth/authContext'



const Pedidos = () => {

 const authContextLocal = useContext(AuthContext);
 const { autenticarConStorage } = authContextLocal;

 useEffect(() => {
  autenticarConStorage();
 }, [])


 return (
  <Fragment>
   <PedidoForm />

  </Fragment>
 )
}

export default Pedidos
