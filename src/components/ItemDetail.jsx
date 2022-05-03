import React from 'react'
import InputCount from './InputCount'
import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


function ItemDetail(props) {
  return (
  
      props.loading ? 
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      :
      <Container>
        <Row className="container-details-card" style={{'justifyContent':'center'}}>
          <Card className="text-center" style={{width: '40%',heigth:'40%'}}>
            <Card.Header>{props.product.title} - {props.product.category}</Card.Header>
            <Card.Img src={props.product.picture} />
              <Card.Body>
                <Card.Title>{props.product.description}</Card.Title>
                <Card.Text>
                Price: {props.product.price}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
              {  
                props.inputType === 'itemCount' ?
                    <ItemCount initial={props.initial} stock={props.stock} onAdd={props.onAdd}/>
                  :
                    <InputCount />
              }
            </Card.Footer>
          </Card>
      </Row>
      </Container>
  )
}

export default ItemDetail