import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

function ItemListContainer(props) {
    console.log(props)
    return (
    <>
      <ItemCount initial={1} stock={20}/>
      <ItemList></ItemList>
    </>
    
    
  )
}

export default ItemListContainer