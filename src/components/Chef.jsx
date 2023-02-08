import { useState, useEffect, useRef } from 'react'
import { CardOrder } from './CardOrder'
import { useOnSnapshot } from './useOnSnapshot'

export const Chef = () => {
  const { isSnapshot } = useOnSnapshot()
  const [db, setDb] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/orders') // hacemos la petición get
      .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
      .then(res => setDb(res)) // cuando hayamos terminado (then) actualizamos el estado nombre
  }, [])

  console.log(isSnapshot)
  return (
    <section className='card-container'>
      {
        db.map(el => {
          return (
            <CardOrder key={el.id} id={el.id} list={el.order} />
          )
        })
      }
    </section>
  )
}
