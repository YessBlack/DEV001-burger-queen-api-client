import { useState,createContext} from 'react';

 const  ProductContext =createContext();

export function ProductContextProvider({children}) {
  
  const [items, setItems] =useState([])
 
    return(
        <ProductContext.Provider value ={{items, setItems}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContext; 