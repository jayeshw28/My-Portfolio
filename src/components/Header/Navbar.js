import React from 'react'
import './Navbar.scss'
import Burger from './Burger'

function Navbar() {
  return (
    <div className='Nav'>
    <div className='logo'>JAYX</div>
    <Burger/>
    </div>
  )
}

export default Navbar
