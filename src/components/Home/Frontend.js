import React, { useState } from 'react'
import './Home.scss'

const Frontend = () => {
    const [open, Setopen] = useState(false)
    const [skill_class, SetSkillClass] = useState("frntend_text unhovered")
    const [frntend_class, SetUIClass] = useState("frntend_bg jummbled")

    const UpdateUI = ()=> {
        if(!open){
            SetSkillClass("frntend_text hovered")
            SetUIClass("frntend_bg arranged")
        }
        else{
            SetSkillClass("frntend_text unhovered")
            SetUIClass("frntend_bg jummbled")
        }
        Setopen(!open)
    }

  return (
    <div>
        <div className='skills' onClick={UpdateUI}>
          <div className={skill_class}>Frontend Developer</div>
        </div>

        <div className='frntend-style'>
          <img className={frntend_class} src='images/frnt.png'/>
        </div>
    </div>
  )
}

export default Frontend