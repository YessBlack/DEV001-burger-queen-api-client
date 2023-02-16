import './App.css'
import Menu from './components/Menu'
import './componentsCss/Menu.css'
import './componentsCss/Login.css'
import './componentsCss/Products.css'
import Login from './components/Login'
import { Header } from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { Chef } from './components/Chef'
import { PrivateRoute } from './components/PrivateRoute'
import { Pedidos } from './components/Pedidos'


function App () {
  return (
    <section className='App'>
      <Header />
      <Routes>
        <Route
          path='/' element={(<Login
            img='burger-login'
                             />)}
        />
        <Route element={<PrivateRoute />}>
          <Route path='/mesero' element={<Menu />} />
          <Route path='/mesero/orders' element={<Pedidos />} />
        </Route>
        <Route path='/chef' element={<PrivateRoute><Chef /></PrivateRoute>} />
      </Routes>
    </section>
  )
}

export default App
