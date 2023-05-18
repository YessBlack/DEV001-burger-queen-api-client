import { ORDERS_ACTIONS_TYPES } from '../types/orders_actions'

export const initialStateOrder = {
  orders: []
}

export const orderReducer = (state, action) => {
  switch (action.type) {
    case ORDERS_ACTIONS_TYPES.GET_ORDERS:
      return {
        ...state,
        orders: action.payload
      }
    case ORDERS_ACTIONS_TYPES.INSERT_ORDER:
      console.log('arrays', action.payload)
      return {
        ...state,
        orders: [...state.orders, action.payload]
      }
  }
}
