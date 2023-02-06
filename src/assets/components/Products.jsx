export const Products = ({ img, product, price}) => {
  return(
    <article className="bq-cardProduct">
      <img src={img} alt="" className="bq-cardProduct-img"/>
      <p className="bq-cardProduct-nameProduct">{product}</p>
      <p className="bq-cardProduct-priceProduct">{price}</p>
      <button className="bq-cardProductBtn">Agregar</button>
    </article>
  )
}