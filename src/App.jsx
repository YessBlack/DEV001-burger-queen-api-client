import { useState } from 'react'
import './App.css';
import Products from './components/Products'
import './componentsCss/Products.css';
import { Header } from './components/Header';
import { Check } from './components/Check';
import { Login } from './components/Login';
import './componentsCss/Login.css';
import { Route, Routes } from 'react-router-dom';

const Menu = () => {
  return(
    <>
      <Products img = 'cofee'
       productName ='Café americano'
       cost = '5.00'
       add = 'Agregar'
      />
       <Products
       img = 'cofeeMilk'
       productName ='Café con leche'
       cost = '7.00'
       add = 'Agregar'
      />
    </>
  )
}

function App() {
  return (
    <section className='App'>
      <Header/>
      <Routes>
        <Route 
          path='/' 
          element={<Login img='burger-login'/>}
        />
        <Route
          path='/menu'
          element={<Menu/>}
        />
      </Routes>
    </section>
  )
}

export default App
