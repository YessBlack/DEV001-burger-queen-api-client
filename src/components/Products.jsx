import { Button } from './Button'

function Products ({ img, productName, cost, add, addProducts }) {
  return (
    <article className='principal-container-products'>
      <img
        className='img-product'
        src={`../public/images/${img}.jfif`}
      />
      <p className='product'>{productName}</p>
      <p className='cost'>$ {cost}</p>
      <Button
        isAddInitial
      />
    </article>
  )
}

export default Products
