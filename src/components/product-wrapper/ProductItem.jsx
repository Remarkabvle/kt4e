import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { IoCartOutline } from "react-icons/io5";
import { like } from '../../context/slice/wishlistSlice'
import { add } from '../../context/slice/cartSlice'

const ProductItem = ({product}) => {
  const dispatch = useDispatch()
  const wishlistData = useSelector(state => state.wishlist.value)
  const cartData = useSelector(state => state.cart.value)  

  return (
    <div className='product__item'>
        <img src={product.images[0]} width={200} alt="" />
        <h3>{product.title}</h3>
        <button onClick={()=> dispatch(like(product))}>
          {
            wishlistData.some(el => el.id === product.id) 
            ?
            <FaHeart color='crimson'/>
            :
            <FaRegHeart/>
          }
        </button>
        <button disabled={cartData?.some(el => el.id === product.id)} onClick={()=> dispatch(add(product))}>
          {
            cartData?.some(el => el.id === product.id)
            ?
            <span>Added</span>
            :
            <span>Add to cart</span>
          }
          <IoCartOutline/>
        </button>
    </div>
  )
}

export default ProductItem


