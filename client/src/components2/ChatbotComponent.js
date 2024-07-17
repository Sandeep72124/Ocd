import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ChatbotComponent() {
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    "Welcome to the OCD Habit Tracker. How can I assist you today?",
    "Please describe your OCD symptoms or concerns.",
    "Thank you for sharing. Let me provide some information based on your input.",
    "Here are some suggestions based on your input. Let me know if you need further assistance.",
  ];

  useEffect(() => {
    setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: steps[step] }]);
  }, [step]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }]);
      if (step === 1) {
        sendMessage(inputValue);
      } else {
        setStep((prevStep) => prevStep + 1);
      }
    }
    setInputValue('');
  };

  const sendMessage = (message) => {
    const url = `http://localhost:3002/suggest-doctors/${message}`;

    setIsLoading(true);

    axios.get(url)
      .then((response) => {
        const { doctorSuggestions, probabilities } = response.data;
        setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: `Doctor Suggestions: ${doctorSuggestions.join(', ')}` }]);
        setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: `Probabilities: ${probabilities.join(', ')}` }]);
      })
      .catch((error) => {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      })
      .finally(() => setIsLoading(false));
  };

  const navigateToPsychologist = () => {
    navigate('/psychologist1');
  };

  return (
    <div className="container">
      <h1>OCD Habit Tracker</h1>
      <button onClick={navigateToPsychologist}>Go to Psychologist</button>
      <div className="messages-container">
        <div className="flex flex-col space-y-4">
          {chatLog.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`${message.type === 'user' ? 'bg-purple-500' : 'bg-gray-800'} rounded-lg p-4 text-white max-w-sm`}>
                {message.message}
              </div>
            </div>
          ))}
          {isLoading && (
            <div key={chatLog.length} className="flex justify-start">
              <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
                Loading...
              </div>
            </div>
          )}
        </div>
      </div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} className="input-container">
        <div className="input-form">
          <input
            type="text"
            className="input-field"
            placeholder="Type your message here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="send-button"
            disabled={!inputValue.trim() || isLoading}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
