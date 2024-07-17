import React from 'react';
import './Contact.css'; // Import the corrected CSS file
import Navbar from './Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <footer className="footer"> {/* Apply the "footer" class */}
        <div className="row">
          <div className="col-md-6">
            <h3>Social Media</h3>
            {/* Add your social media links/icons here */}
            <a href="https://www.facebook.com/watch?v=AR6k2h9PRzc&pp=ygUOb2NkIHRyZWF0bWVudCA%3D">Facebook</a>
            <a href="https://www.twitter.com/watch?v=AR6k2h9PRzc&pp=ygUOb2NkIHRyZWF0bWVudCA%3D">Twitter</a>
            <a href="https://www.youtube.com/watch?v=AR6k2h9PRzc&pp=ygUOb2NkIHRyZWF0bWVudCA%3D">Youtube</a>
            <a href="https://www.instragram.com/watch?v=AR6k2h9PRzc&pp=ygUOb2NkIHRyZWF0bWVudCA%3D">Instagram</a>
            {/* Add more social media links as needed */}
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            {/* Add your contact information here */}
            <p className="contact-info">Email: sandeepyadav72124@gmail.com</p> {/* Add class for styling */}
            <p className="contact-info">Phone: +91 9004335718</p> {/* Add class for styling */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
