import { useState, useEffect } from 'react'
import { CardOrder } from './CardOrder'

export const Chef = () => {
  const [db, setDb] = useState([])
  const [isSnapshot, setIsSnapshot] = useState(false)
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
  useEffect(() => {
    const data = async () => {
      const res = await fetch('https://run.mocky.io/v3/a6dfa6ca-9e5f-4f8c-94d5-ab41bfbec2dd')
      const data = await res.json()
      setDb(data.orders)
    }
    data()
  }, [isSnapshot])

  const day = JSON.stringify(new Date()).slice(1, 11)
  const dbDate = db.filter(el => el.date.slice(0, 10) === day)

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
    }
  }, [])

  setTimeout(() => {
    setIsSnapshot(!isSnapshot)
  }, 300000)

  const handleIsSnapshot = () => {
    setIsSnapshot(!isSnapshot)
  }

  const dbPending = dbDate.filter(el => el.state === 'Pendiente')
  return (
    <>
      <span className='icon-refresh' onClick={handleIsSnapshot} />
      <section className='card-container'>
        {

        dbPending.map(el => {
          return (
            <CardOrder
              key={el.id} id={el.id} tiempo={el.tiempo} clientName={el.clientName} list={el.order}
              idWaiter={el.idWaiter} order={el.order} date={el.date}
              text='Enviar Pedido'
            />
          )
        })
      }
      </section>
    </>

  )
}
