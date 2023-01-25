import { useState } from 'react'
function Button ({ initialState}){
    const [isAdd, setText] = useState(initialState)
    let text = isAdd ? 'Añadir' : 'Elimar';
  const click = () => {
    setText(!isAdd)
  }
let buttonClassName = isAdd
  ? 'add-products'
  :  'add-products delete'
    return (
        <button className ={buttonClassName} onClick={click}>{text}</button>
    )
}
 export default Button;