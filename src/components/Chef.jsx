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

  setTimeout(() => {
    setIsSnapshot(!isSnapshot)
  }, 10000)

  const dbPending = db.filter(el => el.state === 'Pendiente')
  return (
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
  )
}
