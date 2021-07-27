import React, { useState, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../context/Context';
import axios from 'axios';

const Login = () => {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [err, setErr] = useState('');
  const { dispatch, isFetching } = useContext(Context);

  const varifyUser = async (req, res) => {
    const token = localStorage.getItem('tokenStore');
    try {
      const user = await axios.get(
        'https://paulaskme4help.herokuapp.com/auth/verify',
        {
          headers: { Authorization: token },
        }
      );
      dispatch({ type: 'LOGIN_SUCCESS', payload: user.data });
      res.json({ msg: 'user' });
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(
        'https://paulaskme4help.herokuapp.com/auth/login',
        {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }
      );
      window.alert(' login succeccful');
      localStorage.setItem('tokenStore', res.data.token);
      varifyUser();
      history.push('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  return (
    <>
      <div>
        <div className='login'>
          <form method='POST' className='contact-form'>
            <div className='section-title contact-head'>
              <h2>
                Sign<span>In</span>
              </h2>
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
                ref={emailRef}
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
                ref={passwordRef}
                required
              />
            </div>
            {/* <!-- form control --> */}
            <button type='submit' className='btn btn-form' onClick={loginUser}>
              Submit
            </button>
            <p className='haveAc'>{err}</p>
          </form>
          <p className='haveAc'>
            <Link to='signup' className='haveAc'>
              Need an account ?
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
