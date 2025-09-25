import React from 'react'
import "./Card.css"

function Cards(props) {
  return (
    <div className='card-container'>
        <img 
            className='card-img' 
            alt={props.altImg}
            src={props.srcImg} 
        />
        <h3 className='card-nombre'>{props.nombre}</h3>
        <p className='card-descripcion'>{props.descripcion}</p>
        {/** Botones */}
    </div>
  )
}

export default Cards