import Products from './components/Products'
import { useState } from 'react'
function Menu () {
  return(
   <>
    <button > Desayuno</button>
    <button > Almuerzo/Cena</button>
  <><Products img = 'cofee'
       productName ='Café americano'
       cost = '-$5.00'
       add = 'Agregar'
      />
       <Products
       img = 'cofeeMilk'
       productName ='Café con leche'
       cost = '-$7.00'
       add = 'Agregar'
      />
       <Products
       img = 'sandwich'
       productName ='Sandiwich jamón y queso'
       cost = '-$10.00'
       add = 'Agregar'
      />
       <Products
       img = 'juice'
       productName ='Jugo natural'
       cost = '-$7.00'
       add = 'Agregar'
      />
    </>
    </>

)}
export default Menu