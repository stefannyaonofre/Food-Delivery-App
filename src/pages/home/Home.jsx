import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Home = () => {
  // const prods = useSelector((store) => store.auth);
  // console.log('estas son las prods',prods.displayName)
  return (
    <>
      <div >Hola bienvenide</div>
      
      <Outlet />
    </>
  );
};

export default Home;
