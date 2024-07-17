import React from 'react';
import Navbar from './Navbar';


const Service = ({ title, description }) => {
  return (
    <div className="service">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const ServicesList = () => {
  const services = [
    {
      title: 'Text Analysis Service',
      description: 'Our advanced text analysis service can help you gain insights from textual data. Whether you need sentiment analysis, topic modeling, or keyword extraction, we\'ve got you covered.',
    },
    {
      title: 'Content Writing Service',
      description: 'Need high-quality, engaging content for your website, blog, or social media? Our team of experienced writers can create compelling articles and copy tailored to your needs.',
    },
    {
      title: 'Data Entry and Management',
      description: 'Save time and resources with our data entry and management service. We can efficiently handle data input, organization, and maintenance, ensuring your information is accurate and up to date.',
    },
    {
      title: 'Proofreading and Editing',
      description: 'Ensure your documents, reports, and manuscripts are error-free and polished. Our professional proofreaders and editors can enhance your content\'s clarity and coherence.',
    },
    {
      title: 'Digital Marketing Consultation',
      description: 'Boost your online presence with our digital marketing consultation service. We\'ll analyze your online strategy, provide recommendations, and help you reach a wider audience.',
    },
    {
      title: 'Translation Services',
      description: 'Expand your global reach with our translation services. We offer accurate and culturally sensitive translations in multiple languages to bridge language barriers.',
    },
    {
      title: 'Research and Analysis',
      description: 'Our research experts can gather and analyze data to support your projects. Whether it\'s market research, academic studies, or industry reports, we deliver valuable insights.',
    },
    {
      title: 'Custom Software Development',
      description: 'Have a unique software idea? Our development team specializes in building custom software solutions tailored to your specific requirements.',
    },
    {
      title: 'Project Management',
      description: 'Stay organized and on track with our project management services. We\'ll help you plan, execute, and monitor your projects, ensuring they\'re delivered on time and within budget.',
    },
    {
      title: 'Technical Support',
      description: 'Need assistance with technical issues or software troubleshooting? Our technical support team is available to resolve your issues promptly and efficiently.',
    },
    // Add more services as needed
  ];
  const headingStyle = {
    color: '#000000', // Change the color to your preferred highlight color
    fontSize: '44px', // Adjust the font size as needed
    textAlign: 'center', // Center the text if desired
    // Add any other styles you want for highlighting60
    padding:'60px',
  };

  return (
    <>
    <Navbar/>
    <div className="services-list">
     <h2 style={headingStyle}>Our Services</h2> 
      <div className="service-container">
        {services.map((service, index) => (
          <Service
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>

    </>
  );
};

export default ServicesList;
