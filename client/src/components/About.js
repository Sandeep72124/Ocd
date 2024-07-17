import React from 'react';
import Navbar from './Navbar';


const About = () => {
  const headingStyle = {
    color: '#000000', // Change the color to your preferred highlight color
    fontSize: '44px', // Adjust the font size as needed
    textAlign: 'center', // Center the text if desired
    // Add any other styles you want for highlighting
  };
  
  return (
    <>
    <Navbar/>
    <div style={{ padding: 60 }}>
      <h2 style={headingStyle}>About Obsessive-Compulsive Disorder (OCD)</h2>
      <p>
        Obsessive-Compulsive Disorder (OCD) is a chronic and debilitating mental health condition that affects millions of people worldwide. It is characterized by two main components: obsessions and compulsions.
      </p>
      <h3>Obsessions:</h3>
      <p>
        Obsessions are intrusive, persistent, and distressing thoughts, images, or urges that individuals with OCD experience. These thoughts often feel irrational, but they cause significant anxiety and discomfort. Common obsessions include:
      </p>
      <ul>
        <li>Fear of contamination or germs</li>
        <li>Excessive doubts or fears about safety</li>
        <li>Concerns about symmetry, order, or perfection</li>
        <li>Intrusive thoughts of harming oneself or others</li>
        <li>Unwanted sexual or religious thoughts</li>
      </ul>
      <h3>Compulsions:</h3>
      <p>
        Compulsions are repetitive behaviors or mental acts that individuals with OCD perform in response to their obsessions. Compulsions are intended to reduce the anxiety or prevent a feared event. However, they are often excessive and not connected to the actual problem. Common compulsions include:
      </p>
      <ul>
        <li>Excessive handwashing or cleaning</li>
        <li>Counting, repeating, or checking behaviors</li>
        <li>Arranging objects in a specific way</li>
        <li>Mental rituals, such as praying or counting silently</li>
      </ul>
      <h3>Impact on Daily Life:</h3>
      <p>
        OCD can significantly impact a person's daily life. Individuals may spend hours each day performing compulsions or experiencing distressing obsessions. This can interfere with work, school, relationships, and overall quality of life.
      </p>
     
    </div>
   
    </>
  );
};

export default About;
