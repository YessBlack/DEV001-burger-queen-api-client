import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

export const Header = () => {
  const { logoutUser } = useAuth()
  const navigate = useNavigate()
  const userLocalStorage = JSON.parse(window.localStorage.getItem('auth'))

  const sessionOut = () => {
    logoutUser()
    window.localStorage.removeItem('auth')
    navigate('/')
  }

  return (
    <header className='bg-primary-color flex justify-between items-center'>
      <img className='w-[70px] object-cover' src='../public/images/logo.png' />
      <h1 className='font-league-gothic text-4xl'>BURGER QUEEN</h1>
      <span onClick={sessionOut} className={userLocalStorage ? 'icon-sign-out block text-xl' : 'none'} />
    </header>
  )
}
