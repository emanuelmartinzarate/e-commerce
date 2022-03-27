import React, { useEffect, useState } from 'react'
import { getFetch } from '../data/productsMock'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    //persisto mis datos
  const [product,setProduct] = useState({}) 
   //creo un useEffect para llamar a la api simulada
  useEffect(()=>{
      getFetch //funcion que simula la api
      .then(resp => setProduct(resp.find(prod => prod.id === "1")))
      .catch(err => console.log(err))
      .finally(()=> console.log(""))
  },[])//le pongo [] para que se ejecute solo una vez despues del renderizado

  return (
    <>
        <ItemDetail product={product}/>
    </>
  )
}

export default ItemDetailContainer