export const authInitialState = {
  res: null
}

export const AUTH_ACTIONS_TYPES = {
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER'
}

// update local storage
export const updateLocalStorage = (state) => {
  window.localStorage.setItem('auth', JSON.stringify(state))
}

export function authReducer (state = authInitialState, action) {
  const newState = action.payload
  switch (action.type) {
    case AUTH_ACTIONS_TYPES.LOGIN_USER:
      if (typeof newState === 'object') {
        if (newState._tokenResponse) {
          updateLocalStorage(action.payload.user)
          return {
            ...state,
            res: newState.user
          }
        } else {
          return {
            ...state,
            res: null
          }
        }
      }
      return {
        ...state,
        res: null
      }
    case AUTH_ACTIONS_TYPES.LOGOUT_USER:
      return {
        ...state
      }
  }
}
