import { createContext, useReducer } from 'react'
import { sendOrder, getDataOrders } from '../services/order'
import { v4 as uuid } from 'uuid'
import { initialStateOrder, orderReducer } from '../reducer/orderReducer'

export const OrderContext = createContext()

export function OrderProvider ({ children }) {
  const [stateOrder, dispatch] = useReducer(orderReducer, initialStateOrder)

  const insertOrder = async (clientName, total, selectedProducts) => {
    const data = {
      id: uuid(),
      state: 'Pendiente',
      clientName,
      idWaiter: JSON.parse(window.localStorage.getItem('user')).user.id,
      total,
      order: selectedProducts
    }

    const response = await sendOrder(data)

    if (response === 'success') {
      dispatch({
        type: 'INSERT_ORDER',
        payload: {
          ...data
        }
      })
      return true
    } else {
      return false
    }
  }

  const getOrders = async () => {
    const response = await getDataOrders()

    dispatch({
      type: 'GET_ORDERS',
      payload: response
    })
  }

  return (
    <OrderContext.Provider value={{
      stateOrder,
      insertOrder,
      getOrders
    }}
    >
      {children}
    </OrderContext.Provider>
  )
}
