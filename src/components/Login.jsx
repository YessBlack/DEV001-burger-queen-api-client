import React, { useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'
import { useNavigate } from 'react-router-dom'

const initailForm = {
  email: '',
  password: ''
}

export function Login ({ img }) {
  const [form, setForm] = useState(initailForm)

  const navigate = useNavigate()

  const api = helpHttp()
  const endPoint = 'http://localhost:3004/login'

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      alert('Datos incompletos')
      return
    }

    const options = {
      body: form,
      headers: { 'content-type': 'application/json' }
    }

    api.post(endPoint, options)
      .then(res => {
        if (!res.err) {
          const roles = res.user.roles
          if (roles.admin) {
            navigate('/admin')
          } else if (roles.waiter) {
            navigate('/mesero')
          } else if (roles.chef) {
            navigate('/cocina')
          }
        }
      })
  }

  return (
    <section className='principal-login-container'>
      <div className='login-container-form'>
        <h1 className='title-login'>INICIAR SESION</h1>
        <img src={`../public/images/${img}.jfif`} alt='' className='img-login' />
        <form className='form-login' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Usuario'
            className='form-longin-input'
            onChange={handleChange}
            name='email'
            value={form.email}
          />
          <input
            type='password'
            placeholder='Contraseña'
            className='form-longin-input'
            onChange={handleChange}
            name='password'
            value={form.password}
          />
          <button
            className='btn-login'
          >Ingresar
          </button>
        </form>
      </div>
    </section>
  )
}
