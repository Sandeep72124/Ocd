import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Appointmentform.css';

const AppointmentSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    phone: '',
    date: '',
    time: '',
    department: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate age, date, and time
    const { age, date, time, phone, email } = formData;
    const currentDate = new Date();
    const selectedDate = new Date(date);
    const selectedTime = new Date(`01/01/2000 ${time}`);

    // Check if age is less than 10 or not a number
    if (parseInt(age) < 10 || isNaN(parseInt(age))) {
      alert('Age must be 10 or above.');
      return;
    }
    if (selectedDate <= currentDate) {
      alert('Please select a future date.');
      return;
    }
    // Check if phone number has exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
      alert('Phone number must have exactly 10 digits.');
      return;
    }
    // Check if email contains "@gmail.com"
    if (!email.endsWith('@gmail.com')) {
      alert('Email must be a Gmail address.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:9002/book-appointment', formData);
      alert(response.data.message);
      // Redirect to status page with appointment details
      navigate('/status', { state: formData }); // Pass formData as props to status page
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to book appointment. Please try again later.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <section id="appointment" data-stellar-background-ratio="3">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <img src="" className="img-responsive" alt="" />
        </div>
        <div className="col-md-6 col-sm-6">
          <form id="appointment-form" role="form" onSubmit={handleSubmit}>
            <div className="section-title wow fadeInUp" data-wow-delay="0.4s">
              <h2>Book Appointment</h2>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.8s">
              <div className="col-md-12 col-sm-12">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="col-md-12 col-sm-12">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="col-md-12 col-sm-12">
                <label htmlFor="age">Age</label>
                <input type="number" className="form-control" id="age" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
              </div>
              <div className="col-md-12 col-sm-12">
                <label htmlFor="gender">Gender</label>
                <select className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-md-12 col-sm-12">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="col-md-12 col-sm-12">
                <label htmlFor="date">Select Date</label>
                <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
              </div>
              <div className="col-md-12 col-sm-12">
                <label htmlFor="time">Select Time</label>
                <input type="time" name="time" className="form-control" value={formData.time} onChange={handleChange} required />
              </div>
              <div className="col-md-12 col-sm-12">
                <label htmlFor="department">Select Department</label>
                <select className="form-control" id="department" name="department" value={formData.department} onChange={handleChange} required>
                  <option value="">Select Department</option>
                  <option value="Cognitive Behavioral Therapy">Cleanliness Contamination</option>
                  <option value="Psycho Therapy">Psycho Therapy</option>
                  <option value="Talking Therapy">Talking Therapy</option>
                  <option value="Medication Research">Medication Research</option>
                </select>
              </div>
              <div className="col-md-12 col-sm-12">
                <button type="submit" className="form-control" id="cf-submit" name="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
