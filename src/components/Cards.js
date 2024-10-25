import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      <h1>Featured Games</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src='images/rocketblink.png' text='To the Moon!' label='Rocketblink' path='/' />
            <CardItem src='images/rocketblink.png' text='Guess Wisely!' label='ThreeCupsOneBall' path='/' />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
