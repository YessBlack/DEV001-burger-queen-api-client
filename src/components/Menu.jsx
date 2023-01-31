import { useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'
import Products from './Products'

export function Menu () {
  const [db, setDb] = useState([])

  const [items, setItems] = useState([])

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

  const [isBreakfast, setIsBreakfast] = useState(true)

  const handleClickBreakfast = () => {
    setIsBreakfast(true)
  }

  const handleClickLunch = () => {
    setIsBreakfast(false)
  }

  const breakFast = db.filter(el => el.type === 'breakFast')
  const lunch = db.filter(el => el.type === 'lunch')

  return (
    <>
      <button className='btn-click' onClick={handleClickBreakfast}> Desayuno</button>
      <button className='btn-click-user' onClick={handleClickLunch}> Almuerzo/Cena</button>

      <section className='container-menu'>
        <section className='container-products'>
          {
          isBreakfast
            ? breakFast.map(el => {
              return (
                <Products
                  key={el.id}
                  img={el.img}
                  name={el.name}
                  price={el.price}
                  setItems={setItems}
                  items={items}
                />
              )
            })
            : lunch.map(el => {
              return (
                <Products
                  key={el.id}
                  img={el.img}
                  name={el.name}
                  price={el.price}
                  isAddInitial
                  setItems={setItems}
                  items={items}
                />
              )
            })
        }
        </section>
        <section>
          <h1>Cuenta</h1>
          <ul>
            {
              items.map((el, i) => (
                <li key={i}>{el}</li>
              )
              )
            }
          </ul>
        </section>
      </section>
    </>
  )
}
