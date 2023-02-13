<<<<<<< HEAD
import { useState, useEffect, useContext } from 'react'
import { CardOrder } from './CardOrder'
import ProductContext from './DataContext'
=======
import { useState, useEffect, useRef } from 'react'
import { CardOrder } from './CardOrder'
import { useOnSnapshot } from './useOnSnapshot'
>>>>>>> e055577e8a097ce074eb9a5704f74792ce7c935d

export const Chef = () => {
  const { isSnapshot } = useOnSnapshot()
  const [db, setDb] = useState([])
  const { dataOrders } = useContext(ProductContext)

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
<<<<<<< HEAD
            <CardOrder key={el.id} id={el.id} clientName={el.clientName} list={el.order} />
=======
            <CardOrder key={el.id} id={el.id} list={el.order} />
>>>>>>> e055577e8a097ce074eb9a5704f74792ce7c935d
          )
        })
      }
    </section>
  )
}
