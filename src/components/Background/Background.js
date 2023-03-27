import React from 'react'
import './Background.scss'

function Background() {
  return (
    <div>
      <div className='slash_bars'>
        <div className='line_bars'></div>
        <div className='line_bars'></div>
        <div className='line_bars'></div>
        <div className='line_bars'></div>
        <div className='line_bars'></div>
      </div>

      <div className='bottom-right'>
        <div className='bottom-right-cube'></div>
        <div className='bottom-right-circle'></div>
      </div>

      <div className='dotted-circle'>
        <img src='images/dotted-circle.png'/>
      </div>

    </div>
  )
}

export default Background
