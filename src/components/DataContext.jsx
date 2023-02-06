import { useState, createContext } from 'react'

const ProductContext = createContext()

export function ProductContextProvider ({ children }) {
  const [items, setItems] = useState([])
  const [auth, setAuth] = useState(null)

  return (
    <ProductContext.Provider value={{ items, setItems, auth, setAuth }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductContext
