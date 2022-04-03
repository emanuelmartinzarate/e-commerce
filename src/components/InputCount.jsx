import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function InputCount() {
  return (
        <>
            <Link to='/cart' >
                <Button variant="light" onClick={()=>console.log('ir a cart') }>Ir al Cart o Terminar compra</Button>
            </Link>
            <Link to='/' >
                <Button variant="light" onClick={()=>console.log('ir a cart') } >Seguir comprando</Button>
            </Link>
        </>
  )
}

export default InputCount