export function CardOrder ({ id, clientName, idWaiter, order, created_at, state, text }) {
  const sendOrder = async () => {
    const data = {
      state: 'Terminado',
      clientName,
      order,
      idWaiter,
      date,
      tiempo: ` ${hour} : ${minute} : ${second}`
    }
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'content-type': 'application/json' }
    }
    await fetch(`https://api-rest-bq.vercel.app/orders/${id}`, options)
  }

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
    <article className='max-w-[300px] w-[100%] h-[100%] shadow rounded-lg p-4 mt-2 flex flex-col justify-between border-[1px] border-[#FFBD59] gap-4 relative'>
      <span className='icon-pin absolute top-0 right-0 mt-2 mr-2 text-[#a52727] transform rotate-45 text-lg' />
      <h2 className='font-bold'>{`Pedido # ${id}`}</h2>
      <p className='truncate'>Cliente: {clientName}</p>
      <ul className='flex flex-col gap-1'>
        <span className='font-bold'>Pedidos</span>
        {
            order.map(el => {
              return (
                <li className='list-disc ml-6' key={Math.random().toString(36).replace(/[^a-z]+/g, '')}>
                  <span className=''> {el.productName} </span>
                  <span className=''>- {el.quantity}</span>
                </li>
              )
            })
        }
      </ul>
      {text === 'Enviar Pedido'
        ? <button className='p-[10px] bg-[#73C089] border-none rounded-md shadow-md block cursor-pointer'>{text}</button>
        : <button className='p-[10px] border-[#FFBD59] border-[1px] border-solid rounded-md font-bold '> {text}</button>}
    </article>
  )
}
