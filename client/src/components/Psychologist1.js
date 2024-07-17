import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import clinicalPsychologistImage from './p1.jpeg';
import schoolPsychologistImage from './p2.jpeg';
import forensicPsychologistImage from './p3.jpeg';
import healthPsychologistImage from './p4.jpeg';
import sportsPsychologistImage from './p5.jpg';
//import PsychologistType from './PsychologistType';
import './Psychologist.css';

const PsychologistType = ({ name, image, profileRoute  }) => {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleRequest = () => {
    navigate('/Appointment');
    // window.alert("Please sign up or Login  before booking an appointment.");
  };
  const handleViewProfile = ()=> {
    navigate(profileRoute);
  }
 
 
  
  return (
    <div className="psychologist-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Specializes in helping with OCD habits</p>
      {/* <p>PhD - Psychology, MA - Psychology
Therapist
Psychotherapist,
Counselling Psychologist
31 Years Experience Overall
98% (147 patients)
Masters in Clinical Psychology, Post Graduate Diploma in Clinical Psychology, Certified Personal Counsellor inCarkhuff’s Model, Certified Psychometric Test Professional from Carlton Advanced Management Institute, USA. Psychotherapist, Clinical Psychologist, Career Counsellor.
Dr. Swarupa Lakshmi is a leading Clinical Psychologist and Counsellor in Navi Mumbai with over 20 years of experience in psychotherapy and counseling. She maintains complete privacy about her clients. She specializes in dealing with the clients suffering from anxiety, stress, depression, psychosexual issues, post-traumatic stress disorder (PTSD), Personality Disorder, Obsessive-Compulsive Disorder (OCD), Attention Deficit Hyperactive Disorder (ADSD). 
</p> */}
      
      <button className='button' onClick={handleViewProfile}>View Profile</button>
      <button className='button' onClick={handleRequest}>Book an Appointment</button>
    </div>
  );
};

const Psychologist = () => {
  return (
    <>
    <div>
    
      <h2 className='header'>Welcome, Psychologist!</h2>
      <h2 className='header'>Select your specialization for OCD habit tracking:</h2>
      <div className="psychologist-cards">
        <PsychologistType name="Dr. Sanket Mehta" image={clinicalPsychologistImage} profileRoute="/sanket" />
        <PsychologistType name="Dr. Pooja Jain" image={schoolPsychologistImage} profileRoute="/pooja" />
        <PsychologistType name="Dr. Ritesh Shah" image={forensicPsychologistImage} profileRoute="/ritesh" />
        <PsychologistType name="Dr. Satish S. Nagargoje" image={healthPsychologistImage} profileRoute="/satish" />
        <PsychologistType name="Dr. Swarupa Kulkarni" image={sportsPsychologistImage} profileRoute="/swarupa" />
      </div>
    </div>
    </>
  );
};

export default Psychologist;