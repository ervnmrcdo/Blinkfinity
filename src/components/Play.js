import React from 'react'
import './Play.css'
import Blinks from './Blinks'

function Play(props) {
  return (
    <div className="blinks">
      <div className="blink-container">
        <div className="blink-wrapper">
            <Blinks src={props.src}  label={props.label}  />
        </div>
      </div>
    </div>
  )
}

export default Play
