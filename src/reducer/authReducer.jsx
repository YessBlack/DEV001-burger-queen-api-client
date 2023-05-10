import { AUTH_ACTIONS_TYPES } from '../types/auth_actions'

export const authInitialState = {
  user: null,
  error: null
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS_TYPES.LOGIN:
      return {
        ...state,
        user: action.payload
      }

    case AUTH_ACTIONS_TYPES.LOGOUT:
      return {
        ...state
      }

    case AUTH_ACTIONS_TYPES.ERROR:
      return {
        ...state,
        error: action.payload
      }
  }
}
