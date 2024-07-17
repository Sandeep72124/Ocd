import React, { useState } from 'react';
import './Sign_up.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterpassword, setReEnterPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('ReEnter Password:', reEnterpassword);
    console.log('Date of Birth:', dob);
    console.log('Gender:', gender);
  };

  const signup = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    // Input validation rules
    if (
      username &&
      email &&
      dob &&
      password &&
      password === reEnterpassword &&
      gender
    ) {
      const user = {
        username,
        email,
        password,
        dob,
        gender,
      };
  
      axios
        .post('http://localhost:9002/signup', user) // Make sure the endpoint URL matches your backend
        .then((response) => {
          console.log(response.data);
          setSuccessMessage('Successfully signed up');
          setErrorMessage('');
          navigate('/Login');
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage('An error occurred while signing up.');
          setSuccessMessage('');
        });
    } else {
      setErrorMessage('Invalid input. Please check your input and try again.');
      setSuccessMessage('');
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="signup-form">
        <h2>Sign Up</h2>
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6" // Minimum password length
            />
          </div>
          <div>
            <label>Re-Enter Password:</label>
            <input
              type="password"
              value={reEnterpassword}
              onChange={(e) => setReEnterPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <button type="submit" onClick={signup}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
