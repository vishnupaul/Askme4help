import React, { useState, useEffect } from 'react';
import data from './data';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    setSubjects(data);
  }, []);
  return (
    <div>
      <section className='section' id='subject'>
        <div className='section-title'>
          <h2>
            Our<span> subjects</span>
          </h2>
        </div>

        <div className='section-center subject-center subject'>
          {subjects.map((sub) => {
            const { Subject, SubTopic } = sub;
            return (
              <article className='subject-card'>
                <div className='subject-info'>
                  <div className='subject-title'>
                    <h5>{Subject}</h5>
                  </div>
                  <ul className='subject-list'>
                    {SubTopic.map((topic) => {
                      return <li>{topic}</li>;
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Subjects;
