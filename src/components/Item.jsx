import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

function Item(props) {
  
  return (
    <Card className='card'>
        <Card.Img className='products-img' src={props.picture} alt={props.category}/>
        <Card.Body>
            <Card.Title>{props.title} - {props.category}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Card.Text>
                Price: {props.price}
            </Card.Text>
            </Card.Body>
        <Card.Footer>
            <Link to={`/detalle/${props.id}`}>
                <button className="btn btn-outline-primary btn-block">
                    Detalle del producto
                </button>
            </Link>
        </Card.Footer>
    </Card>
  )
}

export default Item