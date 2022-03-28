import React, { useState } from 'react'

import ItemList from './ItemList'
import { useEffect } from 'react'
import { getFetch } from '../data/productsMock'
import { useParams } from 'react-router-dom';

function ItemListContainer() {

  //persisto mis datos
  const [products,setProducts] = useState([]) 
  //muestro un loading para cuando termine de cargar la info
  const [loading,setLoading] = useState(true)
  
  //hook de react router dom 
  const{categoryId} = useParams()
  
  //creo un useEffect para llamar a la api simulada
  useEffect(()=>{
      if(categoryId){
         getFetch //funcion que simula la api
        .then(resp => setProducts(resp.filter(item => item.category === categoryId)))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
      }else{
        getFetch //funcion que simula la api
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
      }
  },[categoryId])//le pongo [] para que se ejecute solo una vez despues del renderizado

  
  return (
    <>
      <ItemList products={products} loading={loading}></ItemList>
    </>
    
    
  )
}

export default ItemListContainer