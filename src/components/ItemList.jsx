import React, { useEffect, useState } from 'react'
import { getFetch } from '../data/productsMock'

function ItemList() {
    //persisto mis datos
    const [products,setProducts] = useState([]) 
    //muestro un loading para cuando termine de cargar la info
    const [loading,setLoading] = useState(true)
    //creo un useEffect para llamar a la api simulada
    useEffect(()=>{
        getFetch //funcion que simula la api
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])//le pongo [] para que se ejecute solo una vez despues del renderizado

  return (
    <div>
        {
        loading ? 
            <h2>Loading...</h2>
        :
            products.map((product)=><div key={product.id} className='col-md-4'>
                                        <div className='card w-100 mt-5'>
                                            <div className='card-header'>
                                                {product.title}
                                            </div>
                                            <div className='card-body'>
                                                {product.pictureUrl}
                                                {product.price}
                                            </div>
                                            <div className='card-footer'>
                                            {product.description}
                                            </div>
                                        </div>
                                    </div>
        )}
    </div>
  )
}

export default ItemList