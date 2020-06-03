import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
 return (
  <header>
   <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <a className="navbar-brand" href="!#">CodiGo</a>
    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="!#collapsibleNavId" aria-controls="collapsibleNavId"
     aria-expanded="false" aria-label="Toggle navigation"></button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
       {/* <a className="nav-link" href="!#">Home <span className="sr-only">(current)</span></a> */}
       <Link className="nav-link" target={"_blank"} to={"/"}>Inicio</Link>
      </li>
      <li className="nav-item">
       {/* <a className="nav-link" href="!#">Link</a> */}
       {/* NavLink es el componente adecuado para los links del navbar*/}
       <Link className="nav-link" to={"/nosotros"}>Nosotros</Link>
      </li>
      <li className="nav-item">
       {/* <a className="nav-link" href="!#">Link</a> */}
       <Link className="nav-link" to={"/contacto"}>Contacto</Link>
      </li>
      <li className="nav-item">
       {/* <a className="nav-link" href="!#">Link</a> */}
       <Link className="nav-link" to={"/pokemones"}>Pokemones</Link>
      </li>
     </ul>
     <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
     </form>
    </div>
   </nav>
  </header>
 )
}

export default Header
