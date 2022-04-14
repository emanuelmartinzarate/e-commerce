import React, { useState } from 'react'

import ItemList from './ItemList'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore' 

function ItemListContainer() {

  //persisto mis datos
  const [products,setProducts] = useState([]) 
  //muestro un loading para cuando termine de cargar la info
  const [loading,setLoading] = useState(true)
  
  //hook de react router dom 
  const{categoryId} = useParams()

  useEffect(()=>{
    if(categoryId){
      const querydb = getFirestore()
      const queryCollection = collection(querydb,'products')
      const queryFilter = query(queryCollection, where('category','==',categoryId),orderBy('title','asc'))
      getDocs(queryFilter)
        .then(resp => setProducts(resp.docs.map(item => ( {id:item.id, ...item.data()} ) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }else{
      const querydb = getFirestore()
      const queryCollection = collection(querydb,'products')
      getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(item => ( {id:item.id, ...item.data()} ) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }
  },[categoryId])
  
  return (
    <>
      <ItemList products={products} loading={loading}></ItemList>
    </>
    
    
  )
}

export default ItemListContainer