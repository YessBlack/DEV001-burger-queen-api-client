import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import swal from 'sweetalert'

export const PrivateRoute = ({ children, isAlowed }) => {
  const user = JSON.parse(window.sessionStorage.getItem('user'))
  const { login } = useAuth()

  useEffect(() => {
    login()
  }, [])

  if (!user) {
    return <Navigate to='/' />
  }

  return isAlowed ? children : swal('Permiso denegado', '', 'error') && user.user.roles.waiter ? <Navigate to='/mesero' /> : <Navigate to='/chef' />
}
