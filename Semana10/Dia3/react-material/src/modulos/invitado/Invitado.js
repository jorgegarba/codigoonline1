import React, { Fragment } from 'react'
import InvitadoHeader from './componentes/InvitadoHeader';
import {
 Route,
 Switch
} from 'react-router-dom';
import InvitadoContacto from './paginas/contacto/InvitadoContacto';
import InvitadoNosotros from './paginas/nosotros/InvitadoNosotros';
import InvitadoHome from './paginas/home/InvitadoHome';
import 'bootstrap/dist/css/bootstrap.min.css'

const Invitado = () => {
 return (
  <Fragment>
   <InvitadoHeader />
   <Switch>
    <Route path={"/contacto"}
     component={InvitadoContacto} />
    <Route path={"/nosotros"}
     component={InvitadoNosotros} />
    <Route component={InvitadoHome} />
   </Switch>
  </Fragment>
 )
}

export default Invitado
