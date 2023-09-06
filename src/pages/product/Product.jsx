import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlatoById } from '../../services/platosServices';
import './product.scss';

const Product = () => {
    const { idPlato } = useParams();
    const [plato, setPlato] = useState([]);
  
    useEffect(() => {
      getPlato();
    }, []);
  
    const getPlato = async () => {
      try {
        const response = await getPlatoById(idPlato);
  
        setPlato(response);
      } catch (error) {
        console.log(error);
      }
    };
  
    const [contador, setcontador] = useState(1);
    const ordenarproduct = (cantidad, total) => {
      const newProducto = {
        plato,
        cantidad: cantidad,
        total: total
      }
      // console.log(newProducto)
      
      sessionStorage.setItem('orden', JSON.stringify(newProducto));
    }
  
    const handleCotadormas = () => {
      setcontador(contador + 1);
    };
    const handleCotadormenos = () => {
      setcontador(contador - 1);
    };
  
    return (
      <section className="container-plato">
        <div className="nombre-container">
          <img src={plato?.imagen} alt={plato?.nombre} />
          <span>{plato?.nombre}</span>
        </div>
        <div className="order-container">
          <div className="contador">
            {contador > 1 ? (
              <button onClick={handleCotadormenos}>-</button>
            ) : (
              <button disabled onClick={handleCotadormenos}>
                -
              </button>
            )}
            <span>{contador}</span>
            {contador > -1 ? (
              <button onClick={handleCotadormas}>+</button>
            ) : (
              "nada"
            )}
          </div>
          <button className="btn-order"
          onClick={() => ordenarproduct(contador, plato.precio * contador )}>
            Ordenar
            <span>{plato.precio * contador}$</span>
          </button>
        </div>
      </section>
    );
  };
  
  export default Product;