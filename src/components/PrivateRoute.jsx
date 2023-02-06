import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
  const user = window.sessionStorage.getItem('user')
  return (
    user ? children : <Navigate to='/' />
  )
}
