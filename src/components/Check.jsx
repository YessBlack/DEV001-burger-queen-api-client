export function Check ({ quantity, cost, name }) {
  return (
    <>
      <b>{quantity}</b>
      <div className="container-group">
        <span className='item-cost'> ${cost}.00</span><br />
        <span className='item-name'>{name}</span>
      </div>
    </>
  )
}
