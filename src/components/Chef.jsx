import { CardOrder } from './CardOrder'
import { useOrder } from '../hooks/useOrder'
import { useEffect } from 'react'

export const Chef = () => {
  const { stateOrder, getOrders } = useOrder()

  useEffect(() => {
    getOrders()
  }, [])

  console.log(stateOrder.orders[0].order)

  // const day = JSON.stringify(new Date()).slice(1, 11)
  // const dbDate = db.filter(el => el.date.slice(0, 10) === day)

  // const dbPending = dbDate.filter(el => el.state === 'Pendiente')

  return (
    <>
      <section className='card-container'>
        {
        stateOrder?.orders.map(el => {
          return (
            <CardOrder
              key={el.id}
              id={el.id}
              clientName={el.clientName}
              idWaiter={el.idWaiter}
              order={JSON.parse(el.order)}
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
