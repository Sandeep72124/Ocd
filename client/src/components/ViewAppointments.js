import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewAppointments.css'; // Import your CSS file for styling

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:9002/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleClearAppointments = async () => {
    try {
      await axios.delete('http://localhost:9002/appointments');
      setAppointments([]);
      alert('All appointments data cleared successfully!');
    } catch (error) {
      console.error('Error clearing appointments:', error);
      alert('Failed to clear appointments data. Please try again later.');
    }
  };

  return (
    <div>
      <h1>View Appointments</h1>
      <div>
     
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.name}</td>
                <td>{appointment.age}</td>
                <td>{appointment.email}</td>
                <td>{appointment.gender}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleClearAppointments}>Clear All Appointments</button>
      </div>
    </div>
  );
};

export default ViewAppointments;
