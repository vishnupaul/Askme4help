import React, { useState, useRef, useEffect, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <div className='logo'>
              <h2>
                Askme<span className='logo-num'>4</span>
                <span className='logo-word'>Help</span>{' '}
              </h2>
            </div>
          </Link>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            <li>
              <Link aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/services'>Our Services</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link onClick={handleLogout}>LogOut</Link>
                </li>
                <li>
                  <Link to='profile'>{user.username}</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to='login'>Login</Link>
                </li>
                <li>
                  <Link to='signup'>Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
