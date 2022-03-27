import React, { useState } from 'react'

import ItemList from './ItemList'
import { useEffect } from 'react'
import { getFetch } from '../data/productsMock'

function ItemListContainer(props) {

  const initial=1;
  const [stock,setStock] = useState(20)

  function addToCart(quantity){
    if(quantity > stock){
      alert(`La cantidad ingresa supera el stock`);
    }else{
      setStock(stock - quantity);
      alert(`Se agregaron ${quantity} al carrito`);
    }
  }

  //persisto mis datos
  const [products,setProducts] = useState([]) 
  //muestro un loading para cuando termine de cargar la info
  const [loading,setLoading] = useState(true)
  //creo un useEffect para llamar a la api simulada
  useEffect(()=>{
      getFetch //funcion que simula la api
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
  },[])//le pongo [] para que se ejecute solo una vez despues del renderizado

  
  return (
    <>
      <ItemList products={products} loading={loading} initial={initial} stock={stock} addToCart={addToCart}></ItemList>
    </>
    
    
  )
}

export default ItemListContainer