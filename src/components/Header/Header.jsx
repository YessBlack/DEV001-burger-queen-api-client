import React from 'react'
import { useNavigate } from 'react-router'
import { Notification } from '../Waiter/Notification'

export const Header = () => {
  const navigate = useNavigate()
  const userLocalStorage = JSON.parse(window.localStorage.getItem('user'))

  const sessionOut = () => {
    window.localStorage.clear()
    navigate('/')
  }

  return (
    <header className='bg-primary-color flex justify-between items-center px-[50px]'>
      <img className='w-[70px] object-cover' src='../public/images/logo.png' />
      <h1 className='font-league-gothic text-4xl'>BURGER QUEEN</h1>
      <div className='flex gap-6 items-center'>
        <Notification />
        <span onClick={sessionOut} className={userLocalStorage ? 'icon-sign-out block text-2xl' : 'none'} />
      </div>
    </header>
  )
}
