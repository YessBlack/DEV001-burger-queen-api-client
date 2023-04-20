import { useEffect, useRef } from 'react'
import { useAuth } from './useAuth'

export function useUser () {
  
  const { state } = useAuth()

  

  return userLocalStorage.current
}
