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
  switch (action.type) {
    case AUTH_ACTIONS_TYPES.LOGIN_USER:

      if (action.payload.user?.accessToken) {
        updateLocalStorage(action.payload.user)
      }
      return {
        ...state,
        res: action.payload
      }
    case AUTH_ACTIONS_TYPES.LOGOUT_USER:
      return {
        ...state,
        res: null
      }
  }
}
