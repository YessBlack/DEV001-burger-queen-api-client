import { useState, useEffect, useContext } from 'react'
import { CardOrder } from './CardOrder'
import ProductContext from './DataContext'

export const Chef = () => {
  const [db, setDb] = useState([])
  const { dataOrders } = useContext(ProductContext)

  useEffect(() => {
    fetch('http://localhost:3001/orders') // hacemos la petición get
      .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
      .then(res => setDb(res)) // cuando hayamos terminado (then) actualizamos el estado nombre
  }, [db])

  return (
    <section className='card-container'>
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
