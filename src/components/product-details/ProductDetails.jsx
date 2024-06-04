import React from 'react'

const ProductDetails = ({data, close}) => {
    console.log(data);
  return (
    <>
        <div onClick={()=>close(null)} className='product__overlay'></div>
        <div className="product__detail">
            <img src={data.url} width={300} alt="" />
            <h1>{data.title}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, ipsum repellat necessitatibus minus, tempora odit maiores porro pariatur ea est rerum doloribus, nobis nemo! Atque corporis odit voluptates nam aspernatur.</p>
        </div>
    </>
  )
}

export default ProductDetails