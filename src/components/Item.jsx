import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
  
  return (
      <div className='card w-100 mt-5'>
          <div className='card-header'>
              {props.title} - {props.category}
          </div>
          <div className='card-body'>
              {props.pictureUrl}
              {props.price}
          </div>
          <div className='card-footer'>
            
            <Link to={`/detalle/${props.id}`}>
                <button className="btn btn-outline-primary btn-block">
                    Detalle del producto
                </button>
            </Link>
          </div>
      </div>
  )
}

export default Item