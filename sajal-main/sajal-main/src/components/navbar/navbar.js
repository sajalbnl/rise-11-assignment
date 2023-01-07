import React from 'react'
import "./navbar.css"
export default function Navbar() {
  return (
    <div>
    <nav id="menu">
      <input type="checkbox" id="responsive-menu" /><label></label>
      <img className='logo' src={require('./logo.jpeg')}/>
            {/* <img style="" class="sl-logo" src="@/assets/sl-logo.png" alt="" /><img
          style=""
          class="sl-text"
          src="@/assets/sl-text.png"
          rgba(124,64,154,255)
          rgba(211,31,41,255)

      /> */}
      <div className='button-div'>
      <button className='navbar-button'>BOOK</button>
      <button className='navbar-button'>CHECK IN</button>
      <button className='navbar-button'>MANAGE</button>
      </div>
      <ul>
          <li>
              Deals
          </li>
          <li>
            Flying with us
          </li>
          <li>
             Where We Fly
          </li>
          <li>
              Shop
          </li>
          <li>
             FAQ
          </li>
          <li>
             Fees
          </li>  
      </ul>
      <div className='button-div'>
      <button className='sign-buttons'>Signup</button>
      <button className='sign-buttons'>Signin</button>
      </div>
     
    </nav>
  </div>
  )
}
