import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function InputCount() {
  return (
        <>
            <Link to='/cart' >
                <Button variant="light" >Ir al Cart o Terminar compra</Button>
            </Link>
            <Link to='/' >
                <Button variant="light" >Seguir comprando</Button>
            </Link>
        </>
  )
}

export default InputCount