import React from 'react'
import "./barra.scss"
import barraCelular1 from "../../assets/imagenes/barraCelular.png"
import logo from "../../assets/imagenes/Logo.png"
import { useNavigate } from 'react-router-dom'

const Start = () => {

  const navigate = useNavigate()


  const handleClickEntrar = () => {
    navigate('/slider')
  }

  return (
    <section className='inicio__logo'>
      <img src={barraCelular1} alt="barra celular" className='barra__celular'/>
      <img src={logo} alt="barra celular" className='logo__principal' onClick={handleClickEntrar}/>
    </section>
    
  )
}

export default Barra; 