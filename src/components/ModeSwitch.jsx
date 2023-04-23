import React from 'react'
import './Assets/ModeSwitch.css'

const ModeSwitch = () => {
  return (
    <div className="modeswitch">
        <ul>
            <li>COMPETITIVE</li>
            <li>UNRATED</li>
            <li>DEATHMATCH</li>
            <li>SPIKERUSH</li>
            <li>ESCALATION</li>
        </ul>
    </div>
  )
}

export default ModeSwitch