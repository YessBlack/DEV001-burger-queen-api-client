
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const PrivateRoute = ({ children, isAlowed }) => {
  const user = JSON.parse(window.sessionStorage.getItem('user'))
  const { loginUser } = useAuth()

  useEffect(() => {
    loginUser()
  }, [])

  if (!user) {
    return <Navigate to='/' />
  }
}
