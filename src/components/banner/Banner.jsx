import React from 'react'
import "./Banner.scss"

const Banner = ({title, price, url, bg, items}) => {
  console.log(items);
  let itemsElements = items?.map(el =><li key={el}>{el}</li> )
  
  return (
    <div style={{background: `url(${url}) no-repeat center/cover fixed`, color: bg}} className='banner'>
        <h2>{title}</h2>
        <ul>
          {itemsElements}
        </ul>
        <h3>{price} USD</h3>
        <img src={url} width={300} alt="" />
    </div>
  )
}

export default Banner