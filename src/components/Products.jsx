import { useContext } from 'react'
import { ProductContext } from './Context'

function Products ({ img, name, price }) {
  const { setItems } = useContext(ProductContext)

  const handleAddProduct = (product) => {
    setItems(items => [...items, product])
  }

  return (
    <article className='principal-container-products'>
      <img
        className='img-product'
        src={img}
      />
      <p className='product'>{name}</p>
      <p className='cost'>$ {price}</p>
      <button className='add-products' onClick={() => handleAddProduct({ name, price })}>Añadir</button>
    </article>
  )
}

export default Products
