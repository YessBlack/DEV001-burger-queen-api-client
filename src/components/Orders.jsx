import { useEffect, useState } from 'react'

export const Orders = () => {
  const [ordersDb, setOrdersDb] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then(res => res.json())
      .then(res => setOrdersDb(res))
  }, [ordersDb])
  const finishOrders = ordersDb.filter(el => el.state === 'Terminado').length

  return (
    <>
      <span> {finishOrders}</span>
    </>
  )
}
