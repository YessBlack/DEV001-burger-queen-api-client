import { Navigate, Outlet } from 'react-router'
import { PublicRoutes } from '../types/routes'

export function AuthGuard () {
  const user = JSON.parse(window.localStorage.getItem('user'))

  return user?.user?.email
    ? <Outlet />
    : <Navigate replace to={PublicRoutes.LOGIN} />
}
