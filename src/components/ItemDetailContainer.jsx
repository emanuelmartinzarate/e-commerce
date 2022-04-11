import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../data/productsMock'
import { useCartContext } from './CartContext';
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

  const initial=1;
  const [stock,setStock] = useState(20)
  const [inputType, setInputType] = useState('itemCount')
  const {addToCart} = useCartContext()
  const [loading,setLoading] = useState(true)

  function onAdd(quantity){
    if(quantity > stock){
      alert(`La cantidad ingresa supera el stock`);
    }else{
      setStock(stock - quantity);
      addToCart({...product,quantity:quantity})
      setInputType('inputCount')
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
      .finally(()=> setLoading(false))
  },[detalleId])//le pongo [] para que se ejecute solo una vez despues del renderizado

  return (
    <>
        <ItemDetail product={product} initial={initial} stock={stock} onAdd={onAdd} inputType={inputType} loading={loading}/>
    </>
  )
}

export default ItemDetailContainer