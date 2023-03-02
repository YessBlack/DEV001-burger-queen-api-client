import swal from 'sweetalert'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export const PrivateRoute = ({ children, isAlowed }) => {
  const user = JSON.parse(window.sessionStorage.getItem('user'))
  const { login } = useAuth()
  useEffect(() => {
    login(user)
  }, [])

  if (!user) {
    return <Navigate to='/' />
  }

  return isAlowed ? children : swal('Autorización invalida', '', 'error') && user.user.roles.waiter ? <Navigate to='/mesero' /> : <Navigate to='/chef' />
}
