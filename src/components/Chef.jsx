import { useContext } from 'react'
import { ProductContext } from './Context'

export function Chef () {
  const { items, setItems } = useContext(ProductContext)

  console.log()
  return (
    <h1>Hola Chef</h1>
  )
}
