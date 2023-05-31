import { useState } from 'react'
import { onSnapshotOrderFinished } from '../../services/order'
import { useNavigate } from 'react-router'

export const Notification = () => {
  const [isChangeOrder, setIsChangeOrder] = useState(false)
  const navigate = useNavigate()
  const user = JSON.parse(window.localStorage.getItem('user'))

  onSnapshotOrderFinished(() => {
    setIsChangeOrder(true)
  })

  const handleClickNotification = () => {
    setIsChangeOrder(false)
    navigate('/private/pedidos')
  }

  return (
    <div className={user?.role?.waiter ? 'flex items-start justify-center' : 'hidden'}>
      <span className='icon-bell text-2xl relative' onClick={handleClickNotification} />
      <div className={isChangeOrder ? 'w-[10px] h-[10px] bg-button-tertiary-color rounded-full absolute mr-[25px]' : 'hidden'} />
    </div>
  )
}
