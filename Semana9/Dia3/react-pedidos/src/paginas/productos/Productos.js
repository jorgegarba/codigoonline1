import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext';

const Productos = () => {
 const authContextLocal = useContext(AuthContext);
 const { autenticarConStorage } = authContextLocal;

 useEffect(() => {
  autenticarConStorage();
 }, [])

 return (
  <div>
   Productos
  </div>
 )
}

export default Productos
