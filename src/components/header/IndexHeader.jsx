import React from 'react'
import { NavLink } from 'react-router-dom'

const IndexHeader = () => {
    return (
        <div className="jumbotron col-9">
            <h1 className="display-4 text-center">Conozca su horoscopo</h1>
            <p className="leads">Instrucciones:</p>
            <hr className="my-1" />
            <p>Para conocer su horoscopo debe ingresar en el formulario unicamente el dia y mes de nacimiento.</p>
            <NavLink to="/horoscopo" className="mt-2 nav-item">
                <p className="btn btn-primary">Ingresar Fecha</p>
            </NavLink>
        </div>
    )
}

export default IndexHeader
