import React, { useState } from 'react'
import './Home.scss'

const UI = () => {
    const [open, Setopen] = useState(false)
    const [skill_class, SetSkillClass] = useState("ui_text unhovered")
    const [ui_class, SetUIClass] = useState("ui_bg jummbled")

    const UpdateUI = ()=> {
        if(!open){
            SetSkillClass("ui_text hovered")
            SetUIClass("ui_bg arranged")
        }
        else{
            SetSkillClass("ui_text unhovered")
            SetUIClass("ui_bg jummbled")
        }
        Setopen(!open)
    }


  return (
    <div>
        <div className='skills' onClick={UpdateUI}>
            <div className={skill_class}>UI/UX Designer</div>
        </div>

        <div className='ui-style'>
        <img className={ui_class} src='images/U.png'/>
        </div>
    </div>
  )
}

export default UI
