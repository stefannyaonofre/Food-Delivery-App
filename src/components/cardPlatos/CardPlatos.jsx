import React from 'react';
import './cardPlatos.scss';
import { useNavigate } from 'react-router-dom';

const CardPlatos = ({plato}) => {

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/${id}/Product`)
  }

  return (
    <section className='card-platos' onClick={() => handleClick(plato.id)}>
      <img src={plato.imagen} alt={plato.id} />
      <span>{plato.nombre}</span>
      
      <span>${plato.precio}</span>
    </section>
  )
}

export default CardPlatos