import { useState, useEffect, useRef } from 'react'
import { useProduct } from './useProduct'
import { sendOrder } from '../services/products'

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

  const sendOrderData = async (clientName) => {
    const idWaiter = JSON.parse(window.localStorage.getItem('auth')).uid

    const data = {
      clientName,
      order: state.selectedProducts,
      total,
      date: new Date().toLocaleDateString(),
      state: 'Pendiente',
      idWaiter
    }

    return await sendOrder(data)
  }

  return { products, total, productsSelectedLocalStorage, sendOrderData }
}
