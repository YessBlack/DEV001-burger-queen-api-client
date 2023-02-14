import { useState, createContext } from 'react'

const ProductContext = createContext()

export function ProductContextProvider ({ children }) {
  const [items, setItems] = useState([])

  const [dataOrders, setDataOrders] = useState([])

  return (
    <ProductContext.Provider value={{ items, setItems, dataOrders, setDataOrders }}>

      {children}
    </ProductContext.Provider>
  )
}
export default ProductContext
