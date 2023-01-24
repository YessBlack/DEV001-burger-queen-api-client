
function Products({ img, productName, cost, add, addProducts}) {

  return (
    <div className= 'principal-container-products'>
      <img className='img-product' 
      src={`../public/images/${img}.jfif`}/>
      <p className = 'product'>{productName}</p>
      <p className = 'cost'>{cost}</p>
      <button className = 'add-products'>{add}</button>
    </div>
  );
}

export default Products;
