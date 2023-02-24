import { useEffect, useState } from 'react'

export const Orders = () => {
  // Notificacion, numero de pedidos terminados
  const [ordersDb, setOrdersDb] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then(res => res.json())
      .then(res => setOrdersDb(res))
  }, [ordersDb])

  const day = JSON.stringify(new Date()).slice(1, 11)
  const dbDate = ordersDb.filter(el => el.date.slice(0, 10) === day)
  const finishOrders = dbDate.filter(el => el.state === 'Terminado').length

  return (
    <>
      <span> {finishOrders}</span>
    </>
  )
}
