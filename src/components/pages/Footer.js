import React from "react";
import { Button } from "../Button";
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Get up to date with our new and upcoming games!
        </p>
        <p className="footer-subscription-text">
          You will not regret it. I mean it.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Enter email" className="footer-input" />
            <Button buttonStyle='btn--outline'>Enroll</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link >LinkedIn</Link>
            <Link >Twitter</Link>
            <Link >Instagram</Link>
            <Link >Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Blinkfinity
              <i className='fa-solid fa-rocket' />
            </Link>
          </div>
          <small className='website-rights'>Blinkfinity © 2024</small>
          <div className='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
