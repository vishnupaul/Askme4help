import React from 'react';
import { FaBookOpen, FaFlask, FaCogs, FaEdit } from 'react-icons/fa';

const Service = () => {
  return (
    <section className='section services' id='services'>
      <div className='section-title'>
        <h2>
          our <span>services</span>
        </h2>
      </div>

      <div className='section-center services-center'>
        <article className='service'>
          <span className='service-icon'>
            <FaBookOpen />
          </span>
          <div className='service-info'>
            <h5 className='service-title'>Homework/Assignment Help</h5>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'>
            <FaFlask />
          </span>
          <div className='service-info'>
            <h5 className='service-title'>LAB Reports</h5>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'>
            <FaCogs />
          </span>
          <div className='service-info'>
            <h5 className='service-title'>PROJECTS Help</h5>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'>
            <FaEdit />
          </span>
          <div className='service-info'>
            <h5 className='service-title'>Thesis/Essay Help</h5>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Service;
