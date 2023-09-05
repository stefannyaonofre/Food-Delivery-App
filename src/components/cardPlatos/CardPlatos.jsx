import React from 'react';
import './cardPlatos.scss';

const CardPlatos = ({plato}) => {
  return (
    <section className='card-platos'>
      <img src={plato.imagen} alt={plato.id} />
      <span>{plato.nombre}</span>
      
      <span>${plato.precio}</span>

    </section>
  )
}

export default CardPlatos