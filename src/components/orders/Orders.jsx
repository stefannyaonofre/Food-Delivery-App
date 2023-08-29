import React from 'react'
import './orders.scss'
import order1 from '/order1.png'
import arrow from '/Arrow.svg'
const Orders = () => {
  return (
   <>
   <h2>Todas las ordenes</h2>
   <div className='orders'>
   <div className='order'>
    <figure>
      <img src={order1} alt="" />
    </figure>
    <div className='order__info'>
      <div className='restaurant'>
      <span>Pardes Restaurant</span>
      <span>132.00</span>
      </div>
      <div className='status'>
        <span>Delivered</span>
        <img src={arrow} alt="" />
      </div>
    </div>
   </div>

   <div className='order'>
    <figure>
      <img src={order1} alt="" />
    </figure>
    <div className='order__info'>
      <div className='restaurant'>
      <span>Pardes Restaurant</span>
      <span>240.00</span>
      </div>
      <div className='status'>
        <span>Cancelled</span>
        <img src={arrow} alt="" />
      </div>
    </div>
   </div>
   </div>
  
   </>
  )
}

export default Orders