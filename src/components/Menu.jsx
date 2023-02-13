import Products from './Products'
import { useState, useEffect, useContext } from 'react'
import ProductContext from './DataContext'
import { useOnSnapshot } from './useOnSnapshot'
import { useAuth } from './useAuth'

function Menu () {
  const { items } = useContext(ProductContext)
  const { setItems } = useContext(ProductContext)
  const { setDataOrders } = useContext(ProductContext)
  const [db, setDb] = useState([])
  const [inputName, setInputName] = useState('')
  const [isBreackFast, setIsBreackFast] = useState(true)

  const { agregar } = useOnSnapshot()
  const { isAuthenticated } = useAuth()
  console.log(isAuthenticated)

  const user = JSON.parse(window.localStorage.getItem('user'))

  useEffect(() => {
    fetch('http://localhost:3000/products') // hacemos la petición get
      .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
      .then(res => setDb(res)) // cuando hayamos terminado (then) actualizamos el estado nombre
  }, [])

  const breakFast = db.filter(product => product.type === 'breakFast')
  const lunch = db.filter(product => product.type === 'lunch')

  const handleClickBreakFast = () => {
    setIsBreackFast(true)
  }
  const handleClickLunchDinner = () => {
    setIsBreackFast(false)
  }

  const price = items.map(price => price.cost)
  const total = price.reduce((acc, el) => acc + el, 0)

  const name = (e) => {
    setInputName(e.target.value)
  }

  const products = items.map(item => { return { ...item, quantity: items.filter(e => e.productName === item.productName).length } })
  const setProducts = new Set(products.map(JSON.stringify))
  const uniqueProducts = Array.from(setProducts).map(JSON.parse)

  const handleSendProduct = () => {
    const data = {
      state: 'Pendiente',
      clientName: inputName,
      order: uniqueProducts,
      idWaiter: user.user.id
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' }
    }
    fetch('http://localhost:3001/orders', options)
    setItems([])
    setInputName('')
    agregar()
  }
  const handleDelete = (item) => {
    setItems(items.filter((_, i) => items.indexOf(item) !== i))
  }

  return (
    <>
      <button className='btn-click' onClick={handleClickBreakFast}> Desayuno</button>
      <button className='btn-click-user' onClick={handleClickLunchDinner}> Almuerzo/Cena</button>
      <div className='container-menu-check'>
        <section className='container-menu'>
          {isBreackFast
            ? breakFast.map(e => {
              return (
                <Products
                  key={e.id}
                  img={e.img}
                  productName={e.name}
                  cost={e.price}
                />
              )
            })

            : lunch.map(e => {
              return (
                <Products
                  key={e.id}
                  img={e.img}
                  productName={e.name}
                  cost={e.price}
                />
              )
            })}
        </section>
        <section className='check-container'>
          <h1>Cuenta</h1>
          <input className='client-name' value={inputName} placeholder='Nombre' name='name' onChange={name} />
          {items.map((item) => <li className='check' key={Math.random().toString(36).replace(/[^a-z]+/g, '')}>  ${item.cost}.00  - {item.productName}
            <span className='icon-trash-o' onClick={() => handleDelete(item)} />
                               </li>)}

          <h2 className='total'> Total :$ {total}.00</h2>
          <button className='send-products' onClick={handleSendProduct}>Añadir Pedido</button>
        </section>
      </div>
    </>
  )
}
export default Menu
