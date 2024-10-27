import './Navbar.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <i className='fa-solid fa-rocket' /> Blinkfinity
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/upload' className='nav-links' onClick={closeMenu}>
                Upload
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/games' className='nav-links' onClick={closeMenu}>
                Games
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>REGISTER</Button>}
          {button && <Button >LOG IN</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
