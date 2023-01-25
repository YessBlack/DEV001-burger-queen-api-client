import { useState } from 'react'
import './App.css';
import Products from './components/Products'
import './componentsCss/Products.css';
import { Header } from './components/Header';
import { Check } from './components/Check';

function App() {
  return (
    <>
      <Header/>
      <section className = 'principal-container'>
        <Products
          img = 'cofee'
          productName ='Café americano'
          cost = '$5.00'
          add = 'Agregar'
        />

        <Products
          img = 'cofeeMilk'
          productName ='Café con leche'
          cost = '$7.00'
          add = 'Agregar'
        />

        <Products
          img = 'sandwich'
          productName ='Sandiwich jamón y queso'
          cost = '$10.00'
          add = 'Agregar'
        />

        <Products
          img = 'juice'
          productName ='Jugo natural'
          cost = '$7.00'
          add = 'Agregar'
        />

        <Check/>
        
      </section>
    </>
  )
}

export default App
