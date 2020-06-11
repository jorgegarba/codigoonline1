import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext';

const Clientes = () => {

 const authContextLocal = useContext(AuthContext);
 const { autenticarConStorage } = authContextLocal;

 useEffect(() => {
  autenticarConStorage();
 }, [])


 return (
  <div>
   Clientes
  </div>
 )
}

export default Clientes
