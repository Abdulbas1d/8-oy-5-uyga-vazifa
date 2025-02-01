import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import CartPicture from '../../assets/images/cart.svg'

function Header() {
  return (
    <div className='header-container'>
      <div className="logo-container">
        <h2>LOGO</h2>

        <div className="data">
            <NavLink className="link" to='/'>Todo List</NavLink>
            <NavLink className="link" to='/userData'>User Data</NavLink>
            <NavLink className="link" to='/onlineShopping'>Online Shopping</NavLink>
            <NavLink className="link-cart" to='/cart'>
                <span>Cart</span>
                <img className='cartPicture' src={CartPicture} alt="" />
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
