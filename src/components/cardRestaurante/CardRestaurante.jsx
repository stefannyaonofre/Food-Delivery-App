import React from 'react';
import './cardRestaurante.scss';
import restaurante from "/restaurante.png";
import start from '/start.svg';
import { useNavigate } from 'react-router-dom';

const CardRestaurante = () => {

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/restaurant')
  }

  return (
    <>
    <section className='container-cardRes' onClick={handleClick}>
      <div className='container-cardRes__img'>
        <img src={restaurante} />
      </div>
      <div className='container-cardRes__info'>
        <h5>Pardes Restaurant</h5>
        <img src={start} />
        <p>Work Time <span>09:30</span> <span>23:00</span></p>
        <span>Before you 4$</span>
      </div>
    </section>
    <section className='container-cardRes'>
    <div className='container-cardRes__img'>
      <img src={restaurante} />
    </div>
    <div className='container-cardRes__info'>
      <h5>Pardes Restaurant</h5>
      <img src={start} />
      <p>Work Time <span>09:30</span> <span>23:00</span></p>
      <span>Before you 4$</span>
    </div>
  </section>
  <section className='container-cardRes'>
    <div className='container-cardRes__img'>
      <img src={restaurante} />
    </div>
    <div className='container-cardRes__info'>
      <h5>Pardes Restaurant</h5>
      <img src={start} />
      <p>Work Time <span>09:30</span> <span>23:00</span></p>
      <span>Before you 4$</span>
    </div>
  </section>
  <section className='container-cardRes'>
    <div className='container-cardRes__img'>
      <img src={restaurante} />
    </div>
    <div className='container-cardRes__info'>
      <h5>Pardes Restaurant</h5>
      <img src={start} />
      <p>Work Time <span>09:30</span> <span>23:00</span></p>
      <span>Before you 4$</span>
    </div>
  </section>
  </>

  )
}

export default CardRestaurante