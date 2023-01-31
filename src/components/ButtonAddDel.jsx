import { useState } from 'react'
function Button ({ initialState, value,product}){
  const [isAdd, setText] = useState(true)
  let text = isAdd ? 'Añadir' : 'Elimar';
 const [items, setItems] =useState([])
const click = () => {
  setText(!isAdd)
  if (isAdd){
   setItems([value, product])
    }else{
      setItems([])
    }
}
console.log(items)
let buttonClassName = isAdd
? 'add-products'
:  'add-products delete'
    return (
        <button className ={buttonClassName} onClick={click}>{text}
        </button>
       
    )
}
 export default Button;