import { useContext } from 'react'
import { OrderContext } from '../context/order'

export function useOrder () {
  const order = useContext(OrderContext)

  if (!order) {
    throw new Error('useOrder must be used within an OrderProvider')
  }

  return order
}
