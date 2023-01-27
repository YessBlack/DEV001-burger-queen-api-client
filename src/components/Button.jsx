import { useState } from 'react'

export const Button = ({ isAddInitial }) => {
  const [isAdd, setText] = useState(isAddInitial)
  const [products, setProducts] = useState([])

  const text = isAdd ? 'Añadir' : 'Eliminar'

  const hizoClick = (e) => {
    setText(!isAdd)
    console.log('Hizo click', e)
  }

  const buttonClassName = isAdd
    ? 'add-products'
    : 'add-products delete'

  return (
    <button className={buttonClassName} onClick={hizoClick}>{text}</button>
  )
}
