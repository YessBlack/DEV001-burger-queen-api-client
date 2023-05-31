import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './components/Login/Login'
import { Header } from './components/Header/Header'
import { ViewWaiter } from './components/Waiter/ViewWaiter'
import { Chef } from './components/Chef/Chef'
import { AdminHome } from './components/Admin/AdminHome'
import { AuthGuard } from './guards/auth.guard'
import { PrivateRoutes, PublicRoutes } from './types/routes'
import { PedidoTerminado } from './components/Waiter/PedidoTerminado'

function App () {
  return (
    <section className='maven-pro h-screen'>
      <Header />
      <Routes>
        <Route
          path={PublicRoutes.ROOT}
          element={<Navigate to={PrivateRoutes.PRIVATE} />}
        />
        <Route
          path={PublicRoutes.LOGIN}
          element={<Login />}
        />
        <Route element={<AuthGuard />}>
          <Route
            path={`${PrivateRoutes.PRIVATE}/*`}
            element={<ViewWaiter />}
          />
          <Route
            path={PrivateRoutes.ADMIN}
            element={<AdminHome />}
          />
          <Route
            path={PrivateRoutes.CHEF}
            element={<Chef />}
          />
          <Route path={PrivateRoutes.PEDIDOS} element={<PedidoTerminado />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
