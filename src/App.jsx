import { useState } from 'react'
import './App.css';
import Products from './components/Products'
import './componentsCss/Products.css';
import { Header } from './components/Header';
import { Check } from './components/Check';
import { Login } from './components/Login';
import './componentsCss/Login.css';

function App() {
  return (
    <section className='App'>
      <Header/>
      <Login
        img='burger-login'
      />
    </section>
  )
}

export default App
