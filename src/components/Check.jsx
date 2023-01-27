import { useState } from 'react'

export const Check = () => {
  const [total, setTotal] = useState(0)
  return (
    <article>
      <p>Total: $ {total}</p>
    </article>
  )
}
