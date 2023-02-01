import { createContext, useState } from 'react'

export const ProductContext = createContext()

export function ProductContextProvider ({ children }) {
  const [items, setItems] = useState([])
  const [isAdded, setIsAdded] = useState(false)

  return (
    <ProductContext.Provider value={{ items, setItems, isAdded, setIsAdded }}>
      {children}
    </ProductContext.Provider>
  )
}
