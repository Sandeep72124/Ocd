import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('patient');
  const [psychologistId, setPsychologistId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const user = {
      email,
      password,
      loginType,
      psychologistId,
    };

    axios
      .post('http://localhost:9002/login', user)
      .then((response) => {
        console.log(response.data);
        alert('Successfully login');
        if (loginType === 'patient') {
          navigate('/ChatbotComponent'); // Redirect to patient-specific page
        } else if (loginType === 'psychologist') {
          // Check if the entered ID is valid
          const validIds = ['1000', '1001', '1002', '1003'];
          if (validIds.includes(psychologistId)) {
             if (psychologistId === '1000') {
              navigate('/Pooja1'); // Redirect to Pooja component
            }
            else if (psychologistId === '1001') {
              navigate('/Sanket1'); // Redirect to Pooja component
            }
           else if (psychologistId === '1002') {
              navigate('/Satish1'); // Redirect to Pooja component
            }
           else if (psychologistId === '1003') {
              navigate('/Ritesh1'); // Redirect to Pooja component
            }
          } else {
            setErrorMessage('Invalid psychologist ID');
          }
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Invalid input');
      });
  };

  return (
    <>
      <Navbar />
      <div className="login-form">
        <h2>Login</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {loginType === 'psychologist' && (
            <div>
              <label>Psychologist ID:</label>
              <input
                type="text"
                value={psychologistId}
                onChange={(e) => setPsychologistId(e.target.value)}
              />
            </div>
          )}
          <div>
            <label>Login Type:</label>
            <select
              value={loginType}
              onChange={(e) => setLoginType(e.target.value)}
            >
              <option value="patient">Patient</option>
              <option value="psychologist">Psychologist</option>
            </select>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
