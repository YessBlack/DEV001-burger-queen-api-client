import { useContext } from 'react'
import { ProductContext } from '../context/product'

export function useProduct () {
  const product = useContext(ProductContext)

  if (!product) {
    throw new Error('useProduct must be used within an ProductProvider')
  }

  return product
}
