import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OCDTest.css';

function OCDTest() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [ocdTypes, setOCDTypes] = useState({
    checking: 0,
    contamination: 0,
    symmetry: 0,
    cleanness: 0,
  });
  const [resultMessages, setResultMessages] = useState("");
  const [notAtAllCount, setNotAtAllCount] = useState(0);
  const [started, setStarted] = useState(false);

  const questions = {
    checking: [
      "I check things more often than necessary.",
      "I repeatedly check doors, windows, drawers, etc.",
      "Have you noticed any false alarms or situations where checking was unnecessary?.",
      "I repeatedly check gas and water taps and light switches after turning them off.",
      "Do you have to double-check things often, like locks or appliances, even if you've already checked them once?.",
    ],
    contamination: [
      "I find it difficult to touch an object when I know it has been touched by strangers or certain people.",
      "I sometimes have to wash or clean myself simply because I feel contaminated.",
      "I wash my hands more often and longer than necessary.",
      "Do you often feel the need to wash, clean, or avoid objects or situations you believe are contaminated or dirty?",
      "I wash my hands more often and longer than necessary.",
    ],
    symmetry: [
      "I get upset if objects are not arranged properly.",
      "do you become distressed when they're not?",
      "Do you find that you have a preferred way of arranging or organizing things, and does this preference cause distress when disrupted?.",
      "Have you noticed any triggers that exacerbate your ordering or symmetry-related obsessions?.",
      "Have you sought any professional treatment or therapy for your OCD?.",
    ],
    cleanness: [
      "I feel compelled to count while I am doing things.",
      "I find it difficult to control my own thoughts.",
      "I am upset by unpleasant thoughts that come into my mind against my will.",
      " I have felt a strong compulsion to clean or wash yourself or objects excessively, even if you logically know it's unnecessary.",
      "Do you find it difficult to go about your day without repeatedly washing your hands or cleaning objects because you're afraid of contamination or germs?.",
    ],
  };

  const handleStartTest = () => {
    setStarted(true);
  };

  const handleOptionClick = (response) => {
    if (started) {
      const currentType = getCurrentOCDType(step);
      if (response === 1) {
        setNotAtAllCount(notAtAllCount + 1);
        if (notAtAllCount > 15) {
          setResultMessages("Your responses suggest that you don't have any types of OCD.");
          return;
        }
        setOCDTypes({
          ...ocdTypes,
          [currentType]: ocdTypes[currentType] + 1,
        });
      }

      if (step < 19) {
        setStep(step + 1);
      } else if (!resultMessages) {
        const messages = getResultMessages();
        setResultMessages(messages);
      }
    }
  };

  const getCurrentOCDType = (step) => {
    if (step < 5) {
      return "checking";
    } else if (step < 10) {
      return "contamination";
    } else if (step < 15) {
      return "symmetry";
    } else if (step < 20) {
      return "cleanness";
    }
  };

  // Existing code ...

const getResultMessages = () => {
  const ocdTypesArray = Object.keys(ocdTypes);
  const messages = {};

  ocdTypesArray.forEach((type) => {
    if (ocdTypes[type] >= 3) {
      messages[type] = `You may have OCD related to ${type}.`;
    }
  });

  return messages;
};

const handleVisitApplication = () => {
  navigate('/home');
};

return (
  <div className="OCDTest">
    <div className="card">
      <div className="card-body">
        <div className="back-arrow">
          <a href="/" onClick={() => navigate(-1)}>&larr; Back</a>
        </div>
        {Object.keys(resultMessages).length > 0 ? (
          <div>
            <h2>Test Results</h2>
            {Object.keys(resultMessages).map((type) => (
              <p key={type}>{resultMessages[type]}</p>
            ))}
            <button onClick={() => navigate('/home')}>Done</button>
          </div>
        ) : started && step < 20 ? (
          <div>
            <h3>Question {step + 1}:</h3>
            <p>{questions[getCurrentOCDType(step)][step % 5]}</p>
            <button onClick={() => handleOptionClick(1)}>Not at all</button>
            <button onClick={() => handleOptionClick(2)}>Moderately</button>
            <button onClick={() => handleOptionClick(3)}>Extremely</button>
          </div>
        ) : (
          <div>
            <h2>OCD Screening Test</h2>
            <p>
              This test assesses symptoms related to obsessive-compulsive disorder.
            </p>
            <button onClick={handleStartTest}>Start Test</button>
          </div>
        )}
      </div>
    </div>
  </div>
);

}

export default OCDTest;
