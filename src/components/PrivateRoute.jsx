import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './useAuth'

export const PrivateRoute = ({ children }) => {
  const userJson = window.sessionStorage.getItem('user')
  const isUser = JSON.parse(userJson)
  const { login } = useAuth()
  useEffect(() => {
    login()
  }, [])

  if (!isUser) {
    return <Navigate to='/' />
  }
  return children || <Outlet />
}
