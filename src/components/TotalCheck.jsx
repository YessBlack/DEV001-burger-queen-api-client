import { useEffect, useRef, useState } from 'react'
import { useProduct } from '../hooks/useProduct'
import { Check } from './Check'

export function TotalCheck () {
  const [total, setTotal] = useState(0)
  const { state } = useProduct()
  const productsSelectedLocalStorage = useRef([])

  useEffect(() => {
    productsSelectedLocalStorage.current = JSON.parse(window.localStorage.getItem('selectedProducts'))

    const total = [...state.selectedProducts].map(el => el.cost * el.quantity
    ).reduce((acc, cur) => acc + cur, 0)

    setTotal(total)
  }, [state])

  return (
    <section className='my-[10px] border-2 border-gray-color shadow-box-shadow flex items-center flex-col rounded-xl mx-[10px] gap-2 overflow-y-scroll h-[600px]'>
      <h1 className='text-2xl my-[10px]'>Cuenta</h1>
      <input className='p-[.5rem] border rounded-lg' placeholder='Natalia' name='name' />
      <div className='w-[100%] flex flex-col p-1 gap-2'>
        {
              state.selectedProducts.map(item => {
                return (
                  <div key={item.id} className='flex  justify-between items-center border py-[.5rem] px-[.3rem] rounded-lg gap-1'>
                    <Check
                      id={item.id}
                      quantity={item.quantity}
                      cost={item.cost * item.quantity}
                      name={item.productName}
                    />
                  </div>
                )
              })
            }
      </div>
      <h2 className='my-[20px] text-[#f46919] font-bold text-xl'> Total :${total}.00</h2>
      <button className='bg-[#FFD66C] rounded-lg w-[150px] text-center border-none p-[.7rem] font-bold my-[1.8rem] '>Añadir Pedido</button>
    </section>
  )
}
