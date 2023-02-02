import { useEffect, useState } from 'react'

export function Chef () {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(' http://localhost:3001/orders')
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  data.forEach(order => {
    console.log(order.pedido)
    order.pedido.map(el => console.log(el, order.userName))
  })
  return (
    <div className='card' style={{ width: '16rem', height: '18rem' }}>
      {data.forEach((e, i) => {
        e.pedido.map((el, i) => {
          return (
            <>
              <ul className='list-group'>
                <li className='list-group-item' key={i}>{e.productName}-{e.quantity}</li>
              </ul>
            </>
          )
        })
      })}
      <button className='btn btn-primary me-md-2'>pendiente</button>
    </div>

  )
}
