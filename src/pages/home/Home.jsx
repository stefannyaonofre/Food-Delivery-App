import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Carrusel from "../../components/carrusel/Carrusel";
import "./home.scss";
import hamburguesa from "/hamburguesa.png";
import pizza from "/pizza.png";
import CardRestaurante from "../../components/cardRestaurante/CardRestaurante";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
 
 
  return (
    <>
      <div className="container-home">
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
        <CardRestaurante />
      </div>
    </>
  );
};

export default Home;
