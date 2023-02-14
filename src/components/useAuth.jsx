import React from 'react'
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function useAuth () {
  const auth = useContext(AuthContext)
  return auth
}

export function AuthProvider ({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    setIsAuthenticated(true)
  }
  const logOut = () => {
    setIsAuthenticated(false)
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logOut }}> {children} </AuthContext.Provider>
  )
}
