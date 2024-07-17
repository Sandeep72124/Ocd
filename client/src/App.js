import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Sign_up from './components/Sign_up';
// import './App.css';
import Services from './components/Services';
import Login from './components/Login';
import Review from './components/Review';
import Contact from './components/Contact';

import Info from './components/Info';

import Psychologist1 from './components/Psychologist1';

import ChatbotComponent from './components2/ChatbotComponent';
import {
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Psychologist from './components/Psychologist';
import AppointmentSection from './components/Appointmentform';
import OCDTest from './components2/OCDTest';
import Snaket from './psychologist/Snaket';
import Pooja from './psychologist/Pooja';
import Ritesh from './psychologist/Ritesh';
import Satish from './psychologist/Satish';
import Swarupa from './psychologist/Swarupa';
import OCDAI from './components/OCDAI';
import Pooja1 from './components/Pooja1';
import Sanket1 from './components/Sanket1';
import Satish1 from './components/Satish1';
import Ritesh1 from './components/Ritesh1';
import Status from './components/Status';
import ViewAppointments from './components/ViewAppointments';

function App() {
  
  // Initialize state variables for Login and Sign_up forms
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isSignUpFormVisible, setSignUpFormVisible] = useState(false);
  const [isChatBoxVisible, setChatBoxVisible] = useState(false);
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [user, setLoginUser] = useState({});
  const [showOCDTest, setShowOCDTest] = useState(true);

  // Function to toggle the visibility of the Login form
  const toggleLoginForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
    setSignUpFormVisible(false); // Close Sign_up form when Login is clicked
  };

  // Function to toggle the visibility of the Sign_up form
  const toggleSignUpForm = () => {
    setSignUpFormVisible(!isSignUpFormVisible);
    setLoginFormVisible(false); // Close Login form when Sign_up is clicked
  };

  // Function to toggle the visibility of the Chatbot
  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  // Function to handle closing the Login component
  const handleClose = () => {
    setLoginFormVisible(false);
  };

  // Function to handle the login logic
  const handleLogin = (formData) => {
    console.log("Logging in with data:", formData);
    setIsLoggedIn(true);
  };


  useEffect(() => {
    const handleScroll = () => {
      // Determine the position to show/hide the chat box
      const scrollY = window.scrollY;
      const threshold = 100; // Adjust this value as needed

      if (scrollY > threshold) {
        setChatBoxVisible(true);
      } else {
        setChatBoxVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div>
     
    

      <Routes>
        <Route path='/'element={<OCDTest/>}/>
        <Route path="/navbar" element ={<Navbar
        toggleSignUpForm={toggleSignUpForm}
        toggleChatbot={toggleChatbot}
        isLoginFormVisibleProp={isLoginFormVisible}
        isChatBoxVisibleProp={isChatBoxVisible}
      />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/review" element={<Review />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/OCDAI" element={<OCDAI />} />
        
        <Route path="/psychologist" element={<Psychologist />} />
        <Route path="/appointment" element={<AppointmentSection />} />
        <Route path="/sanket" element={<Snaket />} />
        <Route path="/pooja" element={<Pooja />} />
        <Route path="/ritesh" element={<Ritesh />} />
        <Route path="/satish" element={<Satish />} />
        <Route path="/swarupa" element={<Swarupa />} />
        <Route path="/contact" element={ <Contact />}/>
       <Route  path ="/info"   element={<Info/>}/>
       <Route path="/Psychologist1" element={<Psychologist1/>}/>
       <Route path ="/ChatbotComponent" element ={<ChatbotComponent/>}/>
      <Route path ="/Pooja1" element = {<Pooja1/>}/>
      <Route path ="/Ritesh1" element = {<Ritesh1/>}/>
      <Route path ="/Sanket1" element = {<Sanket1/>}/>
      <Route path ="/Satish1" element = {<Satish1/>}/>
      <Route path ="/Status" element = {<Status/>}/>
      <Route path ="/ViewAppointments" element = {<ViewAppointments/>}/>
      </Routes>

    </div>
  );
}

export default App;
