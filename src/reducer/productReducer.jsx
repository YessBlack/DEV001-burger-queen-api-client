export const productsInitialState = {
  lunch: [],
  breakfast: [],
  selectedProducts: []
}

export const PRODUCTS_ACTIONS_TYPES = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  CLEAR_PRODUCTS: 'CLEAR_PRODUCTS',
  GET_PRODUCTS_SELECTED: 'GET_PRODUCTS_SELECTED'
}

const UPDATE_STATE_BY_ACTION = {
  [PRODUCTS_ACTIONS_TYPES.GET_PRODUCTS]: (state, action) => {
    const { lunch, breakfast } = action.payload
    return {
      ...state,
      lunch,
      breakfast
    }
  },
  [PRODUCTS_ACTIONS_TYPES.ADD_PRODUCT]: (state, action) => {
    const { id } = action.payload

    console.log(state.selectedProducts)

    const product = state.selectedProducts.findIndex(item => item.id === id)

    if (product >= 0) {
      const newState = [
        ...state.selectedProducts.slice(0, product),
        { ...state.selectedProducts[product], quantity: state.selectedProducts[product].quantity + 1 },
        ...state.selectedProducts.slice(product + 1)
      ]
      return {
        ...state,
        selectedProducts: newState
      }
    }

    return {
      ...state,
      selectedProducts: [...state.selectedProducts, { ...action.payload, quantity: 1 }]
    }
  }
}

export function productsReducer (state = productsInitialState, action) {
  const updateState = UPDATE_STATE_BY_ACTION[action.type]
  return updateState ? updateState(state, action) : state
}
