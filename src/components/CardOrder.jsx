import StopWatch from './Chronometer'

export function CardOrder ({ id, list, clientName }) {
  return (
    <article className='card-order'>
      <StopWatch />
      <h2 className='card-order__title'>{`Pedido # ${id}`}</h2>
      <p>{clientName}</p>
      <ul className='order-list'>
        {
            list.map(el => {
              return (
                <li className='' key={Math.random().toString(36).replace(/[^a-z]+/g, '')}>{el.quantity} {el.productName} </li>
              )
            })
        }
      </ul>

    </article>
  )
}
