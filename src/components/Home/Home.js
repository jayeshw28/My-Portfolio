import React from 'react'
import './Home.scss'
import UI from './UI'
import Frontend from './Frontend'

function Home(){
  return (
    <div className='bg'>
      <div className='cntr-logo'>    
        <div className='cntr-logo-inner'>JAYX</div>
        <div className='cntr-logo-outer'>JAYX</div>
      </div>
      
      <UI/>
      <Frontend/>
    </div>
  )
}

export default Home