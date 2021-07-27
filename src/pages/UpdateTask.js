import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const UpdateTask = () => {
  const params = useParams();
  const [assignment, setAssignment] = useState({
    topic: '',
    branch: '',
    Assigdesc: '',
  });
  const history = useHistory();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  const editAssignment = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('tokenStore');
      if (token) {
        const { topic, branch, Assigdesc, id } = assignment;
        const newAssignment = {
          topic,
          branch,
          Assigdesc,
        };

        await axios.put(
          `https://paulaskme4help.herokuapp.com/assignment/${params.id}`,
          newAssignment,
          {
            headers: { Authorization: token },
          }
        );
        return history.push('/profile');
      }
    } catch (err) {
      window.location.href = '/';
    }
  };
  return (
    <div>
      <div className='submitproject'>
        <form method='POST' className='contact-form' onSubmit={editAssignment}>
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
              name='branch'
              className='form-input'
              id='subject'
              required
              onChange={onChangeInput}
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
              onChange={onChangeInput}
            />
          </div>
          {/* <!-- form control --> */}
          <div className='form-control'>
            <label htmlFor='topic'>Enter Assignment Description</label>
            <textarea
              name='Assigdesc'
              id='Assigdesc'
              cols='30'
              rows='10'
              className='form-input'
              placeholder='Enter Assignment Description'
              onChange={onChangeInput}
            ></textarea>
          </div>

          {/* <!-- form control --> */}
          <button type='submit' className='btn btn-form'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
