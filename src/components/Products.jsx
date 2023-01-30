import { useState } from 'react';

function Products({ img, productName, cost}) {
  const [isAdd, setText] = useState(true)
  let text = isAdd ? 'Añadir' : 'Elimar';
const click = () => {
  setText(!isAdd)
  if (isAdd){
    let items =[cost, productName]
    console.log(items)
  }
}
let buttonClassName = isAdd
? 'add-products'
:  'add-products delete'
  return (
    <div className= 'principal-container-products'>
      <img className='img-product' 
      src={img}/>
      <p className = 'product'>{productName}</p>
      <p className = 'cost'>{cost}</p>
      <button className ={buttonClassName} onClick={click}>{text}</button>
      </div>
  );
}

export default Products;
