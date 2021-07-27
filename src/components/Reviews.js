import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Reviews = () => {
  const [desc, setDesc] = useState('');
  const [err, setErr] = useState('');
  const history = useHistory();
  const postReviews = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('tokenStore');
      if (token) {
        setErr('');
        const newReviews = {
          desc,
        };
        await axios.post('https://askme4help.netlify.app/reviews', newReviews, {
          headers: { Authorization: token },
        });
        setDesc('');
        return history.push('/');
      }
      setErr('Please login');
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };
  return (
    <div>
      <section className=' review'>
        <div className='section-center about-center'>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis laboriosam minima at molestias labore, eius tempora
              nihil molestiae magnam sequi!
            </p>
          </article>
          <article className='reviews-form'>
            <form method='POST' class='contact-form'>
              <div class='section-title contact-head'>
                <h2>
                  review<span> us</span>
                </h2>
              </div>
              {/* <!-- form control --> */}
              <div class='form-control'>
                <textarea
                  name='feedback'
                  id='reviews'
                  cols='60'
                  rows='10'
                  class='form-input'
                  placeholder='Enter your feedbacks'
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                ></textarea>
              </div>
              {/* <!-- form control --> */}
              <button type='submit' class='btn btn-form' onClick={postReviews}>
                Submit
              </button>
              <p className='haveAc'>{err}</p>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
