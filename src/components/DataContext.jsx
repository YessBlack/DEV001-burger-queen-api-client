import React, { useState, createContext } from 'react'

const ProductContext = createContext()

export function ProductContextProvider ({ children }) {
  const [items, setItems] = useState([])
  const [uniqueProducts, setUniqueProducts] = useState([])

  return (
    <ProductContext.Provider value={{ items, setItems, uniqueProducts, setUniqueProducts }}>

      {children}
    </ProductContext.Provider>
  )
}
export default ProductContext
