import { useProduct } from '../../hooks/useProduct'

export function Product ({ img, productName, cost, quantity, userName, id }) {
  const { addToCheckout } = useProduct()

  const handleAddToCheckout = () => {
    addToCheckout({ id, img, productName, cost, quantity, userName })
  }

  return (
    <div className='max-w-[600px] w-[100%] h-[100px] grid grid-cols-4 place-content-center place-items-center rounded-2xl bg-[#ffffff] mt-[10px] shadow-[rgb(0 0 0 /9%)]'>
      <img
        className='h-[80px] w-[80px] rounded-full p-1'
        src={img}
      />
      <p className='text-lg text-center'>{productName}</p>
      <p className='text-lg'>${cost}.00</p>
      <button className='bg-[#FFD66C] rounded-2xl w-[80px] p-[.7rem] text-center border-0 mr-[10px] cursor-pointer' onClick={handleAddToCheckout}>Añadir</button>
    </div>
  )
}
