import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Carrusel from "../../components/carrusel/Carrusel";
import "./home.scss";
import hamburguesa from "/hamburguesa.png";
import pizza from "/pizza.png";
import CardRestaurante from "../../components/cardRestaurante/CardRestaurante";

const Home = () => {
  // const prods = useSelector((store) => store.auth);
  // console.log('estas son las prods',prods.displayName)
  return (
    <>
      <div className="container-home">
        <Carrusel />
        <h4>Restaurants and cafes</h4>
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
        <CardRestaurante />
      </div>

      <Outlet />
    </>
  );
};

export default Home;
