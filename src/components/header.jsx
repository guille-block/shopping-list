import React from 'react'
import './header.css'

const Header = ({activar, cambiar, cambiarCant ,valor, cantidades}) => {
    return (
    <form className = 'form-align' onSubmit = {activar}>
        <span><input  className = 'input-text' type="text" minLength="2" value = {valor} onChange = {cambiar} required></input></span>
        <span>
        <input  className = 'input-number' type="number" value = {cantidades} onChange = {cambiarCant} ></input>
          <button className = 'boton-agregar' type="submit">
          Incorporar
          </button>
          </span>
        </form>)
}

export default Header