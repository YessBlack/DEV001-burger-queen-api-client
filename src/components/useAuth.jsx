
import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function useAuth () {
  const auth = useContext(AuthContext)
  return auth
}

export function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser(true)
  }
  const logOut = () => {
    setUser(null)
  }
  return (
    <AuthContext.Provider value={{ user, login, logOut }}> {children} </AuthContext.Provider>
  )
}
