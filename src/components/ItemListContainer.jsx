import React, { useState } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

function ItemListContainer(props) {

  const initial=1;
  const [stock,setStock] = useState(20)

  function addToCart(quantity){
    if(quantity > stock){
      alert(`La cantidad ingresa supera el stock`);
    }else{
      setStock(stock - quantity);
      alert(`Se agregaron ${quantity} al carrito`);
    }
  }
  
  return (
    <>
      <ItemCount initial={initial} stock={stock} addToCart={addToCart}/>
      <div>
            <span>Stock: {stock}</span>
        </div>
      <ItemList></ItemList>
    </>
    
    
  )
}

export default ItemListContainer