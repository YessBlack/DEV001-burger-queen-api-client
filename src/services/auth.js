import { auth } from '../firebase/firebaseConfig'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    return error.message
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
    return true
  } catch (error) {
    return error
  }
}
