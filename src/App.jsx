import { useState } from 'react'
import './App.css';
import Products from './components/Products'
import './componentsCss/Products.css';


function App() {
  return (
    <div className="App">
      <div className='header-container'>
      <img className='img-logo' src = '../public/images/logoBQ.png'/>
       <h1>BURGER QUEEN</h1> 
       </div>
      <div className = 'principal-container'>
      <Products
       img = 'cofee'
       productName ='Café americano'
       cost = '-$5.00'
      />
       <Products
       img = 'cofeeMilk'
       productName ='Café con leche'
       cost = '-$7.00'
      />
       <Products
       img = 'sandwich'
       productName ='Sandiwich jamón y queso'
       cost = '-$10.00'
      />
       <Products
       img = 'juice'
       productName ='Jugo natural'
       cost = '-$7.00'
      />
      </div>
  

    </div>
  )
}

export default App
