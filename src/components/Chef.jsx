import { useState, useEffect } from 'react'
import { CardOrder } from './CardOrder'

export const Chef = () => {
  const [db, setDb] = useState([])
  const [isSnapshot, setIsSnapshot] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/orders') // hacemos la petición get
      .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
      .then(res =>
        setDb(res),
      ) // cuando hayamos terminado (then) actualizamos el estado nombre
  }, [isSnapshot])

  setTimeout(() => {
    setIsSnapshot(true)
  }, 30000)

  return (
    <section className='card-container'>
      {
        db.map(el =>
          <section className='card-container' key={Math.random().toString(36).replace(/[^a-z]+/g, '')}>
            {
        db.map(el => {
          return (
            <CardOrder key={el.id} id={el.id} clientName={el.clientName} list={el.order} />
          )
        })
      }
          </section>
        )
      }
    </section>
  )
}
