import React from 'react'
import './list.css'
import {IoTrashOutline} from "react-icons/io5"


const List = ({component, remover, componentCant, sumarCant, restarCant}) => {


    return (
    <div>
        <ol className= 'order-list'>
         {component.map((contenido, index) => {
             return (
        <div className= 'list-horizontal'>
         <li><p className = 'p-color'>{contenido}</p>
         <button className= 'cant-espacios boton-eliminar' onClick ={() => {remover(contenido)}}>  
                Eliminar <IoTrashOutline/>
                </button>
             <div className= 'cantidades'> 
                 <button className= 'cant-espacios boton-modificar' onClick={() => {restarCant(index)}}>-</button>
                    <p className= 'cant-espacios vertical'>{componentCant[index]}</p>
                <button className= 'cant-espacios boton-modificar' onClick={() => {sumarCant(index)}}>+</button>
             </div>
            </li>
            </div>
        )})} 
        </ol>
    </div>)
}

export default List