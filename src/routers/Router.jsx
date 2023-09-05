import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registro from "../pages/registro/Registro";
import { useDispatch, useSelector } from "react-redux";
import RestaurantPage from "../pages/restaurantPage/RestaurantPage";
import Search from "../components/search/Search";
import Profile from "../components/profile/Profile";
import Orders from "../components/orders/Orders";
import Layout from "../components/layout/Layout";
import Order from "../pages/order/Order";
import CurrentOrder from "../pages/currentOrder/CurrentOrder";
import OrderAccepted from "../pages/orderAccepted/OrderAccepted";
import Payment from "../pages/payment/Payment";
import NewCard from "../pages/newCard/NewCard";
import ManageAdresses from "../pages/manageAdresses/ManageAdresses";
import ProfileEdit from "../components/profileEdit/ProfileEdit";
import LoginPhone from "../pages/loginPhone/LoginPhone";
import InsertCode from "../components/insertCode/InsertCode";
import { onAuthStateChanged } from "@firebase/auth";
import { getUserActionFromCollection } from "../store/auth/thunks";
import { firebaseAuth, firebaseDB } from "../firebase/config";

const Router = () => {
  const { status, uid} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
    useEffect(() => { 
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                //const uid = user.uid;
                // console.log(user);
                if (!uid) {
                    dispatch(getUserActionFromCollection(user.uid));
                }
                // ...
            } else {
                // User is signed out
                // ...
                console.log("No hay sesión activa");
            }
        })
    }, [dispatch, uid]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<PublicRouter isAutenticated={status} />}>
            <Route index element={<Login />} />
            <Route path="registro" element={<Registro />} />
            <Route path="loginphone" element={<LoginPhone />} />
            <Route path="insertcode" element={<InsertCode />} />
          </Route>
          <Route element={<PrivateRouter isAutenticated={status} />}>
            <Route element={<Layout />}>
              <Route path="home" element={<Home />} />
              <Route path="restaurant" element={<RestaurantPage />} />
              <Route path="search" element={<Search />} />
              <Route path="orders" element={<Orders />} />
              <Route path="profile" element={<Profile />} />
              <Route path="profileEdit" element={<ProfileEdit />} />
              <Route path="adresses" element={<ManageAdresses />} />
              <Route path="order" element={<Order />} />
              <Route path="current" element={<CurrentOrder />} />
              <Route path="accepted" element={<OrderAccepted />} />
              <Route path="payment" element={<Payment />} />
              <Route path="new-card" element={<NewCard />} />

            
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
