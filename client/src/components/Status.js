import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Status.css'; // Import your CSS file for styling

const Status = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { name, email, date, time, department } = location.state || {};

  // Function to navigate to the home page
  const goToHome = () => {
    navigate('/home'); // Redirect to home page
  };

  return (
    <div>
      {/* Button to navigate to home page */}
      <button onClick={goToHome}>Go to Home</button>
      <h2>Appointment Book Successfully!</h2>
      <div className="appointment-slip">
        <h2>OCD Habit Tracker</h2>
        <div className="info">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Department:</strong> {department}</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
