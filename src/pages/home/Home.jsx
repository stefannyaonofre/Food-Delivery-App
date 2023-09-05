import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carrusel from "../../components/carrusel/Carrusel";
import "./home.scss";
import hamburguesa from "/hamburguesa.png";
import pizza from "/pizza.png";
import CardRestaurante from "../../components/cardRestaurante/CardRestaurante";
import localizacion from "/Svg.png";
import { getRestaurantesFromCollection } from "../../services/restaurantesServices";
import { fillRestaurantsFromCollection } from "../../store/restaurants/restaurantsAction";

const Home = () => {

  const dispatch = useDispatch();
  // const [restaurantes, setRestaurantes] = useState([]);
  const { restaurants } = useSelector(store => store.restaurants)

  useEffect(() => {
    // getRestaurantes()
    dispatch(fillRestaurantsFromCollection())
  }, [dispatch])

  // const getRestaurantes = async () => {
  //   const restaurants = await getRestaurantesFromCollection();
  //   setRestaurantes(restaurants);
  //   console.log(restaurants);
  // }

  return (
    <>
      <div className="container-home">
        <section className="container-home__localizacion">
          <figure className="container-home__localizacion-img">
          <img src={localizacion} />
          </figure>
          
          <div className="container-home__localizacion-direccion">
          <span>DELIVER TO</span>
            <span>882 Well St, New-York</span>
          </div>
            
        </section>
        <Carrusel />
        <span>Restaurants and cafes</span>
        <section className="container-filtro">
          <div className="container-filtro-item">
            <span>All</span>
          </div>
          <div className="container-filtro-item">
            <img src={hamburguesa} />
            <span>Fast food</span>
          </div>
          <div className="container-filtro-item">
            <img src={pizza} />
            <span>Pizza</span>
          </div>
        </section>
        {
          restaurants?.map(data => (
            <CardRestaurante restaurant={data} key={data.id}/>
          ))
        }
        
      </div>
    </>
  );
};

export default Home;
