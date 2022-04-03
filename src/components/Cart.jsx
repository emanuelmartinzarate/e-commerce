import React from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from './CartContext'

function Cart() {
  const {cartList,clear} = useCartContext()
  return (
    <div>
      {
        cartList.length === 0 ?
          <>
            <span>Tu carrito esta vacio</span>
          </>
        :
          <>
            {cartList.map(prod => <li key={prod.id}>nombre: {prod.title} cantidad:{prod.quantity}</li>)}
            <Button variant="light" onClick={clear}>Vaciar Carrito</Button>
          </>
          
    }
    </div>
  )
}

export default Cart