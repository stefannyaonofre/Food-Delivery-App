import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import { initialUser, userReducer } from "../reducers/useReducer";
import Registro from "../pages/registro/Registro";

const Router = () => {

    const [userLogin, userDispatch] = useReducer(userReducer, initialUser)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route element={<PublicRouter isAutenticated={userLogin.isAutenticated} />}>
                <Route index element={<Login />} />
                <Route path="registro" element={<Registro />} />
            </Route>
            <Route element={<PrivateRouter isAutenticated={userLogin.isAutenticated} />}>
              <Route path="home" element={<Home/>} />  
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
