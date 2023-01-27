import './App.css'
import './componentsCss/Products.css'
import { Header } from './components/Header'
import { Login } from './components/Login'
import './componentsCss/Login.css'
import { Route, Routes } from 'react-router-dom'
import { ListProduct } from './components/ListProduct'
import { Chef } from './components/Chef'
import { Admin } from './components/Admin'

function App () {
  return (
    <section className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Login img='burger-login' />}
        />
        <Route
          path='/mesero'
          element={<ListProduct />}
        />
        <Route
          path='/cocina'
          element={<Chef />}
        />
        <Route
          path='/admin'
          element={<Admin />}
        />
      </Routes>
    </section>
  )
}

export default App
