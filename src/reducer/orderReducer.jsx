import { ORDERS_ACTIONS_TYPES } from '../types/orders_actions'

export const initialStateOrder = {
  orders: [],
  ordersByDate: [],
  send: null,
  ordersFinished: [],
  ordersPending: []
}

export const orderReducer = (state, action) => {
  switch (action.type) {
    case ORDERS_ACTIONS_TYPES.GET_ORDERS:
      return {
        ...state,
        orders: action.payload
      }

    case ORDERS_ACTIONS_TYPES.GET_ORDERS_BY_DATE:
      return {
        ...state,
        ordersByDate: action.payload
      }

    case ORDERS_ACTIONS_TYPES.INSERT_ORDER:
      return {
        ...state,
        send: action.payload
      }

    case ORDERS_ACTIONS_TYPES.GET_ORDERS_FINISHED:
      return {
        ...state,
        ordersFinished: action.payload
      }

    case ORDERS_ACTIONS_TYPES.GET_ORDERS_PENDING:
      return {
        ...state,
        ordersPending: action.payload
      }
  }
}
