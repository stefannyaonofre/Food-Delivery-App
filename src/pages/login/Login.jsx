import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import google from "/google.svg";
import fb from "/facebook.svg";
import phone from "/phone.svg";;
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { useForm } from "react-hook-form";


const Login = () => {
  const navigate = useNavigate();

  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

   const isAuthenticating = useMemo(() => status === "checking", [status]);
   
   const {register, handleSubmit, formState:{errors}} = useForm()


  const onSubmit = ({email,password}) => {
    
    // onResetForm()
     console.log(email, password);
    dispatch(startLoginWithEmailPassword({email,password}));
  };
  

  const onGoogleSignIn = async() => {
    console.log("entre con google");

   await dispatch(startGoogleSignIn());
    console.log({ status });
    if (status == 'authenticated') {
      navigate('/home'); // Redirige a la página de inicio (/home) después de autenticar con Google
    }else{
      console.log('me quede en login')
      // navigate('/')
    }
  };


  return (
    <main className="d-flex justify-content-center align-items-center vw-100 vh-100 login">
      <form 
      className="card p-5 form-login" 
       onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label className="form-label">
            <span>Email</span>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="Escriba su correo"
              name="email"
              {...register('email', {required:true})}
              
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Contraseña</span>
            <input
              type="password"
              className="form-control mt-2"
              placeholder="Escriba su contraseña"
              name="password"
              {...register('password', {required:true})}
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn login-button mb-4"
          disabled={isAuthenticating}
        >
          Iniciar sesión
        </button>

        <button
          type="submit"
          className="btn login-button mb-4"
          onClick={onGoogleSignIn}
          // onClick={() => {
          //   onGoogleSignIn();
          //   setShouldRedirect(true); // Activa la redirección
          // }}
          disabled={isAuthenticating}
        >
          {" "}
          <img src={google} /> Google
        </button>

        <button type="submit" className="btn login-button mb-4">
          <img src={fb} />
          Facebook
        </button>

        <button type="submit" className="btn login-button mb-4">
          <img src={phone} />
          Código de verificación
        </button>

        <span className="text-white text-center d-block mb-2">
          ¿Deseas registrarte?
          <hr />
          <Link to="/registro" className="text-dark">
            Registrar usuario
          </Link>
        </span>
      </form>
    </main>
  );
};

export default Login;
