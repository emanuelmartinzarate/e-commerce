import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../data/productsMock'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

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
  const [product,setProduct] = useState({}) 
  //hook de react router dom 
  const{detalleId} = useParams()

   //creo un useEffect para llamar a la api simulada
  useEffect(()=>{
      getFetch //funcion que simula la api
      .then(resp => setProduct(resp.find(prod => prod.id === detalleId)))
      .catch(err => console.log(err))
      .finally(()=> console.log(""))
  },[detalleId])//le pongo [] para que se ejecute solo una vez despues del renderizado

  return (
    <>
        <ItemDetail product={product} initial={initial} stock={stock} addToCart={addToCart}/>
    </>
  )
}

export default ItemDetailContainer