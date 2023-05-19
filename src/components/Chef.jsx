import { CardOrder } from './CardOrder'
import { useOrder } from '../hooks/useOrder'
import { subscribeOrders } from '../services/order'

export const Chef = () => {
  const { stateOrder, getDataOrders } = useOrder()

  subscribeOrders(getDataOrders)

  return (
    <>
      <section className='flex gap-4 flex-wrap justify-center mt-1'>
        {
        stateOrder?.ordersByDate.map((el, i) => {
          return (
            <CardOrder
              key={el.id}
              id={i + 1}
              clientName={el.clientName}
              idWaiter={el.idWaiter}
              order={el.order}
              created_at={el.created_at}
              state={el.state}
              text='Enviar Pedido'
            />
          )
        })
      }
      </section>
    </>

  )
}
