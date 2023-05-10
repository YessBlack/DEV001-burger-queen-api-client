import { useState, useEffect, useRef } from 'react'
import { useProduct } from './useProduct'

export function useData () {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const productsSelectedLocalStorage = useRef([])
  const { state, getProducts } = useProduct()

  useEffect(() => {
    setProducts(getProducts())
  }, [])

  useEffect(() => {
    productsSelectedLocalStorage.current = JSON.parse(window.localStorage.getItem('selectedProducts'))

    const total = [...state.selectedProducts].map(el => el.cost * el.quantity
    ).reduce((acc, cur) => acc + cur, 0)

    setTotal(total)
  }, [state])

  return { products, total, productsSelectedLocalStorage }
}
