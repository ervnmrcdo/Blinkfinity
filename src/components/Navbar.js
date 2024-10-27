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
    showButton();
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <i className='fa-solid fa-rocket' /> Blinkfinity
          </Link>
          
          {/* Mobile menu icon */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {/* Mobile-only menu */}
          <div className="mobile-menu">
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
              <li className='nav-item mobile-auth'>
                <Link to='/sign_up' className='nav-links' onClick={closeMenu}>
                  Register
                </Link>
                <Link to='/sign_up' className='nav-links' onClick={closeMenu}>
                  Log In
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop-only right section */}
          <div className="right-section">
            <ul className="nav-menu">
              <li className='nav-item'>
                <Link to='/upload' className='nav-links'>
                  Upload
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/games' className='nav-links'>
                  Games
                </Link>
              </li>
            </ul>
            <div className="desktop-auth">
              {button && <Button buttonStyle='btn--outline'>REGISTER</Button>}
              {button && <Button>LOG IN</Button>}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;