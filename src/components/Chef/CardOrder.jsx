import { ToastContainer, toast } from 'react-toastify'
import { useOrder } from '../../hooks/useOrder'

export function CardOrder ({ id, listItem, clientName, order, state, text }) {
  const { updateStateFinished } = useOrder()

  const handleUpdateOrder = async (id, state) => {
    const newState = state === 'Pendiente' ? 'Terminado' : 'Entregado'
    console.log(newState)
    updateStateFinished(id, newState)
    toast.success('Pedido terminado!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000
    })
  }

  return (
    <article className='max-w-[300px] w-[100%] h-[100%] shadow rounded-lg p-4 mt-4 flex flex-col justify-between border-[1px] border-[#FFBD59] gap-4 relative'>
      <ToastContainer />
      <header className='flex items-center justify-between'>
        <span className='text-button-tertiary-color font-bold'>Estado: {state}</span>
        <span className='icon-pin text-[#a52727] transform rotate-45 text-lg' />
      </header>
      <h2 className='font-bold mt-2'>{`Pedido # ${listItem}`}</h2>
      <p className='truncate'>Cliente: {clientName}</p>
      <ul className='flex flex-col gap-1'>
        <span className='font-bold'>Pedidos</span>
        {
            order.map(el => {
              return (
                <li className='list-disc ml-6' key={Math.random().toString(36).replace(/[^a-z]+/g, '')}>
                  <span className=''> {el.productName} </span>
                  <span className=''>- {el.quantity}</span>
                </li>
              )
            })
        }
      </ul>
      <button className='p-[10px] bg-[#73C089] border-none rounded-md shadow-md block cursor-pointer' onClick={() => handleUpdateOrder(id)}>{text}</button>
    </article>
  )
}
