import React, { useState } from 'react';
import { switchSigno } from './SwitchSigno'
import { horoscopoPorSigno } from './HoroscopoPorSigno'
import { NavLink } from 'react-router-dom';

const IndexFormulario = () => {
    const [modoEdicion, setModoEdicion] = useState(false)
    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    const [signo, setSigno] = useState('')
    const [horoscopo, setHoroscopo] = useState('')
    var signo1;

    function capturarMes(e) {
        setMes(e.target.value);
    };

    const signoZo = () => {
        setModoEdicion(true)
        setDia('')
        setMes('')
        signo1 = switchSigno(mes, dia)
        setSigno(signo1)
        setHoroscopo(horoscopoPorSigno(signo1))
    }
    return (

        <div className="container form card  col-xs-3 col-sm-8 col-md-8 col-lg-8">
            <p className="display-4 pt-2 text-center">¿Cual es mi Horoscopo?</p>
            <form onSubmit={modoEdicion ? signoZo : signoZo}>
                <div className="form-group">
                    <label className="h1">
                        {
                            modoEdicion ? 'Signo Zodiacal' : 'Día'
                        }
                    </label>
                    <div>
                        {
                            modoEdicion ? <h3>{signo}</h3>
                                :
                                (
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={dia}
                                        placeholder="Ingrese el dia"
                                        onChange={e => setDia(e.target.value)}
                                    />
                                )
                        }
                    </div>
                </div>
                <div className="form-group">
                    <label className="h1">
                        {
                            modoEdicion ? 'Horoscopo' : 'Mes'
                        }
                    </label>
                    <div>
                        {
                            modoEdicion ?
                                (
                                    <p>{horoscopo}</p>
                                ) :
                                (
                                    <select onChange={capturarMes} multiple className="form-control">
                                        <option value="ene">Enero</option>
                                        <option value="feb">Febrero</option>
                                        <option value="mar">Marzo</option>
                                        <option value="abr">Abril</option>
                                        <option value="may">Mayo</option>
                                        <option value="jun">Junio</option>
                                        <option value="jul">Julio</option>
                                        <option value="ago">Agosto</option>
                                        <option value="sep">Septiembre</option>
                                        <option value="oct">Octubre</option>
                                        <option value="nov">Noviembre</option>
                                        <option value="dic">Diciembre</option>
                                    </select>
                                )
                        }
                    </div>
                    <br />
                    <div className="btn-group" role="group" aria-label="Basic example">
                        {
                            modoEdicion ? (
                                <NavLink to="/" className="mt-2 nav-item">
                                    <p className="btn btn-secondary">Volver</p>
                                </NavLink>
                            ) :
                                (
                                    <button
                                        onClick={() => signoZo()}
                                        type="submit"
                                        className="btn btn-secondary"
                                    >
                                        Aceptar
                                    </button>
                                )
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}
export default IndexFormulario;