
import { Spinner } from 'react-bootstrap'
import Item from './Item'

function ItemList(props) {
    
  return (
    <div className='container-cards'>
        {
        props.loading ? 
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        :   
            props.products.map((product)=>
                            <Item
                                key={product.id}  
                                title={product.title} 
                                picture={product.picture} 
                                price={product.price} 
                                description={product.description}
                                id={product.id}
                                category={product.category}/>
        )}
    </div>
  )
}

export default ItemList