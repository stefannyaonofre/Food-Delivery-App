import React from "react";
import "./restaurantPage.scss";
import logo from "/Logo.png";
import restaurante from "/restaurante.png";
import start from "/start.svg";

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
      </div>
      <div>
        <h6>Pardes Restaurant</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet neque ratione, suscipit quos, ullam, enim nemo facilis est mollitia totam cumque. Cum iure omnis quos officiis assumenda, libero voluptas.</p>
      </div>
    </section>
  );
};

export default RestaurantPage;
