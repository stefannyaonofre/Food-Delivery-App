import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlatoById } from '../../services/platosServices';
import './product.scss';

const Product = () => {

    const { idPlato } = useParams();
    const [ plato, setPlato ] = useState([]);

    useEffect(() => {
        getPlato();
    },[])

    const getPlato = async () => {
        try {
            const response = await getPlatoById(idPlato)
            
            setPlato(response);
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <section className='container-plato'>
        <img src={plato?.imagen} alt={plato?.nombre} />
        <span>{plato?.nombre}</span>
        
    </section>
  )
}

export default Product