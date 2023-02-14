
import { useContext, useState } from 'react'
import ProductContext from './DataContext'

export function CardOrder ({ clientName, id, list }) {

  return (
    <article className='card-order'>
      <div>{`Contador ${count}`}</div>
      <h2 className='card-order__title'>{`Pedido # ${id}`}</h2>
      <p>{clientName}</p>
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
