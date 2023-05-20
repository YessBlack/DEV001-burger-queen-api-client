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
        payload: true
      })
    } else {
      dispatch({
        type: 'INSERT_ORDER',
        payload: false
      })
    }
  }

  const getAllOrders = async () => {
    const response = await getDataOrders()

    dispatch({
      type: 'GET_ORDERS',
      payload: response
    })
  }

  const getOrdersByDate = async () => {
    const response = await getDataOrders()
    const day = JSON.stringify(new Date()).slice(1, 11)
    const ordersByDate = response.filter(el => el.created_at.slice(0, 10) === day)

    console.log(ordersByDate)

    dispatch({
      type: 'GET_ORDERS_BY_DATE',
      payload: ordersByDate
    })
  }

  const newOrderSnapshot = (newOrder) => {
    dispatch({
      type: 'NEW_ORDER',
      payload: newOrder
    })
  }

  return (
    <OrderContext.Provider value={{
      stateOrder,
      insertOrder,
      getAllOrders,
      getOrdersByDate,
      newOrderSnapshot
    }}
    >
      {children}
    </OrderContext.Provider>
  )
}
