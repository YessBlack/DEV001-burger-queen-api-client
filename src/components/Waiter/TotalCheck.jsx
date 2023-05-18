import { SelectedProduct } from './SelectedProduct'
import { useData } from '../../hooks/useDataProducts'
import { ToastContainer, toast } from 'react-toastify'
import { useOrder } from '../../hooks/useOrder'

export function TotalCheck () {
  const { total, productsSelectedLocalStorage } = useData()
  const { stateOrder, insertOrder } = useOrder()

  const handleSendOrder = () => {
    const clientName = document.querySelector('input[name="name"]').value

    if (clientName === '') {
      return toast.error('Debes llenar el campo nombre!', {
        position: toast.POSITION.TOP_CENTER
      })
    }

    if (productsSelectedLocalStorage.current?.length === 0 || productsSelectedLocalStorage.current === null) {
      return toast.error('Debes seleccionar productos!', {
        position: toast.POSITION.TOP_CENTER
      })
    }

    insertOrder(clientName, total, productsSelectedLocalStorage.current)
      .then((res) => {
        if (res) {
          toast.success('Pedido enviado correctamente!', {
            position: toast.POSITION.TOP_CENTER
          })

          setTimeout(() => {
            window.localStorage.removeItem('selectedProducts')
            window.location.reload()
          }, 3000)
        } else {
          toast.error('Ha ocurrido un error con el servidor', {
            position: toast.POSITION.TOP_CENTER
          })
        }
      })
  }

  return (
    <section className='my-[10px] border-2 border-gray-color shadow-box-shadow flex items-center flex-col rounded-xl mx-[10px] gap-2 overflow-y-scroll h-[600px]'>
      <ToastContainer />
      <h1 className='text-2xl my-[10px]'>Cuenta</h1>
      <input className='p-[.5rem] border rounded-lg' placeholder='Natalia' name='name' />
      <div className='w-[100%] flex flex-col p-1 gap-2'>
        {
              productsSelectedLocalStorage.current?.map(item => {
                return (
                  <div key={item.id} className='flex  justify-between items-center border py-[.5rem] px-[.3rem] rounded-lg gap-1'>
                    <SelectedProduct
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
      <button className='bg-[#FFD66C] rounded-lg w-[150px] text-center border-none p-[.7rem] font-bold my-[1.8rem] ' onClick={handleSendOrder}>Añadir Pedido</button>
    </section>
  )
}
