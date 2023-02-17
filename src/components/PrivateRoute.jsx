import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export const PrivateRoute = ({ children, isAlowed }) => {
  const user = JSON.parse(window.sessionStorage.getItem('user'))
  const { login } = useAuth()
  useEffect(() => {
    login()
  }, [])

  if (!user) {
    return <Navigate to='/' />
  }
  return isAlowed ? children : 'No tiene el permiso correspondiente'
}
