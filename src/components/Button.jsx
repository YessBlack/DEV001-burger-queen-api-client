import { useContext } from 'react'
import ProductContext from './DataContext'

export function Button ({ event }) {
  const { isSnapshot } = useContext(ProductContext)
  console.log('Snapshot compartido: ', isSnapshot)
  return (
    <button onClick={event}>Compartido</button>
  )
}
