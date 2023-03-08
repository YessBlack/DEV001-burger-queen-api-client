import { useEffect, useState } from 'react'

export const Orders = () => {
  const [ordersDb, setOrdersDb] = useState([])
  
  useEffect(() => {
    const data = async() => {
      const res = await fetch('http://localhost:3001/orders')
      const resJson = await res.json()
      setOrdersDb(resJson)
    }
    data()
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
