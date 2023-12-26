import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false); // New state for login success

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (errors.email === '' && errors.password === '') {
      axios
      .post('http://localhost:5000/login', values)
      .then((res) => {
        console.log(res.data); 
        if (res.data === 'Success') {
          setLoginSuccess(true);
          navigate('/');
          alert('Logged in!')
        } else {
          alert('Logged in!')
        }
      })
      .catch((err) => {
        console.log(err);
      });
    
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center h-300 w-300'>
      <div className='bg-white w-300 p-4 rounded'>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              name='email'
              placeholder='Enter email'
              className='form-control'
              onChange={handleInput}
            />

            {errors.email && <span className='text-danger'> {errors.email}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter password'
              className='form-control'
              onChange={handleInput}
            />

            {errors.password && <span className='text-danger'> {errors.password}</span>}
          </div>

          <button type='submit' className='btn btn-success w-100'>
            Log in
          </button>

          {loginSuccess && <p className='text-success'>Login successful!</p>}

          <p>Agree terms and services</p>

          <Link to='/signup' className='btn btn-default border w-100 bg-light text-decoration-none'>
            Create account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;