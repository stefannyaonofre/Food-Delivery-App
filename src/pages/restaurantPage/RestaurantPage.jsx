import React from "react";
import "./restaurantPage.scss";
import logo from "/Logo.png";
import restaurante from "/restaurante.png";
import start from "/start.svg";
import hamburguesa from "/hamburguesa.png";
import pizza from "/pizza.png";

const RestaurantPage = () => {
  return (
    <section className="container__page-restaurant">
      <figure className="container__page-restaurant__logo">
        <img src={logo} />
      </figure>
      <div className="container__page-restaurant__info">
        <img
          src={restaurante}
          className="container__page-restaurant__info__img"
        />
        <div>
          <h6>Pardes Restaurant</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            eveniet neque ratione, suscipit quos, ullam, enim nemo facilis est
            mollitia.
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
    </section>
  );
};

export default RestaurantPage;
