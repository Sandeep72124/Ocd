import React from 'react';
import './info.css'; // Import the CSS file
import Navbar from './Navbar';

function info() {
  return (
    <>
    <Navbar/>
    <div className="OCDTest">
    <div className="contact-container"> {/* Apply the CSS class to the container */}
      <h1>Contact Us</h1>
      <p><h2>If you have any questions or feedback, please feel free to contact us using the information below:</h2></p>

      <div className="contact-info"> {/* Apply the CSS class to the contact information */}
        <ul>
          <li>Email: sandeepyadav72124@gmail.com</li>
          <li>Phone: +91 9004335718</li>
          <li>Address: Ghatkopar ,Mumbai,India</li>
        </ul>
      </div>
    </div>
    </div>
    </>
  );
}

export default info;
