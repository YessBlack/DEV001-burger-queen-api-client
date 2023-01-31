import { useContext} from 'react';
import ProductContext from './DataContext';

function Button ({ cost, productName}){
  
  const {isAdd} = useContext(ProductContext);  
  const {click} = useContext(ProductContext);

 
  let text = isAdd ? 'Añadir' : 'Elimar';

let buttonClassName = isAdd
? 'add-products'
:  'add-products delete'
    return (
        <button className ={buttonClassName} onClick={() =>click (cost, productName)}>{text}
        </button>
       
    )
}
 export default Button;