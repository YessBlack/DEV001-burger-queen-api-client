import Products from './Products'
import {useState, useEffect, useContext} from 'react'; 
import ProductContext from './DataContext';

function Menu () {
  const {items} = useContext(ProductContext)
  console.log(items)
   const [db, setDb] = useState([]);

  useEffect(() => {
    const products = async() => {
    await fetch('http://localhost:3000/products') // hacemos la petición get
    .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
    .then(res => setDb(res)); // cuando hayamos terminado (then) actualizamos el estado nombre
    }
  products()
}, []); 

const [isBreackFast , setIsBreackFast] =useState(true);

const breakFast= db.filter(product => product.type === "breakFast");
const lunch = db.filter( product => product.type === "lunch");

const handleClickBreakFast = () =>{
  setIsBreackFast(true)
}
const handleClickLunchDinner = () =>{
  setIsBreackFast(false)
}

return (
  <>

  <button className= 'btn-click' onClick={handleClickBreakFast}> Desayuno</button>
  <button className='btn-click-user' onClick={handleClickLunchDinner}> Almuerzo/Cena</button>
  { isBreackFast ? breakFast.map(e =>{return( 
    <Products
    key ={e.id}
    img={e.img}
    productName={e.name}
    cost={e.price}
   />
  )})
          
   : lunch.map(e =>{return( 
    <Products
    key ={e.id}
    img={e.img}
    productName={e.name}
    cost={e.price} 
     />
  )})}
 <span>{items}</span>
  </>
)
}
export default Menu