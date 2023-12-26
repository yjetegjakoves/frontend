import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios'
import { Navigate } from 'react-router-dom';


function Signup({ onSubmit, onClose }) {

  const [values, setValues] = useState({ name: '', email: '', password: ''});
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (errors.name === '' && errors.email === '' && errors.password === '') {
      axios.post('http://localhost:5000/signup', values)
        .then(res => {
          onSubmit(); // Call the onSubmit callback
          onClose();  // Close the dialog
        }).catch(err => {
          console.log(err);
        });
    }
  };



  return (
    <div className = 'd-flex justify-content-center align-items-center h-300 w-400'>
      <div className = 'bg-white w-400 p-4 rounded'>
       
        <form action = '' onSubmit = {handleSubmit}>
            <div className = 'mb-3'>
                <label htmlFor = 'name'><strong>Name</strong></label>
                <input 
                    type = 'text'
                    name = 'name' 
                    placeholder = 'Enter name' 
                    className = 'form-control'
                    onChange = {handleInput} 
                />

                {errors.name && <span className = 'text-danger'> {errors.name}</span>}
            </div>
            
            <div className = 'mb-3'>
                <label htmlFor = 'email'><strong>Email</strong></label>
                <input 
                    type = 'email'
                    name = 'email' 
                    placeholder = 'Enter email' 
                    className = 'form-control'
                    onChange = {handleInput} 
                />

                {errors.email && <span className = 'text-danger'> {errors.email}</span>}
            </div>
            
            <div className = 'mb-3'>
                <label htmlFor = 'password'><strong>Password</strong></label>
                <input 
                    type = 'password'
                    name = 'password' 
                    placeholder = 'Enter password' 
                    className = 'form-control'
                    onChange = {handleInput} 
                />

                {errors.password && <span className = 'text-danger'> {errors.password}</span>}
            </div>

            <button type = 'submit' className = 'btn btn-success  w-100 '>Sign up</button>
            
            <p>Agree terms and services</p>

             <Link to = '/' className = 'btn btn-default border  w-100 bg-light  text-decoration-none'>Log in</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup
