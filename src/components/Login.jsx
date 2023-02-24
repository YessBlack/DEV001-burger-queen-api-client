import { useForm } from 'react-hook-form'
import { useAuth } from './useAuth'
import React, { useState } from 'react'

export default function Login ({ img, useNavigate }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { login } = useAuth()
  const navigate = useNavigate()

  const [error, setError] = useState(false)
  window.localStorage.clear()

  const onSubmit = (data, e) => {
    e.target.reset()

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' }
    }

    const dataLogin = async() => {
      const res = await fetch('http://localhost:3004/login', options)
      const data = res.json()
      const login = await data
      if (!login.err) {
        const user = window.sessionStorage.setItem('user', JSON.stringify(res))
        login(user)
        const roles = login.user.roles
        if (roles.admin) {
          navigate('/admin')
        } else if (roles.waiter) {
          navigate('/mesero')
        } else if (roles.chef) {
          navigate('/chef')
        }
      }
    }
 dataLogin()
  const errorMessage = error ? 'Usuario o contraseña incorrecta' : ''
  return (
    <section className='principal-login-container'>
      <div className='login-container-form'>
        <h1 className='title-login'>INICIAR SESION</h1>
        <img src={img} alt='' className='img-login' />
        <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text' placeholder='Usuario' className='form-login-input'
            name='email'
            {...register('email', {
              required: { value: true, message: 'Este campo es obligatorio' }
            })}
          />
          <span className='text-danger'>{errors?.email?.message} <br />{errorMessage} </span>
          <input
            type='password' placeholder='Contraseña' className='form-login-input'
            name='password'
            {...register('password', {
              required: { value: true, message: 'Este campo es obligatorio' },
              minLength: { value: 6, message: 'La contraseña debe tener minimo 6 caracteres' }
            })}
          />
          <span className='text-danger'>{errors.password?.message}</span>
          <button className='btn-login'>Ingresar</button>
        </form>
      </div>
    </section>
  )
}
