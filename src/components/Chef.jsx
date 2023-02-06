 import { useState, useEffect } from 'react';


export const Chef = () =>{
    const [db, setDb] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/orders') // hacemos la petición get
         .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
         .then(res => setDb(res)); // cuando hayamos terminado (then) actualizamos el estado nombre
     }, [db]); 

return ( 
    <article>
    <div className="card" style={{width: '16rem', height:'18rem'}}>
    {db.map((order) =>{ return (
     <div key={order.id}>
         <button className='btn btn-primary me-md-2'>{order.state}</button>
         <h6>{order.clientName}</h6>
    
         { order.order.map((product, i)=> { return (
           <div key={i}>
            <ul className="list-group" >
           <li className="list-group-item">{product.quantity} {product.productName} </li>
        </ul>        
           </div>
         )})}
         </div>
    )})}

   
     </div>
     </article>
)
    }