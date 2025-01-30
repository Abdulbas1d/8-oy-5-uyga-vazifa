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
            <NavLink to='/'>Todo List</NavLink>
            <NavLink to='/userData'>User Data</NavLink>
            <NavLink to='/onlineShopping'>Online Shopping</NavLink>
            <NavLink to='/cart'>
                <img className='cartPicture' src={CartPicture} alt="" />
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
