import { useProduct } from '../hooks/useProduct'

export function Product ({ img, productName, cost, quantity, userName, id }) {
  const { addToCheckout } = useProduct()

  const handleAddToCheckout = () => {
    addToCheckout({ id, img, productName, cost, quantity, userName })
  }

  return (
    <div className='principal-container-products'>
      <img
        className='img-product'
        src={img}
      />
      <p className='product'>{productName}</p>
      <p className='cost'>${cost}.00</p>
      <button className='add-products' onClick={handleAddToCheckout}>Añadir</button>
    </div>
  )
}
