import { useProduct } from '../hooks/useProduct'

export function Check ({ id, quantity, cost, name }) {
  const { updateSelectProduct } = useProduct()

  const handleDelete = () => {
    updateSelectProduct({ id, quantity: quantity - 1 })
  }

  return (
    <>
      <b>{quantity}</b>
      <div className='container-group'>
        <span className='item-cost'> ${cost}.00</span><br />
        <span className='item-name'>{name}</span>
      </div>
      <span className='icon-trash-o' onClick={handleDelete} />
    </>
  )
}
