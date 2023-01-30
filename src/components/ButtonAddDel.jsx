import { useState } from 'react'
function Button ({ initialState, value,product}){
    const [isAdd, setText] = useState(initialState)
    let text = isAdd ? 'Añadir' : 'Elimar';
  const click = () => {
    setText(!isAdd)
    if (isAdd){
      let items =[value, product]
      console.log(items)
    }
  }
let buttonClassName = isAdd
  ? 'add-products'
  :  'add-products delete'
    return (
        <button className ={buttonClassName} onClick={click}>{text}
        </button>
       
    )
}
 export default Button;