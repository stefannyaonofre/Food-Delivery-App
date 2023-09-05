import React from 'react';
import './cardRestaurante.scss';
import restaurante from "/restaurante.png";
import start from '/start.svg';
import { useNavigate } from 'react-router-dom';

const CardRestaurante = ({restaurant}) => {

  const navigate = useNavigate()

  const handleClick = (id) =>{
    navigate(`/${id}`)
  }

  return (
    <>
    <section className='container-cardRes' onClick={() => handleClick(restaurant.id)}>
      <div className='container-cardRes__img'>
        <img src={restaurant.imagen} />
      </div>
      <div className='container-cardRes__info'>
        <h5>{restaurant.nombre}</h5>
        <img src={start} />
        <p>Work Time <span>{restaurant.horario}</span></p>
        <span>Before you ${restaurant.promedioPrecios}</span>
      </div>
    </section>
  </>

  )
}

export default CardRestaurante