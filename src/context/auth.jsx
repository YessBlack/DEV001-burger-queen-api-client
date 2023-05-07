import { createContext, useReducer } from 'react'
import { getUserRole, loginUser, logoutUser } from '../services/auth'
import { authInitialState, authReducer } from '../reducer/authReducer'

export const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const [state, dispatch] = useReducer(authReducer, authInitialState)

  const login = async (email, password) => {
    const response = await loginUser(email, password)

    if (response?.user) {
      const { roles } = await getUserRole(email)
      dispatch({
        type: 'LOGIN',
        payload: {
          user: response.user,
          role: roles
        }
      })
    } else {
      dispatch({
        type: 'ERROR',
        payload: {
          error: response
        }
      })
    }
  }

  const logout = () => {
    const response = logoutUser()
    dispatch({
      type: 'LOGOUT',
      payload: {
        user: response
      }
    })
  }

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      state
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
