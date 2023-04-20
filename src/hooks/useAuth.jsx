import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/auth'

export function useAuth () {
  const auth = useContext(AuthContext)
  const { state } = auth

  if (!auth) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if (user) {
      user.loginUser(auth.email, auth.password)
    }
  }, [state])

  return auth
}
