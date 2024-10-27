import React from 'react'

function Blinks(props) {
  return (
    <section>
      <figure className='blink-item-pic-wrap'>
        <img src={props.src} alt={props.label} className='blink-item-img' />
      </figure>
    </section>
  )
}

export default Blinks