import Button from 'react-bootstrap/Button'
import { useState } from "react";
import './ItemCount.css'

function ItemCount(props) {
    
    const [quantity,setQuantity] =useState(props.initial);
    
    const stock = props.stock;
    
    function addItem(){
        setQuantity(quantity+1)
     }

    function putOffItem(){
        setQuantity(quantity-1)
     }

     return (
    <>
        <div>
            <Button variant="light" onClick={()=>putOffItem()} disabled={quantity===props.initial}> - </Button>
            <span className="quantity">{ quantity }</span>
            <Button variant="light" onClick={()=>addItem()} disabled={stock===quantity || stock === 0   }> + </Button>
        </div>
        <div>
            <Button variant="light" onClick={()=>props.addToCart(quantity)} disabled={stock === 0}>Agregar al carrito</Button>
        </div>
    </>     
  )
}

export default ItemCount