import { useContext } from 'react'
import ProductContext from './DataContext'

function Products ({ img, productName, cost, quantity, state, userName }) {
  const { setItems } = useContext(ProductContext)

  const addProduct = (product) => {
    // const productAdded = items.find(productAdded => productAdded.productName === product.productName)
    //    if (!productAdded) {
    setItems(items => [...items, product])
  }

  //   let text = isAdded ? 'Eliminar' : 'Añadir';
  //   let buttonClassName = isAdded
  // ? 'add-products delete'
  // :  'add-products'

  return (

    <div className='principal-container-products'>
      <img
        className='img-product'
        src={img}
      />
      <p className='product'>{productName}</p>
      <p className='cost'>${cost}.00</p>
      <p className='product'>{quantity}</p>
      <p className='product'>{state}</p>
      <p className='product'>{userName}</p>

      <button className='add-products' onClick={() => addProduct({ cost, productName })}>Añadir</button>
    </div>

  )
}

export default Products
