import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';

function Pooja() {
  const navigate = useNavigate();
  const Pooja1 = () => {
    navigate('/ViewAppointments'); // Redirect to home page
  };
  return (
    <div>
      {/* Left-side navbar */}
      <button onClick={Pooja1}>View Appointment Status</button>

      {/* Content */}
      <div className='OCDTest'>
        <h1>Dr. Pooja Jain(PhD)</h1>
        <h5>PhD - Psychology, MA - Psychology</h5>
        <h5>Therapist</h5>
        <h5>Psychotherapist,</h5>
        <h5>Counselling Psychologist</h5>
        <h2>37 Years Experience Overall</h2>
        <h6>98% (157 patients)</h6>
        <h5>Masters in Clinical Psychology, Post Graduate Diploma in Clinical Psychology, Certified Personal Counsellor in Carkhuff’s Model, Certified Psychometric Test Professional from Carlton Advanced Management Institute, USA. Psychotherapist, Clinical Psychologist, Career Counsellor.</h5>
        <h5>Dr. Pooja Jain is a leading Clinical Psychologist and Counsellor in Navi Mumbai with over 22 years of experience in psychotherapy and counseling. She maintains complete privacy about her clients. She specializes in dealing with the clients suffering from anxiety, stress, depression, psychosexual issues, post-traumatic stress disorder (PTSD), Personality Disorder, Obsessive-Compulsive Disorder (OCD), Attention Deficit Hyperactive Disorder (ADHD).</h5>
      </div>
    </div>
  );
}

export default Pooja;
