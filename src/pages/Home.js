import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { NavLink } from 'react-router-dom';
import About from '../components/About';
import Feedback from '../components/Feedback';
import Reviews from '../components/Reviews';

const Home = () => {
  const { user } = useContext(Context);
  return (
    <>
      <header id='home'>
        <div className='hero'>
          <div className='hero-banner'>
            {user ? (
              <h2>
                welcome to Our App <span>{user.username}</span>
              </h2>
            ) : (
              <>
                <h2>A Step Towards Smart Education</h2>
                <NavLink className='btn hero-btn scroll-link' to='login'>
                  Contact Us
                </NavLink>
              </>
            )}
          </div>
        </div>
      </header>
      <About />
      <Reviews />
      <Feedback />
    </>
  );
};

export default Home;
