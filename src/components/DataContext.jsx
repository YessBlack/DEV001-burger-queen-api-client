import { useState, createContext } from 'react'

const ProductContext = createContext()

export function ProductContextProvider ({ children }) {
  const [items, setItems] = useState([])
  const [isSnapshot, setIsSnapshot] = useState(false)

  return (
    <ProductContext.Provider value={{ items, setItems, isSnapshot, setIsSnapshot }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductContext
