import React from 'react'
import ItemCount from './ItemCount'

function Item(props) {
  
  return (
      <div className='card w-100 mt-5'>
          <div className='card-header'>
              {props.title}
          </div>
          <div className='card-body'>
              {props.pictureUrl}
              {props.price}
          </div>
          <div className='card-footer'>
          {props.description}
          </div>
          <ItemCount initial={props.initial} stock={props.stock} addToCart={props.addToCart}/>
          <div>
              <span>Stock: {props.stock}</span>
          </div>
      </div>
  )
}

export default Item