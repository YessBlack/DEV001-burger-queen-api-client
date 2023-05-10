import { useProduct } from '../../hooks/useProduct'

export function SelectedProduct ({ id, quantity, cost, name }) {
  const { updateSelectProduct } = useProduct()

  const handleSelectProduct = () => {
    updateSelectProduct({ id, quantity })
  }

  return (
    <>
      <b>{quantity}</b>
      <div className='container-group w-[130px]'>
        <span className='item-cost'> ${cost}.00</span><br />
        <span className='item-name'>{name}</span>
      </div>
      <span className='icon-trash-o' onClick={handleSelectProduct} />
    </>
  )
}
