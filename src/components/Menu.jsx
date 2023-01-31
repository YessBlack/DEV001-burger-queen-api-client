import { useEffect, useState, useContext } from 'react'
import { helpHttp } from '../helpers/helpHttp'
import Products from './Products'
import { ProductContext } from './Context'

export function Menu () {
  const [db, setDb] = useState([])
  const { items } = useContext(ProductContext)

  console.log(items)
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

  const price = items.map(e => e.price)
  const total = price.reduce((acc, ant) => acc + ant, 0)

  const breakFast = db.filter(el => el.type === 'breakFast')
  const lunch = db.filter(el => el.type === 'lunch')

  const handleSendItems = () => {
    const endPointOrders = 'http://localhost:3001/orders'
    const name = 'Nati Otero'
    const data = {
      pedido: items,
      userName: name
    }
    const options = {
      body: data,
      headers: { 'content-type': 'application/json' }
    }

    api.post(endPointOrders, options)
  }

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
                />
              )
            })
        }
        </section>
        <section className='check-container'>
          <h1 className='title'>Cuenta</h1>
          <ul>
            {
              items.map(item => <li className='check' key={Math.random().toString(36).replace(/[^a-z]+/g, '')}> ${item.price}  - {item.name} </li>)
            }
          </ul>
          <h2 className='total'>Total: $ {total}.00</h2>
          <button className='send-products' onClick={handleSendItems}>Enviar pedido</button>
        </section>
      </section>
    </>
  )
}
