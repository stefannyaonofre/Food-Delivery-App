import React from 'react'
import { useForm } from 'react-hook-form';

const Registro = () => {
  

  return (
    <main className="d-flex justify-content-center align-items-center vw-100 vh-100 login">
    <form className="card p-5 form-login"
   
    >
      <div className="mb-3">
        <label className="form-label">
          <span>Nombre Completo</span>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Escriba su nombre"
            required
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
          />
        </label>
      </div>
      <div className="mb-1">
        <label className="form-label">
          <span>Foto de perfil</span>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Escriba el enlace de su imagen"
            required
          />
        </label>
      </div>
      <button type="submit" className="btn login-button mt-4">
        Registrate
      </button>
    </form>
  </main>
  )
}

export default Registro