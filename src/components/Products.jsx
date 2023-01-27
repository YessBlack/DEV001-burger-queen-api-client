import { Button } from './Button'

function Products ({ img, name, price }) {
  return (
    <article className='principal-container-products'>
      <img
        className='img-product'
        src={img}
      />
      <p className='product'>{name}</p>
      <p className='cost'>$ {price}</p>
      <Button
        isAddInitial
      />
    </article>
  )
}

export default Products
