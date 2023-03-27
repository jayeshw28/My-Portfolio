import React, { useState } from 'react'
import './Navbar.scss'


const Burger = () => {
  const [open, Setopen] = useState(false)
  const [burger_class, SetBurgerClass] = useState("burger_bar unclicked")
  const [menu_class, SetMenuClass] = useState("menu hidden")


  const UpdateMenu = ()=> {
    if(!open){
      SetBurgerClass("burger_bar clicked")
      SetMenuClass("menu visible")
    }
    else{
      SetBurgerClass("burger_bar unclicked")
      SetMenuClass("menu hidden")
    }
    Setopen(!open)
  }

  return (
    <div >
      <nav>
        <div className='burgered' onClick={UpdateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <li><a href=''>Home</a></li>
        <li><a href=''>About</a></li>
        <li><a href=''>Contact me</a></li>
      </div>
    </div>
    
  )
}

export default Burger
