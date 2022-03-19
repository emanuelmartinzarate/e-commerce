import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {
    console.log(props)
    return (
    <div>
      <ItemCount initial={1} stock={20}/>
    </div>
    
    
  )
}

export default ItemListContainer