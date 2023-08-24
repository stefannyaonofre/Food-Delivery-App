import React, { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.scss';
import google from '/google.svg'
import fb from '/facebook.svg'
import phone from '/phone.svg'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';


const Login = () => {
  const navigate = useNavigate()

  const {status} = useSelector( state=> state.auth)
  
  const dispatch = useDispatch()

  const { email, password, onInputChange, formState, onResetForm } = useForm({
    email: 'snaidyg98@gmail.com',
    password: '123'
  })
const isAuthenticating = useMemo(()=> status === 'checking', [status]);
const onSubmit = (e) =>{
  e.preventDefault()
  // onResetForm()
  console.log({email,password})
  dispatch(checkingAuthentication())
  
}

const onGoogleSignIn = () =>{
  console.log('entre con google')
  dispatch(startGoogleSignIn())


}

  return (
    <main className='d-flex justify-content-center align-items-center vw-100 vh-100 login'>
        <form 
        className='card p-5 form-login'
        onSubmit={onSubmit}
        >
        <div className="mb-3">
            <label  className="form-label"><span >Email</span>
            <input 
            type="email"
            className="form-control mt-2"  placeholder="Escriba su correo" 
            required
            name='email'
            value={email}
            onChange={onInputChange}
            />
            </label>
        </div>
        <div className="mb-3">
            <label  className="form-label"><span >Contraseña</span>
            <input type="password" className="form-control mt-2"  placeholder="Escriba su contraseña" 
            required
            name='password'
            value={password}
            onChange={onInputChange}
            />
            </label>
        </div>
        <button 
        type="submit" 
        className='btn login-button mb-4'
        // disabled={isAuthenticating}
        >Iniciar sesión
        </button>

        <button 
        type="submit" 
        className='btn login-button mb-4'
        onClick={onGoogleSignIn}
        // disabled={isAuthenticating}
        > <img src={google} 
        /> Google</button>

        <button 
        type="submit"
        className='btn login-button mb-4'
        ><img src={fb} 
        />
        Facebook</button>

        <button 
        type="submit" 
        className='btn login-button mb-4'
        ><img src={phone} 
        /> 
        Código de verificación</button>

        <span className="text-white text-center d-block mb-2">
         ¿Deseas registrarte? 
         <hr />
         <Link to='/registro' className="text-dark">Registrar usuario</Link>
        </span>
        </form>
    </main>
  )
}

export default Login