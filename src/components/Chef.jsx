import { useState, useEffect } from 'react'
import { CardOrder } from './CardOrder'

export const Chef = () => {
  const [db, setDb] = useState([])
  const [isSnapshot, setIsSnapshot] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/orders') // hacemos la petición get
      .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición

      .then(res => {
        setDb(res)
      }) // cuando hayamos terminado (then) actualizamos el estado nombre
  }, [isSnapshot])

  const day = JSON.stringify(new Date()).slice(1, 11)
  const dbDate = db.filter(el => el.date.slice(0, 10) === day)

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
