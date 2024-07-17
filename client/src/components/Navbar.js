import './App.css';
import React, { useState, useEffect, useRef } from 'react';

import { Link } from 'react-scroll';

import './Navbar.css';


const Navbar = ({ toggleSignUpForm, toggleChatbot, isLoginFormVisibleProp, isChatBoxVisibleProp }) => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false); // Define the state variable here
  const [isSign_upFormVisible, setSign_upFormVisible] = useState(false);

  const [isChatbotVisible, setChatbotVisible] = useState(false);

  const handleLoginClose = () => {
    setLoginFormVisible(false);
  };

  const handleSign_upClose = () => {
    setSign_upFormVisible(false);
  };

  const toggleLoginForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
    setSign_upFormVisible(false);
  };

  const toggleSign_upForm = () => {
    setSign_upFormVisible(!isSign_upFormVisible);
    setLoginFormVisible(false);
  };

  const toggleChatBot = () => {
    toggleChatbot(!isChatbotVisible); // Should be toggleChatbot, not toggleChatbot
  };



  return (

    <>
      <div>
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">OCD Habit Tracker</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active home-link" aria-current="page" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link about-link"
                    href="about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link services-link"
                    href="services"

                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link services-link"
                    href="review"

                  >
                    Review
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link services-link"
                    href="/"

                  >
                   Retest
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav">
              <li className="nav-item">
                  <a className="nav-link" href="OCDAI" onClick={toggleLoginForm}>
                     AI
                  </a>
                </li>

              <li className="nav-item">
                  <a className="nav-link" href="Psychologist1" onClick={toggleLoginForm}>
                    Login as Guest
                  </a>
                </li>
               
                <li className="nav-item">
                  <a className="nav-link" href="login" onClick={toggleLoginForm}>
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="sign_up" onClick={toggleSign_upForm}>
                    Sign_up
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link contact-link"
                    href="info"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              {/* <div className="chat-icon" onClick={toggleChatbot}>
                <img
                  src={require('./chat.jpg')}
                  alt="Description"
                />
              </div> */}
            </div>
          </div>
        </nav>
      </div>
      {/* {isChatbotVisible && (
        <div className="chatbot-overlay">
          <Chatbot />
        </div>
      )} */}
      {/* {isLoginFormVisible && <div className="overlay"><Login onClose={handleLoginClose} /></div>}
      {isSign_upFormVisible && <div className="overlay"><Sign_up onClose={handleSign_upClose} /></div>} */}
    </>

  );
}

export default Navbar;
