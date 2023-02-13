import { createContext, useContext, useState } from 'react'

const OnSnapshot = createContext()

export function useOnSnapshot () {
  const snapshot = useContext(OnSnapshot)
  return snapshot
}

export function OnSnapshotProvider ({ children }) {
  const [isSnapshot, setIsSnapshot] = useState(false)

  const agregar = () => {
    setIsSnapshot(true)
  }

  const noAgregar = () => {
    setIsSnapshot(false)
  }

  return (
    <OnSnapshot.Provider value={{ isSnapshot, agregar, noAgregar }}> {children} </OnSnapshot.Provider>
  )
}
