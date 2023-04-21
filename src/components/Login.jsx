import { useAuth } from '../hooks/useAuth'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect, useRef } from 'react'

export default function Login ({ path, useNavigate }) {
  const { state, loginUser } = useAuth()
  const userLocalStorage = useRef()

  const navigate = useNavigate()

  useEffect(() => {
    userLocalStorage.current = JSON.parse(window.localStorage.getItem('auth'))

    if (userLocalStorage.current) {
      navigate('/mesero')
    }
  }, [state])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = e.target.elements

    if (!email.value || !password.value) {
      return toast.error('Debes llenar los campos!', {
        position: toast.POSITION.TOP_CENTER
      })
    }

    await loginUser(email.value, password.value)

    if (userLocalStorage.current === null) {
      return toast.error('Usuario o contraseña incorrecta!', {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  return (
    <section className='principal-login-container'>
      <ToastContainer />
      <div className='border border-gray-color bg-white w-[100%] max-w-[450px] my-[5%] flex flex-col justify-center items-center rounded-2xl gap-4 py-8 shadow-lg shadow-box-shadow'>
        <h1 className='text-center text-3xl'>INICIAR SESION</h1>
        <img src={path} alt='' className='w-[100px] rounded-full' />

        <form className='flex flex-col justify-center items-center w-[350px] gap-3' data-testid='form' onSubmit={handleSubmit}>

          <input
            type='text'
            placeholder='Usuario'
            className='border border-gray-color p-[.7rem] rounded-md w-[300px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
            name='email'
          />

          <input
            type='password'
            placeholder='Contraseña'
            className='border border-gray-color p-[.7rem] rounded-md w-[300px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
            name='password'

          />

          <button className='bg-primary-color rounded-md w-[300px] p-[.7rem]'>Ingresar</button>
        </form>
      </div>
    </section>
  )
}
