import React, { useState } from 'react'

console.log("Main render outside");


const Main = () => {
    const [count, setCount] = useState(9)
    const [show, setShow] = useState(false)

    console.log("Main render inside");


    const handleIncrement = () => {
        setCount(count+1)
    }

  return (
    <div>
        <h2>React Hook {count}</h2>
        <button onClick={handleIncrement}>increment</button>
        <button disabled={count <= 0} onClick={()=> setCount(count - 1)}>decrement</button>
        <button onClick={()=> setCount(0)}>reset</button>
        <button onClick={()=> setShow( !show )}>Turn {show ? "off" : "on"}</button>
        {
            show ? 
            <div className='model'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, est deleniti. Aliquid sint molestiae quia, facere perferendis quisquam fugiat perspiciatis accusamus rerum praesentium distinctio, iste, explicabo reiciendis ipsam beatae nobis. Debitis tempora suscipit ullam distinctio impedit ea voluptatem dolores error vel. Eaque ullam illum voluptatibus veritatis, debitis odit officia pariatur!</p>
            </div>
            :
            <></>
        }
    </div>
  )
}

export default Main