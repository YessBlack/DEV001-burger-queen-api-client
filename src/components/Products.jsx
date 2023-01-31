import { useContext} from 'react';
import ProductContext from './DataContext';


function Products({ img, productName, cost}) {
  const {items ,setItems} = useContext(ProductContext)
  const [isAdd, setText] = useState(true)
  let text = isAdd ? 'Añadir' : 'Elimar';

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
    
        <div  className= 'principal-container-products'>
      <img className='img-product' 
      src={img}/>
      <p className = 'product'>{productName}</p>
      <p className = 'cost'>${cost}.00</p>
      
      <button  className ={buttonClassName} onClick={()=>click(cost, productName)}>{text}</button>
      </div>

      
  );
}

export default Products;
