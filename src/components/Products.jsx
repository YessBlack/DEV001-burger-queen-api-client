import { useContext} from 'react';
import ProductContext from './DataContext';


function Products({ img, productName, cost}) {

  const {isAdd} = useContext(ProductContext);  
  const {click} = useContext(ProductContext);

  let text = isAdd ? 'Añadir' : 'Elimar';
  let buttonClassName = isAdd
? 'add-products'
:  'add-products delete'

  return (
    
        <div  className= 'principal-container-products'>
      <img className='img-product' 
      src={img}/>
      <p className = 'product'>{productName}</p>
      <p className = 'cost'>${cost}.00</p>
      
      <button className ={buttonClassName} onClick={()=>click(cost, productName)}>{text}</button>
      </div>

      
  );
}

export default Products;
