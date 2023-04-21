import { createContext, useReducer } from 'react'
import { PRODUCTS_ACTIONS_TYPES, productsInitialState, productsReducer } from '../reducer/productReducer'
import { getDataProducts } from '../services/products'

export const ProductContext = createContext()

export function ProductProvider ({ children }) {
  const [state, dispatch] = useReducer(productsReducer, productsInitialState)

  const getProducts = async () => {
    const products = await getDataProducts()
    dispatch({
      type: PRODUCTS_ACTIONS_TYPES.GET_PRODUCTS,
      payload: {
        lunch: products.filter(product => product.type === 'lunch'),
        breakfast: products.filter(product => product.type === 'breakFast')
      }
    })
  }

  const addToCheckout = product => {
    dispatch({
      type: PRODUCTS_ACTIONS_TYPES.ADD_PRODUCT,
      payload: product
    })
  }

  return (
    <ProductContext.Provider value={{ state, getProducts, addToCheckout }}>
      {children}
    </ProductContext.Provider>
  )
}
