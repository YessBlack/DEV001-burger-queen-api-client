import { useNavigate } from 'react-router'
import { useOrder } from '../../hooks/useOrder'
import { CardOrder } from '../Chef/CardOrder'
import { useEffect } from 'react'
import { onSnapshotOrders } from '../../services/order'

export const PedidoTerminado = () => {
  const navigate = useNavigate()
  const { stateOrder, getAllOrders } = useOrder()

  useEffect(() => {
    getAllOrders()
  }, [])

  onSnapshotOrders(() => {
    getAllOrders()
  })

  const handleBack = () => navigate('private/mesero')

  return (
    <>
      <div className='buttons'>
        <span className='icon-arrow-left' onClick={handleBack} />
      </div>
      <section className='card-container'>
        {

        stateOrder?.ordersFinished.map((el, i) => {
          return (
            <CardOrder
              key={el.id}
              id={el.id}
              listItem={i + 1}
              clientName={el.clientName}
              idWaiter={el.idWaiter}
              order={el.order}
              created_at={el.created_at}
              state={el.state}
              text='Entregar pedido'
            />
          )
        })
      }
      </section>
    </>
  )
}
