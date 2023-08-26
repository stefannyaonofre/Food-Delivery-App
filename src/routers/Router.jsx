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

const Router = () => {

  const [userLogin, userDispatch] = useReducer(userReducer, initialUser)
  const {status} = useSelector(state => state.auth)
  console.log(status)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route element={<PublicRouter isAutenticated={status} />}>
                <Route index element={<Login />} />
                <Route path="registro" element={<Registro />} />
            </Route>
            <Route element={<PrivateRouter isAutenticated={status} />}>
              <Route path="home" element={<Home/>} />  
              <Route path="carrusel" element={<Carrusel/>}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
