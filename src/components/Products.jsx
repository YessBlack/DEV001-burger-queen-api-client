import { useState } from 'react'

function Products ({ img, name, price, setItems, items }) {
  const [isAdd, setText] = useState(true)

  const text = isAdd ? 'Añadir' : 'Eliminar'

  const buttonClassName = isAdd
    ? 'add-products'
    : 'add-products delete'

  const handleAddProduct = () => {
    if (isAdd) {
      setItems([...items, price, name])
    } else {
      setItems(items.filter(e => e !== name && e !== price))
    }
    setText(!isAdd)
  }

  return (
    <article className='principal-container-products'>
      <img
        className='img-product'
        src={img}
      />
      <p className='product'>{name}</p>
      <p className='cost'>$ {price}</p>

      <button className={buttonClassName} onClick={handleAddProduct}>{text}</button>
    </article>
  )
}

export default Products
