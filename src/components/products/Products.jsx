import React, { useState } from 'react'
import "./Products.scss"
import { DATA } from '../../static'
import ProductDetails from '../product-details/ProductDetails'

const Products = () => {
    const [product, setProduct] = useState(null)

    const products = DATA?.map(el => (
        <div key={el.id} className="product__card">
            <h3>{el.title}</h3>
            <h2>{el.price}</h2>

            <button>Buy now</button>
            <button onClick={()=> setProduct(el)}>Learn more</button>
        </div>
    ))
  return (
    <>
      <div className='product__wrapper'>
        {products}
      </div>
      { product ?  <ProductDetails data={product} close={setProduct}/> : <></> }
     
    </>
  )
}

export default Products