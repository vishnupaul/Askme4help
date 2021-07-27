import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <footer className='section footer'>
        {/* footer links  */}
        <ul className='footer-links'>
          {/* <!-- single link --> */}
          <li>
            <NavLink className='footer-link ' to='/about'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='footer-link' to='/services'>
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink className='footer-link' to='login'>
              Contact
            </NavLink>
          </li>
        </ul>
        <p className='copyright'>
          copyright &copy;<span id='date'></span> Solution4way.com .all rights
          reserved
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          eligendi ipsa rem maxime. Exercitationem maxime ratione vel est
          repellendus quos?
        </p>
      </footer>
    </div>
  );
};

export default Footer;
