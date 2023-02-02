import { useEffect, useState, useContext } from 'react'
import Products from './Products'
import { ProductContext } from './Context'

export function Menu () {
  const [db, setDb] = useState([])
  const [inputName, setInputName] = useState('')
  const { items } = useContext(ProductContext)
  const { setItems } = useContext(ProductContext)

  const url = ' http://localhost:3000/products'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setDb(res)
      })
  }, [])

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

  const products = items.map(item => {
    return { ...item, cantidad: items.filter(e => e.name === item.name).length, estado: 'pendiente' }
  })

  const set = new Set(products.map(JSON.stringify))
  const arrSinDuplicaciones = Array.from(set).map(JSON.parse)

  const handleSendItems = (e) => {
    const endPointOrders = 'http://localhost:3001/orders'
    const data = {
      pedido: arrSinDuplicaciones,
      userName: inputName
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' }
    }

    fetch(endPointOrders, options)
    setItems([])
    setInputName('')
  }

  const handleDelete = (product) => {
    setItems(items.filter((item, i) => items.indexOf(product) !== i))
  }
  const handleChangeName = (e) => {
    setInputName(e.target.value)
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
          <input type='text' placeholder='Nombre' name='name' value={inputName} onChange={handleChangeName} />
          <ul>
            {
              items.map((item) => <li className='check' key={Math.random().toString(36).replace(/[^a-z]+/g, '')}> ${item.price}.00 - {item.name} <ion-icon name='trash-outline' onClick={() => handleDelete(item)} /></li>)
            }
          </ul>
          <h2 className='total'>Total: $ {total}.00</h2>
          <button className='send-products' onClick={handleSendItems}>Enviar pedido</button>
        </section>
      </section>
    </>
  )
}
