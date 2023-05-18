export function CardOrder ({ id, clientName, idWaiter, order, created_at, state, text }) {
  // const sendOrder = async () => {
  //   const data = {
  //     state: 'Terminado',
  //     clientName,
  //     order,
  //     idWaiter,
  //     date,
  //     tiempo: ` ${hour} : ${minute} : ${second}`
  //   }
  //   const options = {
  //     method: 'PUT',
  //     body: JSON.stringify(data),
  //     headers: { 'content-type': 'application/json' }
  //   }
  //   await fetch(`https://api-rest-bq.vercel.app/orders/${id}`, options)
  //   setFinish(true)
  //   setIsPaused(true)
  //   swal('Pedido enviado', '', 'success')
  // }

  // const orderCheck = finish || state === 'Entregado' ? 'card-order-finish' : 'card-order'
  // const button = finish || state === 'Entregado' ? 'button-card-finish' : 'button-card'

  // const mesero = () => {
  //   const data = {
  //     state: 'Entregado',
  //     clientName,
  //     order,
  //     idWaiter,
  //     date,
  //     tiempo: ` ${hour} : ${minute} : ${second}`
  //   }
  //   const options = {
  //     method: 'PUT',
  //     body: JSON.stringify(data),
  //     headers: { 'content-type': 'application/json' }
  //   }
  //   fetch(`https://api-rest-bq.vercel.app/orders/${id}`, options)

  //   setFinish(true)
  //   swal('Pedido entregado', '', 'success')
  // }

  return (
    <article>
      <h2 className='card-order__title'>{`Pedido # ${id}`}</h2>
      <p>{clientName}</p>
      <ul className='order-list'>
        {
            order.map(el => {
              return (
                <li className='' key={Math.random().toString(36).replace(/[^a-z]+/g, '')}>{el.quantity} {el.productName} </li>
              )
            })
        }
      </ul>
      {text === 'Enviar Pedido'
        ? <button> {text} </button>
        : <button> {text} </button>}
    </article>
  )
}
