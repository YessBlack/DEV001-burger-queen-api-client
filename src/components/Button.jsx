import { useState } from "react"

export const Button = ({isAddInitial}) => {
  const [isAdd, setText] = useState(isAddInitial)

  let text = isAdd ? 'Añadir' : 'Eliminar'

  const hizoClick = () => {
    setText(!isAdd)
  }

  const buttonClassName = isAdd
    ? 'add-products'
    : 'add-products delete'

  return(
    <button className = {buttonClassName} onClick={hizoClick} >{text}</button>
  )
}