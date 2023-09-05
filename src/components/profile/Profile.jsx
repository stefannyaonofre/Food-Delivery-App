import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./profile.scss";
import profile from "/Profile1.svg";
import profileicon from "/Profile.svg";
import arrow from "/Arrow.svg";
import language from "/language.svg";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/auth/authSlice";
const Profile = () => {
  const prods = useSelector((store) => store.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleProfileEd = () =>{ 
    navigate('/profileEdit')
  } 
const imagenPerfil = prods.photoURL

const sesionLog = () => {
  console.log('logout');
  dispatch(logout(prods.status));
};
  return (
    <>
    <button 
    type="button" 
    className="btn btn-warning "
    onClick={sesionLog}
    >Cerrar sesión</button>

      <h2>Perfil</h2>

    <div className="figure">
        <img src={imagenPerfil} alt="" />
        </div>
      <span className="nameUser">{prods.displayName}</span>

      <div className="user-profile">
        <img className="user-icon" src={profileicon} alt="Icono de Usuario" />
        <div className="profile-info">
          <span className="edit-account">Editar cuenta</span>
          <img 
          className="arrow-icon" 
          onClick={handleProfileEd}
          src={arrow} 
          alt="Icono de Flecha" />
        </div>
      </div>

      <div className="user-profile">
        <img className="user-icon" src={language} alt="Icono de Idioma" />
        <div className="profile-info">
          <span className="edit-account">Cambiar idioma</span>

          <button
            type="button"
            className="btn --bs-body-color--bs-body-color dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* <img className="arrow-icon" src={arrow} alt="Icono de Flecha" /> */}
          </button>
          <ul className="dropdown-menu">
            <li>Español</li>
            <li>Inglés</li>
            </ul>
          
        </div>
      </div>
    </>
  );
};

export default Profile;
