import React from 'react'
import InputCount from './InputCount'
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
        {
           props.inputType === 'itemCount' ?
              <ItemCount initial={props.initial} stock={props.stock} onAdd={props.onAdd}/>
            :
              <InputCount />
        }
      </>
    </div>
</div>
  )
}

export default ItemDetail