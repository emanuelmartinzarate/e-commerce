import Button from 'react-bootstrap/Button'
import { useState } from "react";
import './ItemCount.css'

function ItemCount(props) {
    
    const [quantity,setQuantity] =useState(props.initial);
    const [stock,setStock] = useState(props.stock-1)

    function addItem(){
        if(props.stock > quantity){
            setQuantity(quantity+1)
            setStock(stock-1)
        }
            
    }

    function putOffItem(){
        if(quantity > props.initial){
            setQuantity(quantity-1)
            setStock(stock+1)
        }
            
    }

  return (
    <>
        <div>
            <Button variant="light" onClick={putOffItem}> - </Button>
            <span className="quantity">{ quantity }</span>
            <Button variant="light" onClick={addItem}> + </Button>
        </div>
        <div>
            <span>Cantidad disponible: {stock}</span>
        </div>
        <div>
            <Button variant="light">Agregar al carrito</Button>
        </div>
    </>     
  )
}

export default ItemCount