import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAnUser, startCreatingUserWithEmailPassword, startNewUser } from "../../store/auth/thunks";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import fileUpload from "../../service/fileUpload";


const Registro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {register, handleSubmit, formState:{errors}} = useForm()
  const [selectedFile, setSelectedFile] = useState(null)
  const {status, errorMessage} = useSelector((state) => state.auth)

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  // const selectedFile =  photoURL[0];

  const onSubmit = async(data) => {
    const { uid, photoURL, email, displayName, date, phone } = data;
   
    const resp = await dispatch(startCreatingUserWithEmailPassword({uid, photoURL, email, displayName, date, phone}));
    try {
      const imageFile = data.photoURL[0];
      const avatar = await fileUpload(imageFile);
      const newUser = {
          ...data,
          photoURL: avatar
      }
      console.log(newUser);
      dispatch(startNewUser(newUser));
      //Swal.fire("Excelente!", "Haz creado tu cuenta!", "success");
  } catch (error) {
      //Swal.fire("Oops!", "Hubo un error en la creación de tu cuenta", "error");
  }
   

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

  ////

  // const onClickNewUser = async (data, getState) => {
  //   const { email, password, displayName, photoURL } = data;
  //   await dispatch(startCreatingUserWithEmailPassword({email, password, displayName, photoURL}));
  //   await new Promise((resolve) => setTimeout(resolve, 0));
  //   const avatar = await fileUpload(selectedFile);
  //   const updatedCreateUser = {
  //     ...data,
  //     photoURL: avatar,
  //   };

  //   dispatch(startNewUser(updatedCreateUser));

  //   Swal.fire("Bien hecho", "Cuenta creada exitosamente", "success");

  //   await new Promise((resolve) => setTimeout(resolve, 0));
  //   // const currentState = status.getState().auth;

   

  // }

  return (
    <main className="d-flex justify-content-center align-items-center vw-50 vh-50 login">
      <form className="card p-5 form-login d-flex justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">
            <span>Nombre Completo</span>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Escriba su nombre"
              name="displayName"
              {...register('displayName', {required:true})}
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
              name="email"
              {...register('email', {required:true})}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Contraseña (+6 caracteres)</span>
            <input
              type="password"
              className="form-control mt-2"
              placeholder="Escriba su contraseña"
              name="password"
              {...register('password', {required:true})}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Fecha de nacimiento</span>
            <input
              type="date"
              className="form-control mt-2"
              placeholder="Escriba su fecha de nacimiento"
              name="password"
              {...register('birthDate', {required:true})}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Número de ceular</span>
            <input
              type="phone"
              className="form-control mt-2"
              placeholder="Escriba su número de telefono"
              name="phone"
              {...register('phone', {required:true})}
            />
          </label>
        </div>
        <div className="mb-1">
          <label className="form-label">
            <span>Foto de perfil</span>
            <input
              type="file"
              className="form-control mt-2"
              placeholder="Escriba el enlace de su imagen"
              name="photoURL"
              {...register('photoURL', {required:true})}
            />
          </label>
        </div>
        <button 
        type="submit" 
        className="btn login-button mt-4"
        disabled={isCheckingAuthentication}
        // onClick={onClickNewUser}
        >
          Registrate
        </button>
      </form>
    </main>
  );
};

export default Registro;
