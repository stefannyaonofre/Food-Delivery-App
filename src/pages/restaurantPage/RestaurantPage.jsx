import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRestaurantsMenuFromCollection } from "../../store/platos/platosAction";
import "./restaurantPage.scss";
import logo from "/Logo.png";
import start from "/start.svg";
import hamburguesa from "/hamburguesa.png";
import pizza from "/pizza.png";
import { getRestaurantById } from "../../services/restaurantesServices";
import CardPlatos from "../../components/cardPlatos/CardPlatos";

const RestaurantPage = () => {

  const dispatch = useDispatch();
  const { idRestaurant } = useParams();
  const { platos } = useSelector((store) => store.platos);
  const [ restaurante, setRestaurante ]  = useState([])
  console.log(platos);

  useEffect(() => {
    dispatch(getRestaurantsMenuFromCollection(idRestaurant));
    getRestaurant();
  }, [dispatch, idRestaurant]);

  const getRestaurant = async () => {
    try {
      const response = await getRestaurantById(idRestaurant);
      setRestaurante(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="container__page-restaurant">
      <figure className="container__page-restaurant__logo">
        <img src={logo} />
      </figure>
      <div className="container__page-restaurant__info">
        <img
          src={restaurante?.imagen}
          className="container__page-restaurant__info__img"
        />
        <div>
          <h6>{restaurante?.nombre}</h6>
          <p>
            {restaurante?.descripcion}
          </p>
          <img src={start} />
        </div>
      </div>
      <div className="container-filtro-restaurant">
        <div className="container-filtro-restaurant-item">
          <span>All</span>
        </div>
        <div className="container-filtro-restaurant-item">
          <img src={hamburguesa} />
          <span>Fast food</span>
        </div>
        <div className="container-filtro-restaurant-item">
          <img src={pizza} />
          <span>Pizza</span>
        </div>
      </div>
      <div className="container-platos">
      {
        platos?.map(data => (
          <CardPlatos plato={data} key={data.id}/>
        ))
      }
      </div>
    </section>
  );
};

export default RestaurantPage;
