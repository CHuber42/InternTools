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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: '',
        password: '',
      }
    };
  }

  reroute(result){
    if (result === "success"){
      window.location.href="/Dashboard";
    }
    else {
      alert("login failed")
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    
    const returningUser = {
      email: this.state.email,
      password: this.state.password
    }

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({returningUser})
      };
      
      fetch('/login', requestOptions)
        // .then(ParseJSON.response)
        .then(this.reroute("success"))
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch(name) {
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
        <h1 style={{color: 'white'}}>Login</h1>
        <form className='registration-form' onSubmit={this.handleSubmit} noValidate>
          <div className='email'>
            <label htmlForm='email'>Email</label>
            <input 
              className={formErrors.email.length > 0 ? 'error' : null} 
              placeholder='Email' 
              type='email'
              name='email' 
              onChange={this.handleChange}
              noValidate 
            />
            {formErrors.email.length > 0 && (
              <span className='errorMessage'>{formErrors.email}</span>
            )}
          </div>
          <div className='password'>
            <label htmlForm='password'>Password</label>
            <input  
              className={formErrors.password.length > 0 ? 'error' : null}
              placeholder='Password'
              type='password' 
              name='password' 
              onChange={this.handleChange}
              noValidate 
            />
            {formErrors.password.length > 0 && (
              <span className='errorMessage'>{formErrors.password}</span>
            )}
          </div>
          <div className='createAccount'>
            <button type='submit'>Log Me In</button>
            <Link to="/register">
                <small style={{color: "black"}}>Don't Have an Account?</small>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  )}
}

export default Login;