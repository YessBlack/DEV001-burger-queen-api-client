import { useState } from 'react'

export const Button = ({ isAddInitial, price, name, setItems }) => {
  const [isAdd, setText] = useState(isAddInitial)

  const text = isAdd ? 'Añadir' : 'Eliminar'

  const click = () => {
    if (isAdd) {
      setItems([price, name])
    } else {
      setItems([])
    }
    setText(!isAdd)
  }

  const buttonClassName = isAdd
    ? 'add-products'
    : 'add-products delete'

  return (
    <button className={buttonClassName} onClick={click}>{text}</button>
  )
}
