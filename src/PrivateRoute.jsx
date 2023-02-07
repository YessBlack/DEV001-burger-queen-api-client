import { Navigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to='/' />
  }

  return children
}
