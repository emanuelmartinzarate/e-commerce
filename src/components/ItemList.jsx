
import Item from './Item'

function ItemList(props) {
    
  return (
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
        {
        props.loading ? 
            <h2>Loading...</h2>
        :   
            props.products.map((product)=>
                        <div key={product.id} className='col-md-4'> 
                            <Item  
                                title={product.title} 
                                pictureUrl={product.pictureUrl} 
                                price={product.price} 
                                description={product.description}
                                initial={props.initial} 
                                stock={props.stock} 
                                addToCart={props.addToCart}/>
                        </div>
        )}
    </div>
  )
}

export default ItemList