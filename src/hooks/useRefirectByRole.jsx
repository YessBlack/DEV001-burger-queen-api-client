import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { PrivateRoutes } from '../models/routes'

export function useRedirectByRole (state) {
  const navigate = useNavigate()

  useEffect(() => {
    if (state?.user === null) {
      toast.error(state?.error?.error, {
        position: toast.POSITION.TOP_CENTER
      })
    }

    if (state?.user) {
      window.localStorage.setItem('user', JSON.stringify(state?.user))
    }

    if (state?.user?.role?.admin) {
      navigate(PrivateRoutes.ADMIN)
    }

    if (state?.user?.role?.waiter) {
      navigate(PrivateRoutes.MESERO)
    }

    if (state?.user?.role?.chef) {
      navigate(PrivateRoutes.CHEF)
    }
  }, [state])
}
