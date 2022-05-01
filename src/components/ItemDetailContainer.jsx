import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCartContext } from './CartContext';
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

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


  useEffect(()=>{
    const querydb = getFirestore()
    const queryProd = doc(querydb,'products',detalleId)
    getDoc(queryProd)
      .then(resp => setProduct( {id:resp.id, ...resp.data()} ))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
  },[detalleId])

  return (
          <ItemDetail product={product} initial={initial} stock={stock} onAdd={onAdd} inputType={inputType} loading={loading}/>
  )
}

export default ItemDetailContainer