import { useState, useEffect } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ListProducts } from './ListProducts'
import { Check } from './Check'

function Menu ({ useNavigate }) {
  const { state, getProducts } = useProduct()
  const [isBreackFast, setIsBreackFast] = useState(true)

  // Cambiar de vistas
  const handleClickBreakFast = () => {
    setIsBreackFast(true)
  }
  const handleClickLunchDinner = () => {
    setIsBreackFast(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <section className='bg-[#FFD66C]'>
        <div className='grid grid-cols-2-menu gap-1 max-w-[1024px] m-auto bg-button-secondary-color'>
          <button
            className='w-[80%] bg-button-primary-color p-[20px] text-2xl font-bold cursor-pointer border-0 hover:scale-110 transition duration-200' onClick={handleClickBreakFast}
          > Desayuno
          </button>
          <button
            className='w-[70%] bg-button-secondary-color p-[20px] text-2xl font-bold cursor-pointer border-0 hover:scale-110 transition duration-200'
            onClick={handleClickLunchDinner}
          >
            Almuerzo/Cena
          </button>
        </div>
      </section>

      <div className='grid grid-cols-2-menu gap-1 max-w-[1024px] m-auto'>
        <ListProducts isBreackFast={isBreackFast} />
        <section className='my-[10px] border-2 border-gray-color shadow-box-shadow flex items-center flex-col rounded-xl mx-[10px] gap-2'>
          <h1 className='text-2xl my-[10px]'>Cuenta</h1>
          <input className='p-[.5rem] border rounded-lg' placeholder='Natalia' name='name' />
          <div className='w-[100%] flex flex-col p-1 gap-2'>
            {
              state.selectedProducts.map(item => {
                return (
                  <div key={Math.random().toString(36).replace(/[^a-z]+/g, '')} className='flex  justify-between items-center border py-[.5rem] px-[.3rem] rounded-lg gap-1'>
                    <Check
                      quantity={item.quantity}
                      cost={item.cost * item.quantity}
                      name={item.productName}
                    />
                    <span className='icon-trash-o' />
                  </div>
                )
              })
            }
          </div>
          <h2 className='my-[20px] text-[#f46919] font-bold text-xl'> Total :${}.00</h2>
          <button className='bg-[#FFD66C] rounded-lg w-[150px] text-center border-none p-[.7rem] font-bold my-[1.8rem] '>Añadir Pedido</button>
        </section>
      </div>
    </>
  )
}
export default Menu
