
import Button from './Button'

function Products({ img, productName, cost}) {
  return (
    <div className= 'principal-container-products'>
      <img className='img-product' 
      src={`../public/images/${img}.jfif`}/>
      <p className = 'product'>{productName}</p>
      <p className = 'cost'>{cost}</p>
      <Button
      initialState={true}
      />
    </div>
  );
}

export default Products;
