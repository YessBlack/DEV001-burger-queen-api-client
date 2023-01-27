import { useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'
import Products from './Products'

export function ListProduct () {
  const [db, setDb] = useState([])

  const api = helpHttp()
  const url = ' http://localhost:3000/products'

  useEffect(() => {
    helpHttp()
    api.get(url)
      .then(res => {
        if (!res.err) {
          setDb(res)
        } else {
          setDb([])
        }
      })
  }, [url])

  return (
    <>
      <section className='container-products'>
        {
          db.map(el => {
            return (
              <Products
                key={el.id}
                img={el.img}
                name={el.name}
                price={el.price}
              />
            )
          })
        }
      </section>
    </>
  )
}
