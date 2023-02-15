import './App.css'
import Menu from './components/Menu'
import './componentsCss/Menu.css'
import './componentsCss/Login.css'
import './componentsCss/Products.css'
import Login from './components/Login'
import { Header } from './components/Header'
import { Routes, Route, useNavigate } from 'react-router-dom'
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
            useNavigate={useNavigate}
                             />)}
        />
        <Route path='/mesero' element={<PrivateRoute><Menu /></PrivateRoute>} />
        <Route path='/mesero/orders' element={<PrivateRoute><Pedidos /></PrivateRoute>} />
        <Route path='/chef' element={<PrivateRoute><Chef /></PrivateRoute>} />
      </Routes>
    </section>
  )
}

export default App
