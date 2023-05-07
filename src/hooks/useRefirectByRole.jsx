import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

export function useRedirectByRole (state) {
  const navigate = useNavigate()

  useEffect(() => {
    if (state?.user === null) {
      toast.error(state?.error?.error, {
        position: toast.POSITION.TOP_CENTER
      })
    }

    if (state?.user?.role?.admin) {
      navigate('/admin')
      window.localStorage.setItem('role', 'admin')
    }

    if (state?.user?.role?.waiter) {
      navigate('/mesero')
      window.localStorage.setItem('role', 'waiter')
    }

    if (state?.user?.role?.chef) {
      navigate('/chef')
      window.localStorage.setItem('role', 'chef')
    }
  }, [state])
}
