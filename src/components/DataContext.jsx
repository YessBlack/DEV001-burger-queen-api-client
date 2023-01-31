import { useState,createContext} from 'react';

 const  ProductContext =createContext();

export function ProductContextProvider({children}) {

  const [isAdd, setText] = useState(true)  
  const [items, setItems] =useState([])

  const click = ( cost, productName) => {
        setText(!isAdd)
    if (isAdd){
     setItems((items)=>[...items,cost, productName ])
      }else{
        setItems([])
      }
  }
    return(
        <ProductContext.Provider value ={{items, click, isAdd}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContext;