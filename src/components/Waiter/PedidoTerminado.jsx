import { useNavigate } from 'react-router'
import { useOrder } from '../../hooks/useOrder'
import { CardOrder } from '../Chef/CardOrder'

export const PedidoTerminado = () => {
  const navigate = useNavigate()
  const { stateOrder } = useOrder()

  const handleBack = () => navigate('/mesero')

  return (
    <>
      <div className='buttons'>
        <span className='icon-arrow-left' onClick={handleBack} />
      </div>
      <section className='card-container'>
        {

        stateOrder?.ordersByDate.map?.map(el => {
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
