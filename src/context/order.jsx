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
      created_at: new Date().toLocaleDateString(),
      idWaiter: JSON.parse(window.localStorage.getItem('user')).user.id,
      state: 'Pendiente',
      clientName,
      total,
      order: JSON.stringify(selectedProducts)
    }

    await sendOrder(data)

    dispatch({
      type: 'INSERT_ORDER',
      payload: {
        send: !stateOrder.send
      }
    })
  }

  const getOrders = async () => {
    const response = await getDataOrders()

    dispatch({
      type: 'GET_ORDERS',
      payload: {
        orders: response
      }
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
