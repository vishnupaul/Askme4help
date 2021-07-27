import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
    country: '',
  });
  let name, value;
  const handelInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { username, email, phone, password, cpassword, country } = user;
    try {
      const res = await fetch(
        'https://paulaskme4help.herokuapp.com/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            phone,
            password,
            cpassword,
            country,
          }),
        }
      );
      const data = await res.json();
      if (res.status === 400 || !data) {
        window.alert('Invalid Registration');
      } else {
        setUser({
          username: '',
          email: '',
          password: '',
          cpassword: '',
          country: '',
          phone: '',
        });
        window.alert(' Registration succeccful');
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='signUp'>
        <form method='POST' className='contact-form'>
          <div className='section-title contact-head'>
            <h2>
              Sign<span>Up</span>
            </h2>
          </div>
          {/* form control */}
          <div className='form-control'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              placeholder='Enter your username'
              name='username'
              className='form-input'
              id='username'
              value={user.username}
              onChange={handelInput}
              required
              placeholder='Enter your full name'
            />
          </div>
          {/* <!-- form control --> */}
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
              id='email'
              className='form-input'
              value={user.email}
              onChange={handelInput}
              required
            />
          </div>
          {/* <!-- form control --> */}
          <div className='form-control'>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              placeholder='Enter your Country name'
              name='country'
              id='country'
              className='form-input'
              value={user.country}
              onChange={handelInput}
              required
            />
          </div>
          {/* <!-- form control --> */}
          <div className='form-control'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              placeholder='Enter your number'
              name='phone'
              id='phone'
              className='form-input'
              value={user.phone}
              onChange={handelInput}
              required
            />
          </div>
          {/* <!-- form control --> */}
          <div className='form-control'>
            <lable htmlFor='password'>Password</lable>
            <input
              type='password'
              placeholder='Enter your password'
              name='password'
              id='password'
              className='form-input'
              value={user.password}
              onChange={handelInput}
              required
            />
          </div>
          {/* <!-- form control --> */}
          <div className='form-control'>
            <lable htmlFor='cpassword'>Confirm Password</lable>
            <input
              type='password'
              placeholder='Confirm your password'
              name='cpassword'
              id='cpassword'
              className='form-input'
              value={user.cpassword}
              onChange={handelInput}
              required
            />
          </div>
          <button type='submit' className='btn btn-form' onClick={postData}>
            Submit
          </button>
        </form>
        <p className='haveAc'>
          <Link to='login' className='haveAc'>
            already an account ?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
