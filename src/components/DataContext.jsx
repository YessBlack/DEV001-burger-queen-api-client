import React, { useState, createContext } from 'react'

const ProductContext = createContext()

export function ProductContextProvider ({ children }) {
  const [items, setItems] = useState([])
  const [edit, setEdit] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputCost, setInputCost] = useState('')

  return (
    <ProductContext.Provider value={{ items, setItems, edit, setEdit, inputName, setInputName, inputCost, setInputCost }}>

      {children}
    </ProductContext.Provider>
  )
}
export default ProductContext
