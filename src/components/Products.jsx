import React, { useContext } from 'react'
import ProductContext from './DataContext'

function Products ({ img, productName, cost, quantity, state, userName }) {
  const { setItems } = useContext(ProductContext)

  const addProduct = (product) => {
    setItems(items => [...items, product])
  }

  return (
    <div className='principal-container-products'>
      <img
        className='img-product'
        src={img}
      />
      <p className='product'>{productName}</p>
      <p className='cost'>${cost}.00</p>
      <button className='add-products' onClick={() => addProduct({ cost, productName })}>Añadir</button>
    </div>

  )
}

export default Products
