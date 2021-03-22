import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Tarot from '../assets/img/tarot.png'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
      <img width="50px" src={Tarot} alt="" />
      <Link to="/" className="nav-item">
        <p className="navbar-brand ml-3 mt-2" >horoscopo Chapin</p>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <NavLink to="/horoscopo" className="mt-2 nav-item">
            <p className="nav-link">horoscopo</p>
          </NavLink>
          <NavLink to="/informacion" className="mt-2 nav-item">
            <p className="nav-link">Información</p>
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
