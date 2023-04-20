import { createContext, useReducer } from 'react'
import { AUTH_ACTIONS_TYPES, authInitialState, authReducer } from '../reducer/authReducer'
import { login } from '../services/auth'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState)

  const loginUser = async (email, password) => {
    const res = await login(email, password)
    dispatch({ type: AUTH_ACTIONS_TYPES.LOGIN_USER, payload: res })
  }

  const logoutUser = () => {
    dispatch({ type: AUTH_ACTIONS_TYPES.LOGOUT_USER })
  }

  return (
    <AuthContext.Provider value={{ state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}
