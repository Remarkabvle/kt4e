import React, { useState } from 'react'
import "./Navbar.scss"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className='navbar'>
        <h2>Logo</h2>
        <button onClick={()=>setShow(true)}>Menu</button>
      </div>
      {
        show ? 
        <div onClick={()=> setShow(false)} className="overlay"></div>
        : <></>
      }
      <div className={`sidebar ${show ? "show":""}`}></div>
    </>
  )
}

export default Navbar