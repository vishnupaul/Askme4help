import React, { useState } from 'react';
import axios from 'axios';

const SubmitAssignment = () => {
  const [branch, setBranch] = useState('');
  const [topic, setTopic] = useState('');
  const [Assigdesc, setAssigdesc] = useState('');

  const postAssignment = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('tokenStore');
      if (token) {
        const newAssignment = {
          branch,
          topic,
          Assigdesc,
        };
        await axios.post(
          'https://paulaskme4help.herokuapp.com/assignment',
          newAssignment,
          {
            headers: { Authorization: token },
          }
        );
      }
      setBranch('');
      setTopic('');
      setAssigdesc('');
      window.alert('Assignment submitted');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>
        <div className='submitproject'>
          <form method='POST' className='contact-form'>
            <div className='section-title contact-head'>
              <h2>
                Submit<span>project</span>
              </h2>
            </div>
            {/* form control */}
            <div className='form-control'>
              <label htmlFor='subject'>Subject</label>
              <input
                type='text'
                placeholder='Enter your subject'
                name='subject'
                className='form-input'
                id='subject'
                required
                value={branch}
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
              />
            </div>
            {/* <!-- form control --> */}
            <div className='form-control'>
              <label htmlFor='topic'>Topic</label>
              <input
                type='text'
                placeholder='Enter your subject topic'
                name='topic'
                id='topic'
                className='form-input'
                value={topic}
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
              />
            </div>
            {/* <!-- form control --> */}
            <div className='form-control'>
              <label htmlFor='topic'>Enter Assignment Description</label>
              <textarea
                name='projectdesc'
                id='projectdesc'
                cols='30'
                rows='10'
                className='form-input'
                placeholder='Enter Assignment Description'
                value={Assigdesc}
                onChange={(e) => {
                  setAssigdesc(e.target.value);
                }}
              ></textarea>
            </div>

            {/* <!-- form control --> */}
            <button
              type='submit'
              className='btn btn-form'
              onClick={postAssignment}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitAssignment;
