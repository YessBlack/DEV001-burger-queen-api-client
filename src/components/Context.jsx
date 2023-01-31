import { createContext, useState } from 'react'

export const ProductContext = createContext()

export function ProductContextProvider ({ children }) {
  const [items, setItems] = useState([])

  return (
    <ProductContext.Provider value={{ items, setItems }}>
      {children}
    </ProductContext.Provider>
  )
}
