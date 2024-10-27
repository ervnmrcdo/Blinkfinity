 import React from 'react'
 
 function Blinks(props) {
   return (
     <>
        <section>
          <h3>Play</h3>
          <figure className='blink-item-pic-wrap'>
          <img src={props.src} alt={props.label} className='blink-item-img' />
          </figure> 
          <div className='blink-item-info'>
          </div>
          <h3>{props.label}</h3>
        </section>
     </>
   )
 }
 
 export default Blinks
 