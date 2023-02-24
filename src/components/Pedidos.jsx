import { useEffect, useState } from 'react'
import { CardOrder } from './CardOrder'
import { useNavigate } from 'react-router'

export const Pedidos = () => {
  const navigate = useNavigate()
  const [ordersDb, setOrdersDb] = useState([])
  const [isSnapshot, setIsSnapshot] = useState(false)
  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then(res => res.json())
      .then(res => setOrdersDb(res))
  }, [isSnapshot])

  const day = JSON.stringify(new Date()).slice(1, 11)
  const dbDate = ordersDb.filter(el => el.date.slice(0, 10) === day)
  const finishOrders = dbDate.filter(el => el.state === 'Terminado' || el.state === 'Entregado').reverse()
  useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
    }
  }, [])

  const alertUser = (e) => {
    e.preventDefault()
    e.returnValue = ''
  }
  const handleBack = () => {
    navigate('/mesero')
  }
  setTimeout(() => {
    setIsSnapshot(!isSnapshot)
  }, 300000)

  const handleIsSnapshot = () => {
    setIsSnapshot(!isSnapshot)
  }
  return (
    <>
      <div className='buttons'>
        <span className='icon-arrow-left' onClick={handleBack} />
        <span className='icon-refresh' onClick={handleIsSnapshot} />
      </div>
      <section className='card-container'>

        {finishOrders.map(el => {
          return (
            <CardOrder
              key={el.id} id={el.id} tiempo={el.tiempo} clientName={el.clientName} list={el.order}
              idWaiter={el.idWaiter} order={el.order} date={el.date}
              text='Entregar pedido'
              state={el.state}
            />
          )
        })}
      </section>
    </>
  )
}
