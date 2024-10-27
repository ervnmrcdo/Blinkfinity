import React from 'react'
import './Play.css'
import Blinks from './Blinks'

function Play(props) {
  return (
    <div className="blinks">
      <div className="blink-layout">
        <div className="side-header">
          <h3>Play</h3>
        </div>
        <div className="blink-container">
          <div className="blink-wrapper">
            <Blinks src={props.src} label={props.label} />
          </div>
        </div>
        <div className="side-header">
          <h3>{props.label}</h3>
        </div>
      </div>
    </div>
  )
}

export default Play