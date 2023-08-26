import React, { useEffect, useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const formData = {
  email: '',
  password: '',
  displayName: '',
  // photoURL:'',
};

const Registro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    email,
    password,
    displayName,
    onInputChange,
    formState,
    onResetForm,
  } = useForm(formData);

  const {status, errorMessage} = useSelector((state) => state.auth)

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const onSubmit = async(e) => {
    e.preventDefault();
    const resp = await dispatch(startCreatingUserWithEmailPassword(formState));
    if(resp){
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Usuario registrado con éxito",
      }).then(navigate('/'))
    }else{
      Swal.fire({
        icon: "error",
        title: "Error en el registro",
        text: errorMessage,
      });
    }
  };

  return (
    <main className="d-flex justify-content-center align-items-center vw-100 vh-100 login">
      <form className="card p-5 form-login" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">
            <span>Nombre Completo</span>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Escriba su nombre"
              required
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Correo</span>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="Escriba su correo"
              required
              name="email"
              value={email}
              onChange={onInputChange}
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
              required
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </label>
        </div>
        {/* <div className="mb-1">
          <label className="form-label">
            <span>Foto de perfil</span>
            <input
              type="url"
              className="form-control mt-2"
              placeholder="Escriba el enlace de su imagen"
              required
              name="photoURL"
              value={photoURL}
              onChange={onInputChange}
            />
          </label>
        </div> */}
        <button 
        type="submit" 
        className="btn login-button mt-4"
        disabled={isCheckingAuthentication}
        >
          Registrate
        </button>
      </form>
    </main>
  );
};

export default Registro;
