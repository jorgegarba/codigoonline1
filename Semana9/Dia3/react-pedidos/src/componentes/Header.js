import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
 return (
  <header>
   <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <a className="navbar-brand" href="!#">Pedidos</a>
    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
     aria-expanded="false" aria-label="Toggle navigation"></button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
       {/* <a className="nav-link" href="!#">Home <span className="sr-only">(current)</span></a> */}
       <Link to={"/clientes"} className="nav-link">Clientes</Link>
      </li>
      <li className="nav-item">
       {/* <a className="nav-link" href="!#">Link</a> */}
       <Link to={"/productos"} className="nav-link">Productos</Link>
      </li>
      <li className="nav-item">
       {/* <a className="nav-link" href="!#">Link</a> */}
       <Link to={"/pedidos"} className="nav-link">Pedidos</Link>
      </li>
      <li className="nav-item">
       {/* <a className="nav-link" href="!#">Link</a> */}
       <Link to={"/repartidores"} className="nav-link">Repartidores</Link>
      </li>
     </ul>
    </div>
   </nav>
  </header>
 )
}

export default Header
