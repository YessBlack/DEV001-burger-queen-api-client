import './App.css'
import Menu from './components/Menu'
import './componentsCss/Products.css'
import './componentsCss/AdminHome.css'
import Login from './components/Login'
import { Header } from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { Chef } from './components/Chef'
import { Pedidos } from './components/Pedidos'
import { AdminHome } from './components/AdminHome'

function App () {
  return (
    <section className='maven-pro h-screen'>
      <Header />
      <Routes>
        <Route
          path='/' element={(<Login
            path='../public/images/burger-login.jfif'
            useNavigate={useNavigate}
                             />)}
        />

        <Route
          path='/mesero'
          element={(<Menu useNavigate={useNavigate} />)}
        />

        <Route path='/chef' element={<Chef />} />
        <Route
          path='/admin' element={<AdminHome />}
        />
        <Route
          path='/mesero/orders'
          element={<Pedidos />}
        />

        <Route
          path='/chef'
          element={<Chef />}

        />
      </Routes>
    </section>
  )
}

export default App
