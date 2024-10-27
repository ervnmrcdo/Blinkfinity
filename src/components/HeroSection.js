import React from "react";
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>BLINKFINITY</h1>
      <p>the next level.</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          PLAY
        </Button>

        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          UPLOAD 
          {/* <i className='far fa-play-circle' /> */}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;