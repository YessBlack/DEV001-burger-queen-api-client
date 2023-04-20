import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { ToastContainer, toast } from 'react-toastify'

export default function Login ({ path, useNavigate }) {
  const { state, loginUser } = useAuth()
  const [res, setRes] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = e.target.elements

    if (!email.value || !password.value) {
      return toast.error('Por favor ingrese todos los campos')
    }

    await loginUser(email.value, password.value)
  }

  console.log(state)

  return (
    <section className='principal-login-container'>
      <ToastContainer />
      <div className='border border-gray-color bg-white w-[100%] max-w-[480px] my-[5%] flex flex-col justify-center items-center rounded-2xl gap-4 py-6 border-gray-500'>
        <h1 className='text-center text-3xl'>INICIAR SESION</h1>
        <img src={path} alt='' className='w-[100px] rounded-full' />

        <form className='flex flex-col justify-center items-center w-[350px] gap-3' data-testid='form' onSubmit={handleSubmit}>

          <input
            type='text'
            placeholder='Usuario'
            className='border border-slate-800 p-[.7rem] rounded-md w-[300px] focus:outline-none'
            name='email'
          />

          <input
            type='password'
            placeholder='Contraseña'
            className='border border-gray-900 rounded-md w-[300px] p-[.7rem] focus:outline-none'
            name='password'

          />

          <button className='bg-primary-color rounded-md w-[300px] p-[.7rem]'>Ingresar</button>
        </form>
      </div>
    </section>
  )
}
