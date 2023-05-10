import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { CardOrder } from './CardOrder'
import { useOrder } from '../hooks/useOrder'

export const Pedidos = () => {
  const navigate = useNavigate()
  const { stateOrder, getOrders } = useOrder()

  console.log(stateOrder)

  // const day = JSON.stringify(new Date()).slice(1, 11)
  // const dbDate = ordersDb.filter(el => el.date.slice(0, 10) === day)

  // const finishOrders = dbDate.filter(el => el.state === 'Terminado' || el.state === 'Entregado').reverse()

  const handleBack = () => navigate('/mesero')

  return (
    <>
      <div className='buttons'>
        <span className='icon-arrow-left' onClick={handleBack} />
      </div>
      <section className='card-container'>
        {

        state?.map(el => {
          return (
            <CardOrder
              key={el.id} id={el.id} tiempo={el.tiempo} clientName={el.clientName} list={el.order}
              idWaiter={el.idWaiter} order={el.order} date={el.date}
              text='Entregar pedido'
              state={el.state}
            />
          )
        })
      }
      </section>
    </>
  )
}
