import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import axios from 'axios';

const Feedback = () => {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = React.useState(0);

  const fetchPeople = async () => {
    const res = await axios.get('https://paulaskme4help.herokuapp.com/reviews');
    setPeople(res.data);
  };
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  useEffect(() => {
    fetchPeople();
  }, []);
  return (
    <div className='feedback-section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='feedback-center'>
        {people.map((person, personIndex) => {
          const { _id, country, name, desc, createdAt } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <div className='single-feedback'>
              <main className={position} key={_id}>
                <p className='text'>{desc}</p>
                <div className='reviewsdata'>
                  <div>
                    <h4>{name}</h4>
                    <p className='country'>{country}</p>
                  </div>
                  <p className='reviewDate'>
                    {new Date(createdAt).toDateString()}
                  </p>
                </div>
              </main>
            </div>
          );
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Feedback;
