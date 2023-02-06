import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
  const auth = window.sessionStorage.getItem('user')

  return auth !== null ? children : <Navigate to='/' />
}
