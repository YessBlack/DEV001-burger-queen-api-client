import { useContext, useState } from 'react'
import ProductContext from './DataContext'

export function CardOrder ({ id, list }) {
  const [count, setCount] = useState(0)
  const { setIsSnapshot } = useContext(ProductContext)

  const aumentar = () => {
    setCount(count + 1)
    setIsSnapshot(true)
  }

  return (
    <article className='card-order'>
      <div>{`Contador ${count}`}</div>
      <h2 className='card-order__title'>{`Pedido # ${id}`}</h2>
      <ul className='order-list'>
        {
          list.map(el => {
            return (
              <li className='' key={el.id}>{el.quantity} {el.productName} </li>
            )
          })
        }
      </ul>
      <div className='buttons-group'>
        <button onClick={aumentar}>Iniciar</button>
        <button className='end'>Terminar</button>
      </div>
    </article>
  )
}
