import { useState } from 'react'
import { Chronometer } from './Chronometer'

export function CardOrder ({ clientName, id, list }) {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [start, setStart] = useState(false)
  console.log(start)
  const aumentar = () => {
    setTimeout(() => {
      if (start) {
        setSeconds(seconds + 1)
        if (seconds === 60) {
          setMinutes(minutes + 1)
          setSeconds(0)
        }

        if (minutes === 60) {
          setHours(hours + 1)
          setMinutes(0)
        }
      }
    }, 1000)
  }
  const inicio = () => {
    setStart(true)
    // eslint-disable-next-line no-unmodified-loop-condition
    while (start) {
      aumentar()
    }
  }
  const end = () => {
    setStart(false)
  }
  return (
    <article className='card-order'>
      <Chronometer
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
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
        <button onClick={inicio}>Iniciar</button>
        <button className='end' onClick={end}>Terminar</button>
      </div>
    </article>
  )
}
