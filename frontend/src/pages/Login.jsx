import React, { useState } from 'react';
import { actions } from '../redux/actions';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(actions.loginUser({ email, password }));
  };

  return (
    <div
      className='modal fade'
      id='loginModal'
      tabIndex='-1'
      aria-labelledby='loginModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='loginModalLabel'>
              User Login
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <form id='loginForm' onSubmit={handleOnSubmit}>
              <label htmlFor='email'>email:</label>
              <input
                type='email'
                id='login_email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='login_password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type='submit'
                className='btn btn-primary'
                // onClick='login()'
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
