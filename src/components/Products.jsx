import { useContext, useState} from 'react';
import ProductContext from './DataContext';


function Products({ img, productName, cost}) {
  const [isAdded, setIsAdded] = useState(false)
  const {items} = useContext(ProductContext)
  const {setItems} = useContext(ProductContext)

  const addProduct = (product) => {
    const productAdded = items.find(productAdded => productAdded.productName === product.productName)
    if (!productAdded) {
      setItems(items => [...items, product])
      setIsAdded(true)
    } else {
      setItems(products => products.filter(product => product.productName !== productAdded.productName))
      setIsAdded(false)
    }
  }

  let text = isAdded ? 'Eliminar' : 'Añadir';
  let buttonClassName = isAdded
? 'add-products delete'
:  'add-products'

  return (
    
        <div  className= 'principal-container-products'>
      <img className='img-product' 
      src={img}/>
      <p className = 'product'>{productName}</p>
      <p className = 'cost'>${cost}.00</p>
      
      <button className ={buttonClassName} onClick={() => addProduct({cost, productName})}>{text}</button>
      </div>

      
  );
}

export default Products;
