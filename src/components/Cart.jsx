import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'
import Card from 'react-bootstrap/Card'

function Cart() {
  
  const {cartList,clear,deleteItem} = useCartContext()
  const [orderNumber, setOrderNumber] = useState(0)
  const [show, setShow] = useState(false);

  const handleClose = () => {
                              clear()
                              setShow(false)
                            };
  const handleShow = () => setShow(true);
  
  const generarOrden = (e) =>{
    e.preventDefault();
    let orden = {}

    orden.buyer = { name:'Emanuel Martin Zarate',email:'emanuelmartin@gmail.com',phone:'01010101920' }
    orden.total = cartList.reduce((acc,cartItem)=> acc + cartItem.quantity * cartItem.price,0)
    orden.items = cartList.map(cartItem => {
      const id = cartItem.id
      const title = cartItem.title
      const price = cartItem.price * cartItem.quantity

      return {id,title,price}
    })
    
    //creacion de un documento
    const db = getFirestore()
    const queryCollection = collection(db,'orders')
    addDoc(queryCollection,orden)
    .then(({id}) => setOrderNumber(id))
    .catch(err => console.log(err))
    .finally(handleShow)
  }
  return (
    <div>
      {
        cartList.length === 0 ?
          <>
            <span>Tu carrito esta vacio</span><br></br>
            <Link to='/' >
                <Button variant="light" onClick={()=>console.log('ir a cart') } >Seguir comprando</Button>
            </Link>
          </>
        :
          <>
            {cartList.map(prod => 
              <li key={prod.id} style={{'list-style-type':'none'}}>
                <Card style={{'flex-direction': 'row',width: '100%'}}>
                  <Card.Img style={{width: '10%',heigth:'10%'}} src={prod.picture} />
                  <Card.Body style={{display: 'inline', 'text-align': 'left'}}>
                    <Card.Title style={{display: 'inline'}}>{prod.title}</Card.Title>
                    <Card.Text  style={{display: 'inline'}}>
                      cantidad:{prod.quantity} - precio:{prod.price}
                    </Card.Text>
                    <Button variant="light" onClick={()=>deleteItem(prod)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg>
                     </Button>
                  </Card.Body>
                </Card>
              </li>
              )}
              <div style={{'text-align':'center'}}>
                <span>Total a pagar: {cartList.reduce((acc,cartItem)=> acc + cartItem.quantity * cartItem.price,0)}</span><br></br>
                <Button variant="light" onClick={clear}>Vaciar Carrito</Button>
                <Button variant="light" onClick={generarOrden}>Generar Orden</Button>
              </div>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Numero de Orden</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Numero de orden : {orderNumber}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
          </Modal>
          </>
    }
    </div>
  )
}

export default Cart