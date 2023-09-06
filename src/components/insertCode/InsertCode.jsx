import React from 'react'
import { useForm } from 'react-hook-form';
import './insertcode.scss'
import { useDispatch } from 'react-redux';
import { startLoginWithCode } from '../../store/auth/thunks';
const InsertCode = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const login = (data) => {
        console.log(data);
        dispatch(startLoginWithCode(data.code));
    }
  return (
    <main className="d-flex justify-content-center align-items-center vw-100 vh-100 login">
        
    <form 
    className="card p-5 form-login"
    onSubmit={handleSubmit(login)}
    >
        <h2>INGRESE SU CÓDIGO</h2>
      <div className="mb-3">
        
        <label className="form-label">
          <span>Código de verificación</span>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Escriba su código"
            name="code"
            {...register("code", { required: true })}
          />
        </label>
      </div>
      <button type="submit" className="btn login-button mt-4">
        Confirmar código
      </button>
    </form>
    <div id="recaptch-container"></div>
  </main>
  )
}

export default InsertCode