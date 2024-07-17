import React from 'react';
import './Review.css';

import Navbar from './Navbar';
const ocdReviews = [
  {
    name: 'John Doe',
    rating: 4.5,
    reviewText:
      "I've been living with OCD for years, and it's been a challenging journey. However, with the right therapy and support, I've learned to manage my symptoms and lead a fulfilling life.",
  },
  {
    name: 'Jane Smith',
    rating: 5,
    reviewText:
      'OCD used to control my life, but thanks to cognitive-behavioral therapy (CBT), I\'ve made significant progress. It\'s amazing how therapy can change everything.',
  },
  {
    name: 'David Johnson',
    rating: 3.5,
    reviewText:
      "Living with OCD is tough, but finding a supportive community has been a game-changer. Support groups have provided me with valuable insights and encouragement.",
  },
  {
    name: 'Emily Davis',
    rating: 4,
    reviewText:
      'I was initially hesitant about seeking help, but ERP therapy has been a lifesaver. It helped me confront my fears and break free from the cycle of obsessions and compulsions.',
  },
  {
    name: 'Michael Brown',
    rating: 4.5,
    reviewText:
      "OCD is a daily challenge, but mindfulness practices have made a significant difference in managing my anxiety. It's a journey, but there's hope.",
  },
];

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
};

const headingStyle = {
  color: '#000000',
  fontSize: '44px',
  textAlign: 'center',
  padding: '60px',
};

const Review = () => {
  return (
    <>
    <Navbar/>
    <div>
      <div className="review-cards">
      {ocdReviews.map((review, index) => (
        <div key={index} className="review-card">
          <h3 className="review-name">{review.name}</h3>
          <div className="rating">
            {Array.from({ length: review.rating }, (_, i) => (
              <span key={i} className="star">
                &#9733;
              </span>
            ))}
          </div>
          <p className="review-text">{review.reviewText}</p>
        </div>
      ))}
    </div>
    </div>
 
    </>
  );
};

export default Review;