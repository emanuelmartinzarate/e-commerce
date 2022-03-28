import React from 'react'
import ItemCount from './ItemCount'


function ItemDetail(props) {
  return (
    <div className='card w-100 mt-5'>
    <div className='card-header'>
        {props.product.title} - {props.product.category}
    </div>
    <div className='card-body'>
        {props.product.pictureUrl}
        {props.product.price}
    </div>
    <div className='card-footer'>
      <>
        <ItemCount initial={props.initial} stock={props.stock} addToCart={props.addToCart}/>      
      </>
    </div>
    <div>
        <span>Stock: {props.stock}</span>
    </div>
</div>
  )
}

export default ItemDetail