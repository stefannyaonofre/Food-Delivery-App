import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase/config";
import Swal from "sweetalert2";

const LoginPhone = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const generateRecaptcha = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        firebaseAuth,
        "recaptch-container",
        {
          size: "invisible",
          callback: () => {},
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  //Función que envía el código de verificación
  const sendSms = (number, recaptchaVerifier) => {
    signInWithPhoneNumber(firebaseAuth, `+57${number}`, recaptchaVerifier)
      .then((response) => {
        window.confirmationResult = response;
        console.log(response);
        Swal.fire(
          "Excelente",
          `Te enviaremos un mensaje para confirmar a ${number}`,
          "success"
        );
      })
      .then(() => {
        navigate("/insertcode");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Ops!",
          `Ocurrió un error al realizar tu solicitud ${error.message}`,
          "error"
        );
      });
  };

  const onSubmit = (data) => {
    // //genera el recaptcha
    generateRecaptcha(data.phone);
    const appVerifier = window.recaptchaVerifier;
    sendSms(data.phone, appVerifier);
  };

  return (
    <main className="d-flex justify-content-center align-items-center vw-100 vh-100 login">
      <form 
      className="card p-5 form-login"
      onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label className="form-label">
            <span>Número de celular</span>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Escriba su número de celular"
              required
              name="phone"
              {...register("phone", { required: true })}
            />
          </label>
        </div>
        <button type="submit" className="btn login-button mt-4">
          Enviar SMS
        </button>
      </form>
      <div id="recaptch-container"></div>
    </main>
  );
};

export default LoginPhone;
