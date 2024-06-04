import React from 'react'
import { increaseAmount, decreaseAmount } from '../../context/slice/cartSlice'
import { useDispatch } from 'react-redux'


const BOT_TOKEN = '7313879684:AAH0lhoKddXhkYP-YO5QnYueauqqT3J9hzE'
const CHAT_ID = "-1002180292093"
const USER_ID = "6236146087"

//https://api.telegram.org/bot7313879684:AAH0lhoKddXhkYP-YO5QnYueauqqT3J9hzE/getUpdates

const handleSendMessage = e => {
  e.preventDefault()
  let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=qalesi`
  let api = new XMLHttpRequest()
  api.open("GET", url, true)
  api.send()
}

const CartWrapper = ({data}) => {
    const dispatch = useDispatch()

    let cartItems = data?.map(el => (
        <div key={el.id}>
            <img src={el.images[0]} alt={el.title} width={100} height={100} />
            <h3> {el.price} USD</h3>
            <h4> {el.price * el.amount} USD</h4>
            <button disabled={el.amount <= 1} onClick={()=> dispatch(decreaseAmount(el))}>-</button>
            <span>{el.amount}</span>
            <button disabled={el.stock <= el.amount} onClick={()=> dispatch(increaseAmount(el))}>+</button>
        </div>
    ))
  return (
    <div>
        <h2>Cart</h2>
        <div>{cartItems}</div>

        <form onSubmit={handleSendMessage}>
          <input type="text" placeholder='fname'/>
          <input type="text" placeholder='tel' />
          <button type='submit'>Buy</button>
          <button type='button'>Cancel</button>
        </form>
    </div>
  )
}

export default CartWrapper