import React, { useState } from 'react'

import ItemList from './ItemList'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore' 

function ItemListContainer() {

  const [products,setProducts] = useState([]) 
  const [loading,setLoading] = useState(true)
  const{categoryId} = useParams()

  useEffect(()=>{
    const querydb = getFirestore()
    const queryCollection = collection(querydb,'products')
    const queryFilter = categoryId ?
                            query(queryCollection, 
                                  where('category','==',categoryId),orderBy('title','asc')
                            )
                          :
                            queryCollection
    getDocs(queryFilter)
      .then(resp => setProducts(resp.docs.map(item => ( {id:item.id, ...item.data()} ) ) ) )
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    
  },[categoryId])
  
  return (
    <>
      <ItemList products={products} loading={loading}></ItemList>
    </>
  )
}

export default ItemListContainer