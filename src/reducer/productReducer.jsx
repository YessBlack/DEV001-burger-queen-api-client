export const productsInitialState = {
  lunch: [],
  breakfast: [],
  selectedProducts: JSON.parse(window.localStorage.getItem('selectedProducts')) || []
}

// update local storage
export const updateLocalStorage = (state) => {
  window.localStorage.setItem('selectedProducts', JSON.stringify([...state]))
}

export const PRODUCTS_ACTIONS_TYPES = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  CLEAR_PRODUCTS: 'CLEAR_PRODUCTS',
  GET_PRODUCTS_SELECTED: 'GET_PRODUCTS_SELECTED',
  UPDATE_SELECT_PRODUCT: 'UPDATE_SELECT_PRODUCT'
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

    const product = state.selectedProducts.findIndex(item => item.id === id)

    if (product >= 0) {
      const newState = [
        ...state.selectedProducts.slice(0, product),
        { ...state.selectedProducts[product], quantity: state.selectedProducts[product].quantity + 1 },
        ...state.selectedProducts.slice(product + 1)
      ]

      updateLocalStorage(newState)

      return {
        ...state,
        selectedProducts: newState
      }
    }

    const newState = [...state.selectedProducts, { ...action.payload, quantity: 1 }]

    updateLocalStorage(newState)

    return {
      ...state,
      selectedProducts: newState
    }
  },

  [PRODUCTS_ACTIONS_TYPES.UPDATE_SELECT_PRODUCT]: (state, action) => {
    const { id, quantity } = action.payload

    if (quantity === 1) {
      const newState = state.selectedProducts.filter(item => item.id !== id)

      updateLocalStorage(newState)

      return {
        ...state,
        selectedProducts: newState
      }
    }

    const product = state.selectedProducts.findIndex(item => item.id === id)

    const newState = [
      ...state.selectedProducts.slice(0, product),
      { ...state.selectedProducts[product], quantity: quantity - 1 },
      ...state.selectedProducts.slice(product + 1)
    ]

    updateLocalStorage(newState)

    return {
      ...state,
      selectedProducts: newState
    }
  }
}

export function productsReducer (state = productsInitialState, action) {
  const updateState = UPDATE_STATE_BY_ACTION[action.type]
  return updateState ? updateState(state, action) : state
}
