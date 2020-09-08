import React, { Component } from 'react';
import './registrationStyle.css';
import { Redirect, Link } from 'react-router-dom';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach(val => {
    val == null && (valid = false)
  });
    
  return valid;
};

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }
    };
  }

  postRequest(requestOptions){
    return fetch('/submit_registration', requestOptions).then(token => {return token})
  }

  handleSubmit = e => {
    e.preventDefault();
    
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    } 

    if (formValid(this.state)) {
        console.log(`
          --SUBMITTING--
          First Name: ${this.state.firstName}
          Last Name: ${this.state.lastName}
          Email: ${this.state.email}
          Password: ${this.state.password}
        `);
        
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({newUser})
        };
        
        const userToken = this.postRequest(requestOptions)

        userToken.then(function(result){
          if (result.statusText === "OK"){
            window.location.href="/login";
          }
          else {
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
          }
        })
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch(name) {
      case 'firstName':
        formErrors.firstName = 
          value.length < 3 ? 'minimum 3 characters required' : '';
        break;
      case 'lastName':
        formErrors.lastName = 
          value.length < 3 ? 'minimum 3 characters required' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? '' 
          : 'invalid email addresss';
        break;
      case 'password':
        formErrors.password = 
          value.length < 6 ? 'minimum 6 characters required' : '';
        break;
      default:
        break;
    }

    this.setState({formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
  return (
    <>
    <div className='regWrapper'>
      <div className='form-regWrapper'>
        <h1 className='regTitle'>Create Account</h1>
        <form className='registration-form' onSubmit={this.handleSubmit} noValidate>
          <div className='firstName'>
            <label className='regLabel' htmlform='firstName'>First Name</label>
            <input 
              type='text' 
              className={formErrors.firstName.length > 0 ? 'error' : null}
              placeholder='First Name' 
              name='firstName' 
              onChange={this.handleChange}
              id='regInput'
              noValidate 
            />
            {formErrors.firstName.length > 0 && (
              <span className='errorMessage'>{formErrors.firstName}</span>
            )}
          </div>
          <div className='lastName'>
            <label className='regLabel' htmlform='lastName'>Last Name</label>
            <input 
              type='text' 
              className={formErrors.lastName.length > 0 ? 'error' : null} 
              placeholder='Last Name' 
              name='lastName' 
              onChange={this.handleChange}
              id='regInput'
              noValidate 
            />
            {formErrors.lastName.length > 0 && (
              <span className='errorMessage'>{formErrors.lastName}</span>
            )}
          </div>
          <div className='email'>
            <label className='regLabel' htmlform='email'>Email</label>
            <input 
              className={formErrors.email.length > 0 ? 'error' : null} 
              placeholder='Email' 
              type='email'
              name='email' 
              onChange={this.handleChange}
              id='regInput'
              noValidate 
            />
            {formErrors.email.length > 0 && (
              <span className='errorMessage'>{formErrors.email}</span>
            )}
          </div>
          <div className='password'>
            <label className='regLabel' htmlform='password'>Password</label>
            <input  
              className={formErrors.password.length > 0 ? 'error' : null}
              placeholder='Password'
              type='password' 
              name='password' 
              onChange={this.handleChange}
              id='regInput'
              noValidate 
            />
            {formErrors.password.length > 0 && (
              <span className='errorMessage'>{formErrors.password}</span>
            )}
          </div>
          <div className='createAccount'>
            <button type='submit'>Create Account</button>
            <Link to="/login">
                <small style={{color: "black"}}>Already Have an Account?</small>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  )}
}

export default Registration;