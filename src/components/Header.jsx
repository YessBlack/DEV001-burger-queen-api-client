import { useAuth } from './useAuth'

export const Header = () => {
  const { logOut, isAuthenticated } = useAuth()
  const sessionOut = () => {
    logOut()
  }

  const classIcon = isAuthenticated ? 'showIcon' : 'hideIcon'

  return (
    <header className='header-container'>
      <img className='img-logo' src='../public/images/logo.png' />
      <h1>BURGER QUEEN</h1>
      <span onClick={sessionOut} className={`icon-sign-out ${classIcon}`} />
    </header>
  )
}
