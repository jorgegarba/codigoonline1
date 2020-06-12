import React from 'react'
import { Button } from '@material-ui/core'

const AdminClientes = () => {

 const goToGoogle = () => {
  window.open("https://www.google.com", "_blank")
 }

 return (
  <div>
   admin cloentes
   <Button color={"primary"} variant={"contained"} onClick={() => {
    goToGoogle();
   }}>
    Enlace a pagina externa
   </Button>
   
  </div >
 )
}

export default AdminClientes
