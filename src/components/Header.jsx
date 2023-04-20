import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

export const Header = () => {
  const { state, logoutUser } = useAuth()
  const navigate = useNavigate()

  const sessionOut = async () => {
    await logoutUser()
    navigate('/')
  }

  return (
    <header className='bg-primary-color flex w-screen justify-between items-center flex-1 py-0 px-[1rem]'>
      <img className='w-[70px] object-cover' src='../public/images/logo.png' />
      <h1 className='font-league-gothic text-4xl'>BURGER QUEEN</h1>
      <span onClick={sessionOut} className='icon-sign-out block text-xl' />
    </header>
  )
}
