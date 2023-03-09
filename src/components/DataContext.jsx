import React, { useState, createContext } from 'react'

const ProductContext = createContext()

export function ProductContextProvider ({ children }) {
  const [items, setItems] = useState([])
  const [edit, setEdit] = useState(false)

  return (
    <ProductContext.Provider value={{ items, setItems, edit, setEdit }}>

      {children}
    </ProductContext.Provider>
  )
}
export default ProductContext
