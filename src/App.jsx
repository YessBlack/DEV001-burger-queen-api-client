import { useState } from 'react'
import './App.css';
import Menu from './components/Menu'
import './componentsCss/Menu.css';
import './componentsCss/Login.css';
import './componentsCss/Products.css';
import {Login} from './components/Login'
import {Header} from './components/Header'
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <section className='App'>
      <Header />
      
      <Routes>
    <Route path ='/' element={(<Login
    img='burger-login'
    />)}/>
    
    <Route path ='/menu' element={(<Menu/>)}/>
    </Routes>
    </section>
  )
}

export default App
