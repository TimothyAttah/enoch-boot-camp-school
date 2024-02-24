import React, { useState } from 'react';
import { actions } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Register = () => {
  const formData = {
    firstname: '',
    lastname: '',
    gender: '',
    phoneNumber: '',
    dateOfBirth: '',
    highestQualification: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [userData, setUserData] = useState(formData);
  const dispatch = useDispatch();

  const {
    firstname,
    lastname,
    gender,
    phoneNumber,
    dateOfBirth,
    highestQualification,
    email,
    password,
    confirmPassword,
  } = userData;

  const handleInputData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  function checkPasswordStrength(password) {
    // Implement your password strength logic here
    let strength = 0;

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
      strength++;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
      strength++;
    }

    // Check for numbers
    if (/\d/.test(password)) {
      strength++;
    }

    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength++;
    }

    return strength;
  }

  document.getElementById('password')?.addEventListener('input', function () {
    let meter = document.getElementById('password-strength-meter');
    let strength = checkPasswordStrength(this.value);
    meter.value = strength;
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Password does not match.');
    } else {
      dispatch(actions.registerUser(userData));
    }
  };
  return (
    <section id='register'>
      <fieldset>
        <form className='registrationForm' onSubmit={handleSumbit}>
          <legend>Register Now!</legend>
          <div id='errorContainer' className='text-danger'>
            {/* <p> // Display error messages here</p> */}
          </div>

          <label htmlFor='firstname'>First Name:</label>
          <input
            type='text'
            name='firstname'
            // required
            value={firstname}
            onChange={handleInputData}
          />

          <label htmlFor='lastname'>Last Name:</label>
          <input
            type='text'
            name='lastname'
            // required
            value={lastname}
            onChange={handleInputData}
          />

          <label htmlFor='gender'>Gender:</label>
          <select
            name='gender'
            // required
            value={gender}
            onChange={handleInputData}
          >
            <option value=''>Select</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>

          <label htmlFor='phoneNumber'>Telephone Number:</label>
          <input
            type='tel'
            name='phoneNumber'
            // required
            value={phoneNumber}
            onChange={handleInputData}
          />

          <label htmlFor='dateOfBirth'>
            Date of Birth:(between ages 10-55yrs)
          </label>
          <input
            type='date'
            name='dateOfBirth'
            // required
            value={dateOfBirth}
            onChange={handleInputData}
          />

          <label htmlFor='highestQualification'>Highest Qualification:</label>
          <select
            name='highestQualification'
            // required
            value={highestQualification}
            onChange={handleInputData}
          >
            <option value=''>Select</option>
            <option value='still_in_senior_secondary_school'>
              Still in Senior Secondary School
            </option>
            <option value='ssce'>SSCE</option>
            <option value='ond'>OND</option>
            <option value='hnd'>HND</option>
            <option value='bsc'>BSc</option>
            <option value='msc'>MSc</option>
            <option value='phd'>PhD</option>
          </select>

          <input type='hidden' name='payment_status' value='not yet' />

          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            name='email'
            // required
            value={email}
            onChange={handleInputData}
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            // required
            value={password}
            onChange={handleInputData}
          />

          <label htmlFor='confirmPassword'>Re-enter Password:</label>
          <input
            type='password'
            name='confirmPassword'
            id='confirm_password'
            // required
            value={confirmPassword}
            onChange={handleInputData}
          />

          {/* <!-- Password strength meter --> */}
          <div id='password-strength-meter-container'>
            <label htmlFor='password-strength-meter'>Password Strength:</label>
            <meter max='4' id='password-strength-meter'></meter>
          </div>

          <button className='buttonForm' type='submit'>
            Next
          </button>
        </form>
      </fieldset>
    </section>
  );
};

export default Register;
