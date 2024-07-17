import React from 'react';
import './Home.css'; // Import your CSS file
import ocdVideo from './video.mp4'; // Import the video file
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Review from './Review';
const Home = () => {
  return (
    <>
    <Navbar/>
      {/* Place OCDTest component above the video */}
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={ocdVideo} type="video/mp4" />
        </video>
      </div>
      <About/>
      <Services/>
      <Review/>
      <Contact/>
    </>
  );
};

export default Home;
