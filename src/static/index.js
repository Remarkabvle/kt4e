import photo1 from "../assets/image/bg1.jpg"
import photo2 from "../assets/image/bg2.jpg"

export const DATA = [
    {
        id: 1,
        title: "iPhone 14 pro",
        price: 899,
        url:photo1,
        aksiya: true
    },
    {
        id: 2,
        title: "iPhone 15 pro",
        price: 1099,
        url:photo2,
        aksiya: false
    },

]













// import React, { useState } from 'react'
// import "./Products.scss"
// import { DATA } from '../../static'
// import ProductDetails from '../product-details/ProductDetails'

// const Products = () => {
//     const [product, setProduct] = useState(null)

//     const products = DATA?.map(el => (
//         <div key={el.id} className="product__card">
//             <img src={el.url} alt="" />
//             <h3>{el.title}</h3>
//             <h2>{el.price ? el.price + " USD" : "Free"} </h2>
//             <button>Buy now</button>
//             <button onClick={()=> setProduct(el)}>Learn more</button>
//             {
//                 el.aksiya ?  <p>Aksiya</p> : <></>
//             }
//         </div>
//     ))
//   return (
//     <>
//       <div className='product__wrapper'>
//         {products}
//       </div>
//       { product ?  <ProductDetails data={product} close={setProduct}/> : <></> }
     
//     </>
//   )
// }

// export default Products