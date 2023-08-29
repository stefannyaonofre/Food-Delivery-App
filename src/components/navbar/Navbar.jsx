import React from "react";
import "./navbar.scss";
import home from "/Home.svg";
import search from "/Search.svg";
import orders from "/Orders.svg";
import profile from "/Profile.svg";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };
  const handleSearch = () => {
    navigate("/search");
  };
  const handleOrders = () => {
    navigate("/orders");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  return (
    <div className="nav">
      <figure className="nav__menu">
        <img className="icon" src={home} alt="" onClick={handleHome} />
        <img className="icon" src={search} alt="" onClick={handleSearch}/>
        <img className="icon" src={orders} alt="" onClick={handleOrders} />
        <img className="icon" src={profile} alt="" onClick={handleProfile}/>
      </figure>
    </div>
  );
};

export default Navbar;
