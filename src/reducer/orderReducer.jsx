import { ORDERS_ACTIONS_TYPES } from '../types/orders_actions'

export const initialStateOrder = {
  orders: [],
  send: false
}

export const orderReducer = (state, action) => {
  switch (action.type) {
    case ORDERS_ACTIONS_TYPES.GET_ORDERS:
      return {
        ...state,
        order: action.payload
      }
    case ORDERS_ACTIONS_TYPES.INSERT_ORDER:
      return {
        ...state,
        order: [...state.order, action.payload]
      }
  }
}
