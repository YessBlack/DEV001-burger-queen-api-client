import { useState, useContext } from 'react'
import { ProductContext } from './Context'

function Products ({ img, name, price }) {
  const [isAdded, setIsAdded] = useState(false)

  const { items } = useContext(ProductContext)
  const { setItems } = useContext(ProductContext)

  const text = isAdded ? 'Eliminar' : 'Añadir'

  const buttonClassName = isAdded
    ? 'add-products delete'
    : 'add-products'

  const handleAddProduct = (product) => {
    const productAdded = items.find(productAdded => productAdded.name === product.name)
    if (!productAdded) {
      setItems(items => [...items, product])
      setIsAdded(true)
    } else {
      setItems(products => products.filter(product => product.name !== productAdded.name))
      setIsAdded(false)
    }
  }

  return (
    <article className='principal-container-products'>
      <img
        className='img-product'
        src={img}
      />
      <p className='product'>{name}</p>
      <p className='cost'>$ {price}</p>
      <button className={buttonClassName} onClick={() => handleAddProduct({ name, price })}>{text}</button>
    </article>
  )
}

export default Products
