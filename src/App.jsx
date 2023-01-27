import './App.css'
import Products from './components/Products'
import './componentsCss/Products.css'
import { Header } from './components/Header'
import { Login } from './components/Login'
import './componentsCss/Login.css'
import { Route, Routes } from 'react-router-dom'
import { ListProduct } from './components/ListProduct'

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
          element={<Header />}
        />
        <Route
          path='/admin'
          element={<Header />}
        />
      </Routes>
    </section>
  )
}

export default App
