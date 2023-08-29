import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import { initialUser, userReducer } from "../reducers/useReducer";
import Registro from "../pages/registro/Registro";
import Carrusel from "../components/carrusel/Carrusel";
import { useSelector } from "react-redux";
import RestaurantPage from "../pages/restaurantPage/RestaurantPage";
import Search from "../components/search/Search";
import Profile from "../components/profile/Profile";
import Orders from "../components/orders/Orders";
import Layout from "../components/layout/Layout";

const Router = () => {

  const [userLogin, userDispatch] = useReducer(userReducer, initialUser)
  const {status} = useSelector(state => state.auth)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route element={<PublicRouter isAutenticated={status} />}>
                <Route index element={<Login />} />
                <Route path="registro" element={<Registro />} />
            </Route>
            <Route element={<PrivateRouter isAutenticated={status} />}>
            <Route element={<Layout/>}>
              <Route path="home" element={<Home/>} /> 
              <Route path="restaurant" element={<RestaurantPage />} />
              <Route path="search" element={<Search/>}/>
              <Route path="orders" element={<Orders/>}/>
              <Route path="profile" element={<Profile/>}/>
              </Route>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
