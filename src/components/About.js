import React from 'react';
import Aboutpic from '../image/about.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='section' id='about'>
      <div className='section-title'>
        <h2>
          about <span>us</span>
        </h2>
      </div>

      <div className='section-center about-center'>
        <article className='about-img'>
          <img src={Aboutpic} className='about-photo' alt='awesome beach' />
        </article>
        <article className='about-info'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            temporibus tenetur modi aut velit labore, earum magni mollitia
            necessitatibus corporis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            temporibus tenetur modi aut velit labore, earum magni mollitia
            necessitatibus corporis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            laboriosam minima at molestias labore, eius tempora nihil molestiae
            magnam sequi!
          </p>
          {/* <a href='#' className='btn'>
            read more
          </a> */}
          <Link to='/' className='btn'>
            read more
          </Link>
        </article>
      </div>
    </section>
  );
};

export default About;
