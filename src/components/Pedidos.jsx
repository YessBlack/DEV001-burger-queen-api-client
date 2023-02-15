import { useEffect, useState } from 'react'
import { CardOrder } from './CardOrder'

export const Pedidos = () => {
  const [ordersDb, setOrdersDb] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then(res => res.json())
      .then(res => setOrdersDb(res))
  }, [ordersDb])
  const finishOrders = ordersDb.filter(el => el.state === 'Terminado')

  return (
    <section className='card-container'>

      {

        finishOrders.map(el => {
          return (
            <CardOrder
              key={el.id} id={el.id} tiempo={el.tiempo} clientName={el.clientName} list={el.order}
              idWaiter={el.idWaiter} order={el.order} date={el.date}
              text='Entregar pedido'
            />
          )
        })
      }
    </section>
  )
}
