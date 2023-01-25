
import Button from './ButtonAddDel'

function Products({ img, productName, cost}) {
  return (
    <div className= 'principal-container-products'>
      <img className='img-product' 
      src={`/images/${img}.jfif`}/>
      <p className = 'product'>{productName}</p>
      <p className = 'cost'>{cost}</p>
      <Button
      initialState={true}
      value = {cost}
      product = {productName}
       />
     
    </div>
  );
}

export default Products;
